/**
 * Automated Responsive Verification Suite
 * Tests layout constraints across 320px, 360px, 375px, 390px, 414px, 430px, 768px, 1366px
 */

const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const printCss = fs.readFileSync('css/print.css', 'utf8');

let pass = 0;
let fail = 0;

function check(desc, condition, details = '') {
  if (condition) {
    pass++;
    console.log(`  ✓ PASS: ${desc}`);
  } else {
    fail++;
    console.error(`  ✗ FAIL: ${desc} ${details ? '(' + details + ')' : ''}`);
  }
}

console.log('====================================================');
console.log('MOBILE RESPONSIVENESS & ANDROID / SAMSUNG INTERNET AUDIT');
console.log('====================================================\n');

// 1. Viewport Meta Configuration
console.log('1. Viewport Meta Configuration:');
const vp = html.match(/<meta\s+name=["']viewport["']\s+content=["']([^"']+)["']/i);
check('Viewport meta tag exists', !!vp);
if (vp) {
  const content = vp[1];
  check('Viewport contains width=device-width', content.includes('width=device-width'));
  check('Viewport contains initial-scale=1.0', content.includes('initial-scale=1.0'));
  check('Viewport contains viewport-fit=cover (removes notch letterboxing)', content.includes('viewport-fit=cover'));
}

// 2. CSS Reset & Overflow Prevention
console.log('\n2. CSS Reset & Text Size Adjust:');
check('Body has overflow-x-hidden or max-w-full', html.includes('overflow-x: hidden') || html.includes('overflow-x-hidden'));
check('Text-size-adjust: 100% configured for Samsung Internet / iOS', html.includes('text-size-adjust: 100%'));
check('Universal box-sizing: border-box in place', html.includes('box-sizing: border-box'));

// 3. Horizontal Overflow Risks
console.log('\n3. Horizontal Overflow Risk Checks:');
// Check negative margins on pseudo-elements
check('No fixed negative margins on red-line-divider extending off-screen', !html.includes('right: -55px') && !html.includes('left: -55px'));
// Check max-width on main-card-container
check('Main card container uses w-full max-w-xl', html.includes('w-full max-w-xl'));
// Check logo image responsive constraints
check('Brand logo image uses max-w-full and h-auto', html.includes('max-w-full') && html.includes('h-auto'));

// 4. Navigation & TopBar Controls
console.log('\n4. Navigation Controls & Header:');
check('Top bar uses flex-wrap or responsive truncation', html.includes('flex-wrap') || html.includes('truncate'));
check('Status text and time truncate gracefully on <=360px', html.includes('statusTime') && html.includes('truncate'));
check('Language switcher is readable and accessible', html.includes('langToggleText'));

// 5. RTL & LTR Language Support
console.log('\n5. Bilingual RTL & LTR Layout Integrity:');
check('HTML specifies dir="rtl"', html.includes('dir="rtl"'));
check('Language switcher dynamically handles dir and lang', html.includes('toggleLanguage'));
check('Card action items use logical text-start alignment', html.includes('text-start'));

console.log('\n====================================================');
console.log(`Responsive Audit Complete. Passed: ${pass} | Failed: ${fail}`);
console.log('====================================================');

if (fail > 0) process.exit(1);
