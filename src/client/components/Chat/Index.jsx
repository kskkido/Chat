import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Chat extends Component {

}

Chat.propTypes = {
  faye: PropTypes.instanceOf(Faye),
  username: PropTypes.string,
}

Chat.defaultProps = {
  faye: null,
  username: ''
}

const mapStateToProps = state => ({ username: state.client.username })
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)
