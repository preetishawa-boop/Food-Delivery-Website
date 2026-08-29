let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");
}


function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

    let items = document.getElementById("cart-items");

    let total = 0;

    items.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        items.innerHTML += `
            <div style="margin:15px 0">

                <strong>${item.name}</strong>

                - ₹${item.price}

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    document.getElementById("cart-total").innerText = total;
}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


function openCart() {

    document.getElementById("cart-modal").style.display = "block";
}


function closeCart() {

    document.getElementById("cart-modal").style.display = "none";
}


function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let order = "Hello! I want to place an order:%0A%0A";

    let total = 0;


    cart.forEach(item => {

        order +=
            "🍴 " +
            item.name +
            " - ₹" +
            item.price +
            "%0A";

        total += item.price;
    });


    order +=
        "%0A💰 Total: ₹" +
        total;


    /*
       CHANGE THIS NUMBER
       TO YOUR WHATSAPP NUMBER.

       Use country code.
       Example India:
       919876543210
    */

    let phoneNumber = "919876543210";


    let whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        order;


    window.open(whatsappURL, "_blank");
}
