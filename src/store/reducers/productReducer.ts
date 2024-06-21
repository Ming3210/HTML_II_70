import { Food } from "../../models/product";



const initial:Food[] = JSON.parse(localStorage.getItem("productList")|| "[]")
const productReducer = (state:any = initial, action:any)=>{
    switch(action.type){
        case "ADD_PRODUCT":
            const index = state.findIndex((item: Food) => item.id === action.payload.id);
            
            const newState = state.map((item:any, i:any) =>
                i === index ? { ...item, quantity: item.quantity - 1 } : item
            );


            localStorage.setItem("productList", JSON.stringify(newState));

            const product = { ...state[index], quantity: 1 };
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            let find = cart.find((item:Food) => item.id === product.id)
            console.log(find);
            
            if(find == undefined){
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
            }else alert("DA CO SAN PHAM")


            console.log(cart);

            return newState;
            
        default:
            return state;
    }
}

export default productReducer;