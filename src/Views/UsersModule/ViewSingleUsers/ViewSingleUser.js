import React from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import SingleUserProfile from "./SingleUserProfile";

export default class ViewSingleUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        const data = { id: this.props.match.params.id };
        axios.post("/users/get-one", data).then((res) => {
            const userData = res.data;


            this.setState({
                user: { ...userData },
                loading: false
            });
        });

    }

    render() {
        const userId = this.state.user._id;

        const singleUser = (
            <SingleUserProfile
                singleUser={{
                    name: this.state.user.name,
                    email: this.state.user.email,
                    role: this.state.user.role,
                    gender: this.state.user.gender,
                    contact: this.state.user.contact,
                    address: this.state.user.address,
                }}
            />
        );

        const view = this.state.loading ? (
            <Loading />
        ) : (
                <div className="content">
                    {singleUser}
                </div>
            );
        return view;
    }
}