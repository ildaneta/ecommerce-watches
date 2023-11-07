import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { products } from '../api/products';
import { ProductItem } from '../types/product';
import MMKVStorage from '../mmkv/zustandStorage';

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

const storeName = '@ecommerce:product-cart-store';

export const useProductCartStore = create<CartState & Actions>()(
  persist(
    (set) => ({
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
    }),
    {
      name: storeName,
      storage: createJSONStorage(() => MMKVStorage(storeName)),
    }
  )
);
