import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    settings: {
      "import/core-modules": ["wagmi"],
    },
    rules: {
      camelcase: "off",
      "react/jsx-closing-bracket-location": [
        "error",
        {
          nonEmpty: "after-props",
          selfClosing: "after-props",
        },
      ],
      "react/jsx-closing-bracket-location": 'off',
      "react/no-unescaped-entities": "off",
      "react/jsx-no-comment-textnodes": "off",
      "react/jsx-indent-props": ["error", 2],
      "no-unsafe-optional-chaining": "off",
      "react-hooks/exhaustive-deps": "warn",
      "import/no-extraneous-dependencies": "off",
      "linebreak-style": 0,
      "react/display-name": "off",
      "no-debugger": "error",
      "react/jsx-props-no-spreading": "off",
      "react/destructuring-assignment": "off",
      "no-shadow": "off",
      "import/prefer-default-export": "off",
      "no-underscore-dangle": "off",
      "consistent-return": "off",
      "react/forbid-prop-types": "off",
      "max-len": "off",
      "react/require-default-props": "off",
      "no-console": "off",
      "react/jsx-boolean-value": "off",
      "no-return-assign": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "implicit-arrow-linebreak": "off",
      "react/jsx-curly-newline": "off",
      curly: "off",
      "nonblock-statement-body-position": "off",
      "operator-linebreak": "off",
      "object-curly-newline": "off",
      "function-paren-newline": "off",
      "react/jsx-one-expression-per-line": "off",
      "no-confusing-arrow": "off",
      "react/jsx-no-target-blank": "off",
      "no-async-promise-executor": "off",
      "react/jsx-wrap-multilines": "off",
      "react/jsx-indent": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".test.js", ".jsx", ".tsx", ".js"] },
      ],
      "react/prop-types": "off",
      "import/no-unresolved": ["error", { ignore: ["\\.svg\\?react$"] }],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
