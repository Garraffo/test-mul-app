import React, {Component} from 'react';
import SearchBar from '../../components/SearchBar/searchbar';
import DetalleProducto from '../../components/DetalleProducto/detalleproducto';
import BreadCrumbs from '../../components/BreadCrumb/breadcrumb';

class VistaDetalleProducto extends Component{
    constructor(props) {
        super(props);        
        this.state = {
          producto: '',
          descripcion: '',
          categorias: []
         };
      }

    componentDidMount(){
        const IDproducto = this.props.location.pathname.replace('/items/', '');
        VistaDetalleProducto.getProducto(IDproducto)
            .then((data)=>{
                console.log("data detalle producto");
                console.log(data); 
                this.setState({
                    producto: data,
                })

            VistaDetalleProducto.getDescripcionProducto(IDproducto)
                .then((data)=>{
                    this.setState({
                        descripcion: data
                    })
                })

            VistaDetalleProducto.getCategoriaProducto(this.state.producto.category_id)
                .then((data)=>{
                    this.setState({
                        categorias: data.path_from_root
                    })
                    console.log("categorias data");
                    console.log(this.state.categorias);  
                })
        
        })

    }

    static getProducto(IDproducto){
        let url = "https://api.mercadolibre.com/items/" + IDproducto;
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    static getDescripcionProducto(IDproducto){
        let url = "https://api.mercadolibre.com/items/" + IDproducto + "/description";
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    static getCategoriaProducto(IDCategoria){
        let url = "https://api.mercadolibre.com/categories/" + IDCategoria;
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error));
    }



    render(){
        return(
            <div>
                <SearchBar history={this.props.history}></SearchBar>
                <BreadCrumbs  categorias={this.state.categorias}></BreadCrumbs>
                <DetalleProducto producto={this.state.producto} descripcion={this.state.descripcion}></DetalleProducto>
            </div>
        );
    }
}

export default VistaDetalleProducto;