import * as React from 'react';
import TodoTextInput from './TodoTextInput';

interface Props {
    addTodo: (text: string) => void;
}

const Header: React.StatelessComponent<Props> = props => {
    const handleSave = (text: string) => {
        if (text.length !== 0) {
            props.addTodo(text);
        }
    };
    return (
        <header className="header">
            <h1>todos</h1>
            <TodoTextInput
                newTodo={true}
                onSave={handleSave}
                placeholder="你想要做什么？"
            />
        </header>
    );
};

export default Header;
