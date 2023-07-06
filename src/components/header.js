import favorite from '../img/nav bar/heart.png'
import user from '../img/nav bar/user.png'
import addtocart from '../img/nav bar/shopping-bag.png'




export default function Header() {

return (
    <header>
        <h3 className="logo">feedback<span><b>post</b></span></h3>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className="header-imgs">
            <img src={favorite}></img>
            <img src={user}></img>
            <img src={addtocart}></img>

        </div>
    </header>
)
}