module.exports = {
  root: true,
  extends: 'standard',
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-native'
  ],
  env: {
    'jest': true,
    'react-native/react-native': true
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-console': 'warn'
  }
} 