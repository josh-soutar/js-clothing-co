import React from "react";
import { StyledButton } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <StyledButton className="custom-button" {...props}>
    {children}
  </StyledButton>
);

export default CustomButton;
