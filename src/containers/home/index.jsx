import React, { PureComponent } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class Home extends PureComponent {
  render () {
    return (
      <div>
        Help
      </div>
    )
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    changePage: () => push('/about-us')
  }
}

export default connect(null, mapDispatchToProps)(Home)
