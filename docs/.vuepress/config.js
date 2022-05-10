const {defaultTheme} = require('vuepress')
module.exports = {
  base: '/software-testing-website/',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '讲义',
        link: '/lecture'
      }
    ]
  })
}