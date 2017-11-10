import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadUA} from './actions'

class UserAgent extends Component {

    componentDidMount() {
        this.props.loadUA()
    }

    render() {
        const {isFetching, error, data} = this.props.ua
        if (isFetching) {
            return <p>Loading User-agent...</p>
        }
        if(error) {
            return <span>Não foi possível comunicação com o servidor</span>
        } 
        return <p>User-agent: {data['user-agent']}</p>
    }
}

const mapStateToProps = (state) => {
    return {
        ua: state.ua
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUA: () => dispatch(loadUA())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)