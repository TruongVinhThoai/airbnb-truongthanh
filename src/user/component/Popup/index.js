import React from "react";
import { useSelector } from "react-redux";
import { popupName } from "user/utils/constants";

const Popup = () => {
  const popupData = useSelector((state) => state.popupSlice);

  const { popup } = popupData || {};
  if (!popup) return null;

  switch (popup) {
    case popup === popupName.calendar:
      return
    default:
      return null;
  }
};

export default React.memo(Popup);
