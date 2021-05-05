import { observable, action, makeObservable } from 'mobx';
import { Auth } from '@/models/auth';
import { User } from 'leancloud-storage';

class UserStore {
  currentUser: null | User = null;
  constructor () {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      resetCurrentUser: action
    })
  }

  setCurrentUser () {
    this.currentUser = Auth.getCurrentUser()
  }

  resetCurrentUser () {
    this.currentUser = null
  }
}

export default new UserStore();
