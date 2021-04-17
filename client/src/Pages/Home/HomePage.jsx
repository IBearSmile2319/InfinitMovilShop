
const HomePage = () => {
    return (
        <>
        <div className="container">
        <h1>Encabezado H1</h1>
        <h2>Encabezado H2</h2>
        <h3>Encabezado H3</h3>
        <h4>Encabezado H4</h4>
        <h5>Encabezado H5</h5>
        <h6>Encabezado H6</h6>

        <h1 className="display-1">Display 1</h1>
        <h2 className="display-2">Display 2</h2>
        <h3 className="display-3">Display 3</h3>
    </div>
    <div className="container ">
        <main className="grid col-3 med-col-2 peq-col-1">
            <div className="card-template">Card 1</div>
            <div className="card-template">Card 2</div>
            <div className="card-template">Card 3</div>
            <div className="card-template">Card 4</div>
            <div className="card-template">Card 5</div>
            <div className="card-template">Card 6</div>
        </main>
    </div>
    <div className="container">
        <div className="grid col-3">
            <div className="col-span-2 med-col-span-3">
                <div className="card-template">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum tempora, vero beatae
                        dolor sit rem quam repellat harum, quod, alias perspiciatis ipsum veritatis minima saepe! Natus
                        sed cum eos.
                    </p>
                </div>
                <div className="col-span-1 card-template med-col-span-3">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum tempora, vero beatae
                        dolor sit rem quam repellat harum, quod, alias perspiciatis ipsum veritatis minima saepe! Natus
                        sed cum eos.
                    </p>
                </div>
            </div>
            <div className="card-template med-col-span-3 ">
                <h3>registrate</h3>
            </div>
        </div>
    </div>
    </>
    )
}

export default HomePage
