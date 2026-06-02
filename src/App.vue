<script setup lang="ts">
import { computed, ref } from 'vue';
import { ElMessage } from 'element-plus';
import {
  Brush,
  Close,
  Collection,
  CopyDocument,
  Files,
  Grid,
  MagicStick,
  Search,
  Tickets,
} from '@element-plus/icons-vue';
import { fonts, type FontItem } from './data/fonts';

interface FontCategory {
  id: string;
  label: string;
  description: string;
  icon: typeof Collection;
  match: (font: FontItem) => boolean;
}

const keyword = ref('');
const activeCategory = ref('all');

const categories: FontCategory[] = [
  {
    id: 'all',
    label: '全部字体',
    description: 'Figma 设计稿中的完整字体卡片',
    icon: Grid,
    match: () => true,
  },
  {
    id: 'headline',
    label: '黑体标题',
    description: '标题、展示、品牌感较强的黑体',
    icon: Collection,
    match: (font) =>
      font.order <= 89 ||
      /黑|标题|Sans|OPPO|HarmonyOS|阿里巴巴|站酷|庞门正道|优设/.test(font.title),
  },
  {
    id: 'round',
    label: '圆体可爱',
    description: '圆体、童趣、轻松风格',
    icon: MagicStick,
    match: (font) => /圆|丸|娃娃|少女|嘿嘿|小白|胖|棒棒|公益/.test(`${font.title}${font.preview}`),
  },
  {
    id: 'script',
    label: '书法手写',
    description: '楷体、手写、毛笔、古风字体',
    icon: Brush,
    match: (font) => /楷|宋|仿宋|手写|毛笔|古风|明朝|隶|魏碑|瘦金|东方大楷|竹石|刻石/.test(font.title),
  },
  {
    id: 'foundry',
    label: '字库品牌',
    description: '方正、仓耳、华康等系列字体',
    icon: Files,
    match: (font) => /方正|仓耳|华康|汉仪|阿里妈妈|猫啃|字库|字体传奇/.test(font.title),
  },
  {
    id: 'latin',
    label: '英文系统',
    description: '英文名、系统字族和跨平台字体',
    icon: Tickets,
    match: (font) => /[A-Za-z]/.test(font.title) || /Sans|Source|Code|HarmonyOS|OPPO|Alibaba/.test(font.figmaName),
  },
  {
    id: 'numeric',
    label: '数字像素',
    description: '数字显示、像素、价格场景',
    icon: Tickets,
    match: (font) => /数字|像素|K8x12|012|Code|Mono|Source Code/.test(`${font.title}${font.figmaName}`),
  },
];

const normalizedKeyword = computed(() => keyword.value.trim().toLowerCase());

const activeCategoryItem = computed(
  () => categories.find((category) => category.id === activeCategory.value) || categories[0],
);

const categoryCounts = computed(() => {
  return categories.reduce<Record<string, number>>((counts, category) => {
    counts[category.id] = fonts.filter(category.match).length;
    return counts;
  }, {});
});

const filteredFonts = computed(() => {
  return fonts.filter((font) => {
    const categoryMatched = activeCategoryItem.value.match(font);

    if (!normalizedKeyword.value) {
      return categoryMatched;
    }

    const target = `${font.order} ${font.title} ${font.preview} ${font.figmaName}`.toLowerCase();
    return categoryMatched && target.includes(normalizedKeyword.value);
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
  <main class="app-shell">
    <aside class="sidebar" aria-label="字体分类">
      <div class="brand-block">
        <p>Font Library</p>
        <h1>字体库合集</h1>
      </div>

      <nav class="category-nav">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          class="category-item"
          :class="{ active: activeCategory === category.id }"
          @click="activeCategory = category.id"
        >
          <span class="category-icon">
            <el-icon><component :is="category.icon" /></el-icon>
          </span>
          <span class="category-copy">
            <strong>{{ category.label }}</strong>
            <small>{{ category.description }}</small>
          </span>
          <em>{{ categoryCounts[category.id] }}</em>
        </button>
      </nav>
    </aside>

    <section class="content-panel">
      <section class="toolbar">
        <div>
          <p class="eyebrow">{{ activeCategoryItem.label }}</p>
          <h2>{{ activeCategoryItem.description }}</h2>
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
          <el-button v-if="keyword" :icon="Close" size="large" @click="keyword = ''">清空</el-button>
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
              <h3>{{ font.title }}</h3>
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
    </section>
  </main>
</template>
