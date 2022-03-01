import React from "react";
import Styled from "styled-components";
import Container from "../container";
import Icons from "./icons";
import Logo from "./logo";
import Navigation from "./navigation";
import SubMenu from "./subMenu";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import subMenuReducer from "../../reducers/menu";
import deviceTypeReducer from "../../reducers/deviceType";

const StyledHeader = Styled.header`
  width: 100%;
  height: 150px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const StlyedFlex = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const store = configureStore({
    reducer: {
      subMenu: subMenuReducer,
      deviceType: deviceTypeReducer,
    },
  });

  return (
    <StyledHeader>
      <Container width={1644}>
        <StlyedFlex>
          <Logo />
          <Provider store={store}>
            <Navigation />
            <SubMenu />
          </Provider>
          <Icons />
        </StlyedFlex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
