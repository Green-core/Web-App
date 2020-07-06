import React from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading'
import './ViewUser.css'



export default class ViewAllUsers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            loading: false
        }


    }

    componentDidMount() {
        this.setState({ loading: true })
        axios.get('/users/get/:id')
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
                All Users
                <ViewUsersTable user={this.state.user} />

            </div>
        return (
            view
        )
    }

}