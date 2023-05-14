import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaExchangeAlt } from "react-icons/fa";
import { useStore } from "./hooks/useStore";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SelectorLenguages } from "./Components/SelectorLenguages";
import { TextArea } from "./Components/TextArea";

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    setFromText,
    setResult,
    interChangeLanguages,
    setFromLanguage,
    setToLanguage,
  } = useStore();

  return (
    <Container fluid className="border-3 border-gray-400 p-4 rounded-4">
      <h1 className="mb-2 font-bold text-2xl font-roboto">
        Google Clon translate
      </h1>
      <Row>
        <Col>
          <SelectorLenguages
            onChange={setFromLanguage}
            value={fromLanguage}
            showDetect={true}
          />
          <TextArea
            as="textarea"
            placeholder="Enter text"
            autoFocus
            value={fromText}
            onChange={setFromText}
          />
        </Col>

        <Col>
          <Button
            variant="link"
            onClick={interChangeLanguages}
            className="text-black"
          >
            <FaExchangeAlt />
          </Button>
        </Col>

        <Col>
          <SelectorLenguages
            onChange={setToLanguage}
            value={toLanguage}
            showDetect={false}
          />
          <TextArea
            placeholder="Traduction"
            autoFocus
            value={result}
            onChange={setResult}
            loading={loading}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
