import CircularProgress from "@mui/material/CircularProgress";
import * as style from "./style";

export const UILoading = () => {
  return (
    <style.loadingWrapper>
      <CircularProgress />
    </style.loadingWrapper>
  );
};
