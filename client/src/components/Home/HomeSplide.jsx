import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'
const HomeSplide = () => {
    const Options = {
        type: 'slide',
        rewind: true,
        gap: '0.2rem',
        pagination: true,
        cover: true,
        focus: 'center',
        isNavigation: true,
        updateOnMove: true,
        autoplay: true
    }
    return (
        <aside className="SplideBanner container">
            <Splide

                options={Options}
            >
                {[...imgs].map(item =>
                    <SplideSlide key={item.id}>
                        <Link to="/">
                            <img src={item.img} className="splide-img" alt={item.id} />
                        </Link>
                    </SplideSlide>
                )
                }
            </Splide>
        </aside>
    )
}

export default HomeSplide

const imgs = [
    {
        id: 1,
        img: "http://linuxsatellite.com/images/jssorh/jssora-7l.jpg"
    },
    {
        id: 2,
        img: "https://crehana-public-catalog.imgix.net/images/resources/images/7e21364d/679df5b5.jpg"
    },
    {
        id: 3,
        img: "https://blog.hotmart.com/blog/2020/01/BLOG_banner-youtube.png"
    }
]