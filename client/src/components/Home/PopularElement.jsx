import { Link } from 'react-router-dom'
const PopularElement = () => {
    return (
        <div className="popular_elements">
            <ul>
                {[...imgs].map(i =>
                    <li key={i.id}>
                        <Link to="/">
                            <div className="popular_elements-circle">
                                <img src={i.img} alt="" />
                            </div>
                            <h3>Nuevos articulos</h3>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default PopularElement

const imgs = [
    {
        id: 1,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 2,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 3,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 4,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 5,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 6,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
]