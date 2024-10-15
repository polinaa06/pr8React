import s from './Item.module.css'
import { Link } from 'react-router-dom'

export function Item({ id, image, name = 'Неизвестно', price = '0' }) {
    return (
        <Link to={`${id}`}>
            <div className={s.item}>
                <div className={s.img}>
                    <img src={image} alt="" />
                </div>

                <div className={s.text}>
                    <p>{name}</p>
                </div>

                <div className={s.block}>
                    <div className={s.price}>
                        <h2>{price}</h2>
                        <p>₽</p>
                    </div>
                    <button className={s.btn}>Добавить в корзину</button>
                </div>
            </div>
        </Link>

    )
}