import React, { useEffect, useState, useCallback, useRef } from "react";
import Styled from "styled-components";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import subMenuInterface from "../../interfaces/subMenu";
import { closeMenu } from "../../reducers/menu";
import NavigationInterface from "../../interfaces/navigation";
import { Link } from "react-router-dom";

const StyledSubMenu = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 70px;
  width: 100vw;
  background: rgba(255, 255, 255, 0.92);
  transition: 0.3s;
  z-index: 11;
  ${(props) =>
    props.theme.open
      ? `
    padding: 80px 20px 59px;
    max-height: 100vh;
  `
      : `
    padding: 0;
    max-height: 0;
  `}
`;

const Wrapper = Styled.div`
  padding: 0 100px;
  border-left: ${(props) => (props.theme.open ? "1px solid #707070" : "none")};
  font-size: 16px;
  font-family: "Segoe UI Emoji";
  line-height: 45px;
  color: ${(props) => (props.theme.open ? "#606060" : "transparent")};
  transition: .3s;

  &:first-child{
    border-left-width: 0;
  }
`;

const BlockLink = Styled(Link)`
  display: block;
`;

const HiddenClsoer = Styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  display: ${(props) => (props.theme.open ? "block" : "none")};
`;

const SubMenu = () => {
  const menuState: subMenuInterface = useSelector(
    (state: RootStateOrAny) => state.subMenu.value
  );
  const dispatch = useDispatch();
  const [subMenuData, setSubMenuData] = useState<
    Array<Array<NavigationInterface>>
  >([]);
  const subMenuRef = useRef<HTMLDivElement>(null);

  const collapseMenu = (e: any) => {
    dispatch(closeMenu());
  };

  const devideData = useCallback(() => {
    let result: Array<Array<NavigationInterface>> = [];
    let manipulator: number = 0;
    let key: string = menuState.activeMenu || "mock";
    let activeData: Array<NavigationInterface> = menuState.menuData[key] || [];

    for (let data of activeData) {
      if (!result[manipulator]) {
        result.push([data]);
      } else {
        result[manipulator].push(data);
      }

      manipulator = manipulator === 2 ? 0 : manipulator + 1;
    }

    setSubMenuData(result);
  }, [menuState.activeMenu, menuState.menuData]);

  useEffect(() => {
    if (!menuState.loading) {
      devideData();
    }
  }, [menuState.loading, menuState.activeMenu, devideData]);

  return (
    <>
      <HiddenClsoer
        theme={{ open: menuState.isMenuOpen }}
        onMouseOver={collapseMenu}
        onClick={collapseMenu}
      />
      <StyledSubMenu
        theme={{ open: menuState.isMenuOpen }}
        className="sub-menu"
        ref={subMenuRef}
      >
        {subMenuData.map((wrap: Array<NavigationInterface>, index: number) => (
          <Wrapper
            theme={{ open: menuState.isMenuOpen }}
            key={index + "subMenuWrapper"}
          >
            {wrap.map((item: NavigationInterface) => (
              <BlockLink to={`/products/${item.id}`} key={item.id}>
                {item.title}
              </BlockLink>
            ))}
          </Wrapper>
        ))}
      </StyledSubMenu>
    </>
  );
};

export default SubMenu;
