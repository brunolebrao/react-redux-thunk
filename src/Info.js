import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadData} from './actions'

class Info extends Component {

    componentDidMount() {
        this
            .props
            .loadData()
    }

    render() {
        const {isFetching, data, error} = this.props.ip
        console.log(this.props.ip)
        if (isFetching) {
            return <span>Loading Info...</span>
        }
        if(error) {
            return <span>Não foi possível comunicação com o servidor</span>
        } 
        return <span>Info: {data.origin}</span>
    }
}

const mapStateToProps = (state) => {
    return {
        ip: state.ip,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)