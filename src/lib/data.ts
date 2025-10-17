import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone Pro Max',
    price: 1299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    description: 'Smartphone premium com câmera avançada e processador de última geração.',
    rating: 4.8,
    reviews: 1247
  },
  {
    id: '2',
    name: 'Camiseta Premium Cotton',
    price: 89.90,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Camiseta 100% algodão com corte moderno e acabamento premium.',
    rating: 4.5,
    reviews: 892
  },
  {
    id: '3',
    name: 'Livro: Design Thinking',
    price: 45.90,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    description: 'Guia completo sobre metodologias de design thinking para inovação.',
    rating: 4.7,
    reviews: 324
  },
  {
    id: '4',
    name: 'Fones Bluetooth Premium',
    price: 299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    description: 'Fones wireless com cancelamento de ruído e qualidade de áudio superior.',
    rating: 4.6,
    reviews: 756
  },
  {
    id: '5',
    name: 'Jaqueta Jeans Vintage',
    price: 159.90,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
    description: 'Jaqueta jeans com lavagem vintage e corte clássico atemporal.',
    rating: 4.4,
    reviews: 445
  },
  {
    id: '6',
    name: 'Luminária LED Inteligente',
    price: 129.90,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    description: 'Luminária com controle por app, múltiplas cores e dimmer ajustável.',
    rating: 4.3,
    reviews: 267
  },
  {
    id: '7',
    name: 'Tênis Running Pro',
    price: 249.90,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Tênis profissional para corrida com tecnologia de amortecimento avançada.',
    rating: 4.9,
    reviews: 1834
  },
  {
    id: '8',
    name: 'Livro: JavaScript Moderno',
    price: 67.90,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop',
    description: 'Guia completo de JavaScript ES6+ com exemplos práticos e projetos.',
    rating: 4.8,
    reviews: 612
  },
  {
    id: '9',
    name: 'Vaso Decorativo Cerâmica',
    price: 79.90,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    description: 'Vaso artesanal em cerâmica com design minimalista e elegante.',
    rating: 4.2,
    reviews: 189
  },
  {
    id: '10',
    name: 'Relógio Smartwatch',
    price: 399.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    description: 'Smartwatch com monitoramento de saúde, GPS e bateria de longa duração.',
    rating: 4.5,
    reviews: 923
  },
  {
    id: '11',
    name: 'Moletom Oversized',
    price: 119.90,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    description: 'Moletom com corte oversized, tecido macio e design urbano moderno.',
    rating: 4.6,
    reviews: 534
  },
  {
    id: '12',
    name: 'Halteres Ajustáveis',
    price: 189.90,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Set de halteres com peso ajustável de 2kg a 20kg cada.',
    rating: 4.7,
    reviews: 378
  }
];

export const categories = [
  { id: 'all', name: 'Todos os Produtos', count: products.length },
  { id: 'electronics', name: 'Eletrônicos', count: products.filter(p => p.category === 'electronics').length },
  { id: 'clothing', name: 'Roupas', count: products.filter(p => p.category === 'clothing').length },
  { id: 'books', name: 'Livros', count: products.filter(p => p.category === 'books').length },
  { id: 'home', name: 'Casa & Decoração', count: products.filter(p => p.category === 'home').length },
  { id: 'sports', name: 'Esportes', count: products.filter(p => p.category === 'sports').length }
];