//Task 1: Business Dashboard – DOM Element Selection and Creation
const dashboard = document.getElementById("dashboard");
const dashboardSelector = document.querySelector('#dashboard');

function createMetricCard(id,title,initvalue) {
    let card = document.createElement('div');
    card.setAttribute('class','metric-card');
    card.setAttribute('id',id);
    card.innerHTML = `<h3>${title}</h3><p>${initvalue}</p>`;
    dashboard.appendChild(card);
};

createMetricCard('revenueCard','Revenue','$0');

//Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
createMetricCard("profitCard", "Profit", 0);
createMetricCard("expenseCard", "Expenses", 0);

const metricCardList = document.querySelectorAll('.metric-card');
const metricCardArray = Array.from(metricCardList);

metricCardArray.forEach(card => {
    card.innerHTML += "<p><i> - Updated</i></p>";
    card.style.backgroundColor = 'greenyellow';
});

//Task 3: Dynamic Inventory Management – Adding and Removing Items
const inventoryList = document.getElementById('inventoryList');

function addInventoryItem(name,quantity) {
    let newLi = document.createElement('li');
    newLi.setAttribute('class','product-item');
    newLi.setAttribute('dataset',product);
    newLi.addEventListener('click',() => {removeInventoryItem(newLi)});
    newLi.textContent = Product;
    inventoryList.appendChild(newLi);
};

addInventoryItem("Click me");
addInventoryItem("Add a product below");

let productForm = document.getElementById('productForm');
let error = document.getElementById('error');

productForm.addEventListener('submit', (event) => {
    let productName = document.getElementById('productName').value;
    if (productName.trim() === '') {
        error.textContent = 'Product name is required.';
        event.preventDefault();
    } else {
        error.textContent = '';
        addInventoryItem(productName);
        event.preventDefault();
    }
});

function removeInventoryItem(item) {
    inventoryList.removeChild(item);
}



// Write a function that creates a new <li> element representing a product.
// Use setAttribute to add a class (e.g., "product-item") or a custom data attribute to the <li>.
// Append the new product item to the inventory list using appendChild.
// Write a separate function that removes a specific <li> when it is clicked. Use removeChild within the inventory list to remove the clicked item.
