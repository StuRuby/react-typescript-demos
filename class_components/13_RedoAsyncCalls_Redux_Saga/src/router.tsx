import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Header } from './components';

const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router>
            <div className="container-fluid">
                <Header />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
