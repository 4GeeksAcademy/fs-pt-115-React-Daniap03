export  const Personajes = (props) => {
    return(
       <div className="card col-md-3 m-3 p-3" style={{width :"18rem"}}>
				<img src={props.imagen} className="card-img-top object-fit-cover" alt="..." style={{height:"600px",objectPosition:"top"}}/>
					<div className="card-body">
						<h5 className="card-title">{props.nombre}</h5>
						<p className="card-text">{props.Descripcion}</p>
						<a href="#" className="btn btn-primary"onClick={()=>muestraUnaAlerta}>Pulsa para jugar</a>
					</div>
			</div>
    )
}
