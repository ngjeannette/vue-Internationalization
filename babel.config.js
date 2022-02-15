module.exports = {
  "presets": [
    ["@vue/cli-plugin-babel/preset", {
    "@intlify/vue-i18n/no-missing-keys-in-other-locales": [
      "error",
      {
        "ignoreLocales": []
      }
    ]
  }]
  ]
}
