import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from "./app/reducers";
// import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  timeout: 0,
  key: "root",
  storage: AsyncStorage,
  whitelist: [
    "translations",
    "settings",
    "auth",
    "countNotify",
    "countNotifyRealTimeFaker",
    "listings",
    "events",
    "stackNavigator",
    "tabNavigator",
    "deviceToken",
    "shortProfile",
    "homeScreen",
    "listingDetail",
    "listingListFeature",
    "listingListFeatureAll",
    "listingDescription",
    "listingDescriptionAll",
    "listingPhotos",
    "listingPhotosAll",
    "listingProducts",
    "listingProductsAll",
    "listingReviews",
    "listingReviewsAll",
    "listingVideos",
    "listingVideosAll",
    "listingEvents",
    "listingEventsAll",
    "listingRestaurantMenu",
    "listingCustomBox",
    "listingSidebar",
    "listingAdvancedMultipleProducts",
    "listingAdvancedSingleProduct",
  ],
};

const reducers = persistReducer(persistConfig, rootReducers);
const middlewares = [thunk];
if (__DEV__) middlewares.push(logger);

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

export { store, persistor };
