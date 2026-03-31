const handleOrder = (productName) => {
    const phoneNumber = "+233249414041"; 

    const message = productName 
        ? `Hello AUGX Nutrition, I'm interested in ordering *${productName}*. Could you please provide more details?`
        : `Hello AUGX Nutrition, I'm interested in your premium supplements. Could you please provide more details?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
};

export { handleOrder };