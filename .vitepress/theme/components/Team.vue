<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

// 一定要定义成 const 且是数组（即使为空）
const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/149386288?v=4',
    name: 'HuiZhou12',
    title: '项目负责人',
    links: [
      { icon: 'github', link: 'https://github.com/HuiZhou12' },
      { icon: 'discord', link: 'https://discord.com/channels/@belief_123' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/40024027?v=4',
    name: 'Test',
    title: '你好',
    links: [
      { icon: 'bilibili', link: 'https://github.com/antfu' },
      { icon: 'twitter', link: 'https://twitter.com/antfu7' }
    ]
  }
]
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle class="vp-team-page">
      <template #title>团队成员</template>
      <template #lead>这是一个充满活力和创造力的团队，我们致力于通过技术创新实现更高效的会议记录和管理。</template>
    </VPTeamPageTitle>
    <div class="team">
      <VPTeamMembers :members="members" class="team-item"/>
    </div>
  </VPTeamPage>
</template>
<style scoped lang="scss">
.vp-team-page {
    font-family: 'Punctuation SC', 'Inter', ui-sans-serif, system-ui,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  text-align: center;
}
.team {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  justify-content: center; /* 居中对齐 */
  gap: 2rem; /* 每个成员之间的间距 */
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
}
:deep(.item){ 
    text-align: center; /* 文字居中 */
    :hover{
      transform: scale(1.05); /* 鼠标悬停时放大 */
      transition: transform 0.3s; /* 添加过渡效果 */
    }

}
</style>
