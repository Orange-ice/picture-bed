import AV, { User } from 'leancloud-storage';

AV.init({
  appId: 'GAJxuCjsdywhYFqlR64iCOvf-gzGzoHsz',
  appKey: 'usfV5ynBSfvmlTovdESBFxLb',
  serverURL: 'https://please-replace-with-your-customized.domain.com'
});

const Auth = {
  register (username: string, password: string) {
    const user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then((loginUser) => {
        resolve(loginUser);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  login (username: string, password: string) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then((loginUser) => {
        resolve(loginUser);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  logout () {
    User.logOut()
  },
  getCurrentUser () {
    return User.current()
  }
};

export { Auth };
