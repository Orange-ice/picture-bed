import { action, makeObservable, observable } from 'mobx';
import { UserStore } from '@/stores/user';
import { Auth } from '@/models/auth';

const User = new UserStore();

class AuthStore {
  values = {
    username: '',
    password: ''
  };

  constructor () {
    makeObservable(this, {
      values: observable,
      setUsername: action,
      setPassword: action,
      login: action,
      register: action,
      logout: action
    });
  }

  setUsername (username: string) {
    this.values.username = username;
  }

  setPassword (password: string) {
    this.values.password = password;
  }

  login () {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password).then(user => {
        User.setCurrentUser();
        resolve(user);
      }).catch((error) => {
        User.resetCurrentUser();
        reject(error);
      });
    });
  }

  register () {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password).then(user => {
        User.setCurrentUser();
        resolve(user);
      }).catch((error) => {
        User.resetCurrentUser();
        reject(error);
      });
    });
  }

  logout () {
    Auth.logout();
    User.resetCurrentUser();
  }
}

export { AuthStore };
