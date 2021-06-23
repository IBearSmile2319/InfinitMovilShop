import { Splide} from '@splidejs/react-splide'
const ProductsSplide = ({ children }) => {
    const Options = {
        type: 'slide',
        perPage: 5,
        gap: 10,
        innerHeight:'100%',
        // margin: {
        //     left:'10rem',
        //     right: '10rem'
        // },
        padding: {
            top   : '2rem',
            bottom: '3rem',
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
            {children}
        </Splide >
    )
}

export default ProductsSplide

