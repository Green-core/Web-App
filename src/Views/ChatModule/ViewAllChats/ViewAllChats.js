import React from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading'
import ViewChatsTable from './ViewChatsTable'
import './ViewAllChats.css'

export default class ViewAllChats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chat: [],
            loading: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true })
        axios
            .get(
                '/chats/get-all'
            )
            .then((res) => {
                const chatData = res.data 
                const state  = this.state 
                this.setState({
                    ...state,
                    chat : {...chatData}, 
                    loading: false})
            })
            .catch((error) => console.log(error))

    }

    handleInputChange(event) {
        // const { name, value, type, checked } = event.target
        // type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit(event) {
        // console.log(this.state.reply)
        // console.log(this.state.closed)

        // const data = {
        //     id: "5ece4f41f8dc143c847d3c85",
        //     reply: this.state.reply,
        //     from: "Admin",
        //     fromID: "5ecb578fb2b10b0844de4cff"
        // }

        // axios.post(
        //     '/chats/reply',
        //     data
        // ).then(res => {
        //     console.log(res)
        // })

    }

    render() {

        const view = this.state.loading ?
            <Loading /> :
            
            <div style={{padding: 10}}>
                All Messages
                <ViewChatsTable chat={this.state.chat}/>
            </div>
            return (
                view
        )
    }
}