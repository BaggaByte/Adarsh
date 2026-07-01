import { createContext, useContext, useState, useMemo } from 'react'

export const translations = {
  en: {
    nav: {
      collection: 'Collection',
      trust: 'Why Us',
      visit: 'Visit Us',
      cta: 'Send Message',
    },
    hero: {
      eyebrow: 'Lakhimpur\u2019s Lighting Showroom',
      titleLine1: 'Illuminate Your Space',
      titleLine2: 'with Adarsh Electronics',
      subtitle:
        'Chandeliers, wall lights and outdoor fixtures curated for homes that deserve to glow.',
      cta: 'Explore Collection',
      ctaSecondary: 'Talk to an Expert',
    },
    gallery: {
      eyebrow: 'The Collection',
      title: 'A Light for Every Room',
      subtitle: 'Browse by space \u2014 photos update the moment you swap in your own.',
      filters: {
        all: 'All',
        living: 'Living Room',
        outdoor: 'Outdoor',
        chandeliers: 'Chandeliers',
      },
      viewLabel: 'View Piece',
      placeholderTag: 'Premium',
    },
    categories: {
      eyebrow: 'Our Range',
      title: 'Complete Electrical Solutions',
      subtitle: 'From premium decorative lighting to everyday electrical essentials, wiring materials, switches, fans, appliances, and accessories, Adarsh Electronics is your one-stop destination for complete home and commercial electrical solutions.',
      wiring: {
        title: 'Wiring & Switches',
        items: ['House Wires', 'Flexible Wires', 'Modular Switches', 'Sockets', 'MCBs', 'Distribution Boards', 'Conduits', 'Junction Boxes'],
      },
      lighting: {
        title: 'Lighting',
        items: ['LED Bulbs', 'Panel Lights', 'Downlights', 'COB Lights', 'Flood Lights', 'Strip Lights', 'Decorative Lights', 'Tube Lights'],
      },
      fans: {
        title: 'Fans & Climate',
        items: ['Ceiling Fans', 'Exhaust Fans', 'Pedestal Fans', 'Table Fans', 'Wall Fans', 'Air Coolers', 'Room Heaters'],
      },
      kitchen: {
        title: 'Kitchen & Home',
        items: ['Mixer Grinders', 'Induction Cooktops', 'Electric Irons', 'Water Heaters', 'Electric Kettles', 'Emergency Lights', 'Extension Boards'],
      },
    },
    trust: {
      eyebrow: 'Why Adarsh',
      title: 'Trusted Since Day One',
      items: [
        {
          title: 'Premium Quality',
          desc: 'Every fixture is checked by hand before it leaves our showroom floor.',
        },
        {
          title: 'Best Prices',
          desc: 'Direct sourcing keeps our prices honest, without cutting corners.',
        },
        {
          title: 'Expert Advice',
          desc: 'Not sure what suits your room? Our team will help you choose right.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Word of Mouth',
      title: 'Loved by Lakhimpur',
      reviews: [
        {
          name: 'Rahul V.',
          role: 'Homeowner',
          text: 'The only place in Lakhimpur where you can find genuine premium lighting. The chandeliers are breathtaking and the staff helped me pick the perfect warm tone for my living room.',
        },
        {
          name: 'Priya S.',
          role: 'Interior Designer',
          text: 'I source all my client requirements from Adarsh Electronics. From basic Polycab wiring to high-end Havells fixtures, they have everything under one roof.',
        },
        {
          name: 'Amit G.',
          role: 'Business Owner',
          text: 'Upgraded my entire showroom lighting with them. The prices are incredibly fair for the quality you get. Highly recommend their LED panel lights.',
        },
        {
          name: 'Neha M.',
          role: 'Homeowner',
          text: 'We bought all fans and switches for our new home here. The after-sales service and warranty support is unmatched in the city.',
        }
      ]
    },
    footer: {
      title: 'Adarsh Electronics',
      addressLabel: 'Visit the Showroom',
      address: 'Rajgarh Sitapur Road, Opposite Shiv Mandir, Lakhimpur Kheri 262701',
      hoursLabel: 'Showroom Hours',
      hours: 'Always open',
      social: 'Follow Us',
      rights: 'All rights reserved.',
      mapPlaceholder: 'Map preview \u2014 embed your Google Maps link here',
    },
    whatsapp: {
      message:
        'Hello Adarsh Electronics, I am interested in your lighting products...',
      label: 'Chat on WhatsApp',
    },
  },
  hi: {
    nav: {
      collection: 'संग्रह',
      trust: 'हमारी विशेषता',
      visit: 'हमसे मिलें',
      cta: 'संदेश भेजें',
    },
    hero: {
      eyebrow: 'लखीमपुर का लाइटिंग शोरूम',
      titleLine1: 'आदर्श इलेक्ट्रॉनिक्स के साथ',
      titleLine2: 'अपने स्थान को रोशन करें',
      subtitle:
        'झूमर, दीवार की लाइट और आउटडोर फिक्सचर \u2014 हर उस घर के लिए जो चमकने का हकदार है।',
      cta: 'संग्रह देखें',
      ctaSecondary: 'विशेषज्ञ से बात करें',
    },
    gallery: {
      eyebrow: 'हमारा संग्रह',
      title: 'हर कमरे के लिए एक रोशनी',
      subtitle: 'श्रेणी अनुसार देखें \u2014 अपनी तस्वीरें डालते ही यह अपडेट हो जाएगा।',
      filters: {
        all: 'सभी',
        living: 'लिविंग रूम',
        outdoor: 'आउटडोर',
        chandeliers: 'झूमर',
      },
      viewLabel: 'देखें',
      placeholderTag: 'प्रीमियम',
    },
    categories: {
      eyebrow: 'हमारी रेंज',
      title: 'संपूर्ण इलेक्ट्रिकल समाधान',
      subtitle: 'प्रीमियम सजावटी लाइटिंग से लेकर रोजमर्रा के इलेक्ट्रिकल सामान, वायरिंग सामग्री, स्विच, पंखे, उपकरण और एक्सेसरीज तक, आदर्श इलेक्ट्रॉनिक्स घर और व्यावसायिक इलेक्ट्रिकल समाधानों के लिए आपका वन-स्टॉप डेस्टिनेशन है।',
      wiring: {
        title: 'वायरिंग और स्विच',
        items: ['हाउस वायर्स', 'फ्लेक्सिबल वायर्स', 'मॉड्यूलर स्विच', 'सॉकेट', 'MCB', 'डिस्ट्रीब्यूशन बोर्ड', 'कंड्यूट', 'जंक्शन बॉक्स'],
      },
      lighting: {
        title: 'लाइटिंग',
        items: ['LED बल्ब', 'पैनल लाइट', 'डाउनलाइट', 'COB लाइट', 'फ्लड लाइट', 'स्ट्रिप लाइट', 'सजावटी लाइट', 'ट्यूब लाइट'],
      },
      fans: {
        title: 'पंखे और जलवायु',
        items: ['सीलिंग फैन', 'एग्जॉस्ट फैन', 'पेडस्टल फैन', 'टेबल फैन', 'वॉल फैन', 'एयर कूलर', 'रूम हीटर'],
      },
      kitchen: {
        title: 'किचन और होम',
        items: ['मिक्सर ग्राइंडर', 'इंडक्शन कुकटॉप', 'इलेक्ट्रिक आयरन', 'वाटर हीटर', 'इलेक्ट्रिक केतली', 'इमरजेंसी लाइट', 'एक्सटेंशन बोर्ड'],
      },
    },
    trust: {
      eyebrow: 'आदर्श क्यों',
      title: 'शुरुआत से भरोसेमंद',
      items: [
        {
          title: 'उत्कृष्ट गुणवत्ता',
          desc: 'शोरूम से जाने से पहले हर फिक्सचर की हाथों से जांच की जाती है।',
        },
        {
          title: 'सर्वोत्तम मूल्य',
          desc: 'सीधी सोर्सिंग से हम बिना समझौता किए वाजिब दाम रखते हैं।',
        },
        {
          title: 'विशेषज्ञ सलाह',
          desc: 'तय नहीं कर पा रहे? हमारी टीम आपके कमरे के लिए सही चुनाव में मदद करेगी।',
        },
      ],
    },
    testimonials: {
      eyebrow: 'लोगों की राय',
      title: 'लखीमपुर की पसंद',
      reviews: [
        {
          name: 'राहुल वी.',
          role: 'घर के मालिक',
          text: 'लखीमपुर में एकमात्र जगह जहां असली प्रीमियम लाइटिंग मिलती है। झूमर बहुत खूबसूरत हैं और स्टाफ ने मेरे लिविंग रूम के लिए सही वार्म टोन चुनने में मदद की।',
        },
        {
          name: 'प्रिया एस.',
          role: 'इंटीरियर डिज़ाइनर',
          text: 'मैं अपने सभी ग्राहकों की ज़रूरतें आदर्श इलेक्ट्रॉनिक्स से पूरी करती हूँ। बुनियादी वायरिंग से लेकर हाई-एंड फिक्स्चर तक, उनके पास एक ही छत के नीचे सब कुछ है।',
        },
        {
          name: 'अमित जी.',
          role: 'व्यवसायी',
          text: 'मैंने अपने पूरे शोरूम की लाइटिंग इनसे अपग्रेड की है। गुणवत्ता के हिसाब से कीमतें बहुत उचित हैं। उनके एलईडी पैनल लाइट्स की अत्यधिक अनुशंसा करता हूँ।',
        },
        {
          name: 'नेहा एम.',
          role: 'घर की मालकिन',
          text: 'हमने अपने नए घर के लिए सभी पंखे और स्विच यहीं से खरीदे। शहर में इनकी बिक्री के बाद की सेवा और वारंटी सपोर्ट बेजोड़ है।',
        }
      ]
    },
    footer: {
      title: 'आदर्श इलेक्ट्रॉनिक्स',
      addressLabel: 'शोरूम पर आएं',
      address: 'राजगढ़ सीतापुर रोड, शिव मंदिर के सामने, लखीमपुर खीरी 262701',
      hoursLabel: 'शोरूम समय',
      hours: 'हमेशा खुला',
      social: 'हमें फॉलो करें',
      rights: 'सर्वाधिकार सुरक्षित।',
      mapPlaceholder: 'मैप प्रीव्यू \u2014 यहां अपना Google Maps लिंक जोड़ें',
    },
    whatsapp: {
      message:
        'नमस्ते आदर्श इलेक्ट्रॉनिक्स, मुझे आपके लाइटिंग उत्पादों में रुचि है...',
      label: 'व्हाट्सएप पर चैट करें',
    },
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const toggleLang = () => setLang((l) => (l === 'en' ? 'hi' : 'en'))
  const t = useMemo(() => translations[lang], [lang])
  const value = { lang, setLang, toggleLang, t }
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
