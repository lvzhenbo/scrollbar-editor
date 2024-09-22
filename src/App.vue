<script setup lang="ts">
  import { zhCN, dateZhCN, useOsTheme, darkTheme, lightTheme } from 'naive-ui';
  import hljs from 'highlight.js/lib/core';
  import css from 'highlight.js/lib/languages/css';
  import { osThemeKey, switchThemeKey } from './utils';

  hljs.registerLanguage('css', css);

  const osThemeRef = useOsTheme();
  const theme = computed(() => {
    return osThemeRef.value === 'dark' && switchTheme.value ? darkTheme : lightTheme;
  });
  const switchTheme = ref(false);
  watch(
    osThemeRef,
    (val) => {
      if (val === 'dark') {
        switchTheme.value = true;
      } else {
        switchTheme.value = false;
      }
    },
    { immediate: true },
  );

  provide(osThemeKey, osThemeRef);
  provide(switchThemeKey, switchTheme);
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme :hljs>
    <NMessageProvider>
      <Content />
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped></style>
