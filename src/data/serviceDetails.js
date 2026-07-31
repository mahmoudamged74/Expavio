/**
 * Per-service detail extras merged with src/data/services.js
 * (title, description, items live in services.js).
 */

export const defaultProcess = {
  ar: [
    'الاجتماع والاستشارة',
    'مراجعة النشاط والمتطلبات',
    'تجهيز الوثائق',
    'تنفيذ الإجراءات',
    'متابعة الطلب',
    'التسليم والدعم',
  ],
  en: [
    'Consultation meeting',
    'Review activity and requirements',
    'Prepare documents',
    'Execute procedures',
    'Track the request',
    'Handover and support',
  ],
}

export const defaultDeliverables = {
  ar: [
    'خطة تنفيذ',
    'قائمة متطلبات',
    'متابعة الإجراءات',
    'مستندات وتقارير',
    'تحديثات دورية',
    'دعم بعد إتمام الخدمة',
  ],
  en: [
    'Execution plan',
    'Requirements checklist',
    'Procedure follow-up',
    'Documents and reports',
    'Periodic updates',
    'Post-completion support',
  ],
}

export const serviceDetailsBySlug = {
  'investment-formation-setup': {
    relatedSlugs: [
      'legal-admin-services',
      'financial-services',
      'foreign-investor-services',
      'operational-support',
    ],
    ar: {
      outcome:
        'تخرج بكيان استثماري مسجّل ومرخّص وفق الأنظمة السعودية، مع مسار واضح للانطلاق التشغيلي والامتثال من اليوم الأول.',
      audience: [
        'رواد الأعمال',
        'المستثمرون الأجانب',
        'الشركات الدولية',
        'الشركات القائمة',
        'الشركاء الراغبون في إعادة الهيكلة',
      ],
      faq: [
        {
          q: 'ما المدة المتوقعة لتأسيس شركة في المملكة؟',
          a: 'تختلف المدة حسب نوع الكيان والتراخيص المطلوبة، وعادةً تتراوح بين عدة أسابيع إلى بضعة أشهر. نحدّد جدولًا واقعيًا بعد مراجعة نشاطك والجهات المعنية.',
        },
        {
          q: 'هل يمكن تأسيس شركة بملكية أجنبية 100%؟',
          a: 'نعم، في قطاعات ونشاطات مسموح بها وفق أنظمة الاستثمار الأجنبي. نراجع نشاطك ونحدّد الشكل النظامي والتراخيص المناسبة قبل البدء.',
        },
        {
          q: 'ما الوثائق الأساسية المطلوبة للبدء؟',
          a: 'تشمل عادةً جوازات الشركاء، خطابات رسمية، وثائق النشاط، وعقود أو موافقات مسبقة حسب نوع التأسيس. نزوّدك بقائمة مخصصة بعد الاستشارة الأولى.',
        },
      ],
    },
    en: {
      outcome:
        'You leave with a registered, licensed investment entity under Saudi regulations — with a clear path for operational launch and day-one compliance.',
      audience: [
        'Entrepreneurs',
        'Foreign investors',
        'International companies',
        'Existing companies',
        'Partners seeking restructuring',
      ],
      faq: [
        {
          q: 'How long does company formation in the Kingdom typically take?',
          a: 'Timelines vary by entity type and required licenses, usually ranging from several weeks to a few months. We set a realistic schedule after reviewing your activity and the relevant authorities.',
        },
        {
          q: 'Can a company be formed with 100% foreign ownership?',
          a: 'Yes, in sectors and activities permitted under foreign investment regulations. We review your activity and define the appropriate legal structure and licenses before starting.',
        },
        {
          q: 'What core documents are needed to begin?',
          a: 'These typically include partners’ passports, official letters, activity documentation, and contracts or prior approvals depending on the formation type. We provide a tailored checklist after the initial consultation.',
        },
      ],
    },
  },

  'business-development': {
    relatedSlugs: [
      'investment-consulting',
      'financial-services',
      'digital-transformation',
      'operational-support',
    ],
    ar: {
      outcome:
        'تحصل على استراتيجية نمو واضحة ونموذج أعمال قابل للتنفيذ، مع أدوات تشغيلية ومؤشرات أداء تدعم التوسع بثقة وقابلية للقياس.',
      audience: [
        'الشركات الناشئة',
        'الشركات المتوسطة',
        'الإدارة التنفيذية',
        'الشركات الراغبة في التوسع',
        'الكيانات التي تمر بإعادة هيكلة',
      ],
      faq: [
        {
          q: 'هل تقدّمون دراسات جدوى كاملة؟',
          a: 'نعم، نعدّ دراسات جدوى وخطط أعمال مبنية على بيانات السوق والتكاليف والعائد المتوقع، بما يتوافق مع متطلبات الجهات التمويلية عند الحاجة.',
        },
        {
          q: 'كيف تختلف خدمة تطوير الأعمال عن الاستشارات الاستثمارية؟',
          a: 'تطوير الأعمال يركّز على بناء النمو الداخلي: الاستراتيجية، العمليات، والنماذج التشغيلية. الاستشارات الاستثمارية تركز على تقييم الفرص وجذب رأس المال والتوسع الخارجي.',
        },
        {
          q: 'هل يمكن دمج التحول المؤسسي مع تحسين العمليات؟',
          a: 'نعم، نصمّم مسارًا متكاملًا يجمع بين إعادة الهيكلة، تحسين العمليات، ومؤشرات الأداء لضمان تنفيذ مستدام وليس مجرد توصيات نظرية.',
        },
      ],
    },
    en: {
      outcome:
        'You gain a clear growth strategy and actionable business model, with operational tools and KPIs that support confident, measurable expansion.',
      audience: [
        'Startups',
        'Mid-size companies',
        'Executive leadership',
        'Companies seeking expansion',
        'Entities undergoing restructuring',
      ],
      faq: [
        {
          q: 'Do you deliver full feasibility studies?',
          a: 'Yes. We prepare feasibility studies and business plans grounded in market data, costs, and expected returns — aligned with financing requirements when needed.',
        },
        {
          q: 'How does business development differ from investment consulting?',
          a: 'Business development focuses on internal growth: strategy, operations, and operating models. Investment consulting focuses on opportunity assessment, capital attraction, and external expansion.',
        },
        {
          q: 'Can institutional transformation be combined with process improvement?',
          a: 'Yes. We design an integrated path combining restructuring, process improvement, and KPIs to ensure sustainable execution — not just theoretical recommendations.',
        },
      ],
    },
  },

  'investment-consulting': {
    relatedSlugs: [
      'investment-formation-setup',
      'business-development',
      'financial-services',
      'foreign-investor-services',
    ],
    ar: {
      outcome:
        'تصل إلى قرارات استثمارية مبنية على بيانات، مع تحليل فرص واضح وملفات جاهزة لجذب المستثمرين ودعم التوسع المحلي والدولي.',
      audience: [
        'المستثمرون الأفراد',
        'صناديق الاستثمار',
        'الشركات الباحثة عن شراكات',
        'الشركات الراغبة في التوسع',
        'الإدارات الاستراتيجية',
      ],
      faq: [
        {
          q: 'هل تشمل الاستشارة تقييم الشركات؟',
          a: 'نعم، نقدّم تقييمات مبنية على منهجيات معترف بها، مع تحليل مالي وسوقي يدعم المفاوضات وقرارات الاستثمار أو الخروج.',
        },
        {
          q: 'ما الذي يتضمّنه ملف المستثمر؟',
          a: 'يشمل عادةً ملخصًا تنفيذيًا، نظرة على السوق، نموذجًا ماليًا، هيكل الصفقة، وخطة نمو — بصيغة جاهزة للعرض على المستثمرين أو الجهات التمويلية.',
        },
        {
          q: 'هل تغطّون التوسع الدولي؟',
          a: 'نعم، ندرس الأسواق المستهدفة ونقارن الفرص ونرسم مسار دخول يتوافق مع أهدافك الاستراتيجية والمتطلبات التنظيمية.',
        },
      ],
    },
    en: {
      outcome:
        'You reach data-driven investment decisions with clear opportunity analysis and investor-ready materials to support local and international expansion.',
      audience: [
        'Individual investors',
        'Investment funds',
        'Companies seeking partnerships',
        'Companies planning expansion',
        'Strategic leadership teams',
      ],
      faq: [
        {
          q: 'Does the advisory include company valuation?',
          a: 'Yes. We provide valuations based on recognized methodologies, with financial and market analysis to support negotiations and investment or exit decisions.',
        },
        {
          q: 'What does an investor materials package include?',
          a: 'Typically an executive summary, market overview, financial model, deal structure, and growth plan — formatted for investors or financing institutions.',
        },
        {
          q: 'Do you cover international expansion?',
          a: 'Yes. We assess target markets, compare opportunities, and map an entry path aligned with your strategic goals and regulatory requirements.',
        },
      ],
    },
  },

  'legal-admin-services': {
    relatedSlugs: [
      'investment-formation-setup',
      'financial-services',
      'operational-support',
      'business-development',
    ],
    ar: {
      outcome:
        'تحصل على إطار قانوني وإداري محكم يعزّز الحوكمة، ينظّم العلاقات التعاقدية، ويقلّل المخاطر مع حماية ملكيتك الفكرية وعلامتك التجارية.',
      audience: [
        'الشركات القائمة',
        'الشركات الناشئة',
        'الشركاء والمستثمرون',
        'مجالس الإدارة',
        'الشركات متعددة الجنسيات',
      ],
      faq: [
        {
          q: 'هل تقدّمون صياغة عقود الشراكة والمساهمة؟',
          a: 'نعم، نصيغ ونراجع اتفاقيات الشراكة وعقود المساهمة بما يحمي حقوق الأطراف ويتوافق مع الأنظمة السعودية ومتطلبات الجهات ذات العلاقة.',
        },
        {
          q: 'ما دور خدمات الأمانة العامة للشركات؟',
          a: 'تشمل متابعة الالتزامات النظامية، محاضر الجمعيات، السجلات الرسمية، والتواصل مع الجهات التنظيمية — لضمان استمرارية الامتثال دون إرهاق الإدارة.',
        },
        {
          q: 'هل تساعدون في تسجيل العلامات التجارية؟',
          a: 'نعم، نقدّم دعمًا في حماية الملكية الفكرية وتسجيل العلامات التجارية ومتابعة الإجراءات لدى الجهات المختصة.',
        },
      ],
    },
    en: {
      outcome:
        'You gain a solid legal and administrative framework that strengthens governance, structures contractual relationships, reduces risk, and protects your IP and brand.',
      audience: [
        'Established companies',
        'Startups',
        'Partners and investors',
        'Boards of directors',
        'Multinational companies',
      ],
      faq: [
        {
          q: 'Do you draft partnership and shareholder agreements?',
          a: 'Yes. We draft and review partnership and shareholder agreements that protect all parties and comply with Saudi regulations and relevant authority requirements.',
        },
        {
          q: 'What do corporate secretarial services cover?',
          a: 'Regulatory compliance tracking, board and shareholder minutes, official records, and liaison with regulators — ensuring ongoing compliance without burdening management.',
        },
        {
          q: 'Do you assist with trademark registration?',
          a: 'Yes. We support IP protection, trademark registration, and follow-up with the relevant authorities.',
        },
      ],
    },
  },

  'financial-services': {
    relatedSlugs: [
      'investment-consulting',
      'legal-admin-services',
      'business-development',
      'investment-formation-setup',
    ],
    ar: {
      outcome:
        'تحصل على وضوح مالي أعلى عبر قوائم ونماذج وموازنات موثوقة، مع دعم محاسبي وضريبي يساعدك على التخطيط واتخاذ قرارات نمو أدق.',
      audience: [
        'الشركات الصغيرة والمتوسطة',
        'الشركات الناشئة',
        'الإدارة المالية',
        'المستثمرون',
        'الشركات التي تستعد للتمويل',
      ],
      faq: [
        {
          q: 'هل تقدّمون خدمات الزكاة والضريبة؟',
          a: 'نعم، نساعد في الإقرارات والامتثال لمتطلبات هيئة الزكاة والضريبة والجمارك، مع مراجعة دورية لتقليل المخاطر والغرامات.',
        },
        {
          q: 'ما الفرق بين النمذجة المالية وإعداد الموازنات؟',
          a: 'النمذجة المالية تبني سيناريوهات وتوقعات طويلة المدى. الموازنة تركّز على خطة الإنفاق والإيرادات للفترة القادمة — وكلاهما يكمّل الآخر.',
        },
        {
          q: 'هل تقييم المشاريع مناسب لجذب التمويل؟',
          a: 'نعم، نعدّ تقييمات وملفات مالية تدعم عروض التمويل والمفاوضات مع البنوك والمستثمرين، مع توضيح العائد والمخاطر.',
        },
      ],
    },
    en: {
      outcome:
        'You gain greater financial clarity through reliable statements, models, and budgets — plus accounting and tax support for sharper planning and growth decisions.',
      audience: [
        'Small and mid-size companies',
        'Startups',
        'Finance teams',
        'Investors',
        'Companies preparing for funding',
      ],
      faq: [
        {
          q: 'Do you provide Zakat and tax services?',
          a: 'Yes. We support filings and compliance with ZATCA requirements, with periodic review to reduce risk and penalties.',
        },
        {
          q: 'What is the difference between financial modeling and budgeting?',
          a: 'Financial modeling builds long-term scenarios and projections. Budgeting focuses on the upcoming period’s revenue and spend plan — both complement each other.',
        },
        {
          q: 'Is project valuation suitable for securing funding?',
          a: 'Yes. We prepare valuations and financial materials that support funding applications and negotiations with banks and investors, with clear return and risk profiles.',
        },
      ],
    },
  },

  'foreign-investor-services': {
    relatedSlugs: [
      'investment-formation-setup',
      'legal-admin-services',
      'financial-services',
      'operational-support',
    ],
    ar: {
      outcome:
        'يدخل المستثمر الأجنبي السوق السعودي بمسار منظّم يغطّي التأسيس والترخيص والإقامات والحسابات البنكية حتى جاهزية بدء التشغيل.',
      audience: [
        'المستثمرون الأجانب',
        'الشركات الدولية',
        'الشركات العائلية',
        'المستثمرون التنفيذيون',
        'الشركات الراغبة في فتح فرع',
      ],
      faq: [
        {
          q: 'هل تساعدون في إصدار إقامات وتأشيرات للمستثمرين؟',
          a: 'نعم، ننسّق إجراءات الإقامات والتأشيرات للمستثمرين والكوادر الأساسية وفق الأنظمة المعمول بها، مع متابعة حتى الإصدار.',
        },
        {
          q: 'ما دوركم في فتح الحسابات البنكية؟',
          a: 'نرافقك في تجهيز المتطلبات والتواصل مع البنوك، ونساعد على تسريع الإجراءات بما يتوافق مع سياسات كل بنك ومتطلبات هيئة السوق المالية.',
        },
        {
          q: 'هل تقدّمون دعمًا للمستثمرين التنفيذيين؟',
          a: 'نعم، نوفّر خدمات مخصصة للمستثمرين التنفيذيين تشمل التنسيق مع الجهات، المتابعة الإدارية، والدعم اللوجستي لضمان انطلاقة سلسة.',
        },
      ],
    },
    en: {
      outcome:
        'Foreign investors enter the Saudi market through an organized path covering formation, licensing, residencies, banking, and readiness to begin operations.',
      audience: [
        'Foreign investors',
        'International companies',
        'Family-owned businesses',
        'Executive investors',
        'Companies opening a branch',
      ],
      faq: [
        {
          q: 'Do you assist with investor residencies and visas?',
          a: 'Yes. We coordinate residency and visa procedures for investors and key personnel under applicable regulations, with follow-up through issuance.',
        },
        {
          q: 'What is your role in opening bank accounts?',
          a: 'We support document preparation and bank liaison to help streamline procedures in line with each bank’s policies and Capital Market Authority requirements.',
        },
        {
          q: 'Do you offer executive investor support?',
          a: 'Yes. We provide tailored executive investor services including authority coordination, administrative follow-up, and logistical support for a smooth launch.',
        },
      ],
    },
  },

  'digital-transformation': {
    relatedSlugs: [
      'marketing-branding',
      'business-development',
      'operational-support',
      'financial-services',
    ],
    ar: {
      outcome:
        'تُرفع كفاءة مؤسستك عبر أنظمة متكاملة وأتمتة وحلول ذكاء اصطناعي آمنة، مع جاهزية رقمية أعلى تدعم النمو والتوسع.',
      audience: [
        'الشركات المتوسطة والكبيرة',
        'الشركات الناشئة التقنية',
        'الإدارة التنفيذية',
        'قطاعات الخدمات والتجارة',
        'الشركات الراغبة في الأتمتة',
      ],
      faq: [
        {
          q: 'هل تقدّمون تنفيذ أنظمة ERP وCRM؟',
          a: 'نعم، نساعد في اختيار النظام المناسب، التخطيط للتنفيذ، التخصيص، والتدريب — بما يتوافق مع عملياتك الحالية وأهدافك المستقبلية.',
        },
        {
          q: 'كيف تدمجون الذكاء الاصطناعي في العمليات؟',
          a: 'نحدّد حالات استخدام عملية — مثل خدمة العملاء، التحليل، أو الأتمتة — ونبني حلولًا قابلة للتوسع مع مراعاة الأمان والامتثال.',
        },
        {
          q: 'هل تشمل الخدمة الأمن السيبراني؟',
          a: 'نعم، ندمج اعتبارات الأمن السيبراني في التحول الرقمي، من تقييم المخاطر إلى أفضل الممارسات لحماية البيانات والأنظمة.',
        },
      ],
    },
    en: {
      outcome:
        'Your organization gains efficiency through integrated systems, automation, and secure AI solutions — with stronger digital readiness for growth and expansion.',
      audience: [
        'Mid-size and large companies',
        'Tech startups',
        'Executive leadership',
        'Services and retail sectors',
        'Companies seeking automation',
      ],
      faq: [
        {
          q: 'Do you implement ERP and CRM systems?',
          a: 'Yes. We help select the right system, plan implementation, customize, and train — aligned with your current operations and future goals.',
        },
        {
          q: 'How do you integrate AI into operations?',
          a: 'We identify practical use cases — such as customer service, analytics, or automation — and build scalable solutions with security and compliance in mind.',
        },
        {
          q: 'Does the service include cybersecurity?',
          a: 'Yes. We embed cybersecurity considerations in digital transformation, from risk assessment to best practices for protecting data and systems.',
        },
      ],
    },
  },

  'marketing-branding': {
    relatedSlugs: [
      'digital-transformation',
      'business-development',
      'conferences-exhibitions',
      'operational-support',
    ],
    ar: {
      outcome:
        'تبني حضورًا تسويقيًا متسقًا وهوية تجارية قوية تعزّز الثقة، وتحوّل الاهتمام إلى عملاء وشراكات مستدامة.',
      audience: [
        'الشركات الناشئة',
        'العلامات الراغبة في إعادة التموضع',
        'قطاعات B2B وB2C',
        'الشركات قبل دخول السوق',
        'فرق التسويق والنمو',
      ],
      faq: [
        {
          q: 'هل تبنون الهوية التجارية من الصفر؟',
          a: 'نعم، نطوّر الهوية البصرية واللفظية والرسائل الأساسية، مع دليل استخدام يضمن اتساق العلامة عبر جميع نقاط التواصل.',
        },
        {
          q: 'ما الذي يشمله التسويق الرقمي لديكم؟',
          a: 'يشمل استراتيجية القنوات، المحتوى، الإعلانات المدفوعة، وتحليل الأداء — مع ربط الحملات بأهداف النمو والتحويل.',
        },
        {
          q: 'هل تقدّمون إدارة العلاقات العامة؟',
          a: 'نعم، نساعد في بناء حضور إعلامي، إدارة السمعة، والتواصل مع stakeholders بما يعكس صورة مؤسستك باحترافية.',
        },
      ],
    },
    en: {
      outcome:
        'You build a consistent marketing presence and strong brand identity that earns trust and turns attention into customers and lasting partnerships.',
      audience: [
        'Startups',
        'Brands seeking repositioning',
        'B2B and B2C sectors',
        'Companies entering the market',
        'Marketing and growth teams',
      ],
      faq: [
        {
          q: 'Do you build brand identity from scratch?',
          a: 'Yes. We develop visual and verbal identity and core messaging, with usage guidelines to ensure brand consistency across all touchpoints.',
        },
        {
          q: 'What does your digital marketing include?',
          a: 'Channel strategy, content, paid advertising, and performance analytics — with campaigns tied to growth and conversion goals.',
        },
        {
          q: 'Do you provide public relations management?',
          a: 'Yes. We support media presence, reputation management, and stakeholder communication that reflects your organization professionally.',
        },
      ],
    },
  },

  'conferences-exhibitions': {
    relatedSlugs: [
      'marketing-branding',
      'operational-support',
      'business-development',
      'foreign-investor-services',
    ],
    ar: {
      outcome:
        'تُنفّذ فعالياتك بمعايير احترافية تعكس مكانة علامتك، وتفتح فرص تواصل وشراكة حقيقية مع حضور منظّم من البداية حتى الإغلاق.',
      audience: [
        'الشركات والمؤسسات',
        'الجهات الحكومية',
        'الغرف التجارية',
        'العلامات الراغبة في التوسع',
        'منظّمو الفعاليات والمعارض',
      ],
      faq: [
        {
          q: 'هل تديرون المعارض من التخطيط حتى التنفيذ؟',
          a: 'نعم، نغطّي التخطيط، التنسيق مع الجهات، تصميم الأجنحة، اللوجستيات، والتشغيل الميداني — مع متابعة لحظية لضمان سير الفعالية.',
        },
        {
          q: 'هل تقدّمون خدمات البروتوكول والاستقبال؟',
          a: 'نعم، نوفّر فريق بروتوكول واستقبال مدربًا لإدارة كبار الضيوف والوفود وفق أعلى معايير الاحتراف.',
        },
        {
          q: 'هل يمكن دمج الفعالية مع استراتيجية تسويقية؟',
          a: 'نعم، ننسّق مع فرق التسويق لضمان أن الفعالية تخدم أهداف العلامة وتولّد leads وشراكات قابلة للمتابعة بعد الحدث.',
        },
      ],
    },
    en: {
      outcome:
        'Your events are delivered to professional standards that reflect your brand stature and open real networking and partnership opportunities — organized from start to close.',
      audience: [
        'Companies and institutions',
        'Government entities',
        'Chambers of commerce',
        'Brands seeking expansion',
        'Event and exhibition organizers',
      ],
      faq: [
        {
          q: 'Do you manage exhibitions from planning through execution?',
          a: 'Yes. We cover planning, authority coordination, booth design, logistics, and on-site operations — with real-time follow-up to keep the event on track.',
        },
        {
          q: 'Do you provide protocol and reception services?',
          a: 'Yes. We provide trained protocol and reception teams to manage VIP guests and delegations to a high professional standard.',
        },
        {
          q: 'Can the event be aligned with a marketing strategy?',
          a: 'Yes. We coordinate with marketing teams so the event serves brand goals and generates leads and partnerships that can be followed up after the event.',
        },
      ],
    },
  },

  'operational-support': {
    relatedSlugs: [
      'legal-admin-services',
      'financial-services',
      'business-development',
      'investment-formation-setup',
    ],
    ar: {
      outcome:
        'تحصل على تشغيل يومي سلس يغطّي الموارد البشرية والمشتريات وإدارة المشاريع، لتتفرّغ قيادتك للنمو الأساسي دون اختناقات تشغيلية.',
      audience: [
        'الشركات الناشئة',
        'الشركات المتوسطة',
        'الشركات بعد التأسيس',
        'الإدارة التنفيذية',
        'الشركات الراغبة في التعهيد',
      ],
      faq: [
        {
          q: 'هل تشمل الخدمة التوظيف وإعداد السياسات؟',
          a: 'نعم، نساعد في التوظيف، إعداد سياسات وإجراءات HR، وضبط العمليات لتتوافق مع أنظمة العمل السعودية.',
        },
        {
          q: 'ما الذي تغطّيه إدارة المشتريات؟',
          a: 'تشمل تحديد الموردين، طلبات الشراء، المتابعة، والتفاوض — بما يقلّل التكاليف ويرفع كفاءة سلسلة التوريد.',
        },
        {
          q: 'هل يمكن التعهيد لمهام محددة فقط؟',
          a: 'نعم، نصمّم نماذج تعهيد مرنة — جزئية أو شاملة — حسب احتياجك ومرحلة نمو شركتك.',
        },
      ],
    },
    en: {
      outcome:
        'You gain smooth day-to-day operations covering HR, procurement, and project management — freeing leadership to focus on core growth without operational bottlenecks.',
      audience: [
        'Startups',
        'Mid-size companies',
        'Post-formation companies',
        'Executive leadership',
        'Companies seeking outsourcing',
      ],
      faq: [
        {
          q: 'Does the service include recruitment and policy setup?',
          a: 'Yes. We support recruitment, HR policies and procedures, and process setup aligned with Saudi labor regulations.',
        },
        {
          q: 'What does procurement management cover?',
          a: 'Vendor selection, purchase requests, follow-up, and negotiation — reducing costs and improving supply chain efficiency.',
        },
        {
          q: 'Can outsourcing cover specific tasks only?',
          a: 'Yes. We design flexible outsourcing models — partial or comprehensive — based on your needs and company growth stage.',
        },
      ],
    },
  },
}

export function getServiceDetailsExtras(slug, lang = 'ar') {
  const entry = serviceDetailsBySlug[slug]
  if (!entry) return null
  const locale = lang.startsWith('en') ? 'en' : 'ar'
  return {
    relatedSlugs: entry.relatedSlugs,
    outcome: entry[locale].outcome,
    audience: entry[locale].audience,
    faq: entry[locale].faq,
    process: defaultProcess[locale],
    deliverables: defaultDeliverables[locale],
  }
}
