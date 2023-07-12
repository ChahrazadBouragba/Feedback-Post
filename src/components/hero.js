// import img from '../img/hero/plate-transformed.png'
import img from '../img/menu/tomato-spagiti.png'


export default function Hero() {

    return (
    <div className="hero-div">
        <div className="left-side-hero">
            <div className="hero-description">
                <h4 className="hero--name">Tomato Pasta</h4>
                <h2 className="hero--title">Wait a minute</h2>
                <h2 className="hero--title">for delicious.</h2>
                <p className="description">Best cooks and best delivery guys at all your service. Hot tasty food will reach you in 20mins.</p>
            </div>
            <form>
                <input
                type="text"
                placeholder="Search for plates..."
                />
                <button type="submit" className="search-button">Search</button>
            </form>
      </div>
            <img className="hero-img" src={img}></img>
    </div>
    )
}