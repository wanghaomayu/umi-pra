export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
    // 该插件继承了常用的一些进阶功能
      antd: true
    }]
  ],
  routes: [{
    path: '/',
    component: './HelloWorld'
  }],
}