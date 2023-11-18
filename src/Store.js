import { createStore } from "redux";
import RootReducers from "./Redux/Reducers/Mainreducers";


const store = createStore(RootReducers)

export default store