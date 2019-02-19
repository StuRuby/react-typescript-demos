import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import App from './app';
import { About, AppStore } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <HashRouter>
            <React.Fragment>
                {/* <Route component={App} /> */}
                <Switch>
                    <Route exact path='/' component={About} />
                    <Route path='/about' component={About} />
                    <Route path='/app' component={AppStore} />
                </Switch>
            </React.Fragment>
        </HashRouter>
    )
};