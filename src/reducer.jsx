export const initialState={
    basket:[],
    user:null,
}


const reducer= (state,action)=>{
    console.log("ACTION",action);
    switch(action.type){
    
        case 'ADD_TO_HISTORY':
            return{
                ...state,
                basket :[...state.basket,action.item]
                
            };

        case 'REMOVE_FROM_LIST':
          let newBasket=[...state.basket];
          const result=newBasket.findIndex((basketItem)=>basketItem.id=action.id);
           if (result>=0){
               newBasket.splice(result,1)
           }
           else {
            console.warn (`Can't remove product (id :${action.id}) as it's not exist`)
        }
        
        return{
            ...state,basket:newBasket
        };


        default:
                return(state);    

    }
    
}
export default reducer;