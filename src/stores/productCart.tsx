import { create } from 'zustand';
import { products } from '../api/products';

type CartState = {
  cart: Array<ProductItem>;
  availableItems: Array<ProductItem>;
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
