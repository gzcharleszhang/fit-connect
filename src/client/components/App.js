import React, { Component } from 'react';
import { Provider } from 'react-redux';
import makeStore from 'client/redux/store';
import axios from 'axios';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import '../App.css';
import Main from './Main';
import TopBar from './TopBar';

const store = makeStore();

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#80cbc4',
    },
  },
});

class App extends Component {
  componentDidMount() {
    axios.defaults.headers.common.Authorization = localStorage.getItem('jwtToken');
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <div className="App">
            <TopBar />
            <Main />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
