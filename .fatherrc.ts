export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: {
    'babel-plugin-import': {
      libraryName: 'antd',
      libraryDirectory: 'lib',
      style: true,
    },
  },
};
