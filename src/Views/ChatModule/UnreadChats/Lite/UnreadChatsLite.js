import React from 'react';
import axios from 'axios';
import Loading from '../../../Loading/Loading';
import ViewChatsTable from './UnreadChatsTableLite';

export default class UnreadChatsLite extends React.Component {
    //constructor
    constructor(props) {
        super(props)
        this.state = {
            chat: [],
            loading: false
        }
    }

    //component Did mount
    componentDidMount() {
        this.setState({ loading: true })
        axios.get('/chats/get-all-unread') // I need the browser 
            .then((res) => {
                const chatData = res.data
                console.log(chatData)
                this.setState({
                    chat: { ...chatData },
                    loading: false
                })
            })
            .catch((error) => console.log(error))
    }

    //render

    render() {
        console.log(this.state.loading);
        const view = this.state.loading ?
            <Loading /> :
            <div style={{ padding: 10 }, {backgroundColor:'grey' }}>
                <div style={{fontsize:30},{textAlign: 'center'}}>Unread Messages</div>
                <ViewChatsTable chat={this.state.chat} />
            </div>
        
        return (
            view
        )
    }
}