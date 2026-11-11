/**
 * Afrah Al Jazeera Auto Spare Parts - Core Application Engine
 * شركة أفراح الجزيرة لقطع غيار السيارات - المحرك التفاعلي
 */

// Global Application State
const AppState = {
  currentLang: 'ar',
  activeQrTab: 'website',
  selectedCampaign: 'business_card',
  isLocalEnv: false
};

// UI Translations Dictionary
const TRANSLATIONS = {
  ar: {
    // Top Bar & Meta
    openNow: 'مفتوح الآن',
    closedNow: 'مغلق الآن',
    opensTodayAt: 'يفتح اليوم الساعة',
    opensTomorrowAt: 'يفتح غداً الساعة',
    closesAt: 'يغلق الساعة',
    workingHoursTitle: 'ساعات العمل الرسمية',
    yanbuLocation: 'ينبع • Yanbu',
    yanbuAddressPill: 'فندق منازل ينبع | طريق الملك عبدالعزيز',
    
    // Brand Titles
    companyName: 'شركة أفراح الجزيرة',
    companySubTitle: 'AFRAH AL JAZEERA',
    badgeText: 'AUTO SPARE PARTS • لقطع غيار السيارات',
    companyDesc: 'لتجارة واستيراد جميع أنواع قطع غيار السيارات الأصلية والمضمونة في ينبع',
    subFeatures: 'محركات • فرامل ومكابح • فلاتر وزيوت • بطاريات وكهرباء • أنظمة تعليق',

    // Quick Actions
    whatsappCta: 'راسلنا مباشرة عبر واتساب',
    whatsappSub: 'خدمة العملاء والاستفسار الفوري: 0556516712',
    inquiryFormBtn: 'طلب تسعيرة قطعة غيار عبر واتساب',
    inquiryFormSub: 'تحديد الماركة، الموديل، سنة الصنع والقطعة المطلوبة',
    callMobile: 'اتصال مباشر (جوال)',
    callMobileSub: '055 651 6712 • جوال المبيعات',
    callLandline: 'الهاتف الثابت (المعرض)',
    callLandlineSub: '014 390 0266 • هاتف المعرض الرئيسي',
    emailBtn: 'البريد الإلكتروني الرسمي',
    directionsBtn: 'موقع المعرض على الخريطة',
    directionsSub: 'ينبع البحر - بجوار فندق منازل ينبع',
    saveContactBtn: 'حفظ جهة الاتصال',
    qrHubBtn: 'مركز رموز QR والمشاركة',
    printSheetBtn: 'طباعة لوحة الرموز (A4)',

    // Categories
    categoriesTitle: 'الأقسام المتوفرة لقطع الغيار',
    catBatteries: 'كهرباء السيارات والبطاريات',
    catBatteriesSub: 'Starters, Alternators & Batteries',
    catBrakes: 'الفرامل والهوبات والمكابح',
    catBrakesSub: 'Brake Pads, Rotors & Calipers',
    catFilters: 'الفلاتر والزيوت الأصلية',
    catFiltersSub: 'Engine Oils, Air & Oil Filters',
    catSuspension: 'المحركات وأنظمة التعليق',
    catSuspensionSub: 'Shocks, Suspension & Engine Parts',

    // QR Hub Modal
    qrHubTitle: 'مركز رموز الاستجابة السريعة (QR Code)',
    qrTabWebsite: 'رابط الموقع',
    qrTabContact: 'جهة الاتصال (vCard)',
    qrTabWhatsApp: 'محادثة واتساب',
    qrCampaignLabel: 'مصدر الحملة الإعلانية (UTM Tracking):',
    downloadPngBtn: 'تحميل كصورة عالية الدقة (PNG)',
    downloadSvgBtn: 'تحميل كملف فيكتور (SVG)',
    downloadVcfBtn: 'تحميل ملف جهة الاتصال (.vcf)',
    copyLinkBtn: 'نسخ الرابط',
    shareLinkBtn: 'مشاركة',
    openWhatsAppDirectBtn: 'فتح محادثة واتساب الآن',
    localWarningText: 'تنبيه: أنت تتصفح الموقع من بيئة محلية (Localhost). تأكد من تحديث رابط النطاق في ملف الإعدادات قبل طباعة الرموز للمطبوعات الورقية.',

    // Inquiry Form Modal
    inquiryModalTitle: 'طلب تسعيرة وتوفر قطعة غيار',
    inquiryModalSubtitle: 'سيتم تحويل بياناتك إلى رسالة واتساب منظمة ومباشرة إلى معرضنا',
    labelCustomerName: 'اسم العميل (اختياري)',
    labelBrand: 'ماركة السيارة (مطلوب)',
    labelModel: 'موديل وفئة السيارة (مطلوب)',
    labelYear: 'سنة الصنع (مطلوب)',
    labelPart: 'اسم القطعة المطلوبة (مطلوب)',
    labelVin: 'رقم القطعة أو رقم الهيكل VIN (اختياري)',
    labelNotes: 'ملاحظات إضافية',
    submitInquiryBtn: 'إرسال الاستفسار عبر واتساب الآن',
    requiredAlert: 'يرجى إكمال الحقول الإلزامية: ماركة السيارة، الموديل، سنة الصنع، واسم القطعة المطلوبة.',

    // Map & Footer
    mapExpanded: 'عرض موسع على Google Maps',
    copyright: 'جميع الحقوق محفوظة لـ شركة أفراح الجزيرة لقطع غيار السيارات ©',
    footerLocation: 'المملكة العربية السعودية - ينبع البحر - بجوار فندق منازل ينبع'
  },
  en: {
    // Top Bar & Meta
    openNow: 'Open Now',
    closedNow: 'Closed Now',
    opensTodayAt: 'Opens today at',
    opensTomorrowAt: 'Opens tomorrow at',
    closesAt: 'Closes at',
    workingHoursTitle: 'Official Business Hours',
    yanbuLocation: 'Yanbu • ينبع',
    yanbuAddressPill: 'Yanbu Manazel Hotel | King Abdulaziz Rd',

    // Brand Titles
    companyName: 'AFRAH AL JAZEERA',
    companySubTitle: 'شركة أفراح الجزيرة',
    badgeText: 'AUTO SPARE PARTS • GENUINE & OEM',
    companyDesc: 'Import & Trade of Genuine and High-Grade Automotive Spare Parts in Yanbu',
    subFeatures: 'Engine • Brakes • Filters & Oils • Batteries & Starters • Suspension',

    // Quick Actions
    whatsappCta: 'Chat Directly on WhatsApp',
    whatsappSub: 'Instant Support & Part Inquiries: +966 55 651 6712',
    inquiryFormBtn: 'Request Spare Part Quote on WhatsApp',
    inquiryFormSub: 'Specify Vehicle Brand, Model, Year & Required Component',
    callMobile: 'Direct Mobile Call',
    callMobileSub: '055 651 6712 • Sales & Parts Specialist',
    callLandline: 'Showroom Landline',
    callLandlineSub: '014 390 0266 • Yanbu Main Showroom',
    emailBtn: 'Official Showroom Email',
    directionsBtn: 'Showroom Location on Map',
    directionsSub: 'Yanbu Al-Bahr - Near Yanbu Manazel Hotel',
    saveContactBtn: 'Save to Contacts',
    qrHubBtn: 'QR Code Centre & Share',
    printSheetBtn: 'Print QR Display Sheet (A4)',

    // Categories
    categoriesTitle: 'Available Spare Parts Categories',
    catBatteries: 'Automotive Electrical & Batteries',
    catBatteriesSub: 'Starters, Alternators & High-Spec Batteries',
    catBrakes: 'Brakes, Rotors & Calipers',
    catBrakesSub: 'Original Brake Pads & Braking Systems',
    catFilters: 'Filters & Premium Oils',
    catFiltersSub: 'Engine Oils, Air, Cabin & Fuel Filters',
    catSuspension: 'Engine & Suspension Systems',
    catSuspensionSub: 'Shocks, Struts, Mounts & Engine Components',

    // QR Hub Modal
    qrHubTitle: 'QR Code Centre & Downloads',
    qrTabWebsite: 'Website Link',
    qrTabContact: 'Contact Card (vCard)',
    qrTabWhatsApp: 'WhatsApp Chat',
    qrCampaignLabel: 'Print Marketing Channel (UTM Tracking):',
    downloadPngBtn: 'Download High-Res PNG (1024px)',
    downloadSvgBtn: 'Download Scalable Vector (SVG)',
    downloadVcfBtn: 'Download Contact File (.vcf)',
    copyLinkBtn: 'Copy Link',
    shareLinkBtn: 'Share Link',
    openWhatsAppDirectBtn: 'Open WhatsApp Chat Now',
    localWarningText: 'Notice: You are currently viewing on Localhost. Remember to update the production URL in config.js before printing physical flyers or cards.',

    // Inquiry Form Modal
    inquiryModalTitle: 'Request a Spare Part Quote',
    inquiryModalSubtitle: 'Your details will be formatted into an instant WhatsApp message to our team',
    labelCustomerName: 'Customer Name (Optional)',
    labelBrand: 'Vehicle Brand (Required)',
    labelModel: 'Vehicle Model (Required)',
    labelYear: 'Model Year (Required)',
    labelPart: 'Required Spare Part (Required)',
    labelVin: 'Part Number or Chassis / VIN (Optional)',
    labelNotes: 'Additional Notes',
    submitInquiryBtn: 'Send Inquiry via WhatsApp Now',
    requiredAlert: 'Please complete all required fields: Vehicle Brand, Model, Year, and Required Spare Part.',

    // Map & Footer
    mapExpanded: 'Open in Google Maps',
    copyright: 'All Rights Reserved © Afrah Al Jazeera Auto Spare Parts',
    footerLocation: 'Saudi Arabia - Yanbu Al-Bahr - Near Yanbu Manazel Hotel'
  }
};

/**
 * Check Environment (Detect Localhost / File URI)
 */
function checkEnvironment() {
  const host = window.location.hostname;
  AppState.isLocalEnv = (host === 'localhost' || host === '127.0.0.1' || host === '' || window.location.protocol === 'file:');
  const warningEl = document.getElementById('localHostWarning');
  if (warningEl) {
    if (AppState.isLocalEnv) {
      warningEl.classList.remove('hidden');
    } else {
      warningEl.classList.add('hidden');
    }
  }
}

/**
 * Get Active Production / Live URL
 */
function getActiveWebsiteUrl(campaignKey) {
  let base = BUSINESS_CONFIG.productionUrl;
  // If in production and not localhost, we can fallback to window.location.origin
  if (!AppState.isLocalEnv && window.location.origin.startsWith('http')) {
    base = window.location.origin + window.location.pathname.replace(/\/index\.html$/, '/');
  }
  // Ensure trailing slash
  if (!base.endsWith('/')) base += '/';

  if (campaignKey && BUSINESS_CONFIG.utmCampaigns[campaignKey]) {
    return base + BUSINESS_CONFIG.utmCampaigns[campaignKey].params;
  }
  return base;
}

/**
 * Real-Time Asia/Riyadh Business Hours Engine
 */
function getBusinessHoursStatus() {
  const now = new Date();
  // Format current time into Asia/Riyadh
  const options = { timeZone: BUSINESS_CONFIG.hours.timezone, hour12: false, weekday: 'short', hour: '2-digit', minute: '2-digit' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);
  
  let riyadhHour = 0;
  let riyadhMinute = 0;
  let riyadhWeekdayStr = '';

  for (const part of parts) {
    if (part.type === 'hour') riyadhHour = parseInt(part.value, 10);
    if (part.type === 'minute') riyadhMinute = parseInt(part.value, 10);
    if (part.type === 'weekday') riyadhWeekdayStr = part.value;
  }

  // Map weekday to 0 (Sunday) to 6 (Saturday)
  const weekdayMap = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
  const riyadhDay = weekdayMap[riyadhWeekdayStr] !== undefined ? weekdayMap[riyadhWeekdayStr] : now.getDay();
  const currentTotalMinutes = riyadhHour * 60 + riyadhMinute;

  const todayConfig = BUSINESS_CONFIG.hours.schedule[riyadhDay];
  let isOpen = false;
  let currentClosingTime = '';
  let nextOpenMessage = '';

  // Check today's sessions
  if (todayConfig && todayConfig.sessions && todayConfig.sessions.length > 0) {
    for (const session of todayConfig.sessions) {
      const [openH, openM] = session.open.split(':').map(Number);
      const [closeH, closeM] = session.close.split(':').map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;

      if (currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes) {
        isOpen = true;
        currentClosingTime = formatTimeDisplay(session.close, AppState.currentLang);
        break;
      }
    }
  }

  // If closed, find next session
  if (!isOpen) {
    // Check if there is another session later today
    let foundLaterToday = false;
    if (todayConfig && todayConfig.sessions) {
      for (const session of todayConfig.sessions) {
        const [openH, openM] = session.open.split(':').map(Number);
        const openMinutes = openH * 60 + openM;
        if (openMinutes > currentTotalMinutes) {
          nextOpenMessage = (AppState.currentLang === 'ar' ? 'يفتح اليوم ' : 'Opens today at ') + formatTimeDisplay(session.open, AppState.currentLang);
          foundLaterToday = true;
          break;
        }
      }
    }
    // If not later today, check tomorrow
    if (!foundLaterToday) {
      const tomorrowDay = (riyadhDay + 1) % 7;
      const tomorrowConfig = BUSINESS_CONFIG.hours.schedule[tomorrowDay];
      if (tomorrowConfig && tomorrowConfig.sessions && tomorrowConfig.sessions.length > 0) {
        const firstSession = tomorrowConfig.sessions[0];
        nextOpenMessage = (AppState.currentLang === 'ar' ? 'يفتح غداً ' : 'Opens tomorrow at ') + formatTimeDisplay(firstSession.open, AppState.currentLang);
      } else {
        nextOpenMessage = (AppState.currentLang === 'ar' ? 'مغلق مؤقتاً' : 'Temporarily Closed');
      }
    }
  }

  return {
    isOpen,
    currentClosingTime,
    nextOpenMessage
  };
}

function formatTimeDisplay(timeStr24, lang) {
  const [h, m] = timeStr24.split(':').map(Number);
  const suffix = h >= 12 ? (lang === 'ar' ? 'مساءً' : 'PM') : (lang === 'ar' ? 'صباحًا' : 'AM');
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const minuteStr = m === 0 ? '' : ':' + (m < 10 ? '0' + m : m);
  return `${h12}${minuteStr} ${suffix}`;
}

/**
 * Update Business Hours UI Badge
 */
function updateBusinessHoursUI() {
  const status = getBusinessHoursStatus();
  const statusBadge = document.getElementById('statusBadgeContainer');
  const statusText = document.getElementById('statusText');
  const statusTime = document.getElementById('statusTime');
  const statusPing = document.getElementById('statusPing');
  const statusDot = document.getElementById('statusDot');

  if (!statusBadge || !statusText || !statusTime) return;

  if (status.isOpen) {
    statusText.textContent = TRANSLATIONS[AppState.currentLang].openNow;
    statusText.className = 'text-emerald-700 font-bold';
    statusTime.textContent = (AppState.currentLang === 'ar' ? `| حتى ${status.currentClosingTime}` : `| Until ${status.currentClosingTime}`);
    if (statusPing) statusPing.className = 'animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75';
    if (statusDot) statusDot.className = 'relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500';
  } else {
    statusText.textContent = TRANSLATIONS[AppState.currentLang].closedNow;
    statusText.className = 'text-amber-700 font-bold';
    statusTime.textContent = `| ${status.nextOpenMessage}`;
    if (statusPing) statusPing.className = 'animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75';
    if (statusDot) statusDot.className = 'relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500';
  }
}

/**
 * Generate RFC 2426 Compliant vCard 3.0 String
 */
function buildVCardString() {
  const c = BUSINESS_CONFIG;
  const webUrl = getActiveWebsiteUrl('business_card');
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN;CHARSET=UTF-8:${c.name.ar}`,
    `ORG;CHARSET=UTF-8:${c.name.en}`,
    `TITLE;CHARSET=UTF-8:تجارة قطع غيار السيارات - Auto Spare Parts`,
    `TEL;TYPE=CELL,VOICE,PREF:${c.contacts.mobile.raw}`,
    `TEL;TYPE=WORK,VOICE:${c.contacts.landline.international}`,
    `EMAIL;TYPE=INTERNET,WORK:${c.contacts.email}`,
    `URL;TYPE=WORK:${webUrl}`,
    `ADR;TYPE=WORK;CHARSET=UTF-8:;;${c.contacts.location.area.ar} - ${c.contacts.location.area.en};${c.contacts.location.city.ar};منطقة المدينة المنورة;${c.contacts.location.postalCode};Saudi Arabia`,
    `GEO:${c.contacts.location.coordinates.latitude};${c.contacts.location.coordinates.longitude}`,
    `NOTE;CHARSET=UTF-8:${c.tagline.ar} - ينبع`,
    'END:VCARD'
  ].join('\r\n');
}

/**
 * Generate WhatsApp URL with inquiry payload
 */
function buildWhatsAppUrl(customText) {
  const number = BUSINESS_CONFIG.contacts.mobile.clean;
  const text = customText || BUSINESS_CONFIG.whatsappTemplates.general[AppState.currentLang];
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * High-Resolution QR Code Rendering with qrcode library
 */
function renderQRCode({ text, canvasEl, svgContainerEl, cellSize = 8, margin = 4, darkColor = '#102D46', lightColor = '#FFFFFF' }) {
  if (typeof qrcode === 'undefined') {
    console.error('qrcode library not loaded');
    return null;
  }
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();

  // Render to canvas if provided
  if (canvasEl) {
    qr.drawToCanvas(canvasEl, cellSize, margin, { dark: darkColor, light: lightColor });
  }

  // Render to SVG if provided
  if (svgContainerEl) {
    const svgMarkup = qr.createSvgTag(cellSize, margin, { dark: darkColor, light: lightColor });
    svgContainerEl.innerHTML = svgMarkup;
  }

  return qr;
}

/**
 * Refresh All 3 QR Codes in the Hub Modal and Print Sheet
 */
function updateAllQRCodes() {
  const lang = AppState.currentLang;
  
  // 1. Website QR
  const websiteUrl = getActiveWebsiteUrl(AppState.selectedCampaign);
  const websiteCanvas = document.getElementById('qrCanvasWebsite');
  const websiteSvgContainer = document.getElementById('qrSvgWebsite');
  const printCanvas1 = document.getElementById('printQrCanvas1');
  
  renderQRCode({
    text: websiteUrl,
    canvasEl: websiteCanvas,
    svgContainerEl: websiteSvgContainer,
    cellSize: 8,
    margin: 4
  });
  if (printCanvas1) {
    renderQRCode({ text: websiteUrl, canvasEl: printCanvas1, cellSize: 6, margin: 3 });
  }

  // 2. Contact vCard QR
  const vcardText = buildVCardString();
  const contactCanvas = document.getElementById('qrCanvasContact');
  const contactSvgContainer = document.getElementById('qrSvgContact');
  const printCanvas2 = document.getElementById('printQrCanvas2');

  renderQRCode({
    text: vcardText,
    canvasEl: contactCanvas,
    svgContainerEl: contactSvgContainer,
    cellSize: 7,
    margin: 4,
    darkColor: '#B5121B' // Branded Red for contact card
  });
  if (printCanvas2) {
    renderQRCode({ text: vcardText, canvasEl: printCanvas2, cellSize: 5, margin: 3, darkColor: '#B5121B' });
  }

  // 3. WhatsApp Direct QR
  const waUrl = buildWhatsAppUrl();
  const whatsappCanvas = document.getElementById('qrCanvasWhatsApp');
  const whatsappSvgContainer = document.getElementById('qrSvgWhatsApp');
  const printCanvas3 = document.getElementById('printQrCanvas3');

  renderQRCode({
    text: waUrl,
    canvasEl: whatsappCanvas,
    svgContainerEl: whatsappSvgContainer,
    cellSize: 8,
    margin: 4,
    darkColor: '#128C7E' // WhatsApp signature green
  });
  if (printCanvas3) {
    renderQRCode({ text: waUrl, canvasEl: printCanvas3, cellSize: 6, margin: 3, darkColor: '#128C7E' });
  }

  // Update text representations
  const websiteUrlDisplay = document.getElementById('websiteUrlDisplay');
  if (websiteUrlDisplay) websiteUrlDisplay.textContent = websiteUrl;
}

/**
 * Download QR Code as PNG (High-Resolution Canvas Export)
 */
function downloadQRPNG(type) {
  let targetCanvas = null;
  let filename = 'afrah-aljazeera-qr.png';

  if (type === 'website') {
    targetCanvas = document.getElementById('qrCanvasWebsite');
    filename = `afrah-aljazeera-website-${AppState.selectedCampaign}.png`;
  } else if (type === 'contact') {
    targetCanvas = document.getElementById('qrCanvasContact');
    filename = 'afrah-aljazeera-contact-vcard.png';
  } else if (type === 'whatsapp') {
    targetCanvas = document.getElementById('qrCanvasWhatsApp');
    filename = 'afrah-aljazeera-whatsapp.png';
  }

  if (!targetCanvas) return;

  // Create high-res download
  const link = document.createElement('a');
  link.download = filename;
  link.href = targetCanvas.toDataURL('image/png', 1.0);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(AppState.currentLang === 'ar' ? 'تم بدء تحميل صورة QR بدقة عالية ✓' : 'High-Res PNG Download Started ✓');
}

/**
 * Download QR Code as Scalable Vector Graphic (.svg)
 */
function downloadQRSVG(type) {
  let text = '';
  let filename = 'afrah-aljazeera-qr.svg';
  let darkColor = '#102D46';

  if (type === 'website') {
    text = getActiveWebsiteUrl(AppState.selectedCampaign);
    filename = `afrah-aljazeera-website-${AppState.selectedCampaign}.svg`;
  } else if (type === 'contact') {
    text = buildVCardString();
    filename = 'afrah-aljazeera-contact-vcard.svg';
    darkColor = '#B5121B';
  } else if (type === 'whatsapp') {
    text = buildWhatsAppUrl();
    filename = 'afrah-aljazeera-whatsapp.svg';
    darkColor = '#128C7E';
  }

  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  const svgContent = qr.createSvgTag(10, 4, { dark: darkColor, light: '#FFFFFF' });

  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(AppState.currentLang === 'ar' ? 'تم بدء تحميل ملف فيكتور SVG ✓' : 'Scalable SVG Download Started ✓');
}

/**
 * Download .vcf contact file directly
 */
function downloadVCardFile() {
  const vcardData = buildVCardString();
  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Afrah_Al_Jazeera_Auto_Spare_Parts.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(AppState.currentLang === 'ar' ? 'تم تنزيل ملف جهة الاتصال (.vcf) ✓' : 'Contact file (.vcf) downloaded ✓');
}

/**
 * Handle Tab Switching in QR Hub Modal
 */
function switchQrTab(tabKey) {
  AppState.activeQrTab = tabKey;
  const tabs = ['website', 'contact', 'whatsapp'];
  tabs.forEach(key => {
    const content = document.getElementById(`qrTabContent_${key}`);
    const tabBtn = document.getElementById(`qrTabBtn_${key}`);
    if (content && tabBtn) {
      if (key === tabKey) {
        content.classList.remove('hidden');
        tabBtn.classList.add('bg-brand-navy', 'text-white', 'shadow-sm');
        tabBtn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      } else {
        content.classList.add('hidden');
        tabBtn.classList.remove('bg-brand-navy', 'text-white', 'shadow-sm');
        tabBtn.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      }
    }
  });
}

/**
 * Switch Active Campaign for Website QR
 */
function handleCampaignChange(e) {
  AppState.selectedCampaign = e.target.value;
  updateAllQRCodes();
  showToast(AppState.currentLang === 'ar' ? `تم تفعيل رمز QR مخصص لـ: ${BUSINESS_CONFIG.utmCampaigns[AppState.selectedCampaign].label.ar}` : `Custom QR activated for: ${BUSINESS_CONFIG.utmCampaigns[AppState.selectedCampaign].label.en}`);
}

/**
 * Copy to Clipboard with Visual Feedback
 */
async function copyToClipboard(text, customMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    showToast(customMessage || (AppState.currentLang === 'ar' ? 'تم النسخ إلى الحافظة بنجاح ✓' : 'Copied to clipboard successfully ✓'));
  } catch (err) {
    prompt(AppState.currentLang === 'ar' ? 'انسخ الرابط يدوياً:' : 'Copy link manually:', text);
  }
}

/**
 * Native Web Share API
 */
async function shareWebsite() {
  const url = getActiveWebsiteUrl(AppState.selectedCampaign);
  const shareData = {
    title: BUSINESS_CONFIG.name[AppState.currentLang],
    text: BUSINESS_CONFIG.tagline[AppState.currentLang],
    url: url
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      // User cancelled share
    }
  } else {
    copyToClipboard(url, AppState.currentLang === 'ar' ? 'تم نسخ الرابط لمشاركته ✓' : 'Link copied for sharing ✓');
  }
}

/**
 * Interactive WhatsApp Spare Parts Inquiry Form Submission
 */
function handleInquiryFormSubmit(e) {
  e.preventDefault();
  const brand = document.getElementById('inqBrand').value.trim();
  const model = document.getElementById('inqModel').value.trim();
  const year = document.getElementById('inqYear').value.trim();
  const part = document.getElementById('inqPart').value.trim();
  const name = document.getElementById('inqName').value.trim() || (AppState.currentLang === 'ar' ? 'عميل كريم' : 'Customer');
  const vin = document.getElementById('inqVin').value.trim() || (AppState.currentLang === 'ar' ? 'غير محدد' : 'Not provided');
  const notes = document.getElementById('inqNotes').value.trim() || (AppState.currentLang === 'ar' ? 'لا يوجد' : 'None');

  // Validate required fields
  if (!brand || !model || !year || !part) {
    alert(TRANSLATIONS[AppState.currentLang].requiredAlert);
    return;
  }

  // Build message using template
  let msgTemplate = BUSINESS_CONFIG.whatsappTemplates.inquiryLead[AppState.currentLang];
  let finalMsg = msgTemplate
    .replace('{name}', name)
    .replace('{brand}', brand)
    .replace('{model}', model)
    .replace('{year}', year)
    .replace('{part}', part)
    .replace('{vin}', vin)
    .replace('{notes}', notes);

  const waUrl = buildWhatsAppUrl(finalMsg);
  window.open(waUrl, '_blank', 'noopener,noreferrer');
  closeInquiryModal();
  showToast(AppState.currentLang === 'ar' ? 'جارٍ تحويلك إلى تطبيق واتساب... ✓' : 'Redirecting to WhatsApp... ✓');
}

/**
 * Quick Brand Selection Helper for Enquiry Form
 */
function quickSelectBrand(brandName) {
  const brandInput = document.getElementById('inqBrand');
  if (brandInput) {
    brandInput.value = brandName;
    brandInput.focus();
  }
}

/**
 * Toast Notification System
 */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'bg-brand-navyDark/95 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xl border border-slate-700/80 backdrop-blur-md flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i><span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2500);
}

/**
 * Language Switching System
 */
function setLanguage(lang) {
  if (lang !== 'ar' && lang !== 'en') return;
  AppState.currentLang = lang;
  localStorage.setItem('afrah_pref_lang', lang);

  // Update HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Update document title & meta description dynamically
  if (lang === 'ar') {
    document.title = 'شركة أفراح الجزيرة لقطع غيار السيارات | ينبع | Afrah Al Jazeera Auto Spare Parts';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'شركة أفراح الجزيرة لتجارة واستيراد جميع أنواع قطع غيار السيارات الأصلية والمضمونة في ينبع، المملكة العربية السعودية. بطاريات، مكابح، فلاتر، محركات وأنظمة تعليق.';
  } else {
    document.title = 'Afrah Al Jazeera Auto Spare Parts | Yanbu | Car Spare Parts Store';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'Afrah Al Jazeera Auto Spare Parts in Yanbu, Saudi Arabia. Trade & import of genuine and OEM automotive parts: engines, brakes, filters, batteries, suspension.';
  }

  // Update language toggle button text
  const langToggleBtnText = document.getElementById('langToggleText');
  if (langToggleBtnText) {
    langToggleBtnText.textContent = (lang === 'ar') ? 'English' : 'عربي';
  }

  // Update all elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Re-calculate business hours display
  updateBusinessHoursUI();

  // Re-generate QRs with proper language context
  updateAllQRCodes();
}

function toggleLanguage() {
  const newLang = (AppState.currentLang === 'ar') ? 'en' : 'ar';
  setLanguage(newLang);
}

/**
 * Modal Handling (QR Hub, Inquiry, Business Hours)
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  const card = modal.querySelector('.modal-card');
  if (card) {
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  const card = modal.querySelector('.modal-card');
  if (card) {
    card.classList.add('scale-95');
    card.classList.remove('scale-100');
  }
  document.body.style.overflow = '';
}

function openQrModal() {
  updateAllQRCodes();
  openModal('qrModal');
}
function closeQrModal() { closeModal('qrModal'); }

function openInquiryModal() { openModal('inquiryModal'); }
function closeInquiryModal() { closeModal('inquiryModal'); }

function openHoursModal() { openModal('hoursModal'); }
function closeHoursModal() { closeModal('hoursModal'); }

/**
 * Print Sheet Trigger
 */
function triggerPrintSheet() {
  updateAllQRCodes();
  window.print();
}

/**
 * GA4 Safe Initialization
 */
function initAnalytics() {
  const gaId = BUSINESS_CONFIG.gaMeasurementId;
  if (!gaId || gaId === 'G-XXXXXXXXXX' || !gaId.startsWith('G-')) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', gaId);
}

/**
 * Document Ready Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
  // Check environment
  checkEnvironment();

  // Populate dynamic current year
  const yearEls = document.querySelectorAll('.dynamic-year');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());

  // Setup saved language or default
  const savedLang = localStorage.getItem('afrah_pref_lang');
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  const initialLang = (paramLang === 'en' || paramLang === 'ar') ? paramLang : (savedLang || 'ar');
  setLanguage(initialLang);

  // Business hours real-time refresh every 60 seconds
  updateBusinessHoursUI();
  setInterval(updateBusinessHoursUI, 60000);

  // Initial QR rendering
  updateAllQRCodes();

  // Setup Campaign Selector listener
  const campaignSelect = document.getElementById('qrCampaignSelect');
  if (campaignSelect) {
    campaignSelect.addEventListener('change', handleCampaignChange);
  }

  // Setup Inquiry Form submit listener
  const inquiryForm = document.getElementById('sparePartsInquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', handleInquiryFormSubmit);
  }

  // Dismiss modals on backdrop click
  ['qrModal', 'inquiryModal', 'hoursModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(id);
      });
    }
  });

  // Dismiss on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['qrModal', 'inquiryModal', 'hoursModal'].forEach(closeModal);
    }
  });

  // Init GA4 if configured
  initAnalytics();
});

