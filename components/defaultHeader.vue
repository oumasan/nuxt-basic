<script setup lang="ts">
const route = useRoute()

const links = [
[{
  label: '',
  icon: 'i-heroicons-home',
  to: '/'
}]
,[{
  label: 'Page1',
  icon: 'i-heroicons-home',
  to: '/page1'
}, {
  label: 'Page2',
  icon: 'i-heroicons-chart-bar',
  to: `/page2`
}]
]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

