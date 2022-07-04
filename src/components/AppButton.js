import React from "react";
import Button from "@mui/material/Button";

export const AppButton = (props) => {
  let href_button = props.href ?? null;
  let color_button = props.color ?? "primary";
  let handle_click = props.onClick ?? (() => null);

  return (
    <Button
      color={color_button}
      onClick={handle_click}
      title={props.title}
      href={href_button}
      {...props}
    >
      {props.label}
    </Button>
  );
};