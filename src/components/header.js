import favorite from '../img/nav bar/heart.png'
import user from '../img/nav bar/user.png'





export default function Header() {

return (
    <header>
        <h3 className="logo">feedback<span className="logo-span">post</span></h3>
        <ul className="header-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>

            <img className="header-favorite" src={favorite}></img>
            <img className="header-user" src={user}></img>

        <button className="premium">Go Pro</button>
    </header>
)
}