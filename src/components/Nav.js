import React, { Component } from 'react';
import { Link } from  "react-router-dom";

export default class Nav extends Component {
    constructor(){
        super();
        this.state = {
            showMenu:false
        }
    }

showList = () =>{
    this.setState({
        showMenu:true
    })
}
hideList = (e) =>{
    e.preventDefault();
    this.setState({
        showMenu:false
    })
}

render(){
    return (<div>
            <div className='nav'>
                <Link to="/">Inicio</Link>
                <div onMouseOver={this.showList} onClick={this.hideList}>Productos</div>
                <div>Contacto</div>
                <div>Nosotros</div>
            </div>
                  {this.state.showMenu?
                    <div className='products'>
                        <div>Gorras</div>
                        <div>Lonas</div>
                        <div>Tazas</div>
                        <div>Playeras</div>
                    </div>:(null)}

            </div>
        )
    }
}

