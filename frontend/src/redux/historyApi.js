import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const historyApi = createApi({
	reducerPath: 'historyApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/query'
	}),
	endpoints: (build) => ({
		addHistoryRecord: build.mutation({
			query: (body) => ({
				url: 'history-query',
				method: 'POST',
				body
			}),
		})
	})
})

export const { useAddHistoryRecordMutation } = historyApi