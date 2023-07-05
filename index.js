/*A program that lets a shopkeeper keep track of his goods by viewing, selling and adding more*/

main(); 

function main() {

	// shop choice
	const shopkeeperChoice = `	
			Enter: \n

			- V to view inventory \n
			- S to sell products \n
			- A to add product to inventory \n
			- C to terminate the program \n `

	// shop attributes
	const shoppingStock = [];
	
	// infinite loop that keeps decrementing the loop counter unless -1 is returned from getShopkeeperChoice()
	for (let i = 0; i < 1; i++) {
		displayShopkeeperChoice();
		let choice = getShopkeeperChoice();
		if (choice != -1) { 
			i--; // resets loop counter if the shopkeeper does not select terminate program
			performShopkeeperChoice(choice);  
		 } else { continue; } // terminates the loop 
		}

}



function displayShopkeeperChoice() {
	/* Displays the available actions for the shopkeeper*/

	alert(shopkeeperChoice);
}


function getShopkeeperChoice() {
	/*returns the shopkeepers choice, -1 if the shopkeeper terminates program*/

		let selectedChoice = prompt(shopkeeperChoice, "");
		
		// so we can retrieve the first non-whitespace element to return
		selectedChoice = selectedChoice.upper();
		selectedChoice = selectedChoice.trim(); 

		if (selectedChoice == "C"){
			return -1; 
		}
		return selectedChoice;


}

function performShopkeeperChoice(selectedChoice) {
	/* Finds the shopkeeper's choice and calls the associated functionS, if not a valid choice displays custom error to screen*/

	switch selectedChoice{

		case "V":
			displayShopItems();
			break;

		case "A":
			let item = getItemName();

			if(!searchInventory(item)) { // if item is not "already" present it can be added
				addItem();
				alert(`${item} has been successfully added to the stock`);
			} else {
				alert(`${item} cannot be added as it is already present in the stock`);
			}

			break;

		case "S":
			let item = getItemName();

			if (searchInventory(item)) { // if item is present it can be sold
				sellProduct(); // sells the item
				alert(`${item} has been successfully sold`);
			} else {
				alert(`${item} cannot be sold as it is not present in the stock`);
			}
			
			break;

		default:
			alert("Error!! Not a valid choice");

			break;
	}
}

function displayShopItems(shopInventory) {
	/* Displays the shop inventory to the screen*/

	if(shopInventory.length == 0) {
		alert("There are currently no items in the shop to sell");
	} else {
		alert(`Shop Items: ${shopInventory.toString()}`);
	}
}

function getItemName() {
	/*Asks shopkeeper for item name and returns it*/
	let itemName= prompt("Enter the desired item: ", "");
	return itemName;
}


function addStock() {
	/* Adds the stock to the array */



}

function removeStock() {
	/* Removes stock from the array, calls upon searchStock to remove*/

}