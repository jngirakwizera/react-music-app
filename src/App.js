import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import TheAppBar from './components/TheAppBar';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    }
}
 
loginUser = (loginState) => {
  this.setState({
      isLoggedIn: loginState
  })
}

render() {
  let renderComponent =  this.state.isLoggedIn ? <Dashboard/>: <Login loginFunction={this.loginUser}/>;
  return (
    <div className="App">
      <TheAppBar/>
      <header className="App-header">
        {renderComponent}
        
      </header>
    </div>
  );
}
}



export default App;