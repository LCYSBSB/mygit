import React,{Component} from 'react'
import { connect } from 'react-redux';
import {setname} from '../action'
class Com2 extends Component{
    constructor(...agrs){
        super(...agrs)
    }
    fn(){
        this.props.setname(this.refs.input.value)
        this.refs.input.value =""
    }
    render(){
        return((
          <div>
          <input ref="input" type="text"/>
          <input  type="button" value="change" onClick={this.fn.bind(this)}/>

          </div>
        ))
    }
}

export default connect((state,props)=>Object.assign({},props,state),{
    setname
})(Com2)