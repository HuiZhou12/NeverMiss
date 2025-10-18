// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import TeamPage from './components/Team.vue'
import Layout from './components/Layout.vue'
import browerinfo from './js/browerinfo'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('TeamPage', TeamPage)
    app.component('Layout', Layout)
    app.config.globalProperties.$browerinfo = browerinfo.browserInfo
  }
}
