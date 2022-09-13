{
  "extends": [
    "airbnb",
    "prettier",
    "plugin:node/recommended",
    "plugin:react/recommended"
  ],
  "plugins": ["prettier", "react", "react-native"],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "react-native/react-native": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "rules": {
    "prettier/prettier": "warn",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "no-alert": "warn",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "react-native/no-unused-styles": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ios.js", ".android.js"]
      }
    }
  }}