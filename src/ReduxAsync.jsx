import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  fetchDummy,
} from "./features/customCounter/customCounterSlice";

function ReduxAsync() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>FetchDummy</button>
    </>
  );
}

export default ReduxAsync;
