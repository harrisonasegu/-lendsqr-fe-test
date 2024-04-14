/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * This hook helps to retrieve the user list that has been saved to the localstorage during signin
 *
 */

import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setAppKey } from "../store";
import useNotification from "./useNotification";

const useRetriveDataFromStorage = (): void => {
  const dispatch = useAppDispatch();

  const { onNotify } = useNotification();

  const onRetrieveDataFromStorage = useCallback(() => {
    const users = JSON.parse(localStorage.getItem("users") as string);
    if (users && users.length > 0) {
      dispatch(
        setAppKey({
          key: 'users',
          value: users,
        })
      );
    } else {
      return onNotify("error", "No user found in storage");
    }
  }, [dispatch, onNotify]);

  useEffect(() => {
    onRetrieveDataFromStorage();
  }, []);
};

export default useRetriveDataFromStorage;
