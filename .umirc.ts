import { defineConfig } from 'dumi';
import { nav } from './config';

export default defineConfig({
  title: '竹合',
  favicon: '/logo.jpeg',
  logo: '/logo.jpeg',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: '/cz-libs/',
  base: '/cz-libs/',
  navs: nav,
});
