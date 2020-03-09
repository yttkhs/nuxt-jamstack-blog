module.exports = {
  plugins: ["stylelint-order", "stylelint-scss"],
  extends: "stylelint-config-standard",
  rules: {
    indentation: 2,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "order/properties-alphabetical-order": true,
    "string-quotes": "double",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-named": "never",
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-brackets-space-inside": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-no-important": true,
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "number-leading-zero": "always",
    "function-url-quotes": "always",
    "font-weight-notation": "named-where-possible",
    "font-family-name-quotes": "always-where-recommended",
    "comment-whitespace-inside": "always",
    "comment-empty-line-before": "always",
    "at-rule-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"]
      }
    ],
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always"
  }
};
