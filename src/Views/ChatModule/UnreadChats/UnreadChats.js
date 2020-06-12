import React from 'react'
import axios from 'axios'
import UnreadChatsItem from './UnreadChatsItem'
import Loading from '../../Loading/Loading'

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
        const unreadChats = Object.keys(this.state.chats).map((key) =>
            <UnreadChatsItem key={key}
                chat={
                    {
                        name: this.state.chats[key].from,
                        priority: this.state.chats[key].priority,
                        date: this.state.chats[key].createdAt,
                    }
                }
            />
        )

        const view = this.state.loading ?
            <Loading /> :
            <div style={{ padding: '10px' }}>
                New Messages
            {unreadChats}
            </div>
        return (
            view
        )

    }
}
