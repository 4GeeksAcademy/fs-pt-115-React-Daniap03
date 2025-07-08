const Heroes = () => {
    return (

    <div className="bg-body-secondary mx-3"
     style={{
    backgroundImage: "url('https://i.pinimg.com/originals/bb/d1/00/bbd100d92564f1bcf1a0105971a6e131.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  }}
>
        <div className="px-4 py-5 my-5 text-start">
            <h1 className="display-5 fw-bold">RAINBOW SIX SIEGE</h1>
            <div className="col-lg-6 mx-3 text-start">
                <p className="lead mb-4 ">Te voy a dejar varios personajes abajo para que elijas cual es tu favorito</p>
                <div className="d-grid gap-2 d-sm-flex ">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Call to action!</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Heroes;