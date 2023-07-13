import heart from '../img/nav bar/heart.png'


export default function Favorites() {
    return (
        <div className='favorites-wrapper'>
            <h2>MY Favorites (0)</h2>

            <div>
                <img src={heart}></img>
                <h4>There are no products in your favourites.</h4>
                <button>Order Now</button>
            </div>
        </div>
    )
}