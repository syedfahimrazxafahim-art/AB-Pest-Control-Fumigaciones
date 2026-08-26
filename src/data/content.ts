import { PestService, Testimonial, ServiceArea, BeforeAfterCase } from '../types';

export const BUSINESS_INFO = {
  name: 'AB Pest-Control Fumigaciones',
  legalName: 'AB Pest Control & Fumigation Services DFW',
  tagline: {
    es: '¡Acabamos con las plagas por completo! 100% Efectividad Garantizada.',
    en: 'Pest Problem? We Handle It. 100% Guaranteed Results in Dallas-Fort Worth.'
  },
  headline: {
    es: 'PEST PROBLEM? WE HANDLE IT.',
    en: 'PEST PROBLEM? WE HANDLE IT.'
  },
  subheadline: {
    es: 'Expertos en solución total y poder extremo en cada aplicación. Servicio profesional de control de plagas y fumigaciones de alto poder en Dallas, Texas y todo el área DFW.',
    en: 'Professional residential & commercial extermination and high-potency fumigation across Dallas, Texas and the entire DFW Metroplex. Safe, licensed, and rapid response.'
  },
  location: 'Dallas, Texas (DFW Metroplex)',
  phonePrimary: '1 (214) 668-8338',
  phonePrimaryRaw: '12146688338',
  phoneSecondary: '1 (214) 686-1838',
  phoneSecondaryRaw: '12146861838',
  phoneAlternate: '1 (929) 527-2919',
  phoneAlternateRaw: '19295272919',
  whatsappUrl: 'https://wa.me/12146688338?text=Hola%20AB%20Pest%20Control,%20necesito%20una%20inspecci%C3%B3n%20gratuita%20para%20mi%20propiedad.',
  facebookUrl: 'https://www.facebook.com/david.bazan.1023',
  instagramUrl: 'https://www.instagram.com/abpestcontroldfw/',
  hours: {
    es: 'Lunes a Domingo: 24/7 Emergencias & Citas Rápidas',
    en: 'Mon - Sun: 24/7 Emergency Dispatch & Rapid Appointments'
  },
  license: 'Licensed & Insured Structural Pest Control Technicians — Texas Dept. of Agriculture & EPA Compliant'
};

export const SERVICES_DATA: PestService[] = [
  {
    id: 'termites',
    name: { es: 'Termitas & Daños Estructurales', en: 'Termite Extermination & Barrier' },
    tagline: { es: 'Las termitas trabajan 24/7 aunque tú no las veas', en: 'Termites work 24/7 even when you cannot see them' },
    icon: '🪵',
    severity: 'critical',
    featured: true,
    shortDesc: {
      es: 'Protege tu casa antes de que el daño en vigas, pisos y molduras sea visible, molesto y costoso. Inspección gratis.',
      en: 'Protect your home before structural wood damage becomes visible, hazardous, and expensive. Free inspection included.'
    },
    fullDesc: {
      es: 'Nuestro tratamiento integral para termitas subterráneas y de madera seca ataca el nido principal mediante barreras químicas perimetrales avanzadas, inyección en puntos críticos y cebos no invasivos.',
      en: 'Our comprehensive subterranean and drywood termite treatment eliminates colonies using advanced perimeter barriers, localized wood penetration injections, and precision baiting systems.'
    },
    signs: {
      es: ['Túneles de barro en cimientos', 'Alas desprendidas en ventanas', 'Madera hueca o hinchada', 'Aserrín fino cerca de zoclos'],
      en: ['Mud tubes along foundation', 'Discarded swarmer wings', 'Hollow sounding wood beams', 'Frass (wood powder) on baseboards']
    },
    threats: {
      es: ['Destrucción estructural severa', 'Desvalorización inmediata del inmueble', 'Riesgo de colapso en techos y marcos'],
      en: ['Severe structural framework decay', 'Thousands in repair expenses', 'Compromised ceiling and wall integrity']
    },
    method: {
      es: ['1. Inspección termográfica de muros y cimientos', '2. Aplicación de termiticida no repelente de acción residual', '3. Sellado preventivo y garantía extendida'],
      en: ['1. Thermal & moisture wall inspection', '2. Non-repellent perimeter barrier treatment', '3. Exclusion sealing with extended warranty']
    },
    duration: '2 - 4 horas',
    warranty: '100% Garantía de 1 a 3 Años',
    startingPrice: '$199'
  },
  {
    id: 'cockroaches',
    name: { es: 'Cucarachas (Alemana y Americana)', en: 'Cockroach Total Eradication' },
    tagline: { es: 'Eliminación total desde el nido con geles y micro-nebulización', en: 'Complete nest destruction with targeted micro-gels' },
    icon: '🪳',
    severity: 'high',
    featured: true,
    shortDesc: {
      es: 'Acabamos con infestaciones de cucarachas en cocinas, baños, electrodomésticos y restaurantes.',
      en: 'We eliminate deep cockroach harborages in kitchens, appliances, cabinets, and commercial spaces.'
    },
    fullDesc: {
      es: 'Utilizamos combinaciones de reguladores de crecimiento de insectos (IGR), cebos en gel de alta palatabilidad y microencapsulados que las cucarachas llevan al nido para un efecto dominó total.',
      en: 'We combine insect growth regulators (IGR), high-attractant micro-gel baits, and residual perimeter treatments that trigger a complete domino effect throughout the colony.'
    },
    signs: {
      es: ['Puntos negros tipo pimienta en gavetas', 'Olor aceitoso desagradable', 'Avistamientos nocturnos en cocina'],
      en: ['Pepper-like droppings in cabinets', 'Musty, oily odor', 'Nocturnal sightings around sinks and stoves']
    },
    threats: {
      es: ['Transmisión de Salmonella y E. coli', 'Alergias y asma en niños', 'Clausura de negocios de comida'],
      en: ['Transmission of Salmonella & E. coli', 'Allergens triggering asthma', 'Health code violations in restaurants']
    },
    method: {
      es: ['1. Limpieza profunda y aplicación de gel', '2. Nebulización en grietas y huecos', '3. Instalación de trampas de monitoreo'],
      en: ['1. Deep cabinet inspection & gel baiting', '2. Crack and crevice flush-out treatment', '3. Placement of insect monitoring stations']
    },
    duration: '1 - 2 horas',
    warranty: 'Garantía 100% Efectividad',
    startingPrice: '$129'
  },
  {
    id: 'rodents',
    name: { es: 'Roedores (Ratas & Ratones)', en: 'Rodent Control & Attic Exclusion' },
    tagline: { es: 'Captura, eliminación y sellado de puntos de entrada al ático', en: 'Trapping, removal, and complete entry-point exclusion' },
    icon: '🐀',
    severity: 'critical',
    featured: true,
    shortDesc: {
      es: 'Detén ruidos en el ático, cables mordidos y contaminación de heces. Sellamos cada grieta.',
      en: 'Stop attic noises, chewed electrical wires, and droppings. We trap and seal every entry point.'
    },
    fullDesc: {
      es: 'Servicio integral de desratización que incluye exclusión estructural (sellado con malla de acero de aberturas de más de 1/4 pulgada), trampeo seguro y sanitización del ático.',
      en: 'Comprehensive rodent service including structural exclusion (steel mesh sealing of gaps >1/4"), safe tamper-proof trapping, and attic decontamination.'
    },
    signs: {
      es: ['Ruidos de rasguños de noche en el ático', 'Excrementos cilíndricos oscuros', 'Cables y mangueras roídas'],
      en: ['Nighttime scratching in ceilings/attics', 'Dark pellet droppings', 'Gnawed wires and insulation damage']
    },
    threats: {
      es: ['Riesgo de incendios por cables mordidos', 'Hantavirus y leptospirosis', 'Destrucción de aislamiento térmico'],
      en: ['Electrical fire hazards from chewed wires', 'Hantavirus and dangerous pathogens', 'Ruined attic thermal insulation']
    },
    method: {
      es: ['1. Inspección de tejado, ático y cimientos', '2. Sellado hermético de accesos', '3. Trampeo continuo y desinfección'],
      en: ['1. Roofline, crawlspace & attic audit', '2. Steel mesh physical exclusion', '3. Multi-point trapping & sanitization']
    },
    duration: '2 - 3 horas',
    warranty: 'Garantía con Sellado Completo',
    startingPrice: '$175'
  },
  {
    id: 'bedbugs',
    name: { es: 'Chinches de Cama (Bed Bugs)', en: 'Bed Bug Eradication' },
    tagline: { es: 'Recupera el sueño sin picaduras con tratamiento térmico y residual', en: 'Sleep peacefully without bites through targeted multi-stage treatment' },
    icon: '🛏️',
    severity: 'high',
    featured: true,
    shortDesc: {
      es: 'Eliminamos chinches y sus huevos en colchones, cabeceras, zoclos y muebles con máxima potencia.',
      en: 'We eliminate adult bed bugs and their eggs from mattresses, headboards, sofas, and baseboards.'
    },
    fullDesc: {
      es: 'Tratamiento intensivo de choque en dos fases que penetra las costuras de colchones, bastidores de cama y tomas eléctricas para eliminar chinches adultas, ninfas y huevecillos.',
      en: 'Two-phase intensive knockdown treatment penetrating mattress seams, bed frames, electrical outlets, and furniture to eradicate adults, nymphs, and eggs.'
    },
    signs: {
      es: ['Picaduras lineales en brazos y cuello', 'Manchas de sangre diminutas en sábanas', 'Puntos negros en costuras del colchón'],
      en: ['Linear clusters of itchy red bites', 'Tiny rusty blood spots on sheets', 'Fecal speckling in mattress crevices']
    },
    threats: {
      es: ['Pérdida de sueño y ansiedad severa', 'Reacciones alérgicas en la piel', 'Propagación rápida a toda la casa'],
      en: ['Severe sleep deprivation and stress', 'Secondary skin infections from scratching', 'Rapid spread room-to-room']
    },
    method: {
      es: ['1. Inspección minuciosa con luz ultravioleta', '2. Aplicación de vapor y residuales avanzados', '3. Tratamiento de zoclos y enchufes'],
      en: ['1. High-detail UV & crevice inspection', '2. Targeted steam & residual insecticide', '3. Baseboard & outlet dust barrier']
    },
    duration: '2 - 4 horas',
    warranty: 'Garantía de Satisfacción 100%',
    startingPrice: '$220'
  },
  {
    id: 'ants',
    name: { es: 'Hormigas & Hormigas de Fuego', en: 'Ant & Fire Ant Defense' },
    tagline: { es: 'Eliminación del hormiguero central y barrera perimetral', en: 'Total queen colony elimination and exterior yard barrier' },
    icon: '🐜',
    severity: 'moderate',
    featured: false,
    shortDesc: {
      es: 'Control definitivo de hormigas carpinteras, hormigas de fuego en el césped y hormigas en cocina.',
      en: 'Definitive control for carpenter ants, backyard fire ants, and persistent kitchen invaders.'
    },
    fullDesc: {
      es: 'Tratamiento perimetral exterior y cebos específicos que son transportados por las obreras hasta la reina, erradicando la colonia entera desde la raíz.',
      en: 'Perimeter exterior barrier and specialized granular baits carried directly to the queen, neutralizing the entire colony at its source.'
    },
    signs: {
      es: ['Senderos de hormigas en mesadas y ventanas', 'Montículos de tierra en el jardín', 'Picaduras dolorosas en el césped'],
      en: ['Ant trails on countertops & windows', 'Visible mounds across lawn/driveway', 'Painful stings from fire ants']
    },
    threats: {
      es: ['Picaduras dolorosas a niños y mascotas', 'Daño a plantas y raíces', 'Contaminación de alimentos'],
      en: ['Painful burning stings for kids & pets', 'Food pantry contamination', 'Carpenter ant wood tunnel damage']
    },
    method: {
      es: ['1. Localización de nidos y senderos', '2. Cebo de transferencia biológica', '3. Rociado perimetral de barrera'],
      en: ['1. Colony and foraging trail mapping', '2. Slow-acting transferable baiting', '3. Foundation perimeter spray']
    },
    duration: '1 hora',
    warranty: 'Garantía de 90 Días',
    startingPrice: '$110'
  },
  {
    id: 'spiders',
    name: { es: 'Arañas (Viuda Negra & Reclusa)', en: 'Spider Control & Web Removal' },
    tagline: { es: 'Protección contra arañas venenosas en garajes, áticos y zoclos', en: 'Targeted defense against venomous spiders in garages and living areas' },
    icon: '🕷️',
    severity: 'high',
    featured: false,
    shortDesc: {
      es: 'Deshazte de arañas peligrosas (Black Widow, Brown Recluse) y eliminamos todas las telarañas.',
      en: 'Rid your home of dangerous Black Widows and Brown Recluses with thorough de-webbing and barrier spray.'
    },
    fullDesc: {
      es: 'Inspección de rincones oscuros, garajes, aleros y sótanos, eliminación física de telarañas y sacos de huevos, más aplicación de insecticida micro-encapsulado de larga duración.',
      en: 'Detailed inspection of dark corners, garages, eaves, and attics with web brushing and long-lasting micro-encapsulated barrier application.'
    },
    signs: {
      es: ['Telarañas densas en esquinas y garaje', 'Avistamiento de arañas con marca de reloj de arena', 'Sacos de huevos en rincones'],
      en: ['Webs under eaves and garage corners', 'Spider sightings with violin or hourglass marks', 'Egg sacs in storage boxes']
    },
    threats: {
      es: ['Picaduras con veneno necrótico o neurotóxico', 'Hospitalización por picadura de viuda negra', 'Riesgo grave para mascotas'],
      en: ['Necrotic or neurotoxic venomous bites', 'Severe pain and potential hospitalization', 'Heightened danger to small pets']
    },
    method: {
      es: ['1. Desarmado de telarañas y sacos', '2. Aplicación en grietas y zoclos', '3. Barrera repelente en ventanas y puertas'],
      en: ['1. Mechanical de-webbing & egg removal', '2. Micro-encapsulated crevice spray', '3. Exterior perimeter defense']
    },
    duration: '1 - 1.5 horas',
    warranty: 'Garantía 100%',
    startingPrice: '$120'
  },
  {
    id: 'mosquitoes',
    name: { es: 'Mosquitos & Control de Patios', en: 'Mosquito Yard Fogging & Misting' },
    tagline: { es: 'Disfruta tu patio y jardín libre de picaduras y zumbidos', en: 'Reclaim your backyard and patio free from annoying bites' },
    icon: '🦟',
    severity: 'moderate',
    featured: false,
    shortDesc: {
      es: 'Nebulización térmica y tratamiento de agua estancada para reducir hasta el 95% de mosquitos.',
      en: 'Thermal backpack misting and larvicide treatments reducing mosquito populations by up to 95%.'
    },
    fullDesc: {
      es: 'Tratamiento de vegetación, arbustos y zonas sombreadas donde descansan los mosquitos de día, junto con larvicidas biológicos seguros en zonas con acumulación de agua.',
      en: 'Targeted misting of foliage, shrubs, underside of leaves, and safe biological larvicides in standing water sources.'
    },
    signs: {
      es: ['Nubes de mosquitos al atardecer', 'Picaduras constantes en el patio', 'Agua estancada en canaletas o macetas'],
      en: ['Swarming insects at dusk/dawn', 'Constant bites during outdoor activities', 'Standing water in gutters or pots']
    },
    threats: {
      es: ['Virus del Nilo Occidental y Dengue', 'Molestia extrema en reuniones familiares', 'Incapacidad de disfrutar el jardín'],
      en: ['West Nile Virus and Zika transmission', 'Disrupted family outdoor barbecues', 'Skin irritation and allergic swelling']
    },
    method: {
      es: ['1. Inspección de puntos de cría de larvas', '2. Nebulización a motor en follaje', '3. Aplicación de larvicidas seguros'],
      en: ['1. Breeding site identification', '2. Motorized backpack foliage misting', '3. Eco-friendly larvicide application']
    },
    duration: '1 hora',
    warranty: 'Garantía Mensual o por Evento',
    startingPrice: '$99'
  },
  {
    id: 'fumigation',
    name: { es: 'Fumigaciones de Alto Poder (Comercial & Residencial)', en: 'High-Potency Fumigation & Cleanouts' },
    tagline: { es: 'Poder extremo para erradicar infestaciones severas en un solo día', en: 'Extreme knockdown power for severe commercial & whole-home infestations' },
    icon: '⚡',
    severity: 'critical',
    featured: true,
    shortDesc: {
      es: 'Tratamiento de choque para bodegas, restaurantes, apartamentos y casas con plagas fuera de control.',
      en: 'Heavy-duty knockdown treatment for warehouses, restaurants, multifamily apartments, and residences.'
    },
    fullDesc: {
      es: 'Nuestro servicio insignia de fumigación profunda utiliza equipo profesional de alta presión, termonebulización y productos certificados por la EPA para garantizar un exterminio del 100%.',
      en: 'Our flagship deep fumigation employs industrial-grade high-pressure delivery systems, thermal fogging, and EPA-registered compounds for definitive 100% eradication.'
    },
    signs: {
      es: ['Plagas múltiples en toda la propiedad', 'Infestaciones de años no resueltas', 'Exigencias de sanidad comercial'],
      en: ['Multiple recurring pest species', 'Failed store-bought DIY spray attempts', 'Commercial sanitation audit compliance']
    },
    threats: {
      es: ['Pérdidas económicas enormes', 'Peligro a la salud de residentes y clientes', 'Daños a inventarios y mercancía'],
      en: ['Massive financial business disruption', 'Severe public health and hygiene risks', 'Total inventory and property ruin']
    },
    method: {
      es: ['1. Plan de evacuación y preparación segura', '2. Aplicación de alto poder en cada rincón', '3. Ventilación y certificado de garantía'],
      en: ['1. Preparation & containment protocol', '2. Deep volumetric high-power application', '3. Safe re-entry testing & certification']
    },
    duration: '3 - 6 horas',
    warranty: '100% Efectividad Garantizada',
    startingPrice: '$249'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Dallas', county: 'Dallas County', zipCodes: ['75201', '75204', '75211', '75217', '75228', '75243'], responseTime: '30 - 45 min', sameDay: true, status: 'priority' },
  { name: 'Fort Worth', county: 'Tarrant County', zipCodes: ['76102', '76106', '76110', '76116', '76133'], responseTime: '45 - 60 min', sameDay: true, status: 'priority' },
  { name: 'Arlington', county: 'Tarrant County', zipCodes: ['76010', '76011', '76015', '76018'], responseTime: '30 - 45 min', sameDay: true, status: 'priority' },
  { name: 'Grand Prairie', county: 'Dallas/Tarrant', zipCodes: ['75050', '75051', '75052'], responseTime: '30 - 40 min', sameDay: true, status: 'priority' },
  { name: 'Irving', county: 'Dallas County', zipCodes: ['75060', '75061', '75062', '75063'], responseTime: '25 - 35 min', sameDay: true, status: 'priority' },
  { name: 'Garland', county: 'Dallas County', zipCodes: ['75040', '75041', '75042', '75043'], responseTime: '35 - 45 min', sameDay: true, status: 'priority' },
  { name: 'Plano', county: 'Collin County', zipCodes: ['75023', '75024', '75074', '75075'], responseTime: '35 - 50 min', sameDay: true, status: 'active' },
  { name: 'Carrollton', county: 'Dallas/Denton', zipCodes: ['75006', '75007', '75010'], responseTime: '30 - 40 min', sameDay: true, status: 'active' },
  { name: 'Mesquite', county: 'Dallas County', zipCodes: ['75149', '75150'], responseTime: '30 - 40 min', sameDay: true, status: 'active' },
  { name: 'McKinney', county: 'Collin County', zipCodes: ['75069', '75070', '75071'], responseTime: '45 - 60 min', sameDay: true, status: 'active' },
  { name: 'Frisco', county: 'Collin/Denton', zipCodes: ['75034', '75035'], responseTime: '45 - 55 min', sameDay: true, status: 'active' },
  { name: 'Denton', county: 'Denton County', zipCodes: ['76201', '76205', '76209'], responseTime: '50 - 65 min', sameDay: true, status: 'active' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Carlos Mendoza',
    city: 'Dallas, TX (Oak Cliff)',
    rating: 5,
    date: 'Hace 2 semanas',
    service: 'Termitas & Fumigación',
    comment: {
      es: 'Excelente servicio de AB Pest Control. Teníamos un problema grave de termitas en los marcos de la cocina. Llegaron el mismo día, explicaron todo en español y el tratamiento fue 100% efectivo. ¡Muy recomendados!',
      en: 'Outstanding service by AB Pest Control. We had a serious termite problem in kitchen door frames. They arrived same day, explained everything clearly in Spanish and English, and completely eliminated them.'
    },
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Maria Elena Rodriguez',
    city: 'Arlington, TX',
    rating: 5,
    date: 'Hace 1 mes',
    service: 'Cucarachas & Chinches',
    comment: {
      es: 'Llevaba meses batallando con cucarachas alemanas que ningún spray de tienda mataba. Don David y su equipo hicieron una fumigación de alto poder y no he visto ni una sola desde ese día.',
      en: 'Had been fighting German roaches for months with no luck from grocery store sprays. David and the crew performed a high-potency fumigation and I have not seen a single pest since.'
    },
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Robert Vance',
    city: 'Irving, TX',
    rating: 5,
    date: 'Hace 3 semanas',
    service: 'Roedores & Exclusión de Ático',
    comment: {
      es: 'Escuchábamos ruidos horribles de ratones en el techo cada noche. Sellaron todas las entradas con malla de acero y limpiaron el ático. Profesionales, puntuales y precio justo.',
      en: 'We heard terrible scratching noises in the attic every night. They sealed every roof opening with steel wire and sanitized the space. Punctual, honest pricing, and true pros.'
    },
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Tacos & Grill La Michoacana (Gerencia)',
    city: 'Grand Prairie, TX',
    rating: 5,
    date: 'Hace 2 meses',
    service: 'Control Comercial Mensual',
    comment: {
      es: 'Mantenemos nuestro restaurante libre de plagas con su servicio comercial mensual. Pasamos todas las inspecciones de salud con calificación perfecta de 100 puntos.',
      en: 'We maintain our commercial restaurant kitchen 100% pest-free with their monthly program. We pass every city health inspection with flying colors.'
    },
    verified: true
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: { es: 'Infestación Severa de Termitas en Vigas de Madera', en: 'Severe Structural Termite Wood Beam Infestation' },
    category: 'Termitas / Termites',
    location: 'Dallas, TX (East Dallas)',
    duration: 'Tratamiento en 1 Día + Garantía 2 Años',
    beforeDesc: {
      es: 'Viga principal con túneles de lodo activos, madera hueca y miles de termitas devorando la base del gabinete.',
      en: 'Main support beam with active mud tunnels, hollow internal core and thousands of termites consuming cabinet base.'
    },
    afterDesc: {
      es: 'Colonia 100% erradicada con barrera termítica profunda, madera reforzada y monitores instalados sin rastro de plaga.',
      en: 'Colony 100% eradicated with deep termiticide barrier injection, zero residual pests, and full structural defense.'
    },
    beforeImage: '/contact.jpg',
    afterImage: '/contact2.jpg',
    metric: { label: { es: 'Eliminación', en: 'Eradication' }, value: '100%' }
  },
  {
    id: 'case-2',
    title: { es: 'Fumigación de Alto Poder en Cocina y Almacén', en: 'High-Power Kitchen & Pantry Fumigation' },
    category: 'Cucarachas & Plagas / Roaches',
    location: 'Fort Worth, TX',
    duration: 'Fumigación de Choque + Cebo de Dominó',
    beforeDesc: {
      es: 'Cientos de cucarachas alemanas escondidas en motores de refrigeradores, grietas de zoclos y gavetas.',
      en: 'Hundreds of German roaches harboring inside refrigerator motor bays, crevices, and pantry hinges.'
    },
    afterDesc: {
      es: 'Espacio higienizado, nidos destruidos por efecto dominó con gel IGR y certificación de salud al día.',
      en: 'Total sanitization, nests extinguished via domino effect IGR gels, and clear health inspection pass.'
    },
    beforeImage: '/Service2.jpg',
    afterImage: '/service3.jpg',
    metric: { label: { es: 'Reducción de Plagas', en: 'Pest Reduction' }, value: '100%' }
  },
  {
    id: 'case-3',
    title: { es: 'Exclusión y Sanitización de Ático contra Roedores', en: 'Attic Rodent Exclusion & Decontamination' },
    category: 'Roedores / Rodents',
    location: 'Plano, TX',
    duration: 'Sellado de 8 Puntos de Entrada + Trampeo',
    beforeDesc: {
      es: 'Aislamiento térmico contaminado con heces de ratas, cables roídos y olores fétidos en el techo.',
      en: 'Thermal insulation contaminated by rat droppings, gnawed wiring, and foul attic odors.'
    },
    afterDesc: {
      es: 'Sellado perimetral con acero galvanizado, ático sanitizado con bactericida y cero actividad de roedores.',
      en: 'Galvanized steel barrier sealing on all eaves, sanitized attic space, and permanent quiet guarantee.'
    },
    beforeImage: '/Service.jpg',
    afterImage: '/contact.jpg',
    metric: { label: { es: 'Sellado Estructural', en: 'Structural Seal' }, value: '100%' }
  }
];

export const FAQS_DATA = [
  {
    q: { es: '¿Qué tan rápido pueden llegar a mi casa o negocio en DFW?', en: 'How fast can you arrive at my home or business in DFW?' },
    a: {
      es: 'Ofrecemos servicio el mismo día y atención de emergencia 24/7. En la mayoría de las ciudades de Dallas, Fort Worth, Arlington e Irving, nuestros técnicos licenciados pueden estar en su puerta en 30 a 60 minutos tras su llamada al (214) 668-8338.',
      en: 'We offer same-day service and 24/7 emergency dispatch. In most DFW cities (Dallas, Fort Worth, Arlington, Irving), our licensed technicians can arrive at your door within 30 to 60 minutes of calling (214) 668-8338.'
    }
  },
  {
    q: { es: '¿Los productos de fumigación son seguros para mis hijos y mascotas?', en: 'Are your fumigation treatments safe for children and pets?' },
    a: {
      es: 'Sí. Utilizamos productos registrados ante la EPA y fórmulas eco-amigables de grado profesional. Dependiendo del tipo de tratamiento, solo requerimos que las mascotas y niños permanezcan fuera de las áreas tratadas durante 1 a 2 horas hasta que el producto seque completamente, dejando una barrera inodora y segura.',
      en: 'Yes. We strictly utilize EPA-registered, professional-grade, eco-conscious formulations. Depending on the service, pets and children simply need to remain outside treated areas for 1-2 hours until dry, leaving an odorless, safe protective barrier.'
    }
  },
  {
    q: { es: '¿Ofrecen garantía si las plagas vuelven?', en: 'Do you offer a warranty if pests return?' },
    a: {
      es: '¡Absolutamente! Respaldamos nuestro trabajo con una Garantía de Satisfacción del 100%. Si nota actividad de plagas dentro del período de garantía de su servicio, regresamos a realizar un re-tratamiento completo sin ningún costo adicional para usted.',
      en: 'Absolutely! We back our work with a 100% Satisfaction Guarantee. If you notice any recurring pest activity during your warranty window, we will return and perform a free follow-up re-treatment at zero extra cost.'
    }
  },
  {
    q: { es: '¿Cómo sé si tengo termitas o simplemente hormigas carpinteras?', en: 'How can I tell if I have termites versus carpenter ants?' },
    a: {
      es: 'Las termitas tienen cuerpos rectos sin "cintura", cuatro alas de igual longitud y crean túneles de lodo sobre el concreto para protegerse de la luz. Las hormigas tienen cuerpo segmentado en tres partes y antenas acodadas. ¡Llámenos para una Inspección 100% Gratuita y nuestros expertos lo diagnosticarán con precisión!',
      en: 'Termites have straight waists, wings of equal length, and build mud tubes over foundations. Ants have pinched waists and bent antennae. Call us for a 100% Free Inspection and our specialists will identify it accurately with thermal tools!'
    }
  },
  {
    q: { es: '¿Qué debo hacer antes de que llegue el técnico de fumigación?', en: 'What should I do before the technician arrives?' },
    a: {
      es: 'Recomendamos guardar alimentos abiertos en recipientes herméticos, despejar el piso en esquinas y bajo el fregadero, y retirar platos o juguetes de mascotas. Nuestro equipo le proporcionará una guía rápida y sencilla por WhatsApp antes de llegar.',
      en: 'We recommend storing open food in sealed containers, clearing floors under sinks and along perimeter baseboards, and putting away pet bowls/toys. Our team will send you a quick checklist via WhatsApp before arrival.'
    }
  },
  {
    q: { es: '¿Hacen presupuestos e inspecciones sin compromiso?', en: 'Do you provide free no-obligation inspections and quotes?' },
    a: {
      es: 'Sí, todas nuestras inspecciones iniciales y cotizaciones telefónicas o por WhatsApp son 100% GRATUITAS y sin ningún compromiso. Le damos un precio claro y transparente antes de comenzar cualquier trabajo.',
      en: 'Yes, all initial on-site inspections and instant phone/WhatsApp quotes are 100% FREE with no obligation. We give you clear, upfront pricing before beginning any work.'
    }
  }
];
