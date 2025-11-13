import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "智群闪醒-聚要提效",
  lang: "zh-CN",
  description: "一个面向信息聚合与会议纪要的智能化项目文档中心",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  // 显示最后更新时间
  lastUpdated: true,

  themeConfig: {
    outline: [2, 3],
    lastUpdatedText: '上次更新于',
    lastUpdatedTransform: (timestamp) => {
      return new Date(timestamp).toLocaleString('zh-CN', { hour12: false });
    },
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '没有找到匹配结果',
                resetButtonTitle: '清空搜索',
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

    editLink: {
      pattern: 'https://github.com/HuiZhou12/NeverMiss/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '项目介绍', link: '/project/overview' },
      { text: '文档中心', link: '/project/more/feasibility-report' },
      { text: '项目展示', link: '/showcase' }
    ],

    // 侧边栏
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
        text: '项目文档',
        items: [
          { text: '可行性分析报告', link: '/project/projectDocuments/feasibility-report' },
          { text: '需求分析报告', link: '/project/projectDocuments/requirement-analysis' },
          { text: '系统设计说明书', link: '/project/projectDocuments/system-design' },
          { text: '接口文档',link: '/project/projectDocuments/interface-documentation' },
          { text: '用户手册', link: '/project/projectDocuments/user-manual' }
        ]
      },
      {
        text: '核心功能',
        collapsed: true,
        items: [
          { text: '前端功能模块', link: '/project/function/frontend/overview' },
          { text: '后端功能模块', link: '/project/function/backend/overview' },
          { text: 'AI 智能摘要模块', link: '/project/function/ai' },
          { text: '数据存储与管理', link: '/project/function/database' }
        ]
      },
      {
        text: '开发文档',
        collapsed: true,
        items: [
          { text: '项目结构说明', link: '/project/dev/structure' },
          { text: '开发规范', link: '/project/dev/standard' },
          { text: '更新日志', link: '/project/dev/changelog' }
        ]
      }
    ],

    // 页脚
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HuiZhou12/NeverMiss' }
    ],

    footer: {
      message: '重庆财经学院 创新创业孵化项目',
      copyright: '© 2025 伊人为郁 · <a href="https://github.com/HuiZhou12">GitHub</a>'
    }
  }
})
