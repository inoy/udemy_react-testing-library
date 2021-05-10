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

## screen get/find/query の使い分け

[Udemy - 質問 - テストメソッドの使い分け](https://www.udemy.com/course/reacthooksreduxtoolkit/learn/lecture/23454496#questions/14091266)

> get -> 待ち時間なしで取得  
> find -> 取得できるまで待つ(非同期処理)  
> query -> 無いことをテストしたい場合
>
> ByRole -> 取得エレメントの role が分かればなるべく Role を使う(button など)  
> ByText or ByTestID -> 上記以外の場合
>
> 非同期で待つ場合は、現状 ① が使えないので ② を使用します。同期の場合は、①② どちらでも OK です。

詳細は [Testing Library - Cheatsheet - Queries](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries) を参照。
