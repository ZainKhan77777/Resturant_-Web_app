export const actionType = {
    SET_USER: "SET_USER",
    SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
    SET_CART_SHOW: "SET_CART_SHOW",
    SET_CARTITEMS: "SET_CARTITEMS",
  };
  
  const reducer = (state, action) => {
    // console.log(action);
  
    switch (action.type) {
      case actionType.SET_USER:
        return {
          ...state,
          user: action.user,
        };
  
      case actionType.SET_FOOD_ITEMS:
        return {
          ...state,
          foodItems: action.foodItems,
        };
  
      case actionType.SET_CART_SHOW:
        return {
          ...state,
          cartShow: action.cartShow,
        };
  
      case actionType.SET_CARTITEMS:
        return {
          ...state,
          cartItems: action.cartItems,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;


















// export const actionType ={
//     SET_USER: "SET_USER",
//     SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
//     SET_CART_SHOW: "SET_CART_SHOW",
// };

// const reducer = (state,action)=>{
//     console.log(action);

//     switch(action.type){
//         case actionType.SET_USER:
//             return{
//                 ...state,
//                 user: action.user,
//             };
//             default:return state;

//         case actionType.SET_FOOD_ITEMS:
//             return {
//                 ...state,
//                 foodItems: action.foodItems,
//             };

//         case actionType.SET_CART_SHOW:
//             return {
//                 ...state,
//                 cartShow: action.cartShow,
//             };
//     }
// };

// export default reducer;
