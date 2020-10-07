import React from 'react';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import ViewUnitsTable from './ViewUnitsTableLite';
import { red } from '@material-ui/core/colors';

export default class ViewAllVulnerableUnitsLite extends React.Component {
    //constructor
    constructor(props) {
        super(props)
        this.state = {
            unit: [],
            loading: false
        }
    }

    //component Did mount
    componentDidMount() {
        this.setState({ loading: true })
        console.log("Getting vul devices")
        axios.get('/units/get-vulnerable-units') // I need the browser 
            .then((res) => {
                const unitData = res.data
                const state = this.state
                this.setState({
                    ...state,
                    unit: { ...unitData },
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
                <div style={{fontsize:30},{textAlign: 'center'}}>Vulnerable Units</div>
                <ViewUnitsTable unit={this.state.unit} />
            </div>
        return (
            view
        )
    }
}