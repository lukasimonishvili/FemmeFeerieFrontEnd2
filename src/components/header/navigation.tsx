import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import NavigationInterface from "../../interfaces/navigation";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

import { navigationDataMock } from "../../dataMocks";
import subMenuInterface from "../../interfaces/subMenu";
import {
  addData,
  setLoading,
  setActiveMenu,
  setMenuStatus,
  closeMenu,
} from "../../reducers/menu";
import { setDeviceType } from "../../reducers/deviceType";
import headerArrowIcon from "../../assets/img/header-arrow.svg";

const StyledNavigaiton = Styled.nav`
    display: flex;
    align-items: center;
    font-family: 'Segoe UI';
    font-size: 20px;
    line-height: 27px;
    color: black;
    text-transform: capitalize;
    position: relative;
    z-index: 13;
`;

const StyledNavItem = Styled(Link)`
    display: block;
    margin-left: 24px;
    position: relative;

    &:first-child{
        margin-left: 0;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 0;
      height: 1px;
      background: black;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }

    & > img {
      height: 20px;
      
      margin-left: 10px;
      margin-bottom: -4px;
      transition: 0.3s;
      transform: ${(props) =>
        props.theme.isSubMenuOpen ? "rotate(90deg)" : "rotate(0)"};
    }
`;

const Navigation = () => {
  const [navigation, setNavigation] = useState<Array<NavigationInterface>>([]);
  const menuState: subMenuInterface = useSelector(
    (state: RootStateOrAny) => state.subMenu.value
  );
  const deviceTypeState: string = useSelector(
    (state: RootStateOrAny) => state.deviceType.value
  );
  const dispatch = useDispatch();

  const fetchSubMenuData = (id: string) => {
    // temporary function before api implementation
    let result: Array<NavigationInterface> = [];

    for (let navigaitonItem of navigation) {
      result.push({
        id: navigaitonItem.id + id,
        title: id + " " + navigaitonItem.title,
      });
    }

    return result;
  };

  const displaySubMenu = (id: string) => {
    dispatch(setLoading({ loading: true }));
    dispatch(setMenuStatus({ isMenuOpen: true }));
    if (!menuState.menuData[id]) {
      // need to add error handling
      const newMenuData = fetchSubMenuData(id);
      dispatch(addData({ id, data: newMenuData }));
    }

    dispatch(setActiveMenu({ id }));
  };

  const onArrowClick = (id: string) => {
    if (id !== menuState.activeMenu) {
      displaySubMenu(id);
    } else {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    let navigaitonData: Array<NavigationInterface> = navigationDataMock;
    setNavigation(navigaitonData);
    dispatch(setDeviceType());
  }, [dispatch]);

  return (
    <StyledNavigaiton>
      {navigation.map((navItem: NavigationInterface) => (
        <StyledNavItem
          onMouseOver={displaySubMenu.bind(this, navItem.id)}
          key={navItem.id}
          to={`/products/${navItem.id}`}
          theme={{ isSubMenuOpen: navItem.id === menuState.activeMenu }}
        >
          <span>{navItem.title}</span>
          {deviceTypeState === "sensor" ? (
            <img
              onClick={onArrowClick.bind(this, navItem.id)}
              src={headerArrowIcon}
              alt=">"
            />
          ) : (
            <></>
          )}
        </StyledNavItem>
      ))}
    </StyledNavigaiton>
  );
};

export default Navigation;
