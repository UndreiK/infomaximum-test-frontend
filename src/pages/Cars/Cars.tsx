import { useAppSelector } from '../../store/hooks'
import CarCard from '../../components/CarCard'
import SortCars from '../../components/SortCars'
import SearchCar from '../../components/SearchCar'

const Cars = () => {
  const { cars, searchQuery, sortBy, sortDirection } = useAppSelector((state) => state.cars)

  const filteredCars = cars
    .filter(
      (car) =>
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      let result = 0
      switch (sortBy) {
        case 'brand':
          result = a.brand.localeCompare(b.brand)
          break
        case 'price':
          result = parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
          break
        case 'year':
          result = a.model_year - b.model_year
          break
        case 'availability':
          result = Number(b.availability) - Number(a.availability)
          break
      }
      return sortDirection === 'asc' ? result : -result
    })

  return (
    <>
      <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px' }}>
        <SortCars />
        <SearchCar />
      </div>
      <div css={{ display: 'flex', flexWrap: 'wrap', padding: '30px' }}>
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </>
  )
}

export default Cars
