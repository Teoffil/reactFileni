import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemDetail = ({id, name, img, category, desciption, price, stock}) => {
    return (
        <div>
            <article>
                <header>
                    <h2>
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} />
                </picture>
                <section>
                    <p>
                        categoria: {category}
                    </p>
                    <p>
                        Descripción: {desciption}
                    </p>
                    <p>
                        Precio: ${price}
                    </p>
                </section>
                <footer>
                    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
                </footer>
            </article>
        </div>
    );
}

export default ItemDetail;
