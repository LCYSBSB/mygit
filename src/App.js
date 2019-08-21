import React from 'react';
import {connect} from 'react-redux'
import Com1 from './components/com1'
import Com2 from './components/com2'
import './App.css';


class App extends React.Component{
  constructor(...args){
    super(...args)
  
  }

  render(){
    return(
      <div>
        {this.props.age}
        {this.props.name}
         <Com1/>
         <Com2/>
      </div>
    )
  }
}



export default connect((state,props)=>Object.assign({},props,state),{})(App)
