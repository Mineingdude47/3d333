// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;

// Enable web support for React Native Web
config.resolver.assetExts.push('cjs');

// Enable TypeScript support
config.transformer.babelTransformerPath = require.resolve('react-native-typescript-transformer');
config.resolver.sourceExts = ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json'];

module.exports = config;
