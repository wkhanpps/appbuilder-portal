import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundRoute, { pathName as notFoundPath } from './not-found';

export const NotFound = NotFoundRoute;

export default class ErrorsRootRoute extends React.Component {
  render() {
    return (
      <Switch>
          <Route exact path={notFoundPath} component={NotFoundRoute} />

          <Route component={NotFoundRoute} />
      </Switch>
    );
  }
}
