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
        id: 11,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 21,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 31,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 41,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 51,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
    {
        id: 61,
        img: "https://i.ebayimg.com/images/g/7ZAAAOSw2H1eOtS1/s-l200.webp"
    },
]