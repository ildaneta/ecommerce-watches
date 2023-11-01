import { create } from 'zustand';
import { products } from '../api/products';
import { ProductItem } from '../types/product';

type CartState = {
  cart: ProductItem[];
  availableItems: ProductItem[];
};

type Actions = {
  addToCart: (products: ProductItem) => void;
  removeFromCart: (id: string) => void;
  setAvailableItems: (products: Array<ProductItem>) => void;
};

const initialState = {
  cart: [],
  availableItems: products,
};

export const useProductCartStore = create<CartState & Actions>()((set) => ({
  ...initialState,

  addToCart: (products) => {
    set((state) => ({
      cart: [...state.cart, products],
    }));
  },

  setAvailableItems: (products) => {
    set((state) => ({
      ...state,
      availableItems: products,
    }));
  },

  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    }));
  },
}));
