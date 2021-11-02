import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "./FontAwesomeIcon";
import { BrandLink } from "./links/BrandLink";
import { NavLinkWrapper } from "./links/NavLinkWrapper";

export const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <BrandLink linkContent={"proShop"} to={"/"} />
          <Nav>
            <NavLinkWrapper to="/cart" text="Cart">
              <FontAwesomeIcon className="fas fa-shopping-cart" />
            </NavLinkWrapper>

            <NavLinkWrapper to="/login" text="Sign in">
              <FontAwesomeIcon className="fas fa-user" />
            </NavLinkWrapper>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
