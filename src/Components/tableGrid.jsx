import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind'
import ReactPaginate from 'react-paginate';

class TableGrid extends Component {
    constructor (props){
        super (props)
        this.state = {
            currentPage: 1,
            dataPerPage: 10 };
        autoBind (this)
    }

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    render() {
        const { currentPage, dataPerPage } = this.state;
        const indexOfLastTodo = currentPage * dataPerPage;
        const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
        const currentData = this.props.data && this.props.data.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderData = currentData && currentData.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.data.length / dataPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });
        return (
            <div>
                <ul id="page-numbers" className='pagination-box'>
                    {renderPageNumbers}
                </ul>
                <ul>
                    {renderData}
                </ul>
            </div>
        )
    }
}

export default TableGrid;