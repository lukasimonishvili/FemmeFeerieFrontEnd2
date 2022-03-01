import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

import SearchIcon from "../../assets/img/search.svg";
import HeartIcon from "../../assets/img/heart-filled.svg";
import MyBagIcon from "../../assets/img/myBag.svg";
import ProfileIcon from "../../assets/img/profile.svg";

const StyledList = Styled.ul`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 13;
`;

const StyledIcon = Styled.li`
    margin-left: 25px;

    &:first-child{
        margin-left: 0;
    }
`;

const Icons = () => {
  return (
    <StyledList>
      <StyledIcon>
        <img src={SearchIcon} alt="Search" />
      </StyledIcon>
      <StyledIcon>
        <Link to="/wish-list">
          <img src={HeartIcon} alt="Wish List" />
        </Link>
      </StyledIcon>
      <StyledIcon>
        <Link to="/my-bag">
          <img src={MyBagIcon} alt="My Bag" />
        </Link>
      </StyledIcon>
      <StyledIcon>
        <Link to="/profile">
          <img src={ProfileIcon} alt="Profile" />
        </Link>
      </StyledIcon>
    </StyledList>
  );
};

export default Icons;
