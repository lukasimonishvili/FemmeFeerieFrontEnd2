import React from "react";
import Styled from "styled-components";

const StyledUnderHeaderMessage = Styled.div`
    width: 100%;
    text-align: center;
    padding: 12px 0;
    color: white;
    background: rgba(0, 0, 0, 0.81);
    font-size: 16px;
    line-height: 21px;
    font-family: 'Segoe UI';
    margin-top: 150px;
`;

const UnderHeaderMessage = () => {
  return (
    <StyledUnderHeaderMessage>
      FREE shipping for orders over £200
    </StyledUnderHeaderMessage>
  );
};

export default UnderHeaderMessage;
