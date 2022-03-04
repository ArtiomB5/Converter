import * as style from "./style";

interface IUIButton {
  link: string;
}

export const UIButton: React.FC<IUIButton> = (props) => {
  return (
    <style.button to={props.link}>
      <style.title className="bn39span">{props.children}</style.title>
    </style.button>
  );
};
