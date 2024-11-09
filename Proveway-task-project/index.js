function updateTotal() {
    let totalPriceElement = document.getElementById("total-price");
    let selectedOption = document.querySelector('input[name="bundle"]:checked').value;
    
    let price;
    switch(selectedOption) {
        case "1":
            price = 195.00;
            break;
        case "2":
            price = 345.00;
            break;
        case "3":
            price = 528.00;
            break;
        default:
            price = 0;
    }
    totalPriceElement.textContent = `Total: DKK ${price.toFixed(2)}`;

    updateSelectedStyle()
}

function updateSelectedStyle() {
    const bundleOptions = document.querySelectorAll(".bundle-option");
    bundleOptions.forEach(option => option.classList.remove("selected"));
   
    const selectedOption = document.querySelector('input[name="bundle"]:checked');
    selectedOption.parentElement.classList.add("selected");
}