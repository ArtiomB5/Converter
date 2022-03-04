import React from "react";
import * as style from "./style";

interface IUITab {}

export const UITab: React.FC<IUITab> = (props) => {
  return <style.uiTab>{props.children}</style.uiTab>;
};
