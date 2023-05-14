import { Form } from "react-bootstrap";
import { AUTO_LENGUAGE, SUPPORTED_LANGUAGES } from "../Constants";

export const SelectorLenguages = ({ onChange, value, showDetect }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <Form.Select className="bg-transparent border-2 border-gray-400 text-gray-200" aria-label="Select language" onChange={handleChange} value={value}>
            {showDetect && <option value={AUTO_LENGUAGE}>Detect language</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    );
};
