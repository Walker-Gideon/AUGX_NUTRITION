const handleOrder = (productName) => {
    const phoneNumber = "0547676236"; // replace with real number

    const message = `Hello AUGX Nutrition, I would like to order *${productName}*. Please provide more details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
};

export { handleOrder };