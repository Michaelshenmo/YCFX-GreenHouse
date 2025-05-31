import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "宜川附校喻园花房文档",
  description: "YCFX Greenhouse Docs",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the <a href="https://github.com/Michaelshenmo/YCFX-GreenHouse/blob/docs/LICENSE">GPL 3.0</a> License.',
      copyright: 'Copyright © 2025 <a href="https://github.com/Michaelshenmo">HiMichael0820</a>'
    },

    nav: [
      { text: '主页', link: '/', activeMatch: '^/$' }, 
      { text: '文档', link: '/docs/', activeMatch: '^/docs/' }
    ],

    sidebar: [
      {
        text: '欢迎',
        base: '/docs',
        items: [
          { text: '写在前面', link: '/' },
          { text: '提交文档', link: '/submit' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/Michaelshenmo/YCFX-GreenHouse/edit/docs/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Michaelshenmo/YCFX-GreenHouse' }
    ]
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    }
  }
})
