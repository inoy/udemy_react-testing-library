import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Redux from "./Redux";
import customCounterReducer from "../src/features/customCounter/customCounterSlice";

afterEach(() => cleanup());

describe("Redux Integration テスト", () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: customCounterReducer,
      },
    });
  });

  it("プラスボタンがクリックされる毎にカウントが1増加すること", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    const plusButton = screen.getByText("+");
    const countElm = screen.getByTestId("count-value");
    expect(countElm).toHaveTextContent(0);
    userEvent.click(plusButton);
    expect(countElm).toHaveTextContent(1);
    userEvent.click(plusButton);
    expect(countElm).toHaveTextContent(2);
    userEvent.click(plusButton);
    expect(countElm).toHaveTextContent(3);
  });

  it("マイナスボタンがクリックされる毎にカウントが1減少すること", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    const minusButton = screen.getByText("-");
    const countElm = screen.getByTestId("count-value");
    expect(countElm).toHaveTextContent(0);
    userEvent.click(minusButton);
    expect(countElm).toHaveTextContent(-1);
    userEvent.click(minusButton);
    expect(countElm).toHaveTextContent(-2);
    userEvent.click(minusButton);
    expect(countElm).toHaveTextContent(-3);
  });

  it("IncrementByAmountボタンがクリックされる毎にカウントが指定値分、増加すること", () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    const incrementByAmountButton = screen.getByText("IncrementByAmount");
    const countElm = screen.getByTestId("count-value");

    userEvent.type(screen.getByPlaceholderText("Enter"), "30");

    expect(countElm).toHaveTextContent(0);
    userEvent.click(incrementByAmountButton);
    expect(countElm).toHaveTextContent(30);
    userEvent.click(incrementByAmountButton);
    expect(countElm).toHaveTextContent(60);
    userEvent.click(incrementByAmountButton);
    expect(countElm).toHaveTextContent(90);
  });
});
