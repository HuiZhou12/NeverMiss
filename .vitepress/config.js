import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "智群闪醒",
  lang: "zh-CN",
  description: "一个放置项目markdown文档的地方",
  head: [['link', { rel: 'icon', href: '/assets/AI设计logo2.png' }]],
  //最后更新于
  lastUpdated: true,
  themeConfig: {
    //启动搜索功能
    search: {
      provider: 'local',
      options:{
        miniSearch:{
          //搜索引擎配置
        },
        //本地化搜索框
        locales: {
            zh: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换'
                  }
                }
              }
            }
          }
      }
    },
    //增加可编辑选项
    editLink:{
      pattern: 'https://github.com/HuiZhou12/NeverMiss/tree/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '例子', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '项目介绍', link: '/project/overview' },
          {text: '快速开始', link: '/project/quickStart'},
          { text: '使用指南', link: '/project/usingCommodation' },
          { text: '团队介绍', link: '/project/team' }
        ]
      },
      {
        text: '核心功能',
        collapsed: true,
        items: [
          { text: '前端', link: 'project/function/frontend' },
          { text: '后端', link: 'project/function/backend' }
        ]
      },
      {
        text: '开发相关',
        items: [
          { text: '可行性分析报告', link: 'project/more/feasibility-report' },
          { text: "api文档", link: 'project/more/api-documentation' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HuiZhou12/NeverMiss' }
    ],
    footer:{
      message: '重庆财经学院',
      copyright: 'Copyright © 2025 伊人为郁 <a href="https://github.com/HuiZhou12">GitHub</a>'
    }
  }
})
