import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Company = ({ company, index }) => {
  const dispatch = useDispatch();
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={6}>
        <Link to={`/${company.company_name}`}>{company.company_name}</Link>
      </Col>
      <Col xs={6} className="d-flex justify-content-end">
        <Button
          variant="danger"
          onClick={() => {
            dispatch({ type: "DELETE", payload: index });
          }}
        >
          Elimina dai Preferiti
        </Button>
      </Col>
    </Row>
  );
};

export default Company;
