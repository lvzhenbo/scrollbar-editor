<script setup lang="ts">
  import { zhCN, dateZhCN, darkTheme, lightTheme, type GlobalTheme } from 'naive-ui';
  import hljs from 'highlight.js/lib/core';
  import css from 'highlight.js/lib/languages/css';
  import { switchThemeKey } from './utils';

  hljs.registerLanguage('css', css);

  const osThemeRef = useOsTheme();
  const theme = ref<GlobalTheme>(lightTheme);

  const switchTheme = ref(false);

  onMounted(() => {
    setTheme();
  });

  const setTheme = (val?: boolean) => {
    if (val === true) {
      theme.value = darkTheme;
    } else if (val === false) {
      theme.value = lightTheme;
    } else {
      theme.value = osThemeRef.value === 'dark' ? darkTheme : lightTheme;
    }
  };

  watch(
    osThemeRef,
    (val) => {
      if (val === 'dark') {
        switchTheme.value = true;
        setTheme(true);
      } else {
        switchTheme.value = false;
        setTheme(false);
      }
    },
    { immediate: true },
  );

  watch(switchTheme, (val) => {
    setTheme(val);
  });

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
