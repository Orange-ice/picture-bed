## React 图床应用

基于 React + TypeScript + mobx + Serverless 实现的一个图床应用。 

Serverless服务用的 [Leancloud](https://leancloud.cn)

`src/models/auth.ts` 文件里的 serverless 信息需要替换为你自己的：

```js
AV.init({
  appId: 'your-appId',
  appKey: 'your-appKey',
  serverURL: 'https://your-serverURL.leanapp.cn',
});
```

<img src="https://bed.icanfly.site/ceyEacE2asWjbp5MGk4dBWrISuCNijam/Snipaste_2022-05-19_15-39-21.png"/>