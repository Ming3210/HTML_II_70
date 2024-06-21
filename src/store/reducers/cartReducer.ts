import { Food } from "../../models/product";

const initial: Food[] = [];

const cartReducer = (state: Food[] = initial, action: any) => {
  switch (action.type) {
    case "UPDATE_CART":
        console.log(action.payload);
        
       let cart = JSON.parse(localStorage.getItem("cartUnupdate") || "[]");
       console.log(cart);
       
       const index = cart.findIndex((item: Food) => {
        
        return item.id === action.payload;
    });
       
    console.log(cart,11111);
       if (index != -1) {   
        let amount = JSON.parse(localStorage.getItem('id') || "[]");
           cart[index] = { ...cart[index], quantity: amount }
           console.log(cart[index],222222);
           localStorage.setItem("cart", JSON.stringify(cart));
    }
       return cart;
     
       case "DELETE":
        let cart2= JSON.parse(localStorage.getItem("cart")|| "[]")
        console.log(action.payload);
        
        const updatedCart = cart2.filter((item:Food) => item.id !== action.payload);
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      
      return updatedCart;
       
    default:
      return state;
  }
};

export default cartReducer;
