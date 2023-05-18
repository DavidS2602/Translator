import { Form } from "react-bootstrap";

const getPlaceholder = (loading, result) => {
    if (loading) return "Translating...";
    if (result === "") return "Translation";
    return "Translation";
};

export const TextArea = ({ autofocus, loading, value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    return (
        <Form.Control
            className="bg-transparent border-2 text-gray-200 border-gray-400"
            autoFocus={autofocus}
            as="textarea" //Element to render
            rows={3}
            placeholder={getPlaceholder(loading, value)}
            style={{ height: "150px", marginTop: "8px" }}
            value={value}
            onChange={handleChange}
            loading={loading}
        />
    );
};
