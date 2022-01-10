import React, { Component, Suspense } from 'react';
import AccountMenu from './AppBar';
// import Footer from './Footer';
import Footer from './Footer';
// import Leftside from './Leftside';
// import Header from './Header'
// import Footer from './Footer'
import routes from '../route';
// import routes from '../routes';
import * as router from 'react-router-dom';
import {
    Route, Switch, Redirect
} from 'react-router-dom';
export class Layout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <div>
                <div id="wrapper">
                    {/* <Leftside></Leftside> */}
                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content">
                            <AccountMenu />
                            <Suspense fallback={this.loading()}>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => (
                                                    <route.component {...props} />
                                                )} />
                                        ) : (null);
                                    })}
                                    <Redirect from="/" to="/dashboard" />
                                </Switch>
                            </Suspense>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout  