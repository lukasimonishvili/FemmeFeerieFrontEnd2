import React from "react";
import Styled from "styled-components";

const StyledContainer = Styled.div`
    width: ${(props) =>
      props.theme.width ? props.theme.width + "px" : "100%"};
`;

interface props {
  width: string;
}

const Container = ({ width }: props) => {
  return <StyledContainer theme={{ width }} />;
};

export default Container;
