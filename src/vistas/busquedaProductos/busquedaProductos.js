import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/searchbar';
import BreadCrumbs from '../../components/BreadCrumb/breadcrumb';
import ListaBusqueda from '../../components/ListaBusqueda/listabusqueda';

import { parse } from 'qs';

class BusquedaProductos extends Component{
    constructor(props) {
        super(props);        
        this.state = {
          productos: [],
          categorias: []
         };
      }
    

    componentDidMount(){
        const search = parse(this.props.location.search.substr(1));
        console.log(search.search);
        this.setState({ search, productos: [], categorias: []});
        

        BusquedaProductos.getProducts(search.search)
        .then((data)=>{
            console.log("data");
            console.log(data);
            console.log("data.results");
            console.log(data.results);
            this.setState({
                productos: data.results,
                categorias: data.categories
            });
            console.log("state.productos");
            console.log(this.state.productos);
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.location.search !== this.props.location.search){
            const search = parse(this.props.location.search.substr(1));
            console.log(search.search);
            this.setState({ search, productos: [], categorias: []});
            

            BusquedaProductos.getProducts(search.search)
            .then((data)=>{
                console.log("data");
                console.log(data);
                console.log("data.results");
                console.log(data.results);
                this.setState({
                    productos: data.results,
                    categorias: data.categories
                });
                console.log("state.productos");
                console.log(this.state.productos);
            })
        }
    }

    static getProducts(search){
        let url = "https://api.mercadolibre.com/sites/MLA/search?q=:" + search + "&limit=4";
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }


    render(){
        return(
            <div>
                <SearchBar history={this.props.history}></SearchBar>
                <ListaBusqueda productos={this.state.productos}></ListaBusqueda>

            </div>
        );
    }


}

export default BusquedaProductos;