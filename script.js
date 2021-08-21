// totlaprice function
function totalPrice(){
    const bestPricetext=document.getElementById('best-price').innerText;
    const bestPrice=parseFloat(bestPricetext);
    const memoryCosttext=document.getElementById('addMemoryCost').innerText;
    const memoryCost=parseFloat(memoryCosttext);
    const StorageCosttext=document.getElementById('addStorageCost').innerText;
    const StorageCost=parseFloat(StorageCosttext);
    const deliveryCosttext=document.getElementById('addDeliveryCost').innerText;
    const deliveryCost=parseFloat(deliveryCosttext);
    const totalprice =memoryCost+StorageCost+deliveryCost+bestPrice;
    return totalprice;
}
// memory add event handler
// 16gb memory add
function memoryCost(btnId,memoryCost){
    const displayValue=document.getElementById(btnId);
    displayValue.innerText=memoryCost;
    const totalPriceid=document.getElementById('total-price');
    totalPriceid.innerText=totalPrice();
    document.getElementById('total-priceMain').innerText=totalPrice();
}
document.getElementById('addMemory2').addEventListener('click',function(){
    
    memoryCost('addMemoryCost',180);
    
    
    
})
// 8gb memory add
document.getElementById('addMemory1').addEventListener('click',function(){
    
    memoryCost('addMemoryCost',0);
    
    
    
})
// storage event handler
// 256gb storage add
function addStorage(storageId,storagePrice){
    const displayValue=document.getElementById(storageId);
    displayValue.innerText=storagePrice;
    const totalPriceid=document.getElementById('total-price');
    totalPriceid.innerText=totalPrice();
    document.getElementById('total-priceMain').innerText=totalPrice();
}
document.getElementById('addStorage1').addEventListener('click',function(){
    
    addStorage('addStorageCost',0);
    
    
})
// 512gb storage add
document.getElementById('addStorage2').addEventListener('click',function(){
    
    addStorage('addStorageCost',100);
    
    
    
})
// 1TB storage add
document.getElementById('addStorage3').addEventListener('click',function(){
    addStorage('addStorageCost',180);
    
    
})

// delivery charge event handler
// free delivery
function deliveryCharge(deliveryid,deliveryCharge){
    const displayValue=document.getElementById(deliveryid);
    displayValue.innerText=deliveryCharge;
    const totalPriceid=document.getElementById('total-price');
    totalPriceid.innerText=totalPrice();
    document.getElementById('total-priceMain').innerText=totalPrice();
}
document.getElementById('deliverybtn1').addEventListener('click',function(){
    
    deliveryCharge('addDeliveryCost',0);
    
    
})
document.getElementById('deliverybtn2').addEventListener('click',function(){
    
    deliveryCharge('addDeliveryCost',20);
    
})

// apply button click
document.getElementById('apply-btn').addEventListener('click',function(){
  
    totalCount();
   
})

// total count function with discount

function totalCount(){
    const input=document.getElementById('discount-input');
    const inputValue=input.value;
    if(inputValue=='stevekaku'){
       const pretotal=totalPrice();
       const newtotal=pretotal-(pretotal*0.2);
       document.getElementById('total-priceMain').innerText=  newtotal;
       input.value='';
        
        
    }
    else{
        input.value='';
       
    }
}