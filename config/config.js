export default {
  publicPath: "./",
  plugins: [
    [
      "umi-plugin-react",  // antd可按需加载
      {
        antd: true,
        dva: true
      }
    ]
  ],
  routes: [
    {
      path: '/login',
      component: './login'
    },
    {
      path: '/',
      component: '../layouts',
      routes: [
        {
          path: '/',
          component: './index'
        },
        {
          path: '/sys',
          component: '../layouts/model/sys',
          routes: [
            {
              path: '/sys',
              component: './sys'
            }
          ]
        },
        {
          component: './404'
        }
      ]
    },
    {
      component: './404'
    }

  ],
  proxy: {
    "/gateway": {
      target: "http://117.78.42.201:20000",
      changeOrigin: true
    }
  }
}