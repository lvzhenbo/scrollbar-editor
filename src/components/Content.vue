<template>
  <NLayout content-class="min-h-screen">
    <NLayoutHeader bordered>
      <div class="p-4 flex justify-between">
        <div class="flex items-center">
          <div>
            <img alt="Naive logo" src="../assets/logo.svg" width="25" height="25" />
          </div>
          <div class="ml-4">
            <NGradientText size="24"> 滚动条编辑器 </NGradientText>
          </div>
        </div>
        <div class="flex items-center">
          <NSwitch v-model:value="switchTheme" size="large">
            <template #checked-icon>
              <NIcon :component="WeatherMoon16Regular" />
            </template>
            <template #unchecked-icon>
              <NIcon :component="WeatherSunny16Regular" />
            </template>
          </NSwitch>
        </div>
      </div>
    </NLayoutHeader>
    <NLayoutContent
      content-class="p-4"
      class="!top-[4.5rem] !bottom-16"
      position="absolute"
      :native-scrollbar="false"
    >
      <NGrid x-gap="40" :cols="8" item-responsive responsive="screen">
        <NGi offset="0 l:1 xl:2" span="8 m:4 l:3 xl:2">
          <div class="min-w-48">
            <NH2 prefix="bar">
              <NText type="primary"> 滚动条设置 </NText>
            </NH2>
            <NForm label-placement="left" label-width="auto" label-align="left">
              <NFormItem label="选择器">
                <NInput v-model:value="settings.selector" @blur="handleBlur" />
              </NFormItem>
              <NFormItem label="滑块颜色">
                <NColorPicker v-model:value="settings.thumbColor" />
              </NFormItem>
              <NFormItem label="轨道颜色">
                <NColorPicker v-model:value="settings.trackColor" />
              </NFormItem>
              <NFormItem label="交汇处颜色">
                <NColorPicker v-model:value="settings.cornerColor" />
              </NFormItem>
              <NFormItem label="竖向宽度">
                <NInputNumber v-model:value="settings.width" min="1">
                  <template #suffix> px </template>
                </NInputNumber>
              </NFormItem>
              <NFormItem label="横向高度">
                <NInputNumber v-model:value="settings.height" min="1">
                  <template #suffix> px </template>
                </NInputNumber>
              </NFormItem>
              <NFormItem label="边框圆角">
                <NInputNumber v-model:value="settings.borderRadius" min="1">
                  <template #suffix> px </template>
                </NInputNumber>
              </NFormItem>
              <NFormItem label="滑块边框宽度">
                <NInputNumber v-model:value="settings.thumbBorderWidth" min="0">
                  <template #suffix> px </template>
                </NInputNumber>
              </NFormItem>
              <NFormItem label="滑块边框颜色">
                <NColorPicker v-model:value="settings.thumbBorderColor" />
              </NFormItem>
            </NForm>
          </div>
        </NGi>
        <NGi span="8 m:4 l:3 xl:2">
          <div class="flex justify-between">
            <NH2 prefix="bar">
              <NText type="primary"> 代码预览 </NText>
            </NH2>
            <NButton type="primary" @click="handleCopy"> 复制代码 </NButton>
          </div>
          <div class="rounded" :class="codeBg">
            <NCode
              :code="code"
              language="css"
              show-line-numbers
              class="p-4 h-[31.25rem] overflow-scroll scrollbar"
            />
          </div>
        </NGi>
      </NGrid>
    </NLayoutContent>
    <NLayoutFooter position="absolute">
      <div class="flex justify-center h-16">
        <NButton text tag="a" href="https://github.com/lvzhenbo/scrollbar-editor" target="_blank">
          <template #icon>
            <NIcon>
              <GithubFilled />
            </NIcon>
          </template>
          GitHub
        </NButton>
      </div>
    </NLayoutFooter>
  </NLayout>
</template>

<script setup lang="ts">
  import { useClipboard } from '@vueuse/core';
  import { WeatherMoon16Regular, WeatherSunny16Regular } from '@vicons/fluent';
  import { GithubFilled } from '@vicons/antd';
  import { switchThemeKey } from '@/utils';

  const switchTheme = inject(switchThemeKey);
  const codeBg = computed(() => {
    return switchTheme?.value ? 'bg-slate-950' : 'bg-slate-50';
  });
  const message = useMessage();
  const { copy } = useClipboard();
  const settings = reactive({
    selector: 'body',
    thumbColor: '#6BAF8DFF',
    trackColor: '#232E33FF',
    cornerColor: '#00000000',
    width: 14,
    height: 14,
    borderRadius: 3,
    thumbBorderWidth: 0,
    thumbBorderColor: '#232E33FF',
  });

  const width = computed(() => settings.width + 'px');
  const height = computed(() => settings.height + 'px');
  const borderRadius = computed(() => settings.borderRadius + 'px');
  const thumbBorderWidth = computed(() => settings.thumbBorderWidth + 'px');
  const border = computed(() =>
    settings.thumbBorderWidth
      ? `\n  border: ${settings.thumbBorderWidth}px solid ${settings.thumbBorderColor};`
      : '',
  );

  const code = computed(
    () => `${settings.selector} {
  --sb-track-color: ${settings.trackColor};
  --sb-thumb-color: ${settings.thumbColor};
  --sb-corner-color: ${settings.cornerColor};
  --sb-width: ${settings.width}px;
  --sb-height: ${settings.height}px;
}

${settings.selector}::-webkit-scrollbar {
  width: var(--sb-width);
  height: var(--sb-height);
}

${settings.selector}::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: ${settings.borderRadius}px;
}

${settings.selector}::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: ${settings.borderRadius}px;${border.value}
}

${settings.selector}::-webkit-scrollbar-corner {
  background: var(--sb-corner-color);
}

@supports not selector(::-webkit-scrollbar) {
  ${settings.selector} {
      scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}`,
  );

  const handleBlur = () => {
    if (!settings.selector) {
      settings.selector = 'body';
    }
  };

  const handleCopy = async () => {
    await copy(code.value);
    message.success('复制成功！');
  };
</script>

<style scoped>
  .scrollbar {
    --sb-track-color: v-bind('settings.trackColor');
    --sb-thumb-color: v-bind('settings.thumbColor');
    --sb-corner-color: v-bind('settings.cornerColor');
    --sb-width: v-bind('width');
    --sb-height: v-bind('height');
  }

  .scrollbar::-webkit-scrollbar {
    width: var(--sb-width);
    height: var(--sb-height);
  }

  .scrollbar::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: v-bind('borderRadius');
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: v-bind('borderRadius');
    border: v-bind('thumbBorderWidth') solid v-bind('settings.thumbBorderColor');
  }

  .scrollbar::-webkit-scrollbar-corner {
    background: var(--sb-corner-color);
  }

  @supports not selector(::-webkit-scrollbar) {
    .scrollbar {
      scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
    }
  }
</style>
