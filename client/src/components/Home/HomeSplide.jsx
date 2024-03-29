import { Splide } from '@splidejs/react-splide'
const HomeSplide = ({children}) => {
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
                {children}
            </Splide>
        </aside>
    )
}

export default HomeSplide

