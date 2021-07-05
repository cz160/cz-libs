import { defineConfig } from 'dumi';
import { nav } from './config';

export default defineConfig({
  title: '竹合',
  favicon: '/logo.jpeg',
  logo: '/logo.jpeg',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: nav,
});
