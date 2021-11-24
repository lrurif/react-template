import reducer from "./reducer"
import { createStore } from "redux"
//引入redux-thunk，用于支持异步action
// import thunk from 'redux-thunk'
//引入redux-devtools-extension
// import {composeWithDevTools} from 'redux-devtools-extension'
export default createStore(reducer)

//暴露store 
// export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))