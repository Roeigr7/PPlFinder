import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import filtersReducer from "./filtersReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  filters: filtersReducer,
  favorites: favoritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
