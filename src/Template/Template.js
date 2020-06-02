import React from 'react'
import './Template.css'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer';
import Content from './Content/Content'



export default class Template extends React.Component{

    // constructor(){}

    render() {
        return (
            <div className="sample-grid">
                <div className="grid-container">
                    <div className="item1"><Header /></div>
                    <div className="item2"><Menu /></div>
                    <div className="item3"><Content /></div>  
                    <div className="item4">Right 1</div>
                    <div className="item5">Right 2</div>
                    <div className="item6"><Footer /></div>
                </div>
            </div>
        )
    }    

}
