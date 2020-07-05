import React from 'react'
import axios from 'axios'
import './ReplyMessage.css'

export default class ReplyMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reply: "Enter reply",
            closed: false,
            loading: false
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleInputChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit(event) {
        const data = {
            id: this.props.data.id,
            reply: this.state.reply,
            from: "Admin",
            fromID: this.props.data.from
        }

        axios.post(
            '/chats/reply',
            data
        ).then(res => {
            console.log(res)
        })

    }

    render() {

        return (

            <div className="form">
                <h4>Reply</h4>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        type="text"
                        name="reply"
                        onChange={this.handleInputChange}
                        placeholder="Reply"
                    />
                    <br></br>
                    <label>Close</label>
                    <input
                        type="checkbox"
                        name="closed"
                        checked={this.state.closed}
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
