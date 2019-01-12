export default {
  singular: true,
  plugins: [
    'umi-plugin-react', {
    // 该插件继承了常用的一些进阶功能
    }
  ],
  routes: [{
    path: '/',
    component: './HelloWorld'
  }],
}