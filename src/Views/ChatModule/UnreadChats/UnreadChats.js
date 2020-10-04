import React from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading'
import UnreadChatsTable from './UnreadChatsTable'

export default class UnreadChats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            chats: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true })

        axios
            .get(
                '/chats/get-all-unread'
            )
            .then((res) => {
                const chatData = res.data
                this.setState({
                    chats: { ...chatData },
                    loading: false
                })
            })
            .catch((error) => console.log(error))
    }


    render() {

        const view = this.state.loading ?
            <Loading /> :
            this.state.chats[0] ?
            <div style={{ padding: 10 }, {backgroundColor:'green' }}>
                <div style={{fontsize:30},{textAlign: 'center'}}>Unread Chats</div>
                <UnreadChatsTable chat={this.state.chats} />
            </div> :
            <h1>No Chats</h1>
        
        return (
            view
        )
    }
}
