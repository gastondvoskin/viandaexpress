const foods = [
  {
    name: "Bistec a la parrilla",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un jugoso bistec a la parrilla con sabrosas especias y acompañamientos.",
    image:
      "https://assets.kraftfoods.com/recipe_images/opendeploy/94128_640x428.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Chuletas de cerdo al horno",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Deliciosas chuletas de cerdo horneadas con hierbas y condimentos, acompañadas de guarniciones.",
    image:
      "https://imag.bonviveur.com/chuletas-de-cerdo-al-horno-con-patatas.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Filete mignon con salsa de champiñones",
    diet: ["Sin TACC"],
    description:
      "Un exquisito filete mignon acompañado de una deliciosa salsa de champiñones.",
    image:
      "https://img-global.cpcdn.com/recipes/7e9073272fa4a4c9/1200x630cq70/photo.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Albóndigas en salsa de tomate",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Sabrosas albóndigas caseras en una deliciosa salsa de tomate, perfectas para acompañar pasta o arroz.",
    image:
      "https://cdn.aarp.net/content/dam/aarp/food/recipes/2020/04/1140-meatballs-in-tomato-sauce-esp.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Lomo de res a la provenzal",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un jugoso lomo de res marinado con hierbas provenzales y especias, perfecto para los amantes de la carne.",
    image:
      "https://www.demoslavueltaaldia.com/sites/default/files/lomo-la-provenzal-papas-natural.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Costillas de cerdo BBQ",
    diet: ["Sin TACC"],
    description:
      "Deliciosas costillas de cerdo asadas a la parrilla con una irresistible salsa barbacoa casera.",
    image:
      "https://t1.uc.ltmcdn.com/es/posts/3/9/5/como_hacer_costillas_bbq_en_sarten_50593_orig.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pollo a la parrilla con limón y hierbas",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Jugoso pollo a la parrilla sazonado con limón, hierbas aromáticas y especias, acompañado de ensalada fresca.",
    image:
      "https://mejoresrecetas.me/wp-content/uploads/2023/04/Pollo-a-la-Parrilla-con-Salsa-de-Limon-y-Hierbas.webp",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Carne asada estilo argentino",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un clásico corte de carne asada a la parrilla al estilo argentino, tierno y lleno de sabor.",
    image:
      "https://saboryestilo.com.mx/wp-content/uploads/2020/05/parrilla-argentina-1.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Estofado de ternera con verduras",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un reconfortante estofado de ternera con tiernos trozos de carne y verduras en un sabroso caldo.",
    image:
      "https://unareceta.com/wp-content/uploads/2016/08/Estofado-de-ternera-con-verduras.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Tacos de carne al pastor",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Deliciosos tacos rellenos de carne marinada al pastor, acompañados de cebolla, cilantro y salsa.",
    image:
      "https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Fajitas de carne con pimientos y cebolla",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Fajitas de carne marinadas en especias y jugo de limón, salteadas con pimientos y cebolla en una sartén caliente.",
    image:
      "https://img-global.cpcdn.com/recipes/cfb9eabb352b7775/680x482cq70/carne-de-res-con-pimientos-y-cebolla-foto-principal.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pechuga de pollo rellena de jamón y queso",
    diet: ["Sin TACC"],
    description:
      "Pechuga de pollo jugosa rellena de jamón y queso, horneada hasta obtener un dorado perfecto y acompañada de una salsa suave.",
    image: "https://www.annarecetasfaciles.com/files/cordon-bleub.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Asado de tira al chimichurri",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Un suculento asado de tira marinado en chimichurri argentino, asado a la parrilla y lleno de sabor.",
    image:
      "https://pronacatqma.com/images/com_yoorecipe/banner_superior/17396_1.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Cordero al horno con hierbas",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Tierno cordero asado al horno con hierbas aromáticas y especias, perfecto para una ocasión especial.",
    image:
      "https://pierorestaurante.com/wp-content/uploads/2022/05/portada-cordero-al-horno-con-hierbas.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pollo al curry con arroz",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Pollo tierno cocinado en una sabrosa salsa de curry, acompañado de arroz aromático y verduras salteadas.",
    image:
      "https://www.frutamare.com/wp-content/uploads/2021/04/arroz-con-pollo-al-curry.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Tacos de carne deshebrada",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Tacos deliciosos rellenos de carne deshebrada sazonada con especias y condimentos, acompañados de tu salsa favorita.",
    image:
      "https://tacos10.com/wp-content/uploads/2019/01/tacos-de-res-deshebrada1-e1546657228282.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pavo asado con relleno de hierbas",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Pavo jugoso asado al horno con un relleno de hierbas aromáticas, perfecto para celebraciones y festividades.",
    image: "https://enrilemoine.com/wp-content/uploads/2011/11/5-MG_2068.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Carne guisada con patatas",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Carne tierna y jugosa guisada a fuego lento con patatas, cebolla, zanahorias y especias, un plato reconfortante.",
    image:
      "https://www.cocinatis.com/archivos/202207/CTIS0210-Receta-carne-guisada-con-patatas_large_16x9.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Lomo de cerdo a la mostaza",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Lomo de cerdo jugoso y tierno marinado con mostaza y hierbas, asado a la perfección y servido con una salsa irresistible.",
    image:
      "https://www.cocinacaserayfacil.net/wp-content/uploads/2021/12/Solomillo-de-cerdo-a-la-mostaza-y-miel.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Pechuga de pollo a la plancha con ensalada",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Pechuga de pollo a la plancha jugosa y tierna, servida con una fresca ensalada de vegetales y aderezo ligero.",
    image:
      "https://recetinas.com/wp-content/uploads/2018/03/pechuga-de-pollo-a-la-plancha-con-ensalada-receta.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Empanadas de carne argentinas",
    diet: ["Sin Lactosa"],
    description:
      "Deliciosas empanadas argentinas rellenas de carne jugosa, cebolla, aceitunas y especias, horneadas hasta obtener un dorado perfecto.",
    image:
      "https://www.pequerecetas.com/wp-content/uploads/2023/01/empanadas-de-carne-argentinas-tradicionales.jpeg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Shawarma de carne de cordero",
    diet: ["Sin TACC", "Sin Lactosa"],
    description:
      "Shawarma de carne de cordero tierna y sabrosa, marinada con especias y asada en un asador vertical, servida con pan pita y salsas.",
    image:
      "https://enterate24backup.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/10/23142307/1713.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "carnes",
  },
  {
    name: "Ensalada de espinacas",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una deliciosa ensalada de espinacas frescas con tomates cherry, aguacate, nueces y aderezo de vinagreta balsámica.",
    image:
      "https://amilinea.com/wp-content/uploads/2019/05/ensalada-de-espinacas.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada César",
    diet: ["Vegetariano"],
    description:
      "La clásica ensalada César con lechuga romana, crutones, queso parmesano y aderezo César cremoso.",
    image:
      "https://d22fxaf9t8d39k.cloudfront.net/17d16895112437af88b786e19ac669ee0923c5eba134bff92dbe65ad23a0b14d111915.png",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de quinoa",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una nutritiva ensalada de quinoa con vegetales frescos, aceitunas, pepino y aderezo de limón y cilantro.",
    image:
      "https://macabites.com/wp-content/uploads/2017/12/ensalada-de-quinoa-550x550.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada Caprese",
    diet: ["Sin TACC", "Vegetariano"],
    description:
      "Una ensalada Caprese clásica con tomates frescos, mozzarella de búfala, hojas de albahaca y aceite de oliva.",
    image:
      "https://www.comedera.com/wp-content/uploads/2017/07/ensalada-caprese.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de frutas",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una refrescante ensalada de frutas variadas como sandía, melón, uvas y piña, con un toque de menta fresca.",
    image:
      "https://cdn0.recetasgratis.net/es/posts/7/6/4/ensalada_de_frutas_para_diabeticos_57467_600_square.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de garbanzos",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada de garbanzos con pepino, tomate, cebolla roja, pimiento y aderezo de yogur y comino.",
    image:
      "https://deliciaskitchen.com/wp-content/uploads/2021/08/ensalada-de-garbanzos-veraniega.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de aguacate",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada de aguacate con tomate cherry, cilantro, cebolla roja y aliño de limón y aceite de oliva.",
    image:
      "https://cdn.colombia.com/gastronomia/2011/07/26/ensalada-de-aguacate-y-tomate-1496.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada mixta",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada mixta clásica con lechuga, tomate, zanahoria, pepino y aderezo de vinagreta casera.",
    image: "https://imag.bonviveur.com/imagen-de-la-ensalada-mixta.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de zanahoria rallada",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada fresca de zanahoria rallada con pasas, nueces, cilantro y aderezo de limón y miel.",
    image:
      "https://www.comedera.com/wp-content/uploads/2021/11/ensalada-de-zanahoria.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de tomate y mozzarella",
    diet: ["Vegetariano"],
    description:
      "Una ensalada clásica de tomate y mozzarella con hojas de albahaca fresca y aceite de oliva virgen extra.",
    image:
      "https://www.solucionesparaladiabetes.com/magazine-diabetes/wp-content/uploads/tomate-mozzarella-696x464.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada Waldorf",
    diet: ["Vegetariano"],
    description:
      "Una ensalada Waldorf tradicional con apio, manzanas, uvas, nueces y aderezo de yogur y mayonesa.",
    image:
      "https://www.paulinacocina.net/wp-content/uploads/2021/11/Ensalada-waldorf.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de pepino y yogur",
    diet: ["Vegetariano"],
    description:
      "Una ensalada refrescante de pepino con yogur griego, ajo, eneldo y un toque de jugo de limón.",
    image:
      "https://recetas.mx/wp-content/uploads/2019/03/ensalada-raita-con-yogur-1500x850.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de remolacha",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una colorida ensalada de remolacha asada con rúcula, queso de cabra, nueces y aderezo de vinagreta balsámica.",
    image:
      "https://www.ensaladade.net/wp-content/uploads/2020/04/plato-ensalada-de-remolacha.png",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de pasta",
    diet: ["Vegetariano"],
    description:
      "Una ensalada de pasta fría con vegetales mixtos, aceitunas, queso feta y aderezo de aceite y vinagre.",
    image:
      "https://www.paulinacocina.net/wp-content/uploads/2022/03/ensalada-de-pasta-receta.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada griega",
    diet: ["Vegetariano"],
    description:
      "Una ensalada griega clásica con pepino, tomate, cebolla roja, aceitunas kalamata y queso feta.",
    image:
      "https://www.paulinacocina.net/wp-content/uploads/2022/03/ensalada-de-pasta-receta.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de col rizada",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una saludable ensalada de col rizada con manzanas, nueces, pasas y aderezo de vinagreta de mostaza y miel.",
    image:
      "https://images-gmi-pmc.edge-generalmills.com/c362415b-4428-40c3-88c5-57f4d6b7d1d6.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de lentejas",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una satisfactoria ensalada de lentejas con vegetales, cilantro, limón y un aliño de aceite de oliva y comino.",
    image:
      "https://images.hola.com/imagenes/cocina/recetas/20200701171317/ensalada-lentejas-thermomix/0-842-785/ensalada-lentejas-thermomix-t.jpg?tx=w_680",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de garbanzos y aguacate",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una combinación deliciosa de garbanzos, aguacate, tomates cherry, cebolla roja y aderezo de limón y cilantro.",
    image:
      "https://elmundoenrecetas.s3.amazonaws.com/uploads/recipe/picture/623/ensalada_de_garbanzos_y_aguacate_2.webp",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de patatas",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una ensalada clásica de patatas con mayonesa, apio, cebolla, mostaza, eneldo y sal y pimienta al gusto.",
    image: "https://cocinaabuenashoras.com/files/ensalada-de-patatas.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de rúcula y parmesano",
    diet: ["Vegetariano"],
    description:
      "Una ensalada simple pero sabrosa de rúcula fresca, queso parmesano en láminas y aderezo de limón y aceite de oliva.",
    image: "https://queapetito.com/wp-content/uploads/2019/05/rucula-1.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
  {
    name: "Ensalada de naranja y aguacate",
    diet: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
    description:
      "Una refrescante ensalada de naranja, aguacate, espinacas baby y aderezo de vinagreta de naranja y miel.",
    image:
      "https://okdiario.com/img/2018/08/18/receta-de-ensalada-de-aguacate-y-naranja-1.jpg",
    initial_price: 10,
    discount: 0,
    final_price: 10,
    status: true,
    total_score: 0,
    category: "ensalada",
  },
];



module.exports = {
  foods
}