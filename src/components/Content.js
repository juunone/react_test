import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

Content.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string.isRequired
}

export default Content;