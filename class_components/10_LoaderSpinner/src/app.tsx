import * as React from 'react';
import { Header } from './components';
import { LoadingSpinnerComponent } from './common/components/spinner';

export const App: React.StatelessComponent<{}> = props => (
    <div className="container-fluid">
        <LoadingSpinnerComponent />
        <Header />
        {props.children}
    </div>
);
