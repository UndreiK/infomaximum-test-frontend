import { css } from "@emotion/react"
import { Car } from "../graphql/generated"
import { toggleFavorite } from "../store/carSlice"
import { useAppDispatch } from "../store/hooks"

const CarCard = ({ car }: { car: Car & { isFavorite: boolean } }) => {
  const dispatch = useAppDispatch()

    const card = css`
    display: flex;
    flex-direction: column;
    maxheight: 498px;
    maxwidth: 445px;
    gap: 10px;
    margin: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    position: relative;
  `
  const button = css`
    padding: 10px;
    cursor: pointer;
    background-color: #4F2CD9;
    width: 254px;
    height: 56px;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    border: none;
   `

  return (
    
    <div key={car.id} css={[
      card,
      !car.availability && css`
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;`
    ]}>
        <img
            src={car?.img_src }
            alt={`${car.brand} ${car.model}`}
            css={{ width: '445px', height: '310px'}}
        />
        <div>
            {car.brand} {car.model}
        </div>
        <div>
            {car.color} {car.model_year}
        </div>
        {!car.availability && (
        <div css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: black;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          z-index: 1;
          opacity: 1;
        `}>
          нет в наличии
        </div>
      )}
        <span>{car.price}</span>
        <div css={css`
          display: flex;
          gap: 10px;
        `}>
            <button disabled={!car.availability} css={button}>купить</button>
            <button 
              onClick={() => {dispatch(toggleFavorite(car.id))}}
              disabled={!car.availability} 
              css={{  cursor: 'pointer', color: 'white', fontSize: '16px', fontWeight: '400', textAlign: 'center', border: 'none'}}
            >{!car.isFavorite ? '🤍' : '💖'}</button>
        </div>
    </div>
    
  )
}

export default CarCard

