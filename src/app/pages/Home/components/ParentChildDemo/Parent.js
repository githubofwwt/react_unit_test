import React, {Component} from 'react'
import {Input} from 'antd'

export default class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
  }

  changeVal = (val) => {
    this.setState({msg: val});
  }

  render() {
    return (
      <div>
        <p><Input value={this.state.msg} onChange={(e) => this.changeVal(e.target.value)} /></p>
        <Child msg={this.state.msg} />
      </div>
    )
  }
}

export function Child({msg}) {
  return <p title={msg}>{msg}</p>
}
