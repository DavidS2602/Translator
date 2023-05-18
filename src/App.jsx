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
import { useEffect } from "react";
import { translate } from "./Services/Translate";
import { useDebounce } from "./Components/useDebounce";
import { CopyIcon, Microphone } from "./assets/Icons";
import { Toaster } from "sonner";
import { toast } from "sonner";

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

  const debouncedFromText = useDebounce(fromText, 500);

  useEffect(() => {
    if (debouncedFromText === "") return;

    translate({ fromLanguage, toLanguage, text: fromText })
      .then((result) => {
        if (result === null) return;
        setResult(result);
      })
      .catch(() => setResult("Error"));
  }, [debouncedFromText, fromLanguage, toLanguage]);

  const handleCopiedToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard");
  };

  const handleVoiced = () => {
    const utterance = new SpeechSynthesisUtterance(result);
    utterance.lang = toLanguage;
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      <Container
        fluid
        className="border-3 border-gray-400 p-4 rounded-4 backdrop-blur-sm relative"
      >
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
            <div style={{ position: "relative" }}>
              <TextArea
                placeholder="Traduction"
                autoFocus
                value={result}
                onChange={setResult}
                loading={loading}
              />
              <Button
                id="copy-button"
                variant="link"
                style={{ position: "absolute", right: "100px", top: "110px" }}
                onClick={handleCopiedToClipboard}
              >
                {result === "" ? "" : <CopyIcon />}
              </Button>
              <Button
                id="voice-button"
                variant="link"
                style={{ position: "absolute", right: "70px", top: "110px" }}
                onClick={handleVoiced}
              >
                {result === "" ? "" : <Microphone />}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Toaster position="botton-center" expand={true} richColors success />
    </>
  );
}

export default App;
