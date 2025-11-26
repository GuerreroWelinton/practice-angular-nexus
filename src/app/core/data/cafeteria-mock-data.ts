import {
  CafeteriaProduct,
  CafeteriaProductCategory,
} from '../../features/cafeteria/cafeteria-product-interface';

export const CAFETERIA_PRODUCTS_MOCK: CafeteriaProduct[] = [
  {
    id: 1,
    name: 'Latte clásico',
    price: 3.5,
    shortDescription: 'Café espresso con leche vaporizada y una capa ligera de espuma.',
    longDescription:
      'El latte clásico combina un espresso recién extraído con leche vaporizada a textura sedosa y una fina capa de espuma. Su sabor es suave, cremoso y equilibrado, ideal para quienes disfrutan un café con notas tostadas pero sin amargor dominante. Perfecto para acompañar lecturas largas o una pausa tranquila.',
    category: [CafeteriaProductCategory.Coffee, CafeteriaProductCategory.Beverages],
    imageUrl:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 3.75,
    shortDescription: 'Espresso intenso con leche cremosa y espuma densa.',
    longDescription:
      'Preparado con un espresso de cuerpo fuerte, leche vaporizada y una espuma densa y aterciopelada que corona la taza. El cappuccino destaca por su contraste entre intensidad y suavidad, con una textura más aireada que el latte. Ideal para empezar el día con energía o acompañar algo dulce.',
    category: [CafeteriaProductCategory.Coffee],
    imageUrl:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    bestseller: true,
  },
  {
    id: 3,
    name: 'Espresso doble',
    price: 2.5,
    shortDescription: 'Shot doble de espresso, fuerte y aromático.',
    longDescription:
      'Dos shots de espresso concentrado, extraídos a alta presión para resaltar su aroma y notas tostadas. Su sabor es intenso, con cuerpo amplio y un final ligeramente amargo característico del buen café. Recomendado para amantes del espresso puro o para recargar energía antes de una jornada de estudio.',
    category: [CafeteriaProductCategory.Coffee],
    imageUrl:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=80',
    discountPercentage: 4,
  },
  {
    id: 4,
    name: 'Mocha',
    price: 4.0,
    shortDescription: 'Espresso con chocolate, leche caliente y crema suave.',
    longDescription:
      'Una mezcla reconfortante de espresso, chocolate cremoso y leche caliente vaporizada, terminada con una capa suave de crema. El mocha combina la intensidad del café con el dulzor del cacao, logrando un sabor redondo y muy aromático. Ideal para quienes buscan un café dulce sin perder carácter.',
    category: [CafeteriaProductCategory.Coffee, CafeteriaProductCategory.Desserts],
    imageUrl:
      'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bestseller: true,
  },
  {
    id: 5,
    name: 'Cold brew',
    price: 3.9,
    shortDescription: 'Café infusionado en frío por 12 horas, sabor suave.',
    longDescription:
      'Café macerado lentamente en agua fría durante 12 horas para extraer un sabor más suave, menos ácido y naturalmente dulce. Se sirve frío, con un perfil limpio y refrescante, perfecto para días calurosos o para quienes prefieren el café ligero pero con buena profundidad.',
    category: [CafeteriaProductCategory.Coffee, CafeteriaProductCategory.Beverages],
    imageUrl:
      'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    id: 6,
    name: 'Té verde',
    price: 2.25,
    shortDescription: 'Té verde natural, ligero y refrescante.',
    longDescription:
      'Infusión de hojas de té verde seleccionadas, preparada a temperatura controlada para conservar sus notas herbales y frescas. Tiene un sabor ligero, ligeramente vegetal y muy refrescante. Ideal para una pausa relajante o para acompañar comidas suaves.',
    category: [CafeteriaProductCategory.Tea, CafeteriaProductCategory.Beverages],
    imageUrl:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80',
    discountPercentage: 11,
  },
  {
    id: 7,
    name: 'Chai latte',
    price: 3.2,
    shortDescription: 'Té negro especiado con leche caliente y canela.',
    longDescription:
      'Té negro infusionado con especias cálidas como canela, clavo y jengibre, mezclado con leche caliente para lograr una bebida cremosa y aromática. Su sabor es dulce-especiado, con un toque reconfortante que lo hace perfecto para tardes de estudio o clima fresco.',
    category: [CafeteriaProductCategory.Tea, CafeteriaProductCategory.Beverages],
    imageUrl:
      'https://images.unsplash.com/photo-1752917069627-0753ec7a7915?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    id: 8,
    name: 'Jugo de naranja',
    price: 2.8,
    shortDescription: 'Jugo natural recién exprimido.',
    longDescription:
      'Jugo preparado al momento con naranjas frescas, sin conservantes ni azúcar añadida. Es cítrico, dulce y muy refrescante, ideal para acompañar desayunos o para una pausa ligera durante el día.',
    category: [CafeteriaProductCategory.Juice, CafeteriaProductCategory.Beverages],
    imageUrl:
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 9,
    name: 'Jugo detox verde',
    price: 3.1,
    shortDescription: 'Mezcla de manzana, pepino, apio y limón.',
    longDescription:
      'Combinación natural de manzana dulce, pepino fresco, apio y un toque de limón que equilibra el sabor. Se sirve frío, con textura ligera y un perfil muy refrescante. Ideal para quienes buscan una bebida saludable, hidratante y llena de energía natural.',
    category: [CafeteriaProductCategory.Juice, CafeteriaProductCategory.Beverages],
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1675011400509-5e39c4c17309?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    name: 'Limonada con hierbabuena',
    price: 2.6,
    shortDescription: 'Limonada casera fría con toque de menta.',
    longDescription:
      'Limonada artesanal preparada con jugo de limón natural, agua fría y hojas de hierbabuena recién machacadas para potenciar su aroma. Es ácida, fresca y ligeramente dulce, perfecta para refrescarte mientras trabajas o descansas en Nexus.',
    category: [CafeteriaProductCategory.Beverages, CafeteriaProductCategory.Juice],
    imageUrl:
      'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=900&q=80',
  },

  {
    id: 11,
    name: 'Croissant de mantequilla',
    price: 2.4,
    shortDescription: 'Croissant hojaldrado recién horneado.',
    longDescription:
      'Croissant elaborado con masa laminada y mantequilla, horneado hasta quedar dorado y crujiente por fuera, con interior suave y aireado. Su sabor es delicado y ligeramente mantequilloso, ideal para acompañar café o té.',
    category: [CafeteriaProductCategory.Pastries, CafeteriaProductCategory.Breakfast],
    imageUrl:
      'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 12,
    name: 'Roll de canela',
    price: 2.9,
    shortDescription: 'Suave, con glaseado de vainilla.',
    longDescription:
      'Roll esponjoso horneado con canela y azúcar morena, cubierto con glaseado de vainilla que se funde ligeramente al calor. Su textura es tierna y aromática, perfecto como snack dulce o para acompañar una bebida caliente.',
    category: [CafeteriaProductCategory.Pastries, CafeteriaProductCategory.Desserts],
    imageUrl:
      'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 13,
    name: 'Muffin de arándanos',
    price: 2.7,
    shortDescription: 'Muffin esponjoso con arándanos frescos.',
    longDescription:
      'Muffin horneado con arándanos frescos que aportan un toque frutal y jugoso en cada bocado. Es suave, ligeramente dulce y con aroma a mantequilla. Ideal para desayunos rápidos o para acompañar un café a media tarde.',
    category: [CafeteriaProductCategory.Pastries],
    imageUrl:
      'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=900&q=80',
    discountPercentage: 2,
  },

  {
    id: 14,
    name: 'Cheesecake de frutos rojos',
    price: 4.5,
    shortDescription: 'Porción cremosa con topping de frutos rojos.',
    longDescription:
      'Cheesecake de textura cremosa y base crocante, servido con una capa de frutos rojos que aporta un contraste ácido-dulce. Su sabor es suave, equilibrado y muy elegante, ideal para cerrar una comida o darte un gusto mientras estudias.',
    category: [CafeteriaProductCategory.Desserts],
    imageUrl:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
    bestseller: true,
  },
  {
    id: 15,
    name: 'Brownie con nueces',
    price: 3.3,
    shortDescription: 'Brownie húmedo de chocolate con nueces tostadas.',
    longDescription:
      'Brownie de chocolate oscuro, horneado para lograr interior húmedo y denso, con nueces tostadas que añaden textura crujiente. Tiene sabor intenso a cacao y un dulzor equilibrado. Perfecto para acompañar con café o una bebida fría.',
    category: [CafeteriaProductCategory.Desserts],
    imageUrl:
      'https://images.unsplash.com/photo-1587339144258-c2a54007d2a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 16,
    name: 'Tiramisú',
    price: 4.2,
    shortDescription: 'Postre italiano con café, cacao y mascarpone.',
    longDescription:
      'Clásico tiramisú italiano preparado con capas de bizcochos humedecidos en café, crema de mascarpone suave y cacao espolvoreado. Su textura es ligera pero cremosa, con un sabor profundo a café y un final dulce delicado.',
    category: [CafeteriaProductCategory.Desserts, CafeteriaProductCategory.Coffee],
    imageUrl:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80',
  },

  {
    id: 17,
    name: 'Pancakes con miel',
    price: 4.0,
    shortDescription: 'Torre de pancakes con miel y mantequilla.',
    longDescription:
      'Pancakes esponjosos servidos en torre, con mantequilla que se derrite al calor y miel natural por encima. Suave por dentro y ligeramente dorados por fuera. Ideal para un desayuno completo o un brunch dulce.',
    category: [CafeteriaProductCategory.Breakfast, CafeteriaProductCategory.Desserts],
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1672130779170-c71d34169786?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 18,
    name: 'Tostadas con aguacate',
    price: 3.8,
    shortDescription: 'Pan artesanal con aguacate, limón y semillas.',
    longDescription:
      'Tostadas de pan artesanal crujiente, cubiertas con aguacate fresco triturado, limón y un mix de semillas. Sabor ligero, cremoso y nutritivo, perfecto para desayunos saludables o almuerzos rápidos.',
    category: [CafeteriaProductCategory.Breakfast, CafeteriaProductCategory.Food],
    imageUrl:
      'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 19,
    name: 'Omelette de queso y jamón',
    price: 4.1,
    shortDescription: 'Omelette esponjoso con queso fundido.',
    longDescription:
      'Omelette preparado al momento con huevos batidos, cocción suave y relleno de queso fundido y jamón. Textura esponjosa y sabor salado equilibrado. Ideal para un desayuno fuerte o una comida ligera.',
    category: [CafeteriaProductCategory.Breakfast, CafeteriaProductCategory.Food],
    imageUrl:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80',
  },

  {
    id: 20,
    name: 'Ensalada césar',
    price: 4.6,
    shortDescription: 'Lechuga romana, crutones, parmesano y aderezo césar.',
    longDescription:
      'Ensalada fresca con lechuga romana crocante, crutones dorados, queso parmesano y aderezo césar cremoso. Sabor balanceado entre lo salado y lo ácido, ideal como almuerzo liviano o acompañamiento.',
    category: [CafeteriaProductCategory.Salads, CafeteriaProductCategory.Food],
    imageUrl:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 21,
    name: 'Ensalada quinoa mediterránea',
    price: 5.0,
    shortDescription: 'Quinoa, tomate cherry, pepino, aceitunas y feta.',
    longDescription:
      'Quinoa cocida al punto y mezclada con tomate cherry, pepino fresco, aceitunas y queso feta. Con un perfil mediterráneo, ligera pero nutritiva, ideal para quienes buscan una opción saludable con buen aporte energético.',
    category: [CafeteriaProductCategory.Salads, CafeteriaProductCategory.Food],
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    discountPercentage: 8,
  },

  {
    id: 22,
    name: 'Sándwich club',
    price: 4.8,
    shortDescription: 'Pollo, tocino, lechuga, tomate y mayonesa.',
    longDescription:
      'Sándwich tipo club preparado con pollo jugoso, tocino crujiente, lechuga fresca y tomate, todo en pan tostado con mayonesa suave. Sabor completo y textura variada en cada bocado, perfecto para un almuerzo rápido y satisfactorio.',
    category: [CafeteriaProductCategory.Sandwiches, CafeteriaProductCategory.Food],
    imageUrl:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    bestseller: true,
  },
  {
    id: 23,
    name: 'Grilled cheese',
    price: 3.9,
    shortDescription: 'Pan tostado con mezcla de quesos derretidos.',
    longDescription:
      'Pan dorado a la plancha con mezcla de quesos derretidos en su interior. Crujiente por fuera, cremoso por dentro y con sabor salado reconfortante. Ideal para acompañar con café o como snack rápido.',
    category: [CafeteriaProductCategory.Sandwiches],
    imageUrl:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 24,
    name: 'Sándwich vegetariano',
    price: 4.2,
    shortDescription: 'Hummus, vegetales asados y rúcula en pan integral.',
    longDescription:
      'Sándwich integral con hummus cremoso, vegetales asados y rúcula fresca. Sabor suave, vegetal y ligeramente tostado, con una textura ligera pero saciante. Excelente opción para una comida saludable y rápida.',
    category: [CafeteriaProductCategory.Sandwiches, CafeteriaProductCategory.Salads],
    imageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
];
