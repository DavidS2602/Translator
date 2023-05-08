import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaExchangeAlt } from "react-icons/fa";
import { useStore } from "./hooks/useStore";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SelectorLenguages } from "./Components/SelectorLenguages";

function App() {
  const { fromLanguage, toLanguage, interChangeLanguages, setFromLanguage, setToLanguage } = useStore();

  return (
    <Container fluid>
      <h1 className="mb-2 font-bold text-2xl font-roboto">Google Clon translate</h1>
      <Row>
        <Col>
          <SelectorLenguages onChange={setFromLanguage} value={fromLanguage} />
          {fromLanguage}
        </Col>

        <Col>
          <Button  variant="link" onClick={interChangeLanguages} className="text-black">
            <FaExchangeAlt />
          </Button>
        </Col>

        <Col>
          <SelectorLenguages onChange={setToLanguage} value={toLanguage} />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;