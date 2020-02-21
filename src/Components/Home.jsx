import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
import axios from 'axios'
import NavBar from './navbar'
import CustomPaginationActionsTable from './tableGrid2'
import { config } from './Config/commonConfigs.js'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            strAlcoholic: [],
            strCategory: [],
            strIngredient1: [],
            strGlass: [],
            selected: ''
        }
        autoBind(this)
    }

    handleClickNavBar(event) {
        let configs = config[event.target.getAttribute('id')]
        if (this.state[configs.returnType] && !this.state[configs.returnType].length) {
            axios.get(configs.url, { headers: configs.headers }
            ).then(res => {
                let arr = res.data.drinks.map(obj => { return { 'name': obj[configs.returnType] } })
                this.setState({ [configs.returnType]: arr })
            }
            )
        }
        this.setState({ selected: configs.returnType })
    }
    render() {
        return (
            <div>
                <NavBar
                    handleClickNavBar={this.handleClickNavBar}
                />
                {this.state[this.state.selected] ? <CustomPaginationActionsTable
                    rows={this.state[this.state.selected] || []}
                    selected={this.state.selected}
                /> : ''}
            </div>
        )
    }
}

export default Home;