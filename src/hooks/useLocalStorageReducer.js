import { useEffect, useReducer } from "react";

export function useLocalStorageReducer(key, reducer, state) {
  let localStorageState;

  if (key) {
    localStorageState =
      (localStorage[key] && JSON.parse(localStorage[key])) || state;
  } else {
    localStorageState = state;
  }

  const [reducerState, dispatch] = useReducer(reducer, localStorageState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(reducerState));
  }, [reducerState]);

  return [reducerState, dispatch];
}
