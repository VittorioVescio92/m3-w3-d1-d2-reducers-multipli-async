import { Alert, Col, Container, Row } from "react-bootstrap";
import Company from "./Company";
import { useSelector } from "react-redux";

const Favourites = () => {
  const preferiti = useSelector(state => state.favourites.content);
  return (
    <Container>
      {preferiti.length !== 0 ? (
        <Row>
          <Col>
            {preferiti.map((company, index) => (
              <Company key={index} company={company} index={index} />
            ))}
          </Col>
        </Row>
      ) : (
        <Row className="mt-3">
          <Col>
            <Alert variant="danger" className="text-center">
              Nessuna azienda tra i preferiti!
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Favourites;
