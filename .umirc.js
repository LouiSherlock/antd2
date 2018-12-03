// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'ProMy',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],

  ],
  history: 'hash', //启用hash路由， 部署到网络虚拟主机需设置，否则路由无法生效，
  theme: {
    'primary-color': '#e45c5b',   //配置主题antd, 详情查看:https://ant.design/docs/react/customize-theme-cn
  },
};

//修改该文件的任意配置，可能都需重启项目 npm start
