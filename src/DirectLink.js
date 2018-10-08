import React, { Component } from 'react'
import defaults from './defaults'
import { bool, string } from 'prop-types'

export default class DirectLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isVisible) this.setState({ isVisible: false })
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.isVisible !== nextProps.isVisible ||
      this.state.isVisible !== nextProps.isVisible
    )
  }

  onClick(event) {
    event.stopPropagation()
  }

  render() {
    return (
      <a style={this._getStyle()} href={this.props.href} onClick={this.onClick}>
        Direct link&nbsp;
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAIGAiQIEkAAAAK0lEQVR42mXGsREAAAjCQNT9dzaHWpkCXlORByfLWwlXgiuCgYbYb+rzUgMbMAB8aRSoVQAAAABJRU5ErkJggg==" />
      </a>
    )
  }

  _getStyle() {
    const opacity = this.state.isVisible & 1 // bitwise and; converts bool to 0 or 1
    return Object.assign(
      {},
      defaults.styles.directLink,
      { opacity },
      this.props.defaultStyles.directLink
    )
  }
}

DirectLink.propTypes = {
  isVisible: bool.isRequired,
  href: string.isRequired
}
