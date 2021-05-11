import reducer, {
  fetchDummy,
} from "../src/features/customCounter/customCounterSlice";

describe("extraReducers", () => {
  const initialState = {
    mode: 0,
    value: 0,
  };
  it("fulfilledのときは100 + payloadを出力", () => {
    const action = { type: fetchDummy.fulfilled.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(105);
  });
  it("rejectedのときは100 + payloadを出力", () => {
    const action = { type: fetchDummy.rejected.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(95);
  });
});
