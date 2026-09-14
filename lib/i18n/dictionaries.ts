import type { Lang } from "@/types/i18n";

const es = {
  header: {
    callNow: "Llamar",
    navHowItWorks: "Cómo Funciona",
    navReviews: "Reseñas",
    navFaq: "Preguntas",
    navCheckScore: "Ver Puntaje",
    navConsultation: "Consulta Gratis",
  },

  hero: {
    heading: "Mejor Crédito.\nMejor Vida.",
    subtext:
      "Los errores en tu reporte de crédito te cuestan dinero cada mes. Nosotros los encontramos y los disputamos.",
    cta: "Hablar con un Especialista — Gratis",
    subCta: "Consulta gratis · Sin compromiso · 15 minutos",
    whatsappLink: "¿Prefieres escribir? WhatsApp",
    imageAlt:
      "Especialista de BCBL asesorando a un cliente sobre su reporte de crédito",
    bureauLabel: "Revisamos los tres burós:",
  },

  pullQuote: {
    // PLACEHOLDER — reemplazar con copia aprobada
    quote:
      "No tienes que avergonzarte de tu crédito. Solo tienes que decidir arreglarlo.",
  },

  explainer: {
    heading: "¿Qué contiene tu reporte de crédito?",
    p1: "Tu reporte de crédito documenta tu historial de endeudamiento y pago: tarjetas de crédito, préstamos personales, hipotecas y otras líneas de crédito. Cada institución financiera con la que has trabajado puede reportar esta información a uno o más de los tres burós principales: Equifax, Experian y TransUnion.",
    p2: "Es más frecuente de lo que se piensa que estos reportes contengan errores: cuentas que no te pertenecen, saldos reportados de forma incorrecta o pagos marcados como tardíos sin haberlo sido. La ley federal te otorga el derecho de disputar cualquier información inexacta, incompleta o no verificable.",
  },

  howItWorks: {
    heading: "Cómo Funciona",
    steps: [
      {
        title: "Revisamos tu reporte",
        body: "Analizamos los tres burós para identificar errores, cuentas duplicadas, cuentas que no te pertenecen e información desactualizada o no verificable que esté afectando tu historial crediticio.",
      },
      {
        title: "Realizamos disputas formales",
        body: "Presentamos disputas formales bajo la ley federal por cada elemento inexacto, incompleto o no verificable, y damos seguimiento a cada respuesta hasta que el buró lo corrija o lo elimine.",
      },
      {
        title: "Te ayudamos a crecer",
        body: "Orientación para reconstruir historial positivo junto al proceso de disputa para que los resultados sean duraderos.",
      },
    ],
  },

  testimonials: {
    heading: "Lo Que Dicen Nuestros Clientes",
    // PLACEHOLDER — reemplazar con reseñas reales antes del lanzamiento
    items: [
      {
        quote:
          "Durante años quise comprar mi primera casa en Estados Unidos, pero mi mal crédito no me lo permitía. Gracias a BCBL, hoy tengo mi primer hogar.",
        name: "Carlos L.",
        location: "Atlanta, GA",
        initial: "C",
      },
      {
        quote:
          "Después de un divorcio difícil, mi crédito se vio muy afectado y tenía las puertas cerradas con los bancos. Gracias a BCBL pude recuperar mi historial, y ahora tengo acceso a las mejores tarjetas.",
        name: "Denise M.",
        location: "Houston, TX",
        initial: "D",
      },
      {
        quote:
          "Necesitaba un vehículo para ir al trabajo y no conseguía financiamiento en ningún lugar. Después de algunos meses trabajando con BCBL, pude salir manejando mi propio auto.",
        name: "James V.",
        location: "Phoenix, AZ",
        initial: "J",
      },
    ],
  },

  faq: {
    heading: "Preguntas Frecuentes",
    items: [
      {
        q: "¿Cuánto tiempo tarda el proceso?",
        a: "Cada expediente es diferente. La mayoría de los clientes comienza a ver cambios en 30–90 días. El proceso completo suele durar entre 6 y 12 meses.",
      },
      {
        q: "¿La reparación de crédito es legal?",
        a: "Absolutamente. La Ley de Informes de Crédito Justos (FCRA) te da el derecho de disputar información inexacta, incompleta o no verificable en tu reporte.",
      },
      {
        q: "¿Qué incluye el servicio?",
        a: "Revisamos los tres burós, identificamos elementos disputables, redactamos y presentamos cartas de disputa, y le damos seguimiento hasta que cada elemento se resuelva.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Te explicamos nuestra estructura de honorarios en la consulta gratuita.",
      },
    ],
  },

  consultationForm: {
    heading: "Solicita Tu Consulta Gratis",
    fields: {
      name: { label: "Nombre Completo", placeholder: "María González" },
      email: { label: "Correo Electrónico", placeholder: "maria@ejemplo.com" },
      phone: { label: "Teléfono", placeholder: "Ej: +1 (555) 123-4567" },
      cityState: { label: "Ciudad y Estado", placeholder: "Miami, FL" },
      creditScore: {
        label: "Puntaje de Crédito Aproximado",
        placeholder: "Selecciona un rango",
        options: [
          "Selecciona un rango",
          "300–499 (Muy Malo)",
          "500–579 (Malo)",
          "580–669 (Regular)",
          "670–739 (Bueno)",
          "740–799 (Muy Bueno)",
          "800–850 (Excelente)",
          "No sé",
        ],
      },
      income: {
        label: "Ingreso Mensual Aproximado",
        placeholder: "Selecciona un rango",
        options: [
          "Selecciona un rango",
          "Menos de $2,000",
          "$2,000 – $4,000",
          "$4,000 – $6,000",
          "$6,000 – $8,000",
          "Más de $8,000",
        ],
      },
      goals: {
        label: "¿Cuáles Son Tus Principales Objetivos?",
        placeholder:
          "Ej: Comprar una casa, obtener una tarjeta mejor, refinanciar un auto...",
      },
      comments: {
        label: "Comentarios Adicionales",
        placeholder: "Cuéntanos más sobre tu situación actual...",
      },
    },
    consent1:
      "Acepto la Política de Privacidad y los Términos de Servicio, y autorizo el uso de mis datos para evaluación y seguimiento.",
    consent2:
      "Acepto recibir mensajes SMS de BCBL sobre mi caso de reparación de crédito. Aprox. 4 mensajes/mes. Pueden aplicar tarifas. Responde STOP para cancelar, HELP para ayuda. El consentimiento NO es condición del servicio. Ver Términos SMS y Privacidad.",
    honeypotLabel: "Si eres humano, deja este campo vacío",
    submit: "Solicitar Consulta Gratis →",
    loading: "Enviando…",
    successTitle: "¡Recibimos tu solicitud!",
    successBody:
      "Un especialista te contactará dentro de un día hábil. Si deseas hablar con alguien ahora mismo, llámanos o escríbenos.",
    errors: {
      name: "Por favor ingresa tu nombre completo.",
      email: "Por favor ingresa un correo válido.",
      phone: "Por favor ingresa un teléfono válido.",
      goals: "Por favor describe tus objetivos.",
      consent1: "Debes aceptar los términos para continuar.",
    },
    paymentNote: "Pagos seguros. Tarjetas aceptadas:",
    paymentFine:
      "Aceptamos Visa y Mastercard. No aceptamos American Express, Discover ni Maestro.",
    orCall: "O llámanos:",
  },

  footer: {
    columns: {
      contact: {
        heading: "Contacto",
        hours: "Lun–Vie, 10:00 AM–7:00 PM EST",
      },
      legal: {
        heading: "Legal",
        links: [
          { label: "Portal de Clientes", href: "#" },
          { label: "Términos de Servicio", href: "#" },
          { label: "Política de Reembolso", href: "#" },
          { label: "Política de Privacidad", href: "#" },
          { label: "Términos SMS", href: "#" },
        ],
      },
      payments: {
        heading: "Pagos Aceptados",
        note: "Visa y Mastercard. No aceptamos American Express, Discover ni Maestro.",
      },
    },
    bottomLinks: [
      { label: "Portal de Clientes", href: "#" },
      { label: "Términos de Servicio", href: "#" },
      { label: "Política de Reembolso", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos SMS", href: "#" },
      { label: "Volver arriba", href: "#" },
    ],
    copyright: "© 2026 BCBL. Todos los derechos reservados.",
    disclaimer:
      "La mejora de puntaje depende de factores individuales. No eliminamos información precisa, vigente y verificable.",
    sms: "Programa SMS: BCBL Credit Repair Alerts. STOP=cancelar | HELP=ayuda. Pueden aplicar tarifas. ~4/mes.",
  },

  creditCheck: {
    heading: "Verifica Tu Puntaje de Crédito",
    subtext:
      "Saber tu puntaje antes de la consulta nos permite enfocarnos en lo que más importa. Consultar tu propio crédito nunca afecta tu puntaje.",
    note: "Servicios de terceros. BCBL no tiene afiliación ni relación comercial con ninguno de ellos.",
    resources: [
      {
        name: "Experian",
        badgeLabel: "Gratis",
        paid: false,
        description:
          "Reporte Experian y FICO® Score 8 gratis. Directamente del buró oficial.",
        url: "https://www.experian.com/",
        cta: "Ver mi puntaje →",
      },
      {
        name: "Equifax",
        badgeLabel: "Gratis",
        paid: false,
        description:
          "Reporte y puntaje de crédito Equifax gratis. Directamente del buró oficial.",
        url: "https://www.equifax.com/personal/",
        cta: "Ver mi puntaje →",
      },
      {
        name: "TransUnion",
        badgeLabel: "Gratis",
        paid: false,
        description:
          "Reporte y puntaje de crédito TransUnion gratis. Directamente del buró oficial.",
        url: "https://www.transunion.com/consumer",
        cta: "Ver mi puntaje →",
      },
    ],
  },

  stickyBar: {
    call: "Llamar",
    text: "Escribir",
  },
};

const en: typeof es = {
  header: {
    callNow: "Call Now",
    navHowItWorks: "How It Works",
    navReviews: "Reviews",
    navFaq: "FAQ",
    navCheckScore: "Check Score",
    navConsultation: "Free Consultation",
  },

  hero: {
    heading: "Better Credit.\nBetter Living.",
    subtext:
      "Errors on your credit report are costing you money every month. We find them, and we fight them.",
    cta: "Talk to a Specialist — Free",
    subCta: "Free consultation · No obligation · 15 minutes",
    whatsappLink: "Prefer to text? WhatsApp us",
    imageAlt: "BCBL specialist consulting with a client about their credit report",
    bureauLabel: "We analyze all three bureaus:",
  },

  pullQuote: {
    // PLACEHOLDER — replace with final approved copy
    quote:
      "You don't have to be embarrassed about your credit. You just have to decide to fix it.",
  },

  explainer: {
    heading: "What information appears on your credit report?",
    p1: "Your credit report documents your borrowing and repayment history — credit cards, personal loans, mortgages, and other lines of credit. Each financial institution you've worked with may report this information to one or more of the three major bureaus: Equifax, Experian, and TransUnion.",
    p2: "It is more common than most people realize for these reports to contain errors — accounts that don't belong to you, balances reported incorrectly, or payments marked late when they weren't. Federal law grants you the right to dispute any information that is inaccurate, incomplete, or unverifiable.",
  },

  howItWorks: {
    heading: "How It Works",
    steps: [
      {
        title: "We review your report",
        body: "We analyze all three bureaus to identify errors, duplicate accounts, accounts that aren't yours, and outdated or unverifiable information affecting your credit history.",
      },
      {
        title: "We file formal disputes",
        body: "We file formal disputes under federal law for every inaccurate, incomplete, or unverifiable item, and follow up on every response until the bureau corrects or removes it.",
      },
      {
        title: "We help you build",
        body: "Guidance on rebuilding positive history alongside the dispute process so the results hold long-term.",
      },
    ],
  },

  testimonials: {
    heading: "What Our Clients Say",
    // PLACEHOLDER — replace all three with real client reviews before launch
    items: [
      {
        quote:
          "For years I wanted to buy my first home in the United States, but my bad credit wouldn't let me. Thanks to BCBL, I now have my first home.",
        name: "Carlos L.",
        location: "Atlanta, GA",
        initial: "C",
      },
      {
        quote:
          "After a difficult divorce, my credit took a big hit and I felt shut out by the banks. Thanks to BCBL I was able to rebuild my credit history, and now I have access to the best credit cards.",
        name: "Denise M.",
        location: "Houston, TX",
        initial: "D",
      },
      {
        quote:
          "I needed a vehicle to get to work and couldn't get financing anywhere. After a few months of working with BCBL, I drove off in a car of my own.",
        name: "James V.",
        location: "Phoenix, AZ",
        initial: "J",
      },
    ],
  },

  faq: {
    heading: "Common Questions",
    items: [
      {
        q: "How long does the process take?",
        a: "Every credit file is different. Most clients begin to see changes within 30–90 days of their first dispute round. The full process typically runs 6–12 months.",
      },
      {
        q: "Is credit repair legal?",
        a: "Absolutely. The Fair Credit Reporting Act (FCRA) gives every American the legal right to dispute inaccurate, incomplete, or unverifiable information on their credit reports.",
      },
      {
        q: "What's included in the service?",
        a: "We pull and review all three bureau reports, identify disputable items, draft and file dispute letters, track bureau responses, and follow up until each item is resolved.",
      },
      {
        q: "What does it cost?",
        a: "We'll walk you through our fee structure during your free consultation.",
      },
    ],
  },

  consultationForm: {
    heading: "Request Your Free Consultation",
    fields: {
      name: { label: "Full Name", placeholder: "Maria Gonzalez" },
      email: { label: "Email Address", placeholder: "maria@example.com" },
      phone: { label: "Phone", placeholder: "Ex: +1 (555) 123-4567" },
      cityState: { label: "City and State", placeholder: "Miami, FL" },
      creditScore: {
        label: "Current Credit Score (Approximate)",
        placeholder: "Select a range",
        options: [
          "Select a range",
          "300–499 (Very Poor)",
          "500–579 (Poor)",
          "580–669 (Fair)",
          "670–739 (Good)",
          "740–799 (Very Good)",
          "800–850 (Excellent)",
          "I don't know",
        ],
      },
      income: {
        label: "Approximate Monthly Income",
        placeholder: "Select a range",
        options: [
          "Select a range",
          "Under $2,000",
          "$2,000 – $4,000",
          "$4,000 – $6,000",
          "$6,000 – $8,000",
          "Over $8,000",
        ],
      },
      goals: {
        label: "What Are Your Main Goals?",
        placeholder:
          "Ex: Buy a home, get a better credit card, refinance an auto loan...",
      },
      comments: {
        label: "Additional Comments",
        placeholder: "Tell us more about your current situation...",
      },
    },
    consent1:
      "I accept the Privacy Policy and the Terms of Service, and authorize use of my data for evaluation and follow-up.",
    consent2:
      "I agree to receive SMS messages from BCBL about my credit repair case and account updates. Approx. 4 msgs/month. Message & data rates may apply. Reply STOP to cancel, HELP for help. Consent is NOT a condition of service. See SMS Terms and Privacy.",
    honeypotLabel: "If you are human, leave this field empty",
    submit: "Request Free Consultation →",
    loading: "Sending…",
    successTitle: "We received your request!",
    successBody:
      "A specialist will contact you within one business day. If you'd like to speak with someone right now, call or text us.",
    errors: {
      name: "Please enter your full name.",
      email: "Please enter a valid email.",
      phone: "Please enter a valid phone number.",
      goals: "Please describe your goals.",
      consent1: "You must accept the terms to continue.",
    },
    paymentNote: "Secure payments. Cards accepted:",
    paymentFine:
      "We accept Visa and Mastercard. We do not accept American Express, Discover, or Maestro.",
    orCall: "Or call us:",
  },

  footer: {
    columns: {
      contact: {
        heading: "Contact",
        hours: "Mon–Fri, 10:00 AM–7:00 PM EST",
      },
      legal: {
        heading: "Legal",
        links: [
          { label: "Client Portal", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Refund Policy", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "SMS Terms", href: "#" },
        ],
      },
      payments: {
        heading: "Accepted Payments",
        note: "Visa and Mastercard. We do not accept American Express, Discover, or Maestro.",
      },
    },
    bottomLinks: [
      { label: "Client Portal", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "SMS Terms", href: "#" },
      { label: "Back to top", href: "#" },
    ],
    copyright: "© 2026 BCBL. All rights reserved.",
    disclaimer:
      "Score improvement depends on individual factors. We do not remove accurate, current, and verifiable information.",
    sms: "SMS Program: BCBL Credit Repair Alerts. STOP=cancel | HELP=help. Message rates may apply. ~4/mo.",
  },

  creditCheck: {
    heading: "Check Your Credit Score First",
    subtext:
      "Knowing your score before your consultation helps us focus on what matters most. Checking your own credit never affects your score.",
    note: "These are independent third-party services. BCBL is not affiliated with or compensated by any of them.",
    resources: [
      {
        name: "Experian",
        badgeLabel: "Free",
        paid: false,
        description:
          "Free access to your Experian report and FICO® Score 8. Straight from the bureau.",
        url: "https://www.experian.com/",
        cta: "Check my score →",
      },
      {
        name: "Equifax",
        badgeLabel: "Free",
        paid: false,
        description:
          "Free access to your Equifax credit report and score. Straight from the bureau.",
        url: "https://www.equifax.com/personal/",
        cta: "Check my score →",
      },
      {
        name: "TransUnion",
        badgeLabel: "Free",
        paid: false,
        description:
          "Free access to your TransUnion credit report and score. Straight from the bureau.",
        url: "https://www.transunion.com/consumer",
        cta: "Check my score →",
      },
    ],
  },

  stickyBar: {
    call: "Call Now",
    text: "Text Us",
  },
};

export const dictionaries: Record<Lang, typeof es> = { es, en };
