import ProductDisplay from "./Product";

function HomePage ({ productItems, addToCart }) {

	return (
	<ul>
		<h3>ITEMS</h3>
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
</ul>
);
}


export default HomePage;