import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class hello extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <p>2222</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(hello)
