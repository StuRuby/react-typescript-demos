import * as React from 'react';
import * as classnames from 'classnames';

interface Props {
    text?: string;
    editing?: boolean;
    newTodo?: boolean;
    onSave: (text: string) => void;
    placeholder?: string;
}

interface State {
    text: string;
}

export default class TodoTextInput extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: this.props.text || ''
        };
    }
    private handleBlur = (e: any) => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    };

    private handleChange = (e: any) => {
        this.setState({
            text: e.target.value
        });
    };

    private handleSubmit = (e: any) => {
        const value = e.target.value.trim();
        if (e.which === 13) {
            this.props.onSave(value);
            if (this.props.newTodo) {
                this.setState({ text: '' });
            }
        }
    };

    render() {
        return (
            <input
                type="text"
                className={classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })}
                placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.props.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}
