import React from "react";
import { Link } from "react-router-dom";
import Styled, { StyledComponent } from "styled-components";
import LogoImage from "../../assets/img/logo.svg";

const StyledImage: StyledComponent<"img", any, {}, never> = Styled.img`
    width: 312px;
    height: auto;
    position: relative;
    z-index: 13;
`;

const Logo = () => {
  return (
    <Link to="/">
      <StyledImage alt="logo" src={LogoImage} />
    </Link>
  );
};

export default Logo;
