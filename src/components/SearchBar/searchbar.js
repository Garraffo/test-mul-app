import React, { Component } from 'react';
import './searchbar.css';
import icoLupa from './ic_Search.png';
import icoMELI from './hMPf-bdc.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.submitHandler = this.submitHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(event) {
    const target = event.target;
    this.setState({
      search: target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    if (this.state.search) {
      this.props.history.push({pathname: '/items', search:`search=${this.state.search}`});
      
    }
  }

    render() {
      return (
        <div>
          <header className="header">
            <div  className="contentHeader">
              <img src={icoMELI} alt='' className="icoMeli"/>
              <form onSubmit={this.submitHandler} onChange={this.handleInput}>
                  <input type="text" placeholder="Nunca dejes de buscar" className="input"></input>
                  
                  <button type="submit" className="btnSearch">
                    <img src={icoLupa} alt='' />
                  </button>

                
              </form>
          </div>
            </header>
        </div>
      );
    }
  }
  
  export default SearchBar;