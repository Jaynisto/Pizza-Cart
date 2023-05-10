function totalAmount(){
    return{
        amount : function(){
            return Number(smallPizzaTotal) + Number(mediumPizzaTotal) + Number(largePizzaTotal)
        }
    }
    
}