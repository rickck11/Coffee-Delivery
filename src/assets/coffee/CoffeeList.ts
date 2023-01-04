interface Coffee {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  firstTag?: string;
  secondTag?: string;
  thirdTag?: string;
  price: number;
}

export const CoffeeList: Coffee[] = [
  {
    id: "8711a199-76d3-4f4f-95fc-bc2f07d16025",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210564476-bd715ea3-c67d-457a-9842-e17617d54703.svg",
    firstTag: "TRADICIONAL",
    price: 9.9,
  },
  {
    id: "ea1691b2-efc4-41a6-b05d-52dbc89d598b",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicionalídos",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210564955-4e7898dd-a72f-4a91-abf3-c2249dcca7f0.svg",
    firstTag: "TRADICIONAL",
    price: 9.9,
  },
  {
    id: "0613fe18-9bf5-499c-b841-f2ece46a6b39",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210565329-312986e8-cf09-4050-8266-4e3b01d71b07.svg",
    firstTag: "TRADICIONAL",
    price: 9.9,
  },
  {
    id: "5f3fc3f7-5356-40fe-a846-97ac53e2884c",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210566683-f5f8e8ac-8070-44a8-9ed6-f703aa21b9a9.svg",
    firstTag: "TRADICIONAL",
    secondTag: "COM LEITE",
    price: 9.9,
  },
  {
    id: "dad54c60-c20c-48b9-9b39-7c86e3b3247c",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210566983-2adc6751-0411-44e2-be60-9527b328c7ed.svg",
    firstTag: "TRADICIONAL",
    secondTag: "COM LEITE",
    price: 9.9,
  },
  {
    id: "1584bce0-4fab-492f-9f1a-85636189e626",
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210567092-0e3a827c-dc47-4db4-8aef-98723fd912bb.svg",
    firstTag: "TRADICIONAL",
    secondTag: "COM LEITE",
    price: 9.9,
  },
  {
    id: "9aa53c2c-71da-4173-9a45-2798b3d40408",
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210567456-9aa53c2c-71da-4173-9a45-2798b3d40408.svg",
    firstTag: "TRADICIONAL",
    secondTag: "COM LEITE",
    price: 9.9,
  },
  {
    id: "e1a7ca57-c643-4fb9-bb07-c791021ed8bc",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210567845-e1a7ca57-c643-4fb9-bb07-c791021ed8bc.svg",
    firstTag: "TRADICIONAL",
    secondTag: "COM LEITE",
    price: 9.9,
  },
  {
    id: "17b60ba9-6627-4c04-a8e0-6ca4b6e13fe2",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210567850-17b60ba9-6627-4c04-a8e0-6ca4b6e13fe2.svg",
    firstTag: "ESPECIAL",
    secondTag: "COM LEITE",
    price: 9.9,
  },
  {
    id: "24718152-e38b-4cf6-ae4e-fedb48d1473e",
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210567854-24718152-e38b-4cf6-ae4e-fedb48d1473e.svg",
    firstTag: "ESPECIAL",
    secondTag: "ALCOÓLICO",
    thirdTag: "GELADO",
    price: 9.9,
  },
  {
    id: "5eeeaece-38da-41ba-af85-a40ed243764f",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210567840-5eeeaece-38da-41ba-af85-a40ed243764f.svg",
    firstTag: "ESPECIAL",
    price: 9.9,
  },
  {
    id: "aeafe1b1-535c-4301-893d-26add85b8f99",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210567848-aeafe1b1-535c-4301-893d-26add85b8f99.svg",
    firstTag: "ESPECIAL",
    price: 9.9,
  },
  {
    id: "4f86fb97-749f-473c-8073-118e39519fe8",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    imageSrc:
      "https://user-images.githubusercontent.com/43411893/210567844-4f86fb97-749f-473c-8073-118e39519fe8.svg",
    firstTag: "ESPECIAL",
    secondTag: "ALCOÓLICO",
    price: 9.9,
  },
];
