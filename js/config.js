/**
 * Afrah Al Jazeera Auto Spare Parts - Central Configuration
 * شركة أفراح الجزيرة لقطع غيار السيارات - ملف الإعدادات الموحد
 * 
 * Update your production domain, business hours, and contact details here.
 */

const BUSINESS_CONFIG = {
  // Production Website Domain
  // IMPORTANT: Update this placeholder to your actual live website URL before printing QR codes!
  productionUrl: 'https://afrah-aljazeera.com',

  // Google Analytics 4 Measurement ID (Leave blank to disable tracking)
  // Example: 'G-ABC123XYZ'
  gaMeasurementId: '',

  // Business Profile
  name: {
    ar: 'شركة أفراح الجزيرة لقطع غيار السيارات',
    en: 'Afrah Al Jazeera Auto Spare Parts'
  },
  shortName: {
    ar: 'أفراح الجزيرة',
    en: 'Afrah Al Jazeera'
  },
  tagline: {
    ar: 'لتجارة واستيراد جميع أنواع قطع غيار السيارات الأصلية والمضمونة',
    en: 'Trade & Import of All Types of Genuine & OEM Auto Spare Parts'
  },
  subTagline: {
    ar: 'محركات • فرامل • فلاتر وزيوت • كهرباء وبطاريات • أنظمة تعليق',
    en: 'Engine • Brakes • Filters & Oils • Batteries & Electrical • Suspension'
  },

  // Contact Information (Strictly verified from business card)
  contacts: {
    // Mobile & WhatsApp (International format without '+' for WhatsApp API: 966556516712)
    mobile: {
      raw: '+966556516712',
      display: '055 651 6712',
      international: '+966 55 651 6712',
      clean: '966556516712'
    },
    // Showroom Landline
    landline: {
      raw: '0143900266',
      display: '014 390 0266',
      international: '+966 14 390 0266',
      clean: '966143900266'
    },
    // Official Email
    email: 'jazeera@gmail.com',
    
    // Physical Location
    location: {
      city: { ar: 'ينبع البحر', en: 'Yanbu Al-Bahr' },
      area: { ar: 'بجوار فندق منازل ينبع', en: 'Near Yanbu Manazel Hotel' },
      addressLine: {
        ar: 'ينبع البحر، بجوار فندق منازل ينبع، المملكة العربية السعودية',
        en: 'Yanbu Al-Bahr, Near Yanbu Manazel Hotel, Saudi Arabia'
      },
      postalCode: '46424',
      region: 'منطقة المدينة المنورة (Al Madinah)',
      countryCode: 'SA',
      coordinates: {
        latitude: 24.0892,
        longitude: 38.0637
      },
      googleMapsUrl: 'https://maps.google.com/?q=Yanbu+Manazel+Hotel',
      embedMapUrl: 'https://maps.google.com/maps?q=Yanbu+Manazel+Hotel&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
  },

  // Social Media Channels (Optional - Paste your profile URLs when available)
  socials: {
    instagram: '', // e.g. 'https://instagram.com/afrah_aljazeera'
    tiktok: '',    // e.g. 'https://tiktok.com/@afrah_aljazeera'
    snapchat: '',  // e.g. 'https://snapchat.com/add/afrah_aljazeera'
    twitter: ''    // e.g. 'https://x.com/afrah_aljazeera'
  },

  // Business Hours Configuration (Asia/Riyadh Timezone)
  // 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
  // Supports single or multiple sessions per day (e.g. morning and evening shifts)
  hours: {
    timezone: 'Asia/Riyadh',
    timezoneOffsetHours: 3, // UTC+3
    schedule: {
      0: { name: { ar: 'الأحد', en: 'Sunday' }, sessions: [{ open: '08:00', close: '22:00' }] },
      1: { name: { ar: 'الإثنين', en: 'Monday' }, sessions: [{ open: '08:00', close: '22:00' }] },
      2: { name: { ar: 'الثلاثاء', en: 'Tuesday' }, sessions: [{ open: '08:00', close: '22:00' }] },
      3: { name: { ar: 'الأربعاء', en: 'Wednesday' }, sessions: [{ open: '08:00', close: '22:00' }] },
      4: { name: { ar: 'الخميس', en: 'Thursday' }, sessions: [{ open: '08:00', close: '22:00' }] },
      5: { name: { ar: 'الجمعة', en: 'Friday' }, sessions: [{ open: '16:00', close: '22:00' }] }, // After Jummah prayer
      6: { name: { ar: 'السبت', en: 'Saturday' }, sessions: [{ open: '08:00', close: '22:00' }] }
    }
  },

  // Campaign UTM presets for physical print channels
  utmCampaigns: {
    business_card: {
      id: 'business_card',
      label: { ar: 'بطاقات العمل الشخصية', en: 'Business Cards' },
      params: '?utm_source=business_card&utm_medium=qr&utm_campaign=offline_card'
    },
    shop_poster: {
      id: 'shop_poster',
      label: { ar: 'ملصق وواجهة المحل', en: 'Shop Front & Posters' },
      params: '?utm_source=shop_poster&utm_medium=qr&utm_campaign=storefront_poster'
    },
    flyer: {
      id: 'flyer',
      label: { ar: 'المنشورات الدعائية والبروشورات', en: 'Flyers & Brochures' },
      params: '?utm_source=flyer&utm_medium=qr&utm_campaign=print_marketing'
    },
    packaging: {
      id: 'packaging',
      label: { ar: 'أكياس وتغليف قطع الغيار', en: 'Parts Packaging & Bags' },
      params: '?utm_source=packaging&utm_medium=qr&utm_campaign=packaging_tag'
    }
  },

  // WhatsApp Pre-filled templates
  whatsappTemplates: {
    general: {
      ar: 'السلام عليكم ورحمة الله وبركاته، أستفسر عن قطع غيار سيارات متوفرة لديكم.',
      en: 'Hello! I would like to inquire about automotive spare parts availability.'
    },
    inquiryLead: {
      ar: `السلام عليكم ورحمة الله وبركاته
استفسار عن قطع غيار - شركة أفراح الجزيرة
──────────────────
👤 الاسم: {name}
🚗 الماركة: {brand}
🚘 الموديل: {model}
📅 سنة الصنع: {year}
⚙️ القطعة المطلوبة: {part}
🔢 رقم القطعة/الهيكل (VIN): {vin}
📝 ملاحظات: {notes}
──────────────────
أرجو التكرم بإفادتي بالتوفر والسعر. شكراً لكم.`,
      en: `Hello, Afrah Al Jazeera Spare Parts
Spare Parts Inquiry
──────────────────
👤 Name: {name}
🚗 Vehicle Brand: {brand}
🚘 Vehicle Model: {model}
📅 Model Year: {year}
⚙️ Required Part: {part}
🔢 Part Number / VIN: {vin}
📝 Notes: {notes}
──────────────────
Please advise on availability and pricing. Thank you!`
    }
  }
};

// Export for both Node.js (testing) and browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BUSINESS_CONFIG;
}
