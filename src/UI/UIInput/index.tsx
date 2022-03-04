import { ChangeEvent } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

type propsType = {
  value: number;
  onChange: (param: ChangeEvent<HTMLInputElement>) => void;
};

export const UIInput = (props: propsType) => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "50%" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What amount of money do you have?"
        inputProps={{ "aria-label": "search google maps" }}
        value={props.value}
        onChange={props.onChange}
      />
    </Paper>
  );
};
