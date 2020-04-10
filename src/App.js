import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import { Container } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'


import { Provider } from 'react-redux'
import { createStore } from 'redux'


//Pages
import home from './pages/home'
import cart from './pages/cart'
import login from './pages/login'
import signUp from './pages/signUp'
import Navbar from './components/navbar'
import { red } from '@material-ui/core/colors';
import overview from './pages/overview';
import reducers from './redux/reducers'



const theme = createMuiTheme({
  palette: {
    primary: red
  }
})

export class App extends Component {

  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={createStore(reducers)}>

          <div>
            <Router>
              <Navbar />
              <div className='container'>
                <Container maxWidth='lg'>
                  <Switch>
                    <Route exact path='/' component={home} />
                    <Route exact path='/login' component={login} />
                    <Route exact path='/signUp' component={signUp} />
                    <Route exact path='/cart' component={cart} />
                    <Route exact path='/mobileOverview/:id' component={overview} />

                  </Switch>
                </Container>

              </div>
            </Router>
          </div>
        </Provider>

      </MuiThemeProvider>
    )
  }
}

export default App
