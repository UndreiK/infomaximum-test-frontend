import { Car } from './../graphql/generated'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import carsData from '../fake_cars.json'

interface CarsState {
  cars: (Car & { isFavorite: boolean })[]
  searchQuery: string
  sortBy: 'brand' | 'year' | 'price' | 'availability'
  sortDirection: 'asc' | 'desc'
}

const initialState: CarsState = {
  cars: carsData.map((car) => ({ ...car, isFavorite: false })),
  searchQuery: '',
  sortBy: 'availability',
  sortDirection: 'asc',
}

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    setSortBy(state, action: PayloadAction<{ sortBy: 'brand' | 'year' | 'price'| 'availability', direction: 'asc' | 'desc' }>) {
      state.sortBy = action.payload.sortBy
      state.sortDirection = action.payload.direction
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      const car = state.cars.find((c) => c.id === action.payload)
      if (car) car.isFavorite = !car.isFavorite
    },
  },
})

export const { setSearchQuery, setSortBy, toggleFavorite } = carsSlice.actions
export default carsSlice.reducer
