import * as React from 'react';

interface Props {
    name: string;
    value: string;
    label: string;
    placeholder?: string;
    onChange: (fieldName: string, value: string) => void;
    error?: string;
}

export const Input: React.StatelessComponent<Props> = (props: Props) => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <div className="field">
            <input
                type="text"
                name={props.name}
                className="form-control"
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleInputChange(props)}
            />
        </div>
    </div>
);

const handleInputChange = (props: Props) => (
    evt: React.ChangeEvent<HTMLInputElement>
) => {
    props.onChange(evt.target.name, evt.target.value);
};
