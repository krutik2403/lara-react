import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const logger =(store) => (next) => (action) => {
    
    if (action.message) {
        switch (action.type) {
            
        }
    }
    next(action);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(logger)
);

const store = createStore(rootReducer, enhancer);
store.subscribe(() => {
    console.log("Store changed:", store.getState());
})
export default store;