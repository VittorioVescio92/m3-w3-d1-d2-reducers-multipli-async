import { Badge, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { resetResultsAction } from "../redux/actions";

const FavBar = () => {
  const FavLength = useSelector(state => state.favourites.content.length);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetResultsAction());
  };

  return (
    <Navbar bg="warning" className="px-5">
      <Container className="justify-content-start gap-5 align-items-center mx-5">
        <img src={Logo} alt="logo" width="130px" />
        <Link className="navbar-brand fw-bold" onClick={handleReset} to="/">
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
