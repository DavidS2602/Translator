import { Form } from "react-bootstrap";
import { SUPPORTED_LANGUAGES } from "../Constants";

export const SelectorLenguages = ({ onChange, value }) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <Form.Select aria-label="Select language" onChange={handleChange} value={value}>
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    );
};
