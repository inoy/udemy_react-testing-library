# [React ソフトウェアテスト(Hooks+ReduxToolKit 時代のモダンテスト手法)](https://www.udemy.com/course/reacthooksreduxtoolkit/)

## screen.getByRole に指定できるロールと HTML 要素の対応

[GitHub - A11yance/aria-query](https://github.com/A11yance/aria-query)

## expect に指定できる条件分

[GitHub - testing-library/jest-dom](https://github.com/testing-library/jest-dom)  
[JEST - Expect](https://jestjs.io/docs/expect)

## テスト結果の詳細表示

`--env=jsdom --verbose`を追記

```json
  "scripts": {
    "test": "react-scripts test --env=jsdom --verbose",
  },
```

## モック

[GitHub - Mock Service Worker](https://github.com/mswjs/msw) が Testing Library の推奨。

以下は [Testing Library - Example](https://testing-library.com/docs/react-testing-library/example-intro/#full-example) より引用。

> We recommend using Mock Service Worker library to declaratively mock API communication in your tests instead of stubbing window.fetch, or relying on third-party adapters.
