import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import baselayout from './components/baselayout.js';
import contactform from './components/contactform.js';
import descriptions from './components/descriptions.js';
import pictures from './components/pictures.js';
import prices from './components/prices.js';
import aboutpage from './components/aboutpage.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/baselayout' component={baselayout} />
        <Route path='/contactform' component={contactform} />
          <Route path='/descriptions' component={descriptions} />
            <Route path='/pictures' component={pictures} />
              <Route path='/prices' component={prices} />
                <Route path='/aboutpage' component={aboutpage} />
                  <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
