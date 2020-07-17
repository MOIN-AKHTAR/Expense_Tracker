import { createContext } from 'react';
const initialState = {
    transactions: [],
    addTransaction: () => { },
    removeTransaction: () => { }
}
export const Context = createContext(initialState);
export const Provider = Context.Provider;


