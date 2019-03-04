import * as React from 'react';
import * as classnames from 'classnames';
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
    SHOW_TYPES
} from '../constants/TodoFilter';

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed'
};

interface Props {
    completedCount: number;
    activeCount: number;
    filter: string;
    onClearCompleted: () => void;
    onShow: (filter: SHOW_TYPES) => void;
}

export default class Footer extends React.Component<Props, {}> {
    private renderTodoCount = () => {
        const { activeCount } = this.props;
        const itemWord = activeCount === 1 ? 'item' : 'items';
        return (
            <span className="todo-count">
                <strong>{activeCount || 'No'}</strong>
                {itemWord} left
            </span>
        );
    };

    private renderFilterLink = (filter: SHOW_TYPES) => {
        const title = FILTER_TITLES[filter];
        const { filter: selectedFilter, onShow } = this.props;
        return (
            <a
                key={filter}
                className={classnames({ selected: filter === selectedFilter })}
                style={{ cursor: 'pointer' }}
                onClick={() => onShow(filter)}
            >
                {title}
            </a>
        );
    };

    private renderClearButton = () => {
        const { completedCount, onClearCompleted } = this.props;
        if (completedCount > 0) {
            return (
                <button className="clear-completed" onClick={onClearCompleted}>
                    Clear Completed
                </button>
            );
        }
    };
    render() {
        return (
            <footer className="footer">
                {this.renderTodoCount()}
                <ul className="filters">
                    {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter => (
                        <li key={filter} >{this.renderFilterLink(filter)}</li>
                    ))}
                </ul>
                {this.renderClearButton()}
            </footer>
        );
    }
}
