import AV, { User } from 'leancloud-storage';

AV.init({
  appId: 'your-appId',
  appKey: 'your-appKey',
  serverURL: 'https://your-serverURL.leanapp.cn'
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
    User.logOut();
  },
  getCurrentUser () {
    return User.current();
  }
};

const Uploader = {
  add (file: File | null, filename: string) {
    const item = new AV.Object('Image');
    const avFile = new AV.File(filename, file);
    item.set('filename', filename);
    item.set('owner', User.current());
    item.set('url', avFile);
    return new Promise((resolve, reject) => {
      item.save().then((serverFile) => {
        resolve(serverFile);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  find ({ page = 0, limit = 10 }) {
    const query = new AV.Query('Image');
    query.include('owner');
    query.include('createAt');
    query.limit(limit);
    query.skip(page * limit);
    query.descending('createdAt');
    query.equalTo('owner', User.current());
    return new Promise((resolve, reject) => {
      query.find().then(results => {
        resolve(results)
      }).catch((error) => {
        reject(error)
      })
    })
  }
};

export { Auth, Uploader };
