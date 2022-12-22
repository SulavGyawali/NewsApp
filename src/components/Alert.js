import React, { Component } from 'react'

export default class Alert extends Component {
  render() {
    return (
        <div style={{height: '50px'}}>
        {this.props.alert && <div
            className={`alert alert-${this.props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            {this.props.alert.message}
           
          </div>}
          </div>
    )
  }
}
