import { Splide, SplideSlide } from '@splidejs/react-splide'
import CardProductos from '../CardProductos'
const ProductsSplide = () => {
    const Options = {
        type: 'splide',
        perPage: 6,
        gap: 10,
        margin: {
            left: '10rem',
            right: '10rem'
        },
        breakpoints: {
            720: {
                perPage: 3,
                pagination: false,
            },
            600: {
                perPage: 2,
                pagination: false,
                arrows: false
            },
            320: {
                perPage: 1,
                pagination: false,
                arrows: false
            }
        },
    }
    return (
        <Splide
            options={Options}
        >
            {[...imgs].map(i =>

                <SplideSlide key={i.id}>
                    <CardProductos
                        id={i.id}
                        title="Televicion de alta gama esto es una prueba de error"
                        price={"2000"}
                        img={i.img}
                    />
                </SplideSlide>
            )
            }

        </Splide >
    )
}

export default ProductsSplide

const imgs = [
    {
        id: 1,
        img: "https://i.ebayimg.com/images/g/7JUAAOSwPf5fYd-c/s-l225.webp"
    },
    {
        id: 2,
        img: "https://i.ebayimg.com/images/g/lOsAAOSw8d5fx03L/s-l225.webp"
    },
    {
        id: 3,
        img: "https://i.ebayimg.com/images/g/OZMAAOSwIoNdIxbI/s-l225.webp"
    },
    {
        id: 4,
        img: "https://i.ebayimg.com/images/g/nbIAAOSwcW9giqco/s-l225.webp"
    },
    {
        id: 5,
        img: "https://i.ebayimg.com/images/g/t5oAAOSwthtfoesX/s-l225.webp"
    },
    {
        id: 6,
        img: "https://i.ebayimg.com/images/g/gAcAAOSwD6BgpPe7/s-l225.webp"
    },
    {
        id: 12,
        img: "https://i.ebayimg.com/images/g/7JUAAOSwPf5fYd-c/s-l225.webp"
    },
    {
        id: 21,
        img: "https://i.ebayimg.com/images/g/lOsAAOSw8d5fx03L/s-l225.webp"
    },
    {
        id: 31,
        img: "https://i.ebayimg.com/images/g/OZMAAOSwIoNdIxbI/s-l225.webp"
    },
    {
        id: 41,
        img: "https://i.ebayimg.com/images/g/nbIAAOSwcW9giqco/s-l225.webp"
    },
    {
        id: 51,
        img: "https://i.ebayimg.com/images/g/t5oAAOSwthtfoesX/s-l225.webp"
    },
    {
        id: 61,
        img: "https://i.ebayimg.com/images/g/gAcAAOSwD6BgpPe7/s-l225.webp"
    },
]