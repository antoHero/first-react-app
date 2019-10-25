import React from 'react';

class ProductForm extends React.Component {
	constructor(props){
		super(props);
		this.handleSave = this.handleSave.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSave(e) {
		this.props.onSave(this.state.product);
		//reset the form to blank after submitting
		this.setState({
			product: Object.assign({}, RESET_VALUES)
		});

		//prevent the form submit event from triggering an HTTP post
		e.preventDefault();
	}
	handleChange(e){
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState((prevState) => {
			prevState.product[name] = value;
			return {product: prevState.product};
		});
	}
	render() {
		return(
			<form>
				<h3>Enter a new Product</h3>
				<p>
					<label>
						Name
						<br />
						<input type="text" name="name" onChange={this.handleChange}
						value={this.state.product.name}/>
					</label>
				</p>
				<p>
					<label>
						Category
						<br />
						<input type="text" name="category" onChange={this.handleChange}
						value={this.state.product.category} />
					</label>
				</p>
				<p>
					<label>
						Price
						<br />
						<input type="text" name="price" onChange={this.handleChange}
						value={this.state.product.price} />
					</label>
				</p>
				<p>
					<label>
						<input type="checkbox" name="stocked" onChange={this.handleChange}
						checked={this.state.product.stocked}/>
						In stock?
					</label>
				</p>
				<p>
					<input type="submit" value="save" onClick={this.handleSave} />
				</p>
			</form>
		);
	}
}

export default ProductForm;