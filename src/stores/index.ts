import { createContext, useContext } from 'react';
import { AuthStore } from '@/stores/auth';

const context = createContext({
  AuthStore: new AuthStore()
});

export const useStores = () => useContext(context)
