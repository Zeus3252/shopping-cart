import ProductDisplay from "./Product";

function HomePage ({ productItems, addToCart }) {

	return (
	<div>
		<h3 className="itemLabel">Items</h3>
		<div className="productsDisplay">
		{productItems && productItems.map((item) => (
			
			<ProductDisplay 
				 key = {item.id}
				 id = {item.id}
				 title = {item.title}
				 description = {item.description}
				 price = {item.price}
				 image = {item.image}
				 addToCart={addToCart}
			/>
		
		))}      
</div></div>
);
}


export default HomePage;