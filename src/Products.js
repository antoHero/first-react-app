import React from 'react';
import Filters from './Filter.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';

var PRODUCTS = {
	'1': {id: 1, category: 'Musical Instruments', price: '$300', stocked: true, name: 'Clarinet'},
	'2': {id: 2, category: 'Musical Instruments', price: '$3000', stocked: true, name: 'Harpiscord'},
	'3': {id: 3, category: 'Musical Instruments', price: '$30', stocked: false, name: 'Wireless Microphone'},
	'4': {id: 4, category: 'Furniture', price: '$11000', stocked: true, name: 'Chaise Lounge'},
	'5': {id: 5, category: 'Furniture', price: '$5300', stocked: false, name: 'Couch'},
	'6': {id: 6, category: 'Furniture', price: '$98700', stocked: true, name: 'Dining Table'}
};

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.handleFilter = this.handleFilter.bind(this);
		this.saveProduct = this.saveProduct.bind(this);
		this.handleDestroy = this.handleDestroy.bind(this);
		this.state = {
			filterText: '',
			inStockOnly: false,
			products: PRODUCTS
		};
	}
	saveProduct(products){
		product.id = new Date().getTime();
		this.setState((prevState) => {
			let products = prevState.products;
			products[product.id] = product;
			return {products};
		});
	}
	handleFilter(filterInput) {
		this.setState(filterInput);
	}
	handleDestroy(productId) {
    	this.setState((prevState) => {
      		let products = prevState.products;
      		delete products[productId];
      		return { products };
    	});
  	}
	render() {
		return (
			<div>
				<Filters 
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onFilter={this.handleFilter}
				/>
				<ProductTable products={PRODUCTS} 
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
				/>
				rows.push(
				    <ProductRow product={product} key={product.id} 
				    onDestroy={this.handleDestroy}
				    />
				    );
				<ProductForm 
				onSave={this.saveProduct}
				/>
			</div>
		);
	}
}

export default Products;