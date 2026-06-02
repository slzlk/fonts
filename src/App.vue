<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { CopyDocument, Search, Close } from '@element-plus/icons-vue';
import { fonts, type FontItem } from './data/fonts';

const keyword = ref('');

const normalizedKeyword = computed(() => keyword.value.trim().toLowerCase());

const filteredFonts = computed(() => {
  if (!normalizedKeyword.value) {
    return fonts;
  }

  return fonts.filter((font) => {
    const target = `${font.order} ${font.title} ${font.preview} ${font.figmaName}`.toLowerCase();
    return target.includes(normalizedKeyword.value);
  });
});

const copyFont = async (font: FontItem) => {
  const value = font.figmaName || font.title;

  try {
    await navigator.clipboard.writeText(value);
    ElMessage.success(`已复制：${value}`);
  } catch {
    ElMessage.error('复制失败，请手动复制字体名');
  }
};
</script>

<template>
  <main class="page-shell">
    <section class="toolbar">
      <div>
        <p class="eyebrow">Font Library</p>
        <h1>字体库合集</h1>
      </div>

      <div class="search-panel">
        <el-input
          v-model="keyword"
          class="search-input"
          clearable
          placeholder="搜索中文名、Figma 字体名或序号"
          size="large"
        >
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
        </el-input>
        <el-button v-if="keyword" :icon="Close" size="large" @click="keyword = ''">
          清空
        </el-button>
      </div>
    </section>

    <section class="result-bar">
      <span>共 {{ fonts.length }} 款字体</span>
      <strong>{{ filteredFonts.length }}</strong>
      <span>项匹配</span>
    </section>

    <section class="font-grid">
      <article
        v-for="font in filteredFonts"
        :key="`${font.order}-${font.title}-${font.figmaName}`"
        class="font-card"
        tabindex="0"
        role="button"
        :aria-label="`复制 ${font.figmaName || font.title}`"
        @click="copyFont(font)"
        @keydown.enter="copyFont(font)"
      >
        <div class="preview-box" :style="{ fontFamily: `'${font.figmaName}', system-ui, sans-serif` }">
          {{ font.preview }}
        </div>

        <div class="font-meta">
          <div class="title-row">
            <h2>{{ font.title }}</h2>
            <span>{{ String(font.order).padStart(3, '0') }}</span>
          </div>
          <p>
            <span>Figma 中的名字：</span>
            <button class="copy-name" type="button" @click.stop="copyFont(font)">
              <span class="font-name-text">{{ font.figmaName }}</span>
              <el-icon><CopyDocument /></el-icon>
            </button>
          </p>
          <a class="site-link" href="https://www.figma.com/" target="_blank" rel="noreferrer" @click.stop>
            字体官网
          </a>
        </div>
      </article>
    </section>

    <el-empty v-if="filteredFonts.length === 0" description="没有找到匹配的字体" />
  </main>
</template>
