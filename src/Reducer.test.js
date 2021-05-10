import reducer, {
  increment,
  incrementByAmount,
} from "../src/features/counter/customCounter/customCounterSlice";

describe("ReduxTookKitのReducer", () => {
  describe("アクション: increment", () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    const action = { type: increment.type };

    it("mode=0のときはvalueに1が足される", () => {
      expect(reducer(initialState, action).value).toEqual(2);
    });
    it("mode=1のときはvalueに100が足される", () => {
      initialState.mode = 1;
      expect(reducer(initialState, action).value).toEqual(101);
    });
    it("mode=2のときはvalueに10000が足される", () => {
      initialState.mode = 2;
      expect(reducer(initialState, action).value).toEqual(10001);
    });
  });

  describe("アクション: incrementByAmount", () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    const action = { type: incrementByAmount.type, payload: 3 };

    it("mode=0のときはvalueにpayloadの内容が足される", () => {
      expect(reducer(initialState, action).value).toEqual(4);
    });
    it("mode=1のときはvalueにpayload * 100の内容が足される", () => {
      initialState.mode = 1;
      expect(reducer(initialState, action).value).toEqual(301);
    });
    it("mode=2のときはvalueにpayload * 10000の内容が足される", () => {
      initialState.mode = 2;
      expect(reducer(initialState, action).value).toEqual(30001);
    });
  });
});
