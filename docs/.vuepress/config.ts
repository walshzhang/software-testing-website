import {defaultTheme, defineUserConfig} from "vuepress";

export default defineUserConfig({
  base: '/software-testing-website/',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '讲义',
        link: '/lecture/'
      }
    ],
    sidebar: {
      '/lecture/': [
        {
          text: '课程讲义',
          children: [
            '/lecture/README.md',
            '/lecture/基本概念.md',
            '/lecture/生命周期中的测试.md',
            '/lecture/基于需求的测试.md',
            '/lecture/基于代码的测试.md',
            '/lecture/单元测试.md',
            '/lecture/JUnit5.md',
            '/lecture/Mockito.md',
            '/lecture/集成测试.md',
            '/lecture/系统测试.md',
            '/lecture/性能测试.md',
            '/lecture/基于属性的测试.md'
          ]
        }
      ],
    },
    repo: 'https://gitee.com/tcu-se/software-testing-website'
  }),
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '软件测试课程网站',
      description: '软件测试课程'
    }
  },
  extendsMarkdown: md => {
    md.use(require('markdown-it-katex'))
    md.linkify.set({fuzzyEmail: false})
  }
})