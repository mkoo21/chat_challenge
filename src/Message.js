import React from 'react'
import PropTypes from 'prop-types'

export default class Message extends React.Component {

    render() {
        const { user, msg } = this.props
        return (
            <div>
                <span>{user}</span>
                <span>{msg}</span>
            </div>
        )
    }
}

Message.propTypes = {
    user: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
}
