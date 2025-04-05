import { useAppDispatch } from '../store/hooks'
import { setSearchQuery } from '../store/carSlice'
import { css } from '@emotion/react'

const SearchCar = () => {
  const dispatch = useAppDispatch()

  return (
    <input
    css={css`
      padding: 10px;
      margin: 20px;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    `}
      type="text"
      placeholder="Поиск по марке/модели..."
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
    />
  )
}

export default SearchCar
