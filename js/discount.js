document.getElementById('submit-btn').addEventListener('click',function(){
    const priceElement = document.getElementById('price-field');
    const originalPrice = parseFloat(priceElement.value);
    //get price text element
    const priceTextElement = document.getElementById('price-text');
    //get coupon input field
    const couponInputField = document.getElementById('coupon-field');
    const couponCode = couponInputField.value;
    couponInputField.value = '';

    //get price 
    const price = document.getElementById('price');
    
    if(isNaN(originalPrice)){
        alert('Enter Original Price');
        return;
    }

    if(couponCode === 'DOM'){
        priceTextElement.innerText = '30% Less Price';
        const discountPrice = originalPrice - (originalPrice * 30 / 100);
        price.innerText = discountPrice;
        const button = document.getElementById('submit-btn');
        button.style.backgroundColor = 'gray';
        button.disabled = true;
        priceElement.hidden = true;
        couponInputField.hidden = true;
    }
    else{
        alert('Thik Vabe Coupon de!!');
    }

    
})