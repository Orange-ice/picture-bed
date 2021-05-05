import { createContext, useContext } from 'react';
import AuthStore from '@/stores/auth';
import UserStore from '@/stores/user';
import ImageStore from '@/stores/image';

const context = createContext({
  AuthStore,
  UserStore,
  ImageStore
});

export const useStores = () => useContext(context);
