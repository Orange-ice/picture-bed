import { createContext, useContext } from 'react';
import AuthStore from '@/stores/auth';
import UserStore from '@/stores/user';

const context = createContext({
  AuthStore,
  UserStore
});

export const useStores = () => useContext(context);
