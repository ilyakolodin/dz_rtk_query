import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { mapsApi } from './mapsApi'
import { airQualityApi } from './airQualityApi'
import { historyApi } from './historyApi'

const rootReducer = combineReducers({
	[mapsApi.reducerPath]: mapsApi.reducer,
	[airQualityApi.reducerPath]: airQualityApi.reducer,
	[historyApi.reducerPath]: historyApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(mapsApi.middleware)
							  .concat(airQualityApi.middleware)
							  .concat(historyApi.middleware)
})