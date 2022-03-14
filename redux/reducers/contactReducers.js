import { getDefaultNormalizer } from "@testing-library/react";

const initialState = [
    {
      id:0,
      name:"Manan Sharma",
      number:1234567890 ,
      email:"smanan097@gmail.com" ,
    },
    {
        id:1,
        name:"Rohan Sharma",
        number:1234567809,
        email:"rohansharma@gmail.com" , 
    }
];

const contactReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state,action.payload];
            return state;
        
            case "UPDATE_CONTACT":
                const updateState = state.map(contact=> contact.id === action.payload.id? action.payload:contact);
            state = updateState;
            return state;

            case "DELETE_CONTACT":
                const filterContacts = state.filter((contact)=> contact.id !== action.payload ? contact:null);
                state = filterContacts;
                return state;
            default: return state;
    }
};

export default contactReducer;