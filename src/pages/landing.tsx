import React from "react";
import Header from "../components/header/header";
import Styled from "styled-components";
import UnderHeaderMessage from "../components/underHeaderMessage";

const Jack = Styled.div`
  width: 100%;
  height: 300vh;
  background: green;
`;

const LandingPage = () => {
  return (
    <>
      <Header />
      <UnderHeaderMessage />
      <Jack />
    </>
  );
};

export default LandingPage;
