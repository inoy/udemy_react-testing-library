import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

afterEach(() => cleanup());

describe("レンダリング", () => {
  beforeEach(() => render(<UseEffectRender />));

  it("非同期関数が未完了のケース コンポーネントが表示されないこと", async () => {
    expect(screen.queryByText(/I am/)).toBeNull();
  });

  it("非同期関数の完了済のケース コンポーネントが表示されること", async () => {
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
