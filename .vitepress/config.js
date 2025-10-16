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
          { text: '使用指南', link: '/project/usingCommodation' },
          { text: '团队介绍', link: '/project/team' }
        ]
      },
      {
        text: '第一阶段',
        collapsed: true,
        items: [
          { text: '功能概述', link: '/project/phase1/summarize' },
          { text: '技术实现', link: '/project/phase1/techcologicalRealization' },
        ]
      },
      {
        text: '第二阶段',
        collapsed: true,
        items: [
          { text: '功能概述', link: '/project/phase2/summarize' },
          { text: '技术实现', link: '/project/phase2/techcologicalRealization' },
        ]
      },
      {
        text: '第三阶段',
        collapsed: true,
        items: [
          { text: '功能概述', link: '/project/phase3/summarize' },
          { text: '技术实现', link: '/project/phase3/techcologicalRealization' },
        ]
      },
      {
        text: '主要功能概述',
        collapsed: true,
        items: [
          { text: '前端', link: 'project/function/frontend' },
          { text: '后端', link: 'project/function/backend' }
        ]
      },
      {
        text: '项目演示',
        items:[
          { text: 'AI日报', link: '/demo/ai-report' }
        ]
      },
      {
        text: '更多',
        items: [
          { text: '项目文档', link: '/project' },
        ]
      },
      {
        text: 'VitePress默认侧边栏配置实例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
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
