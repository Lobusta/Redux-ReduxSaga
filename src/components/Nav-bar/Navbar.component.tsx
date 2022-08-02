import Logo from "../../assets/logo.png";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <>
      <NavContainer>
        <LogoDiv>
          <LogoImg src={Logo} />
        </LogoDiv>
        <div>
          <NavLinks>
            <li>Order</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <LoginButton>Log In</LoginButton>
          </NavLinks>
        </div>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  align-items: center;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 48px;
  align-items: center;
`;

const LogoDiv = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
`;

const LogoImg = styled.img`
  width: 76px;
  height: auto;
  margin: -8px 0 0 -13px;
`;

const LoginButton = styled.li`
  background-color: #ff7a00;
  border-radius: 9px;
  padding: 12px;

  &:hover {
    background-color: #ff9533;
  }
`;
