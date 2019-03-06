import * as React from 'react';

interface Props {
    label: string;
    classname: string;
    onClick: () => void;
}

export const Button: React.StatelessComponent<Props> = (props: Props) => (
    <button className={props.classname} onClick={props.onClick}>
        {props.label}
    </button>
);
