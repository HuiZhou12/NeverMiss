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
    avatar: 'https://avatars.githubusercontent.com/u/238691865?v=4',
    title: '前端开发',
    name: '1668408381-alt',
    links: [
      { icon: 'github', link: 'https://github.com/1668408381-alt' },
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/238673402?v=4',
    title: '前端开发',
    name: 'y14070228-ops',
    links: [
      { icon: 'github', link: 'https://github.com/y14070228-ops' },
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/238811297?v=4',
    title: '前端开发',
    name: 'Heiqilong',
    links: [
      { icon: 'github', link: 'https://github.com/Heiqilong' },
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
.VPTeamPage{
  margin: 50px 0;
}
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
}
:deep(.container){
  justify-content: center; /* 居中对齐 */
}
:deep(.item){ 
    text-align: center; /* 文字居中 */
    :hover{
      transform: scale(1.05); /* 鼠标悬停时放大 */
      transition: transform 0.3s; /* 添加过渡效果 */
    }
}
</style>
