import React from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading'
import './ViewAllAdmins.css'
import ViewAllAdminsTable from './ViewAllAdminsTable'


export default class ViewAllAdmins extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            loading: false
        }


    }

    componentDidMount() {
        this.setState({ loading: true })
        axios.get('/users/get-all-admins')
            .then((res) => {
                const userData = res.data
                const state = this.state
                this.setState({
                    ...state,
                    user: { ...userData },
                    loading: false
                })

            })
            .catch((error) => console.log(error))


    }


    render() {
        console.log(this.state.loading);
        const view = this.state.loading ?
            <Loading /> :

            <div style={{ padding: 10 }}>
                All Admins
                <ViewAllAdminsTable user={this.state.user} />

            </div>
        return (
            view
        )
    }

}