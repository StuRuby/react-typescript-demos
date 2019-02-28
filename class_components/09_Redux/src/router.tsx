import * as React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './app';
import { About, MembersPage, MemberPageContainer } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => (
    <Provider store={store}>
        <Router>
            <div className="container-fluid">
                <Route path="/" component={App} />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/members" component={MembersPage} />
                    <Route path="/member" component={MemberPageContainer} />
                    <Route exact path="/member/:id" component={MemberPageContainer} />
                </Switch>
            </div>
        </Router>
    </Provider>
);
