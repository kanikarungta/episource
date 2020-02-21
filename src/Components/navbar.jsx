import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
import { config } from './Config/commonConfigs.js'
class NavBar extends Component {
    constructor(props) {
        super(props)
        autoBind(this)
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark ">
                    <a class="navbar-brand" href="#">Episource</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" id='Alcoholic' onClick={this.props.handleClickNavBar}>Alcoholic</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id='Drinks' onClick={this.props.handleClickNavBar}>Drinks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id='Ingredients' onClick={this.props.handleClickNavBar}>Ingredients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id='Glasses' onClick={this.props.handleClickNavBar}>Glasses</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <span class="navbar-toggler-icon"></span>
            </div>
        )
    }
}

export default NavBar;