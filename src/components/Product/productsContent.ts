interface iProductsType {
  id: number;
  title: string;
  description: string;
  imgURL: string;
}

export const ProductList = [
  {
    id: 0,
    title: 'Residencial',
    description: 'Atuando na construção de casas no litoral norte baiano, e reforma de apartamentos de alto padrão.',
    imgURL: 'iconeResidencial.svg'
  },
  {
    id: 1,
    title: 'Saúde',
    description: 'Atuando na construção e reforma de clínicas e hospitais.',
    imgURL: 'iconeSaude.svg'
  },
  {
    id: 2,
    title: 'Comercial',
    description: 'Atuando na construção e reforma de lojas em shoppings, restaurantes, galpões e salas corporativas.',
    imgURL: 'iconeComercial.svg'
  }
] as iProductsType[]