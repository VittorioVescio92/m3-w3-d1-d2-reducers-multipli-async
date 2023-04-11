import { Badge, Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

const FavBar = () => {
  const FavLength = useSelector(state => state.favourites.content.length);
  return (
    <Navbar bg="warning" className="px-5">
      <Container className="justify-content-start gap-5 align-items-center mx-5">
        <img src={Logo} alt="logo" width="130px" />
        <Link className="navbar-brand fw-bold" to="/">
          <p>Home</p>
        </Link>
        <Link className="navbar-brand fw-bold" to="/favourites">
          <p>Favourites</p>
        </Link>
      </Container>
      <Container className="justify-content-end mx-5">
        <Link className="navbar-brand fw-bold" to="/favourites">
          <Badge bg="info" className="text-dark p-2 fs-4">
            💝 {FavLength}
          </Badge>
        </Link>
      </Container>
    </Navbar>
  );
};
export default FavBar;
