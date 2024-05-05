import {create} from 'zustand';

export type ProductType = {
  id: number;
  title: string;
  price: number;
}

type ProductStore = {
  products: ProductType[]; 
  addProduct: (nouveauProduit: ProductType) => void;
  deleteProduct: (id: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (nouveauProduit) => set((state) => ({ products: [...state.products, nouveauProduit] })),
  deleteProduct: (id) => set((state) => ({ products: state.products.filter((produit) => produit.id !== id) })),
}));