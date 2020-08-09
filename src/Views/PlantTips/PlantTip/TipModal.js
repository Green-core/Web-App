import React from 'react';
import Axios from 'axios';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Redirect } from 'react-router-dom';
import { Card,CardContent,CardActions } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core';
import Modal from "@material-ui/core/Modal";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = (theme) => ({

    textField: { 
        marginLeft:theme.spacing(8),
        width:'80%',
    },
    actionbuttons:{
        marginLeft:theme.spacing(7),
        marginRight:theme.spacing(8),
    },
    buttonsave:{
        color:theme.palette.common.white,
        backgroundColor:"#1b5e20",
        '&:hover':{
        backgroundColor:"#8EB69B",
        },
        width:'100%'
    },
    buttonclose:{   
        width:'100%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
          
    },
    modalCard: {
        width: '90%',
        height:"100%",
        maxWidth: 700,
        overflow:'auto'
    },
    modalCardContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    marginTop: {
        marginTop: theme.spacing(2),
    },
    textfielderror: {
        marginLeft: theme.spacing(8), 
        marginTop:theme.spacing(0) ,    
        color:"red"
    },
    formControl: {
        marginLeft:theme.spacing(8),
        width:'80%',
        marginBottom:theme.spacing(4),
      },
});

 class TipModal extends React.Component {

    constructor(props){
        super(props);
        this.state = {

            title:'',
            description:'',
            open:true,
            errors:{},
        };
       
    }

    onChange = (e) => {
        this.setState({[e.target.id] : e.target.value});
    }

   
    onSubmit = (e) => {

        e.preventDefault();
        const {match:{params}} =this.props;
       
        const salesrep = {

            title : this.state.title,
            description : this.state.description,
        };
       
        Axios
            .put(`/salesreps/update/${params.id}`,salesrep,{
                headers:{
                    'Authorization':token
                }
            })
            .then(res => {
                if(res.status===200){
                 //   console.log(res.data);
                    this.setState({open:false});
                    this.props.history.push("/admin/salesreps");   
                }
                else{
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                this.setState({errors:err.response.data});
                if(err.tokenmessage){
                   // console.log(err.tokenmessage);
                    this.setState({isExpire:true}) ; 
                }
            })
    }

    openModal = () => {
        this.setState({open:true});
    }

    closeModal = () => {
        this.setState({open:false});
        this.props.history.push("/plant-tips");
    }

    render() {
        const { classes } = this.props;
        const { title,description,open,errors } = this.state;
        return (
            <Modal 
                className={classes.modal}
                onClose={this.closeModal}
                open={open}
                BackdropProps={{
                    style: {
                      opacity:'0.5'
                    }
                  }}       
            >
                <Card className={classes.modalCard}>
                    <form noValidate onSubmit={this.onSubmit} >
                        <CardContent className={classes.modalCardContent}>
                            <TextField
                                required
                                autoFocus
                                id="title"
                                label="Title"
                                value={title}
                                onChange={this.onChange}
                                className={classes.textField}
                                variant="outlined"
                                margin="normal"
                                type="text"
                            />
                            <FormHelperText id="component-error-text" className={classes.textfielderror}> {errors.title}</FormHelperText>
                            <TextField
                                required
                                id="description"
                                label="Full Name"
                                value={description}
                                type="text"
                                onChange={this.onChange}
                                className={classes.textField}
                                variant="outlined"
                                margin="normal"
                            />
                            <FormHelperText id="component-error-text" className={classes.textfielderror}> {errors.description}</FormHelperText>
                            <CardActions className={classes.actionbuttons}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.buttonsave} 
                                >
                                Save
                                </Button>
                                <Button
                                    variant="contained"
                                    className={classes.buttonclose}  
                                    onClick={this.closeModal}
                                >
                                Close
                                </Button>
                            </CardActions>
                        </CardContent>
                    </form>
                </Card>
            </Modal>      
        );
    }
}
export default withStyles(useStyles)(TipModal);
