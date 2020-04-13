import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App'



ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/" component={App} />
          <Route exact path="/" component={App} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

