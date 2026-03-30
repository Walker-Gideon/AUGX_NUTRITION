const handleOrder = (productName) => {
    // WhatsApp requires the number in international format without any special characters
    // Example: 233547676236 (for Ghana)
    const phoneNumber = "+233547676236"; 

    const message = productName 
        ? `Hello AUGX Nutrition, I'm interested in ordering *${productName}*. Could you please provide more details?`
        : `Hello AUGX Nutrition, I'm interested in your products. Could you please provide more details?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
};

export { handleOrder };