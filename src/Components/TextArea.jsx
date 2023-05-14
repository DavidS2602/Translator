import { Form } from "react-bootstrap";


export const TextArea = ({ autofocus ,placeholder, loading,  value, onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    }
    return (
        <Form.Control
            className="bg-transparent border-2 text-gray-200 border-gray-400"
            autoFocus={autofocus}
            as="textarea" //Element to render
            rows={3}
            placeholder={placeholder}
            style={{ height: '150px', marginTop: '8px' }}
            value={value}
            onChange={handleChange}
        />
    )
}