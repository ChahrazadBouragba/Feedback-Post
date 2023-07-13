import img from '../img/menu/meat.png'

export default function About() {
    return (
        <div className='about-div'>
            <img src={img}></img>

            <div className='about-des'>
                <h1>About Feedback Post</h1>
                <p><strong>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</strong></p>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
            </div>
        </div>
    )
}