import React from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading'
import ReplyCard from './ReplyCard'
import MessageCard from './MessageCard'
import ReplyMessage from './ReplyMessage'

export default class ViewSingleMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chat: [],
            replys: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        const data = { id: "5ece4f41f8dc143c847d3c85" }

        axios.post(
            '/chats/get-one',
            data
        ).then(res => {
            const chatData = res.data
            const replys = res.data.replies

            this.setState({
                chat: { ...chatData },
                replys: { ...replys },
                loading: false
            })
        })

        axios.post(
            '/chats/viewed-message',
            data
        ).then(res => {
            console.log(res.data)
        })
    }

    render() {

        const chatId = this.state.chat._id
        const fromId = "5ecb578fb2b10b0844de4cff"

        const message =
            <MessageCard
                message={
                    {
                        name: this.state.chat.from,
                        message: this.state.chat.message,
                        time: this.state.chat.createdAt
                    }
                }
            />

        const replys = Object.keys(this.state.replys).map((key) =>
            <ReplyCard key={key}
                reply={
                    {
                        name: this.state.replys[key].from,
                        message: this.state.replys[key].reply,
                        time: this.state.replys[key].date
                    }
                }
            />
        )

        const view = this.state.loading ?
            <Loading /> :
            <div className="content">
                {message}
                <ul>{replys}</ul>

                <ReplyMessage data={
                    {
                        id: chatId,
                        from: fromId
                    } 
                }
                />
            </div>
        return (
            view
        )
    }
}