import React from "react";
import Styled from "styled-components";

const StyledContainer = Styled.div`
    width: ${(props) => props.theme.width + "px"};
    height: 100%;
    margin: 0 auto;
`;

interface props {
  width: number;
  children?: JSX.Element[] | JSX.Element | string;
}

const Container = ({ width, children }: props) => {
  return <StyledContainer theme={{ width }}>{children}</StyledContainer>;
};

export default Container;
