import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './ProductTable/ProductTable';
import SearchBar from './SearchBar/SearchBar';
import './FilterableProductTable.css';

export default class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
  
    render() {
      return (
        <div className='FilterableProductTable'>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }
  
  
  export const PRODUCTS = [
    {category: 'Books', price: '$26.00', stocked: true, name: 'The Midnight Library'},
    {category: 'Books', price: '$45.00', stocked: true, name: 'A Promised Land'},
    {category: 'Books', price: '$19.44', stocked: false, name: 'The Accidental Billionaires'},
    {category: 'Pokemon Cards', price: '$2,800.00', stocked: false, name: 'Charizard Base Set Holo'},
    {category: 'Pokemon Cards', price: '$975.00', stocked: true, name: 'Pikachu (35/108) - XY Evolutions - Reverse Holo'},
    {category: 'Pokemon Cards', price: '$5088.00', stocked: true, name: 'Mew-EX (RC24/RC25) - Legendary Treasures'}
  ];
  
  ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
  );