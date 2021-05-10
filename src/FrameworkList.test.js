import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

afterEach(() => cleanup());

describe("props data に応じたリスト表示", () => {
  const textNoData = "No data";

  it("dataを指定しないケース リストに空と分かる表示", () => {
    render(<FrameworkList />);
    expect(screen.getByText(textNoData)).toBeInTheDocument();
  });
  it("dataを指定するケース リストにdataが表示", () => {
    const dummyData = [
      { id: 1, item: "React Dummy" },
      { id: 2, item: "Angular dummy" },
      { id: 3, item: "Vue dummy" },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((helm) => helm.textContent);
    const dummyItems = dummyData.map((obj) => obj.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText(textNoData)).toBeNull();
  });
});
