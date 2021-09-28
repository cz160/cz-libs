import { defineConfig } from 'dumi';
import { nav } from './config';

export default defineConfig({
  title: '竹合聊前端',
  favicon: '/logo.jpg',
  logo: '/logo.jpg',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: nav,
});
