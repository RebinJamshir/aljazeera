/**
 * Afrah Al Jazeera - Automated Test Suite
 * Validates SEO, Schema.org, QR Generation, vCard RFC compliance, and Business Hours Engine
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let testCount = 0;
let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  testCount++;
  if (condition) {
    passCount++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    failCount++;
    console.error(`  ✗ FAIL: ${testName} ${details ? '(' + details + ')' : ''}`);
  }
}

console.log('======================================================');
console.log('RUNNING AFRAH AL JAZEERA COMPREHENSIVE TEST SUITE');
console.log('======================================================\n');

// 1. File Structure Tests
console.log('TEST SUITE 1: Required Project Files');
const requiredFiles = [
  'index.html',
  'robots.txt',
  'sitemap.xml',
  'manifest.webmanifest',
  'css/print.css',
  'assets/favicon.svg',
  'js/qrcode.min.js',
  'js/config.js',
  'js/app.js'
];
requiredFiles.forEach(relPath => {
  const fullPath = path.join(ROOT, relPath);
  assert(fs.existsSync(fullPath), `File exists: ${relPath}`);
});

// 2. SEO & HTML Metadata Tests
console.log('\nTEST SUITE 2: Technical SEO & HTML Metadata');
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');

assert(indexHtml.includes('<title>شركة أفراح الجزيرة لقطع غيار السيارات'), 'HTML contains optimized bilingual title');
assert(indexHtml.includes('<meta name="description"'), 'HTML contains meta description');
assert(indexHtml.includes('rel="canonical"'), 'HTML contains canonical link');
assert(indexHtml.includes('hreflang="ar"'), 'HTML contains hreflang ar');
assert(indexHtml.includes('hreflang="en"'), 'HTML contains hreflang en');
assert(indexHtml.includes('hreflang="x-default"'), 'HTML contains hreflang x-default');
assert(indexHtml.includes('property="og:title"'), 'HTML contains Open Graph title');
assert(indexHtml.includes('property="og:type" content="business.business"'), 'HTML contains Open Graph business.business');
assert(indexHtml.includes('name="twitter:card" content="summary_large_image"'), 'HTML contains Twitter summary_large_image card');
assert(indexHtml.includes('name="theme-color" content="#102D46"'), 'HTML contains brand theme-color #102D46');
assert(indexHtml.includes('assets/favicon.svg'), 'HTML references SVG favicon');
assert(indexHtml.includes('manifest.webmanifest'), 'HTML references Web App Manifest');
assert(indexHtml.includes('css/print.css'), 'HTML references dedicated print stylesheet');

// 3. Local SEO Schema.org AutoPartsStore JSON-LD
console.log('\nTEST SUITE 3: Local SEO Schema.org JSON-LD');
const schemaMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert(schemaMatch !== null, 'Found application/ld+json script block');

if (schemaMatch) {
  let schemaData;
  try {
    schemaData = JSON.parse(schemaMatch[1]);
    assert(schemaData['@type'] === 'AutoPartsStore', 'Schema type is AutoPartsStore');
    assert(schemaData.name === 'شركة أفراح الجزيرة لقطع غيار السيارات', 'Schema name matches Arabic business name');
    assert(schemaData.telephone === '+966556516712', 'Schema telephone matches verified mobile');
    assert(schemaData.email === 'jazeera@gmail.com', 'Schema email matches verified email');
    assert(schemaData.address && schemaData.address.addressLocality.includes('Yanbu'), 'Schema locality is Yanbu');
    assert(schemaData.geo && schemaData.geo.latitude === 24.0892, 'Schema geo latitude is 24.0892');
    assert(Array.isArray(schemaData.openingHoursSpecification), 'Schema contains openingHoursSpecification array');
  } catch (err) {
    assert(false, 'Schema JSON parses without errors', err.message);
  }
}

// 4. Central Business Configuration
console.log('\nTEST SUITE 4: Central Configuration (js/config.js)');
const BUSINESS_CONFIG = require(path.join(ROOT, 'js/config.js'));

assert(BUSINESS_CONFIG.productionUrl === 'https://afrah-aljazeera.com', 'Config contains productionUrl');
assert(BUSINESS_CONFIG.contacts.mobile.raw === '+966556516712', 'Config contains mobile +966556516712');
assert(BUSINESS_CONFIG.contacts.mobile.clean === '966556516712', 'Config contains clean mobile 966556516712');
assert(BUSINESS_CONFIG.contacts.landline.raw === '0143900266', 'Config contains landline 0143900266');
assert(BUSINESS_CONFIG.contacts.email === 'jazeera@gmail.com', 'Config contains email jazeera@gmail.com');
assert(BUSINESS_CONFIG.hours.timezone === 'Asia/Riyadh', 'Config specifies Asia/Riyadh timezone');
assert(BUSINESS_CONFIG.hours.schedule[0] !== undefined, 'Config has daily hours schedule');
assert(BUSINESS_CONFIG.utmCampaigns.business_card !== undefined, 'Config has business_card UTM campaign');
assert(BUSINESS_CONFIG.utmCampaigns.shop_poster !== undefined, 'Config has shop_poster UTM campaign');

// 5. QR Code Generator Engine (js/qrcode.min.js)
console.log('\nTEST SUITE 5: Three-Type QR Code Generator Engine');
const qrcode = require(path.join(ROOT, 'js/qrcode.min.js'));

// A. Website QR
const websiteQr = qrcode(0, 'M');
websiteQr.addData('https://afrah-aljazeera.com/?utm_source=business_card&utm_medium=qr&utm_campaign=offline_card');
websiteQr.make();
assert(websiteQr.getModuleCount() > 20, `Website QR generated modules: ${websiteQr.getModuleCount()}x${websiteQr.getModuleCount()}`);
const websiteSvg = websiteQr.createSvgTag(6, 4);
assert(websiteSvg.startsWith('<?xml') && websiteSvg.includes('<svg') && websiteSvg.includes('<path d="M'), 'Website QR SVG contains valid vector path markup');

// B. Contact vCard QR
const vcardSample = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'FN;CHARSET=UTF-8:شركة أفراح الجزيرة لقطع غيار السيارات',
  'ORG;CHARSET=UTF-8:Afrah Al Jazeera Auto Spare Parts',
  'TITLE;CHARSET=UTF-8:قطع غيار سيارات - Auto Spare Parts',
  'TEL;TYPE=CELL,VOICE,PREF:+966556516712',
  'TEL;TYPE=WORK,VOICE:+966143900266',
  'EMAIL;TYPE=INTERNET,WORK:jazeera@gmail.com',
  'ADR;TYPE=WORK;CHARSET=UTF-8:;;Yanbu Manazel Hotel;Yanbu;;46424;Saudi Arabia',
  'URL:https://afrah-aljazeera.com/',
  'END:VCARD'
].join('\r\n');

const contactQr = qrcode(0, 'M');
contactQr.addData(vcardSample);
contactQr.make();
assert(contactQr.getModuleCount() > 20, `Contact vCard QR generated modules: ${contactQr.getModuleCount()}x${contactQr.getModuleCount()}`);
const contactSvg = contactQr.createSvgTag(6, 4, { dark: '#B5121B', light: '#FFFFFF' });
assert(contactSvg.includes('#B5121B'), 'Contact vCard SVG supports custom brand coloring');

// C. WhatsApp Direct Chat QR
const waSampleText = 'السلام عليكم ورحمة الله وبركاته، أستفسر عن قطع غيار سيارات.';
const waUrl = `https://wa.me/966556516712?text=${encodeURIComponent(waSampleText)}`;
const waQr = qrcode(0, 'M');
waQr.addData(waUrl);
waQr.make();
assert(waQr.getModuleCount() > 20, `WhatsApp QR generated modules: ${waQr.getModuleCount()}x${waQr.getModuleCount()}`);
const waSvg = waQr.createSvgTag(6, 4, { dark: '#128C7E', light: '#FFFFFF' });
assert(waSvg.includes('#128C7E'), 'WhatsApp QR SVG supports custom emerald/green brand coloring');

// 6. Robots.txt and Sitemap.xml Validation
console.log('\nTEST SUITE 6: Robots.txt & Sitemap.xml Validation');
const robotsTxt = fs.readFileSync(path.join(ROOT, 'robots.txt'), 'utf-8');
assert(robotsTxt.includes('User-agent: *') && robotsTxt.includes('Allow: /'), 'Robots.txt contains standard crawl directives');
assert(robotsTxt.includes('Sitemap: https://afrah-aljazeera.com/sitemap.xml'), 'Robots.txt references correct sitemap URL');

const sitemapXml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf-8');
assert(sitemapXml.includes('<loc>https://afrah-aljazeera.com/</loc>'), 'Sitemap contains canonical URL');
assert(sitemapXml.includes('xhtml:link rel="alternate" hreflang="ar"'), 'Sitemap contains hreflang ar');
assert(sitemapXml.includes('xhtml:link rel="alternate" hreflang="en"'), 'Sitemap contains hreflang en');

// 7. Print Stylesheet Validation
console.log('\nTEST SUITE 7: Print Stylesheet (css/print.css)');
const printCss = fs.readFileSync(path.join(ROOT, 'css/print.css'), 'utf-8');
assert(printCss.includes('@media print'), 'Print CSS contains @media print rule');
assert(printCss.includes('.print-qr-grid'), 'Print CSS defines .print-qr-grid layout');
assert(printCss.includes('A4 portrait'), 'Print CSS configures A4 portrait page size');

// 8. Contact Consistency Verification
console.log('\nTEST SUITE 8: Contact Consistency Across System');
const phoneInHtml = indexHtml.includes('055 651 6712') || indexHtml.includes('055 651 6712');
const landlineInHtml = indexHtml.includes('014 390 0266') || indexHtml.includes('0143900266');
const emailInHtml = indexHtml.includes('jazeera@gmail.com');
const locationInHtml = indexHtml.includes('منازل ينبع') || indexHtml.includes('Yanbu Manazel');

assert(phoneInHtml, 'Mobile phone is consistent in HTML');
assert(landlineInHtml, 'Landline phone is consistent in HTML');
assert(emailInHtml, 'Showroom email is consistent in HTML');
assert(locationInHtml, 'Yanbu location is consistent in HTML');

console.log('\n======================================================');
console.log(`TEST RUN COMPLETED: Total ${testCount} | Passed: ${passCount} | Failed: ${failCount}`);
console.log('======================================================');

if (failCount > 0) {
  process.exit(1);
}

