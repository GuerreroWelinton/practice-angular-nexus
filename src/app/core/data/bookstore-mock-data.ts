import {
  BookstoreProduct,
  BookstoreProductCategory,
} from '../../features/bookstore/bookstore-product-interface';

export const BOOKSTORE_PRODUCTS_MOCK: BookstoreProduct[] = [
  {
    id: 1,
    name: 'Clean Code',
    author: 'Robert C. Martin',
    year: 2008,
    price: 32.99,
    shortDescription: 'Manual de estilo para el desarrollo ágil de software.',
    longDescription:
      'Clean Code es una guía esencial para escribir código limpio, mantenible y profesional. Robert C. Martin comparte décadas de experiencia en desarrollo de software, enseñando principios fundamentales como la nomenclatura clara, funciones pequeñas, manejo de errores y técnicas de refactorización. Cada capítulo incluye ejemplos prácticos y casos de estudio reales que transformarán tu forma de programar.',
    category: [BookstoreProductCategory.Programming, BookstoreProductCategory.Technology],
    imageUrl:
      'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=900&q=80',
    bestseller: true,
  },
  {
    id: 2,
    name: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    year: 2019,
    price: 34.5,
    shortDescription: 'Tu viaje hacia la maestría del desarrollo de software.',
    longDescription:
      'Edición actualizada del clásico que ha transformado a miles de programadores. Explora técnicas atemporales para escribir código flexible, dinámico y adaptable. Cubre desde arquitectura de software hasta automatización, control de versiones, testing y desarrollo profesional. Incluye consejos prácticos que puedes aplicar inmediatamente en tu trabajo diario.',
    category: [BookstoreProductCategory.Programming, BookstoreProductCategory.Technology],
    imageUrl:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
    bestseller: true,
  },
  {
    id: 3,
    name: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: 2008,
    price: 28.0,
    shortDescription: 'Descubre el verdadero potencial de JavaScript.',
    longDescription:
      'Douglas Crockford revela las características más elegantes y poderosas de JavaScript, filtrando las partes problemáticas del lenguaje. Aprende a usar funciones, objetos, arrays y expresiones regulares de manera efectiva. Perfecto para programadores que quieren dominar JavaScript y escribir código más limpio y eficiente.',
    category: [BookstoreProductCategory.Programming],
    imageUrl:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=80',
    discountPercentage: 15,
  },
  {
    id: 4,
    name: 'Design Patterns',
    author: 'Gang of Four',
    year: 1994,
    price: 39.99,
    shortDescription: 'Elementos de software orientado a objetos reutilizable.',
    longDescription:
      'El libro definitivo sobre patrones de diseño en programación orientada a objetos. Los cuatro autores presentan 23 patrones fundamentales que resuelven problemas comunes en el diseño de software. Cada patrón incluye diagramas UML, ejemplos de código y discusiones sobre cuándo aplicarlo. Un must-have para arquitectos de software.',
    category: [BookstoreProductCategory.Programming, BookstoreProductCategory.Technology],
    imageUrl:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Atomic Habits',
    author: 'James Clear',
    year: 2018,
    price: 16.5,
    shortDescription: 'Transforma tu vida con pequeños cambios diarios.',
    longDescription:
      'James Clear demuestra cómo pequeños hábitos pueden generar resultados extraordinarios. Basado en investigaciones científicas y ejemplos reales, explica cómo funcionan los hábitos y presenta un sistema práctico de cuatro pasos para construir buenos hábitos y eliminar los malos. Perfecto para estudiantes y profesionales que buscan mejorar su productividad.',
    category: [BookstoreProductCategory.SelfHelp, BookstoreProductCategory.Psychology],
    imageUrl:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80',
    bestseller: true,
  },
  {
    id: 6,
    name: 'Sapiens',
    author: 'Yuval Noah Harari',
    year: 2014,
    price: 18.99,
    shortDescription: 'De animales a dioses: Una breve historia de la humanidad.',
    longDescription:
      'Harari explora cómo el Homo sapiens llegó a dominar el mundo, desde la revolución cognitiva hasta la revolución científica. Examina el papel de la ficción compartida, el dinero, los imperios y las religiones en la construcción de sociedades complejas. Una lectura fascinante que cambia tu perspectiva sobre la historia humana y nuestro futuro.',
    category: [
      BookstoreProductCategory.History,
      BookstoreProductCategory.NonFiction,
      BookstoreProductCategory.Science,
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    bestseller: true,
  },
  {
    id: 7,
    name: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    year: 2011,
    price: 17.25,
    shortDescription: 'Cómo tomamos decisiones y por qué nos equivocamos.',
    longDescription:
      'El premio Nobel Daniel Kahneman explora los dos sistemas de pensamiento que impulsan nuestras decisiones: el rápido e intuitivo (Sistema 1) y el lento y deliberado (Sistema 2). Revela los sesgos cognitivos que afectan nuestro juicio y ofrece insights sobre cómo tomar mejores decisiones en la vida personal y profesional.',
    category: [
      BookstoreProductCategory.Psychology,
      BookstoreProductCategory.Science,
      BookstoreProductCategory.NonFiction,
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    name: '1984',
    author: 'George Orwell',
    year: 1949,
    price: 13.5,
    shortDescription: 'Distopía clásica sobre vigilancia y control totalitario.',
    longDescription:
      'En un futuro sombrío, Winston Smith vive bajo la omnipresente vigilancia del Gran Hermano. Orwell crea una pesadilla distópica donde el pensamiento es controlado, la historia reescrita y el amor prohibido. Una obra maestra que explora temas de libertad, verdad y resistencia, más relevante que nunca en la era digital.',
    category: [BookstoreProductCategory.Fiction, BookstoreProductCategory.Philosophy],
    imageUrl:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80',
    discountPercentage: 10,
  },
  {
    id: 9,
    name: 'The Lean Startup',
    author: 'Eric Ries',
    year: 2011,
    price: 22.0,
    shortDescription: 'Cómo emprendedores usan innovación continua para crear negocios exitosos.',
    longDescription:
      'Eric Ries presenta una metodología revolucionaria para desarrollar productos y negocios en contextos de extrema incertidumbre. Aprende sobre el ciclo construir-medir-aprender, validación de hipótesis y pivotes estratégicos. Esencial para emprendedores, desarrolladores de producto y cualquiera involucrado en innovación.',
    category: [BookstoreProductCategory.Business, BookstoreProductCategory.Technology],
    imageUrl:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 10,
    name: 'Deep Work',
    author: 'Cal Newport',
    year: 2016,
    price: 19.5,
    shortDescription: 'Reglas para el éxito enfocado en un mundo distraído.',
    longDescription:
      'Cal Newport argumenta que la habilidad de concentrarse sin distracciones es cada vez más valiosa y escasa. Presenta estrategias prácticas para cultivar el trabajo profundo, minimizar las distracciones digitales y maximizar tu productividad cognitiva. Ideal para estudiantes y profesionales que buscan destacar en su campo.',
    category: [
      BookstoreProductCategory.SelfHelp,
      BookstoreProductCategory.Business,
      BookstoreProductCategory.Psychology,
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 11,
    name: "You Don't Know JS",
    author: 'Kyle Simpson',
    year: 2015,
    price: 29.99,
    shortDescription: 'Serie completa sobre JavaScript moderno y sus fundamentos.',
    longDescription:
      'Kyle Simpson profundiza en los mecanismos internos de JavaScript, desde scope y closures hasta prototypes y async programming. Esta serie va más allá de lo superficial para que realmente entiendas cómo funciona JavaScript. Perfecto para desarrolladores que quieren dominar el lenguaje a nivel experto.',
    category: [BookstoreProductCategory.Programming, BookstoreProductCategory.Technology],
    imageUrl:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80',
    discountPercentage: 20,
  },
  {
    id: 12,
    name: 'The Art of War',
    author: 'Sun Tzu',
    year: -500,
    price: 12.0,
    shortDescription: 'Tratado militar milenario aplicable a negocios y vida.',
    longDescription:
      'Escrito hace más de 2,500 años, este clásico chino sobre estrategia militar sigue siendo relevante hoy. Sus principios sobre planificación, liderazgo, adaptabilidad y competencia se aplican a negocios, deportes y vida diaria. Una lectura breve pero profunda que ha influenciado a líderes mundiales durante siglos.',
    category: [
      BookstoreProductCategory.Philosophy,
      BookstoreProductCategory.History,
      BookstoreProductCategory.Business,
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 13,
    name: 'A Brief History of Time',
    author: 'Stephen Hawking',
    year: 1988,
    price: 15.75,
    shortDescription: 'Del Big Bang a los agujeros negros, explicado con claridad.',
    longDescription:
      'Stephen Hawking hace accesibles los conceptos más complejos de la física moderna: el origen del universo, la naturaleza del tiempo, agujeros negros y teoría cuántica. Escrito para el lector general, combina profundidad científica con claridad explicativa. Un viaje fascinante por los misterios del cosmos.',
    category: [BookstoreProductCategory.Science, BookstoreProductCategory.NonFiction],
    imageUrl:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 14,
    name: 'The DevOps Handbook',
    author: 'Gene Kim, Jez Humble, Patrick Debois',
    year: 2016,
    price: 35.0,
    shortDescription: 'Cómo crear organizaciones tecnológicas de clase mundial.',
    longDescription:
      'Los líderes del movimiento DevOps comparten casos de estudio y prácticas comprobadas para transformar organizaciones tradicionales en equipos ágiles de alto rendimiento. Cubre integración continua, deployment pipelines, arquitectura, seguridad y cultura organizacional. Esencial para ingenieros y líderes técnicos.',
    category: [BookstoreProductCategory.Technology, BookstoreProductCategory.Business],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 15,
    name: "The Innovator's Dilemma",
    author: 'Clayton M. Christensen',
    year: 1997,
    price: 20.5,
    shortDescription: 'Por qué las grandes empresas fallan frente a la innovación.',
    longDescription:
      'Christensen explica por qué empresas exitosas son desplazadas por competidores más pequeños con tecnologías disruptivas. Analiza casos históricos y presenta un framework para entender la innovación. Lectura obligatoria para emprendedores, managers y cualquiera interesado en estrategia de negocio y tecnología.',
    category: [BookstoreProductCategory.Business, BookstoreProductCategory.Technology],
    imageUrl:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 16,
    name: 'Meditations',
    author: 'Marcus Aurelius',
    year: 180,
    price: 11.0,
    shortDescription: 'Reflexiones personales del emperador filósofo romano.',
    longDescription:
      'Escritas como diario personal, estas reflexiones del emperador romano Marcus Aurelius ofrecen sabiduría estoica atemporal sobre virtud, deber, mortalidad y cómo vivir una buena vida. Sus enseñanzas sobre resiliencia, autodisciplina y perspectiva siguen siendo profundamente relevantes para el mundo moderno.',
    category: [BookstoreProductCategory.Philosophy, BookstoreProductCategory.History],
    imageUrl:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 17,
    name: 'Refactoring',
    author: 'Martin Fowler',
    year: 2018,
    price: 38.0,
    shortDescription: 'Mejora el diseño del código existente sin cambiar su comportamiento.',
    longDescription:
      'Martin Fowler actualiza su clásico con ejemplos en JavaScript. Presenta un catálogo completo de refactorings: técnicas sistemáticas para mejorar la estructura del código sin alterar su funcionalidad. Aprende cuándo y cómo aplicar cada refactoring para mantener código limpio, mantenible y extensible.',
    category: [BookstoreProductCategory.Programming, BookstoreProductCategory.Technology],
    imageUrl:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
    discountPercentage: 12,
  },
  {
    id: 18,
    name: 'The Phoenix Project',
    author: 'Gene Kim, Kevin Behr, George Spafford',
    year: 2013,
    price: 21.5,
    shortDescription: 'Novela sobre DevOps que revoluciona departamentos de IT.',
    longDescription:
      'Contada como novela empresarial, sigue a Bill, un manager de IT que debe salvar un proyecto crítico en 90 días. A través de su historia, aprende los principios de DevOps, Lean y la Teoría de Restricciones. Una forma entretenida y práctica de entender cómo transformar organizaciones tecnológicas.',
    category: [BookstoreProductCategory.Technology, BookstoreProductCategory.Business],
    imageUrl:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 19,
    name: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 2013,
    price: 24.0,
    shortDescription: 'Fundamentos de diseño centrado en el usuario.',
    longDescription:
      'Don Norman explora por qué algunos objetos son fáciles de usar y otros frustrantes. Introduce conceptos fundamentales como affordances, signifiers y feedback que todo diseñador debería conocer. Esencial para diseñadores UX/UI, desarrolladores de producto y cualquiera que cree interfaces para personas.',
    category: [
      BookstoreProductCategory.Technology,
      BookstoreProductCategory.Art,
      BookstoreProductCategory.Psychology,
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 20,
    name: 'Zero to One',
    author: 'Peter Thiel',
    year: 2014,
    price: 19.0,
    shortDescription: 'Notas sobre startups, o cómo construir el futuro.',
    longDescription:
      'El cofundador de PayPal comparte sus contraintuitivas lecciones sobre innovación y emprendimiento. Thiel argumenta que copiar lo que funciona lleva del 1 a n, pero crear algo nuevo lleva de 0 a 1. Explora monopolios, tecnología, globalización y el futuro. Una lectura provocativa para emprendedores y pensadores.',
    category: [BookstoreProductCategory.Business, BookstoreProductCategory.Technology],
    imageUrl:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 21,
    name: 'Dune',
    author: 'Frank Herbert',
    year: 1965,
    price: 18.75,
    shortDescription: 'Épica de ciencia ficción sobre poder, destino y ecología.',
    longDescription:
      'Dune es una obra monumental de ciencia ficción que sigue a Paul Atreides en el planeta desértico Arrakis, única fuente de la especia más valiosa del universo. A través de intrigas políticas, religiones, guerras y supervivencia, Herbert construye un mundo profundo donde la ecología, el liderazgo y la ambición humana chocan en cada página. Ideal para lectores que disfrutan historias complejas y universos inmersivos.',
    category: [BookstoreProductCategory.Fiction, BookstoreProductCategory.Science],
    imageUrl:
      'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 22,
    name: 'El nombre del viento',
    author: 'Patrick Rothfuss',
    year: 2007,
    price: 17.9,
    shortDescription: 'Fantasía moderna narrada con belleza y misterio.',
    longDescription:
      'El nombre del viento cuenta la historia de Kvothe, un joven prodigio que narra su vida marcada por la música, la magia, la pobreza y la búsqueda de verdad. Rothfuss mezcla aventura, emoción y poesía en un relato que crece con cada capítulo, construyendo un mundo rico y personajes memorables. Perfecto para quienes aman la fantasía con sensibilidad literaria.',
    category: [BookstoreProductCategory.Fiction],
    imageUrl:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 23,
    name: 'Steal Like an Artist',
    author: 'Austin Kleon',
    year: 2012,
    price: 14.25,
    shortDescription: 'Ideas simples para desbloquear tu creatividad.',
    longDescription:
      'Austin Kleon propone una mirada fresca sobre la creatividad: nada nace de la nada, todo se transforma. Con capítulos cortos y muy aplicables, te enseña a inspirarte bien, construir hábitos creativos y compartir tu trabajo sin miedo. Es una lectura ligera pero potente, ideal para estudiantes, diseñadores y cualquier persona que esté creando algo nuevo.',
    category: [BookstoreProductCategory.Art, BookstoreProductCategory.SelfHelp],
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 24,
    name: 'Historia de la filosofía occidental',
    author: 'Bertrand Russell',
    year: 1945,
    price: 21.0,
    shortDescription: 'Recorrido claro por las ideas que formaron Occidente.',
    longDescription:
      'Russell presenta un viaje accesible por los filósofos y corrientes más influyentes de Occidente, desde los griegos hasta la era moderna. Explica ideas complejas con un estilo directo, conectándolas con el contexto histórico y social de cada época. Un libro excelente para introducirse a la filosofía o consolidar bases críticas para el pensamiento universitario.',
    category: [
      BookstoreProductCategory.Philosophy,
      BookstoreProductCategory.History,
      BookstoreProductCategory.NonFiction,
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=900&q=80',
  },
];
