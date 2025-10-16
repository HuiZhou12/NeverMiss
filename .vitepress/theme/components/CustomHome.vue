<script setup>
import DefaultTheme from 'vitepress/theme'
import Team from './Team.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <div class="VPHome">
      <VPHomeHero />
      <VPHomeFeatures />
      <Team />
    </div>
  </Layout>
</template>
