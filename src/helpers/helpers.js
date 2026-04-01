const handleOrder = (productName, isContact = false) => {
    const phoneNumber = "+233249414041"; 

    let message = "";

    if (isContact) {
        message = `Hello AUGX Nutrition, I have a general inquiry and would like to speak with a representative. Can you help me?`;
    } else if (productName) {
        message = `Hello AUGX Nutrition, I'm interested in ordering *${productName}*. Could you please provide more details?`;
    } else {
        message = `Hello AUGX Nutrition, I'm interested in ordering your premium supplements. Could you please provide more details?`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
};

export { handleOrder };