import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setSortBy } from '../store/carSlice'
import { css } from '@emotion/react'

const SortCars = () => {
  const { sortBy, sortDirection } = useAppSelector((state) => state.cars)
  const dispatch = useAppDispatch()

  const select = css`
    padding: 10px 20px;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 210px;
    `

  const container = css`
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
  `

  return (
    <div css={container}>
      <select 
        value={`${sortBy}_${sortDirection}`}
        onChange={(e) => {
          const [type, direction] = e.target.value.split('_');
          dispatch(setSortBy({
            sortBy: type as 'brand' | 'price' | 'year' | 'availability',
            direction: direction as 'asc' | 'desc'
          }));
        }}
        css={select}
      >
        <option value="availability_asc">Сначала в наличии</option>
        <option value="brand_asc">По названию ↑</option>
        <option value="brand_desc">По названию ↓</option>
        <option value="price_asc">По цене ↑</option>
        <option value="price_desc">По цене ↓</option>
        <option value="year_asc">По году ↑</option>
        <option value="year_desc">По году ↓</option>
      </select>
    </div>
  )
}

export default SortCars