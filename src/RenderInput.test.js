import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";

afterEach(() => cleanup());

describe("レンダリング", () => {
  beforeEach(() => render(<RenderInput />));
  it("ボタン", () => {
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
  it("インプット", () => {
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("インプットのonChange", () => {
  beforeEach(() => render(<RenderInput />));

  it("valueへの反映", () => {
    const inputValue = screen.getByPlaceholderText("Enter");
    userEvent.type(inputValue, "テスト");
    expect(inputValue.value).toBe("テスト");
  });
});

describe("ボタンのアクション", () => {
  it("インプットのvalueが空のケース onClickの関数が実行されないこと", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    userEvent.click(screen.getByRole("button"));
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it("インプットのvalueが空でないケース onClickの関数が実行されること", () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    userEvent.type(screen.getByPlaceholderText("Enter"), "テスト");
    userEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
