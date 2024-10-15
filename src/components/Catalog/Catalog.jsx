import s from './Catalog.module.css'
import { Item } from '../Item/Item'
import { tovars } from '../../data/data'
import { Search } from '../Search/Search';
import { useState } from "react";

export function Catalog() {
    const [query, setQuery] = useState('')
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredProducts = tovars.filter((tovars) => {
        return tovars.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <div className={s.catalog}>
            <div className={s.content}>
                <h2>Каталог товаров</h2>

                <div className={s.catalog_inner}>
                    <div className={s.categories}>
                        <p>Категории:</p>
                        <div className={s.categories_btn}>
                            <button className={s.btn_active}>Все товары</button>
                            <button className={s.btn}>Шины/колеса</button>
                            <button className={s.btn}>Масла</button>
                            <button className={s.btn}>Ароматизаторы</button>
                        </div>
                    </div>

                    <Search handleChange={handleChange} />
                </div>



                <div className={s.block}>

                    <div className={s.items}>
                        {
                            filteredProducts.length ?
                                filteredProducts.map((tovar) => {
                                    return (
                                        <Item id={tovar.id} image={tovar.image} name={tovar.name} price={tovar.price} />
                                    )
                                })
                                :
                                <p className={s.error}>Не найдено ничего по запросу "{query}"</p>

                        }
                    </div>

                </div>

                <div className={s.catalog_button}>
                    <button className={s.catalog_btn}>Загрузить еще товары</button>
                </div>
            </div>
        </div>
    )
}