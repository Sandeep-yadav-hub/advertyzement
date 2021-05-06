import React, { useState, useEffect } from "react";
import { HeaderContainer } from "./styled";
import { logo } from "./logo";

function Header({getUser}) {
  return (
    <HeaderContainer>
        <img src={logo} alt="brand logo"/>
        <button onClick={getUser} >Get users</button>
    </HeaderContainer>
  );
}

export default Header;
