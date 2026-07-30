export const personalInfo = {
  name: "Emanuel Millán Hernández",
  title: "Full Stack Developer | Laravel • React • Vue.js • MySQL • PostgreSQL",
  subtitle: "Desarrollador Full Stack apasionado por construir soluciones web escalables con PHP (Laravel), React, Vue.js y bases de datos relacionales.",
  bio: "Desarrollador web con más de 3 años de experiencia creando soluciones escalables y robustas usando PHP, Laravel, Vue.js y React. Apasionado por la innovación tecnológica, con amplio dominio en bases de datos relacionales (PostgreSQL y MySQL), control de versiones con Git y metodologías ágiles como Scrum. Busco contribuir en equipos dinámicos enfocados en el desarrollo de software de alto impacto.",
  location: "Yumbo, Valle del Cauca, Colombia",
  email: "emanuelmillan455@gmail.com",
  github: "https://github.com/EmanuelM1999",
  linkedin: "https://www.linkedin.com/in/emanuel-mill%C3%A1n-hern%C3%A1ndez-189a52207",
  cvUrl: "#",
  availableForWork: true,
  roles: [
    "Full Stack Developer",
    "Backend Specialist (PHP / Laravel)",
    "Frontend Specialist (React / Vue.js)",
    "Database Specialist (MySQL / PostgreSQL)"
  ],
  stats: [
    { label: "Años de Experiencia", value: "+4" },
    { label: "Bases de Datos", value: "MySQL / Postgres" },
    { label: "Metodologías Ágiles", value: "Scrum" }
  ]
};

export const skillsData = [
  {
    category: "Backend",
    description: "Desarrollo de servicios robustos, APIs RESTful escalables y arquitectura backend con PHP y Laravel.",
    skills: [
      { name: "PHP", icon: "Server" },
      { name: "Laravel Framework", icon: "Terminal" },
      { name: "APIs RESTful", icon: "Network" },
      { name: "Autenticación & JWT", icon: "ShieldCheck" },
      { name: "Arquitectura MVC & Microservicios", icon: "Cpu" }
    ]
  },
  {
    category: "Frontend",
    description: "Creación de interfaces reactivas, componentes interactivos y soluciones dinámicas en React y Vue.js.",
    skills: [
      { name: "React.js", icon: "Code2" },
      { name: "Vue.js", icon: "Globe" },
      { name: "JavaScript (ES6+)", icon: "Braces" },
      { name: "HTML5 / CSS3 / Tailwind", icon: "Palette" },
    ]
  },
  {
    category: "Bases de Datos",
    description: "Diseño, modelado y optimización de consultas en motores relacionales de alto rendimiento.",
    skills: [
      { name: "MySQL", icon: "Database" },
      { name: "PostgreSQL", icon: "DatabaseBackup" },
      { name: "Eloquent ORM", icon: "Table" }
    ]
  },
  {
    category: "Herramientas & Educación",
    description: "Prácticas de control de versiones, trabajo colaborativo en metodologías ágiles y formación académica.",
    skills: [
      { name: "Git & GitHub", icon: "GitBranch" },
      { name: "Metodología Scrum", icon: "Workflow" },
    ]
  }
];

export const experienceData = [
  {
    role: "Desarrollador Backend y Frontend",
    company: "GOWTIC S.A.S",
    period: "Diciembre 2022 - Julio 2026",
    type: "3 años 7 meses",
    description: "Liderazgo en el desarrollo y mantenimiento de aplicaciones web avanzadas para clientes nacionales e internacionales, construyendo soluciones personalizadas de punta a punta.",
    achievements: [
      "Diseño y desarrollo de plataformas web utilizando PHP, Laravel, Vue.js y React para clientes internacionales.",
      "Integración de APIs RESTful de alto tráfico con arquitecturas limpias y seguras.",
      "Modelado y optimización de bases de datos relacionales MySQL para garantizar tiempos de respuesta reducidos."
    ],
    tags: ["PHP", "Laravel", "Vue.js", "React", "MySQL", "APIs RESTful", "Git"]
  },
  {
    role: "Programador Junior",
    company: "DIME Clínica Neurocardiovascular S.A.S",
    period: "Abril 2022 - Diciembre 2022",
    type: "9 meses (Cali, Colombia)",
    description: "Desarrollo de módulos web hospitalarios enfocados en la gestión crítica de historias clínicas y soporte técnico del sistema médico.",
    achievements: [
      "Desarrollo y mantenimiento continuo de módulos web para la gestión eficiente de historias clínicas.",
      "Optimización de funcionalidades existentes reduciendo tiempos de consulta en el flujo de atención médica.",
      "Implementación de estándares de seguridad y privacidad en la manipulación de datos de pacientes."
    ],
    tags: ["PHP", "JavaScript", "PostgreSQL", "Módulos Web", "Historias Clínicas"]
  },
  {
    role: "Desarrollador Junior",
    company: "Tu Cuota S.A.S",
    period: "Septiembre 2021 - Diciembre 2021",
    type: "4 meses (Yumbo, Colombia)",
    description: "Soporte técnico y desarrollo de herramientas de software orientadas al sector crediticio y financiero.",
    achievements: [
      "Soporte y desarrollo de plataformas web orientadas a la evaluación y otorgamiento de crédito.",
      "Participación activa en la automatización y mejora de procesos digitales internos de la compañía."
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Fintech", "Crédito Digital"]
  }
];

export const educationData = [
  {
    title: "Tecnólogo en Sistemas de la Información",
    institution: "Universidad del Valle (CO)",
    period: "Enero 2017 - Enero 2020",
    description: "Formación sólida en ingeniería de software, bases de datos relacionales, estructuras de datos y desarrollo de sistemas informáticos."
  }
];

export const projectsData = [
  /*
   {
     id: 1,
     title: "Gowtic SaaS Client Management Portal",
     category: "Fullstack",
     featured: true,
     shortDescription: "Plataforma empresarial de gestión de clientes y servicios internacionales con backend en Laravel y frontend reactivo en Vue.js.",
     fullDescription: "Sistema web desarrollado para centralizar operaciones de clientes internacionales. Incluye panel de control interactivo en Vue.js, consumo de APIs RESTful en Laravel, generación automática de reportes y gestión optimizada en bases de datos MySQL.",
     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
     tags: ["PHP", "Laravel", "Vue.js", "MySQL", "Tailwind CSS", "APIs RESTful"],
     demoUrl: "https://github.com/emanuelmillan",
     githubUrl: "https://github.com/emanuelmillan",
     highlights: [
       "Arquitectura limpia MVC desacoplada con APIs RESTful en Laravel.",
       "Panel de administración interactivo construido con Vue.js y Tailwind CSS.",
       "Manejo seguro de roles de usuario y permisos granulares.",
       "Optimización de consultas SQL complejas en MySQL."
     ]
   },
   {
     id: 2,
     title: "MedPulse Clinica - Gestión de Historias Clínicas",
     category: "Fullstack",
     featured: true,
     shortDescription: "Módulo web para la gestión de registros médicos, consulta de historias clínicas y agendamiento clínico en tiempo real.",
     fullDescription: "Sistema diseñado para clínicas e instituciones de salud enfocado en la administración ágil y segura de historias clínicas de pacientes. Implementa autenticación robusta, diseño responsivo en React y base de datos relacional PostgreSQL.",
     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
     tags: ["React", "PHP / Laravel", "PostgreSQL", "JavaScript ES6+", "Tailwind CSS"],
     demoUrl: "https://github.com/emanuelmillan",
     githubUrl: "https://github.com/emanuelmillan",
     highlights: [
       "Modelado de datos en PostgreSQL cumpliendo normativas de confidencialidad médica.",
       "Interfaz ultra rápida en React para consulta inmediata de antecedentes del paciente.",
       "Búsqueda con autocompletado e historial de atenciones médicas.",
       "Exportación instantánea de historiales en formato PDF."
     ]
   },
   {
     id: 3,
     title: "TuCuota Credit Engine - Portal Financiero",
     category: "Backend",
     featured: true,
     shortDescription: "Plataforma de evaluación y solicitud de créditos en línea con motor de reglas y panel de análisis de riesgo.",
     fullDescription: "Aplicación orientada a empresas de crédito que automatiza la radicación de solicitudes, cálculo de cuotas y seguimiento de pagos. Desarrollado con PHP Laravel en el servidor y MySQL.",
     image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
     tags: ["PHP", "Laravel", "MySQL", "APIs RESTful", "Git", "Scrum"],
     demoUrl: "https://github.com/emanuelmillan",
     githubUrl: "https://github.com/emanuelmillan",
     highlights: [
       "Motor de cálculo de tasas e intereses configurable.",
       "Notificaciones por correo y validaciones de datos en tiempo real.",
       "Integración de pasarela de pagos y reportes de amortización.",
       "Desarrollado bajo metodología ágil Scrum."
     ]
   },
   {
     id: 4,
     title: "EcoDrive Logistics & Dispatch Hub",
     category: "Frontend",
     featured: false,
     shortDescription: "Panel de control para seguimiento de flotas y envíos internacionales en tiempo real con Vue.js y Tailwind CSS.",
     fullDescription: "Dashboard para operadores logísticos que permite visualizar el estado de despachos, asignación de vehículos y reportes de entregas en clientes de transporte.",
     image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
     tags: ["Vue.js", "JavaScript", "CSS3", "Pinia", "REST APIs"],
     demoUrl: "https://github.com/emanuelmillan",
     githubUrl: "https://github.com/emanuelmillan",
     highlights: [
       "Filtrado instantáneo por estado de envío, origen y destino.",
       "Gráficos dinámicos de rendimiento de entregas por mes.",
       "Diseño adaptable 100% responsivo para tabletas y móviles."
     ]
   }
  */
];
