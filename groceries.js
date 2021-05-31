// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "tomate",
		organic:true,
		nutFree: true,
		lactoseFree: true,
		price: 1.99
	},
	{
		name: "banane",
		organic:true,
		nutFree: true,
		lactoseFree: true,
		price: 1.99
	},
	{
		name: "pain",
		organic:false,
		nutFree: false,
		lactoseFree: false,
		price: 2.35
	},
	{
		name: "arachide",
		organic:false,
		nutFree: false,
		lactoseFree: true,
		price: 2.99
	},
	{
		name: "lait de chevre",
		organic:false,
		nutFree: true,
		lactoseFree: false,
		price: 4.99
	},
	{
		name: "yaourt au lait de coco organique",
		organic:true,
		nutFree: true,
		lactoseFree: true,
		price: 4.99
	},
	{
		name: "lait sans lactose",
		organic:true,
		nutFree: true,
		lactoseFree: true,
		price: 5.99
	},
	{
		name: "fraise",
		organic:true,
		nutFree: true,
		lactoseFree: true,
		price: 7.99
	},
	{
		name: "saumon",
		organic:false,
		nutFree: true,
		lactoseFree: true,
		price: 8.99
	},
	{
		name: "noix de cajou",
		organic:false,
		nutFree: false,
		lactoseFree: true,
		price: 10.99

	},

	{
		name: "viande de boeuf hachee",
		organic:false,
		nutFree: true,
		lactoseFree: true,
		price: 11.99
	},

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {

		 if ((restriction == "Organique") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);


		}
		else if ((restriction == "Sans_Noix") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);


		}
		else if((restriction == "Sans-Lactose")&&(prods[i].lactoseFree==true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);



		}
		else if (restriction == "Aucun"){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);

		}
	}

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
