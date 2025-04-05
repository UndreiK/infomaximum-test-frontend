import { useAppSelector } from "../../store/hooks"
import CarCard from "../../components/CarCard"
import { css } from "@emotion/react"

const FavoriteCars = () => {
  const { cars } = useAppSelector((state) => state.cars)

  const favoriteCars = cars.filter((car) => car.isFavorite)

  return (
    <div>
      <h1
        css={css`
          text-align: center;
          margin: 30px 0;
          font-size: 24px;
        `}
      >
        Избранные автомобили
      </h1>

      {favoriteCars.length > 0 ? (
        <div css={{ display: "flex", flexWrap: "wrap", padding: "30px" }}>
          {favoriteCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <p
          css={css`
            text-align: center;
            font-size: 18px;
            color: #666;
            margin-top: 50px;
          `}
        >
          У вас пока нет избранных автомобилей
        </p>
      )}
    </div>
  )
}

export default FavoriteCars
