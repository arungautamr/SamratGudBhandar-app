import { atom } from 'recoil';

// Cart atom - stores cart items
export const cartAtom = atom({
  key: 'cart',
  default: [],
});

// Products atom - stores all products
export const productsAtom = atom({
  key: 'products',
  default: [
    {
      id: 6,
      name: 'Desi Shuddh Gud(Simple without any mixc)',
      weight: '500g',
      price: '₹200',
      description: 'Classic jaggery nuggets made from pure sugarcane juice',
      image: '/sadagud.jpeg',
    },
    {
      id: 5,
      name: 'Tilli (Sesame seeds ) Mix Gud',
      weight: '500g',
      price: '₹220',
      description: 'Crunchy jaggery bites coated with sesame seeds for a traditional taste',
      image: '/tilliGud.jpeg',
    },
    
    {
      id: 7,
      name: 'Premium Box',
      weight: '500g',
      price: '₹250',
      description: 'Premium mixed dry-fruit jaggery bites packed for gifting and daily snacking',
      image: '/primiumbox.jpeg',
    },
    {
      id: 8,
      name: 'Premium Packet',
      weight: '500g',
      price: '₹250',
      description: 'Premium packet all type like sada, tilli and mixed dry-fruit jaggery bites packed for gifting and daily snacking',
      image: '/primumPacket.jpeg',
    },
    {
      id: 1,
      name: 'Premium Jaggery Pieces',
      weight: '500g',
      price: '₹250',
      description: 'Golden-brown organic jaggery pieces, perfect for tea and traditional sweets',
      image: '/jaggery-product.jpg',
    },
    // {
    //   id: 2,
    //   name: 'Jaggery Powder',
    //   weight: '1kg',
    //   price: '₹480',
    //   description: 'Fine jaggery powder for baking, cooking, and beverages',
    //   image: '/jaggery-product.jpg',
    // },
    {
      id: 3,
      name: 'Raw Jaggery Blocks',
      weight: '2kg',
      price: '₹900',
      description: 'Traditional raw jaggery blocks for wholesale buyers and families',
      image: '/jaggery-product.jpg',
    },
    {
      id: 4,
      name: 'Organic Gur',
      weight: '750g',
      price: '₹380',
      description: 'Pure organic gur with no preservatives or additives',
      image: '/jaggery-product.jpg',
    },
  ],
});

// Theme atom - stores theme preference
export const themeAtom = atom({
  key: 'theme',
  default: 'light',
});

// Loading atom - stores loading state
export const loadingAtom = atom({
  key: 'loading',
  default: false,
});

// Filter atom - stores active filters
export const filterAtom = atom({
  key: 'filter',
  default: 'all',
});

// Search query atom
export const searchQueryAtom = atom({
  key: 'searchQuery',
  default: '',
});
