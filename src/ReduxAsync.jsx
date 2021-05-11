import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  fetchDummy,
  selectUsername,
  fetchJson,
} from "./features/customCounter/customCounterSlice";

function ReduxAsync() {
  const count = useSelector(selectCount);
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();

  return (
    <>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>FetchDummy</button>
      {username && <h1>{username}</h1>}
      <button onClick={() => dispatch(fetchJson())}>FetchJSON</button>
    </>
  );
}

export default ReduxAsync;
