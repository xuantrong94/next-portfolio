import { Dispatch, SetStateAction, createContext } from 'react';

export interface MyContextProps {
  categoriesContext: never[];
  setCategoriesContext: Dispatch<SetStateAction<never[]>>;
  productsContext: never[];
  setProductsContext: Dispatch<SetStateAction<never[]>>;
}

export const Context = createContext<MyContextProps>({
  categoriesContext: [],
  setCategoriesContext: () => {},
  productsContext: [],
  setProductsContext: () => {},
});
