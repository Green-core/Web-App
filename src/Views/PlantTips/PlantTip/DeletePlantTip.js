import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@material-ui/core';

 class DeletePlantTip extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open:true,
        };
       
    }

    openDialog = () => {
        this.setState({open:true});
    }

    closeDialog = () => {
        this.setState({open:false});
        this.props.history.push("");
    }

    deleteTip = (e) => {

        e.preventDefault();
        const {match:{params}} =this.props;
        Axios
            .put(`/delete/${params.id}`)
            .then(res => {
                if(res.status===200){
                    console.log(res.data);
                    this.setState({open:false});
                    this.props.history.push();
                }
                else{
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                if(err.message){
                    console.log(err.message);
                     
                }
            });
    }

    render() {
            return (
                <Dialog
                    open={this.state.open}
                    onClose={this.closeDialog}
                    BackdropProps={{
                        style: {
                          opacity:'0.5'
                        }
                      }}
                
                >
                    <DialogTitle style={{color:"red"}} >{'Are you sure you want to delete the plant tip?'}</DialogTitle>
                    {/* <DialogContent>
                        <DialogContentText>
                            This act 
                        </DialogContentText>
                    </DialogContent> */}
                    <DialogActions>
                        <Button 
                            onClick={this.closeDialog} 
                            variant='contained'
                            type='submit'
                        >
                            Yes
                        </Button>
                        <Button 
                            onClick={this.deleteSalesrep}
                            color="secondary"
                            variant='contained'
                            type='submit'
                        >
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            );
        }         
}
export default DeletePlantTip;
