import { action, makeObservable, observable } from 'mobx';

class AuthStore {
  isLogin = false
  isLoading = false
  values = {
    username: '',
    password: ''
  }

  constructor () {
    makeObservable(this, {
      values: observable,
      isLogin: observable,
      isLoading: observable,
      setLogin: action,
      setUsername: action,
      setPassword: action,
      login: action,
      register: action,
      logout: action
    })
  }

  setLogin (isLogin: boolean) {
    this.isLogin = isLogin
  }

  setUsername (username: string) {
    this.values.username = username
  }

  setPassword (password: string) {
    this.values.password = password
  }

  login () {}

  register () {}

  logout () {}
}

export { AuthStore }
