import { defineConfig } from 'vitepress'

const keywords = 'Web'

export default defineConfig({
  base: '/seo/',
  title: 'Seo',
  lang: 'zh-CN',
  description: 'Seo',
  head: [
    ['meta', { name: 'author', content: 'xiaofei' }],
    [
      'meta',
      {
        name: 'keywords',
        content: keywords
      }
    ],
    [
      'meta',
      {
        name: 'description',
        content: keywords
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outlineTitle: '本页导航',
    lastUpdatedText: '上次更新时间',
    socialLinks: [],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      {
        text: '首页',
        link: '/'
      }
    ],

    footer: {
      message: 'ISC Licensed.',
      copyright: 'Copyright © 2023-present vayo'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
