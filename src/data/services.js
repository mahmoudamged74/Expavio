/**
 * Single source of truth for all Expavio services.
 * Navbar, sections, and ServiceDetails all read from this file.
 */
export const serviceGroups = [
  {
    id: 'investment-formation',
    icon: 'building',
    ar: {
      title: 'الاستثمار والتأسيس',
      description: 'من التراخيص وتأسيس الشركات إلى دخول السوق السعودي.',
    },
    en: {
      title: 'Investment & Formation',
      description: 'From licensing and company formation to entering the Saudi market.',
    },
  },
  {
    id: 'management-consulting',
    icon: 'scale',
    ar: {
      title: 'الاستشارات والإدارة',
      description: 'تطوير الأعمال والحوكمة والخدمات المالية والقانونية.',
    },
    en: {
      title: 'Consulting & Management',
      description: 'Business development, governance, and financial & legal services.',
    },
  },
  {
    id: 'tech-growth',
    icon: 'chip',
    ar: {
      title: 'التقنية والنمو',
      description: 'التحول الرقمي والذكاء الاصطناعي والتسويق وتطوير العلامة.',
    },
    en: {
      title: 'Technology & Growth',
      description: 'Digital transformation, AI, marketing, and brand development.',
    },
  },
  {
    id: 'execution-operations',
    icon: 'support',
    ar: {
      title: 'التشغيل والتنفيذ',
      description: 'الدعم التشغيلي والموارد البشرية وإدارة المشاريع والفعاليات.',
    },
    en: {
      title: 'Operations & Execution',
      description: 'Operational support, HR, project management, and events.',
    },
  },
]

export const services = [
  {
    slug: 'investment-formation-setup',
    icon: 'building',
    group: 'investment-formation',
    ar: {
      title: 'خدمات تأسيس الاستثمار',
      shortDescription:
        'نساعدك على تأسيس شركتك واستخراج التراخيص وتسجيلها لدى الجهات المختصة، سواء كانت شركة سعودية أو أجنبية.',
      description:
        'مسار متكامل لتأسيس الكيانات الاستثمارية في المملكة، يشمل اختيار الشكل النظامي، استخراج التراخيص، التسجيل لدى الجهات المختصة، وتعديل الهياكل والعقود بما يضمن انطلاقة نظامية واثقة.',
      items: [
        'تأسيس الشركات السعودية والأجنبية',
        'تأسيس الشركات بملكية أجنبية 100%',
        'استخراج التراخيص الاستثمارية',
        'تأسيس الفروع الإقليمية',
        'تسجيل الشركات لدى الجهات الحكومية',
        'تعديل عقود التأسيس والأنظمة الأساسية',
        'الاندماج والاستحواذ وإعادة الهيكلة',
        'تصفية الشركات وإلغاء التراخيص',
      ],
      sections: [
        {
          title: 'لمن هذه الخدمة؟',
          body: 'للمستثمرين ورواد الأعمال الراغبين في تأسيس كيان نظامي داخل المملكة بمسار واضح ومتابعة احترافية.',
        },
      ],
    },
    en: {
      title: 'Investment Formation Services',
      shortDescription:
        'We help you form your company, obtain licenses, and complete registrations with the relevant authorities — whether Saudi or foreign-owned.',
      description:
        'An end-to-end path to establish investment entities in the Kingdom — from legal structure and licensing to authority registration and structural amendments — for a confident, compliant launch.',
      items: [
        'Formation of Saudi and foreign companies',
        '100% foreign-owned company formation',
        'Investment licensing',
        'Regional branch setup',
        'Company registration with government entities',
        'Amendments to articles of association and bylaws',
        'Mergers, acquisitions, and restructuring',
        'Company liquidation and license cancellation',
      ],
      sections: [
        {
          title: 'Who is this for?',
          body: 'Investors and entrepreneurs seeking a clear, professionally managed path to establish a compliant entity in the Kingdom.',
        },
      ],
    },
  },
  {
    slug: 'business-development',
    icon: 'rocket',
    group: 'management-consulting',
    ar: {
      title: 'خدمات تطوير الأعمال',
      shortDescription:
        'نبني معك استراتيجيات نمو ونماذج أعمال وخطط تشغيلية قابلة للتنفيذ تدعم توسع شركتك بثقة.',
      description:
        'نقدّم حلول تطوير أعمال تركز على النمو المستدام: من الاستراتيجية ونماذج الأعمال إلى دراسات الجدوى وتحسين العمليات ومؤشرات الأداء والتحول المؤسسي.',
      items: [
        'إعداد استراتيجيات النمو',
        'تطوير نماذج الأعمال',
        'إعداد خطط الأعمال ودراسات الجدوى',
        'إعادة هيكلة الشركات',
        'تحسين العمليات التشغيلية',
        'مؤشرات الأداء (KPIs)',
        'التحول المؤسسي',
      ],
      sections: [
        {
          title: 'القيمة المضافة',
          body: 'رؤية أوضح لمسار النمو مع أدوات تنفيذ عملية قابلة للقياس.',
        },
      ],
    },
    en: {
      title: 'Business Development Services',
      shortDescription:
        'We build growth strategies, business models, and actionable operating plans that help your company scale with confidence.',
      description:
        'Business development solutions focused on sustainable growth — from strategy and business models to feasibility studies, process improvement, KPIs, and institutional transformation.',
      items: [
        'Growth strategy development',
        'Business model design',
        'Business plans and feasibility studies',
        'Corporate restructuring',
        'Operational process improvement',
        'Performance indicators (KPIs)',
        'Institutional transformation',
      ],
      sections: [
        {
          title: 'Value delivered',
          body: 'A clearer growth path with practical, measurable execution tools.',
        },
      ],
    },
  },
  {
    slug: 'investment-consulting',
    icon: 'chart',
    group: 'investment-formation',
    ar: {
      title: 'الاستشارات الاستثمارية',
      shortDescription:
        'نقيّم الفرص والأسواق ونرسم قرارات استثمارية مدروسة تدعم جذب رأس المال والتوسع بثقة.',
      description:
        'استشارات استثمارية متخصصة تجمع بين دراسات السوق وتحليل الفرص وتقييم الشركات وإعداد ملفات المستثمرين لدعم قرارات التوسع المحلي والدولي.',
      items: [
        'دراسات السوق',
        'تحليل الفرص الاستثمارية',
        'تقييم الشركات',
        'جذب المستثمرين',
        'إعداد ملفات المستثمرين',
        'التوسع المحلي والدولي',
      ],
      sections: [
        {
          title: 'مخرجات الاستشارة',
          body: 'توصيات واضحة وملفات جاهزة تساعدك على اتخاذ قرار استثماري مبني على بيانات.',
        },
      ],
    },
    en: {
      title: 'Investment Consulting',
      shortDescription:
        'We assess markets and opportunities to support informed investment decisions, capital attraction, and confident expansion.',
      description:
        'Specialized investment advisory covering market studies, opportunity analysis, company valuation, and investor materials to support local and international growth.',
      items: [
        'Market studies',
        'Investment opportunity analysis',
        'Company valuation',
        'Investor attraction',
        'Investor materials preparation',
        'Local and international expansion',
      ],
      sections: [
        {
          title: 'Consultation outcomes',
          body: 'Clear recommendations and ready materials for data-driven investment decisions.',
        },
      ],
    },
  },
  {
    slug: 'legal-admin-services',
    icon: 'scale',
    group: 'management-consulting',
    ar: {
      title: 'الخدمات القانونية والإدارية',
      shortDescription:
        'نوفّر إطارًا قانونيًا وإداريًا محكمًا يغطي الحوكمة والعقود والامتثال وحماية الملكية الفكرية.',
      description:
        'خدمات قانونية وإدارية متكاملة تساعد الشركات على تنظيم علاقاتها التعاقدية، تعزيز الحوكمة، إدارة الامتثال، وحماية علاماتها وملكيتها الفكرية باحترافية.',
      items: [
        'الحوكمة',
        'صياغة العقود',
        'اتفاقيات الشراكة',
        'حماية الملكية الفكرية والعلامات التجارية',
        'إدارة الامتثال',
        'خدمات الأمانة العامة للشركات',
      ],
      sections: [
        {
          title: 'متى تحتاجها؟',
          body: 'عند الحاجة إلى تنظيم قانوني وإداري يحمي نمو الشركة ويقلل المخاطر.',
        },
      ],
    },
    en: {
      title: 'Legal & Administrative Services',
      shortDescription:
        'We provide a solid legal and administrative framework covering governance, contracts, compliance, and IP protection.',
      description:
        'Integrated legal and administrative services that help companies structure contractual relationships, strengthen governance, manage compliance, and protect brands and intellectual property.',
      items: [
        'Governance',
        'Contract drafting',
        'Partnership agreements',
        'IP and trademark protection',
        'Compliance management',
        'Corporate secretarial services',
      ],
      sections: [
        {
          title: 'When do you need it?',
          body: 'When you need legal and administrative structure that protects growth and reduces risk.',
        },
      ],
    },
  },
  {
    slug: 'financial-services',
    icon: 'finance',
    group: 'management-consulting',
    ar: {
      title: 'الخدمات المالية',
      shortDescription:
        'ندعم قراراتك المالية بقوائم ونماذج وموازنات واضحة، مع استشارات محاسبية وضريبية متخصصة.',
      description:
        'حلول مالية متكاملة تشمل إعداد القوائم والنمذجة المالية والموازنات وتقييم المشاريع وخدمات الزكاة والضريبة والاستشارات المحاسبية.',
      items: [
        'إعداد القوائم المالية',
        'النمذجة المالية',
        'إعداد الموازنات',
        'تقييم المشاريع',
        'خدمات الزكاة والضرائب',
        'الاستشارات المحاسبية',
      ],
      sections: [
        {
          title: 'الفائدة',
          body: 'وضوح مالي أعلى يساعدك على التخطيط واتخاذ قرارات نمو أدق.',
        },
      ],
    },
    en: {
      title: 'Financial Services',
      shortDescription:
        'We support your financial decisions with clear statements, models, and budgets — plus specialized accounting and tax advisory.',
      description:
        'Integrated financial solutions covering financial statements, modeling, budgeting, project valuation, Zakat and tax services, and accounting advisory.',
      items: [
        'Financial statements preparation',
        'Financial modeling',
        'Budget preparation',
        'Project valuation',
        'Zakat and tax services',
        'Accounting advisory',
      ],
      sections: [
        {
          title: 'Your benefit',
          body: 'Greater financial clarity for planning and sharper growth decisions.',
        },
      ],
    },
  },
  {
    slug: 'foreign-investor-services',
    icon: 'globe',
    group: 'investment-formation',
    ar: {
      title: 'خدمات المستثمر الأجنبي',
      shortDescription:
        'نرافق المستثمر غير المحلي من التأسيس والترخيص حتى الإقامات والحسابات البنكية وبدء التشغيل.',
      description:
        'حزمة متخصصة للمستثمر الأجنبي تشمل تأسيس الشركات والفروع، خدمات المستثمرين التنفيذيين، الإقامات والتأشيرات، فتح الحسابات البنكية، واستخراج التراخيص اللازمة.',
      items: [
        'تأسيس الشركات الأجنبية',
        'فتح الفروع',
        'خدمات المستثمرين التنفيذيين',
        'إصدار الإقامات والتأشيرات',
        'فتح الحسابات البنكية',
        'استخراج التراخيص اللازمة',
      ],
      sections: [
        {
          title: 'لماذا Expavio؟',
          body: 'مسار مرتب بلغة واضحة يختصر التعقيد ويسرّع دخولك إلى السوق.',
        },
      ],
    },
    en: {
      title: 'Foreign Investor Services',
      shortDescription:
        'We support non-local investors from formation and licensing through residencies, banking, and operational launch.',
      description:
        'A specialized package for foreign investors covering company and branch setup, executive investor services, residencies and visas, bank account opening, and required licensing.',
      items: [
        'Foreign company formation',
        'Branch opening',
        'Executive investor services',
        'Residency and visa issuance',
        'Bank account opening',
        'Required licensing',
      ],
      sections: [
        {
          title: 'Why Expavio?',
          body: 'An orderly path with clear communication that reduces complexity and accelerates market entry.',
        },
      ],
    },
  },
  {
    slug: 'digital-transformation',
    icon: 'chip',
    group: 'tech-growth',
    ar: {
      title: 'التحول الرقمي',
      shortDescription:
        'نمكّن مؤسستك رقميًا عبر الأتمتة والذكاء الاصطناعي والأنظمة والمنصات بأسلوب عملي وآمن.',
      description:
        'نقدّم حلول تحول رقمي تشمل أتمتة الأعمال، الذكاء الاصطناعي، أنظمة ERP وCRM، بناء المواقع والمنصات، والأمن السيبراني لرفع كفاءة المؤسسات.',
      items: [
        'أتمتة الأعمال',
        'حلول الذكاء الاصطناعي',
        'أنظمة ERP وCRM',
        'بناء المواقع والمنصات',
        'الأمن السيبراني',
        'التحول الرقمي للمؤسسات',
      ],
      sections: [
        {
          title: 'النتيجة',
          body: 'عمليات أسرع، أنظمة أكثر تكاملًا، وجاهزية رقمية أعلى للنمو.',
        },
      ],
    },
    en: {
      title: 'Digital Transformation',
      shortDescription:
        'We digitally enable your organization through automation, AI, systems, and platforms — practically and securely.',
      description:
        'Digital transformation solutions covering business automation, AI, ERP and CRM systems, websites and platforms, and cybersecurity to raise institutional efficiency.',
      items: [
        'Business automation',
        'Artificial intelligence solutions',
        'ERP and CRM systems',
        'Websites and platform development',
        'Cybersecurity',
        'Enterprise digital transformation',
      ],
      sections: [
        {
          title: 'The outcome',
          body: 'Faster operations, more integrated systems, and stronger digital readiness for growth.',
        },
      ],
    },
  },
  {
    slug: 'marketing-branding',
    icon: 'sparkles',
    group: 'tech-growth',
    ar: {
      title: 'التسويق وتطوير العلامة التجارية',
      shortDescription:
        'نبني هوية قوية وحضورًا تسويقيًا متكاملًا يعزّز الثقة ويحوّل الاهتمام إلى نمو مستدام.',
      description:
        'من بناء الهوية واستراتيجيات التسويق إلى التسويق الرقمي والحملات والعلاقات العامة وتطوير تجربة العميل — نصنع حضورًا احترافيًا لعلامتك.',
      items: [
        'بناء الهوية التجارية',
        'استراتيجيات التسويق',
        'التسويق الرقمي',
        'إدارة الحملات الإعلانية',
        'العلاقات العامة',
        'تطوير تجربة العميل',
      ],
      sections: [
        {
          title: 'لماذا تهم؟',
          body: 'علامة واضحة وتجربة متسقة تزيد الثقة وتسرّع اكتساب العملاء.',
        },
      ],
    },
    en: {
      title: 'Marketing & Brand Development',
      shortDescription:
        'We build a strong identity and integrated marketing presence that earns trust and turns attention into sustainable growth.',
      description:
        'From brand identity and marketing strategy to digital marketing, campaigns, PR, and customer experience — we create a professional presence for your brand.',
      items: [
        'Brand identity development',
        'Marketing strategies',
        'Digital marketing',
        'Campaign management',
        'Public relations',
        'Customer experience development',
      ],
      sections: [
        {
          title: 'Why it matters',
          body: 'A clear brand and consistent experience build trust and accelerate customer acquisition.',
        },
      ],
    },
  },
  {
    slug: 'conferences-exhibitions',
    icon: 'calendar',
    group: 'execution-operations',
    ar: {
      title: 'المؤتمرات والمعارض',
      shortDescription:
        'ندير مؤتمراتك ومعارضك وفعالياتك باحترافية تعكس صورة مؤسستك وتفتح فرص تواصل وشراكة.',
      description:
        'خدمات متكاملة لتنظيم المؤتمرات وإدارة المعارض وتصميم الأجنحة وإدارة الفعاليات وخدمات البروتوكول والاستقبال.',
      items: [
        'تنظيم المؤتمرات',
        'إدارة المعارض',
        'تصميم وتنفيذ الأجنحة',
        'إدارة الفعاليات',
        'خدمات البروتوكول والاستقبال',
      ],
      sections: [
        {
          title: 'القيمة',
          body: 'حضور منظم يعزز مكانة علامتك ويحوّل الفعالية إلى فرصة أعمال حقيقية.',
        },
      ],
    },
    en: {
      title: 'Conferences & Exhibitions',
      shortDescription:
        'We manage your conferences, exhibitions, and events with a polished standard that reflects your brand and opens partnerships.',
      description:
        'Integrated services for conference organization, exhibition management, booth design and build, event management, and protocol and reception services.',
      items: [
        'Conference organization',
        'Exhibition management',
        'Booth design and execution',
        'Event management',
        'Protocol and reception services',
      ],
      sections: [
        {
          title: 'The value',
          body: 'Organized presence that strengthens your brand and turns events into real business opportunities.',
        },
      ],
    },
  },
  {
    slug: 'operational-support',
    icon: 'support',
    group: 'execution-operations',
    ar: {
      title: 'خدمات الدعم التشغيلي',
      shortDescription:
        'نوفّر دعمًا تشغيليًا يوميًا يغطي الموارد البشرية والتوظيف والمشتريات وإدارة المشاريع والتعهيد.',
      description:
        'حزمة تشغيلية متكاملة تشمل الموارد البشرية، التوظيف، السياسات والإجراءات، المشتريات، إدارة المشاريع، وخدمات التعهيد لتفرّغ فريقك للنمو الأساسي.',
      items: [
        'الموارد البشرية',
        'التوظيف',
        'إعداد السياسات والإجراءات',
        'إدارة المشتريات',
        'إدارة المشاريع',
        'خدمات التعهيد (Outsourcing)',
      ],
      sections: [
        {
          title: 'متى تحتاجها؟',
          body: 'عندما تريد تشغيلًا سلسًا ومستمرًا دون أن يستهلك وقت قيادتك.',
        },
      ],
    },
    en: {
      title: 'Operational Support Services',
      shortDescription:
        'We provide day-to-day operational support covering HR, recruitment, procurement, project management, and outsourcing.',
      description:
        'An integrated operations package spanning human resources, recruitment, policies and procedures, procurement, project management, and outsourcing — so your team can focus on core growth.',
      items: [
        'Human resources',
        'Recruitment',
        'Policies and procedures',
        'Procurement management',
        'Project management',
        'Outsourcing services',
      ],
      sections: [
        {
          title: 'When do you need it?',
          body: 'When you want smooth, continuous operations without consuming leadership time.',
        },
      ],
    },
  },
]

export const serviceSlugs = services.map((service) => service.slug)
