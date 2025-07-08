import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Personajes } from "./Personajes";


//crate your first component
const Home = () => {
	
	const muestraUnaAlerta = ()=>{
		alert(`Empieza el juego con ${Nombre}`);
	}
	
	
	
	return (
		<div className="container-fluid pt-5">
		<div className="row m-4 justify-content-center">
			<Personajes 
			nombre="Ash" 
			imagen="https://static.wikia.nocookie.net/rainbow-six-siege/images/7/70/Ash.jpg/revision/latest/scale-to-width-down/1200?cb=20151116160248&path-prefix=es"
			Descripcion="Atacante veloz para rushear rapido un punto y un bazoca para romper paredes no reforzadas"
			/>
			<Personajes
			 nombre="Ying" 
			 imagen="https://static.wikia.nocookie.net/rainbowsix/images/2/27/Ying_-_Full_Body.png/revision/latest?cb=20180409014805"
			 Descripcion="Atacante mas lento, con candelas cegadoras y humos , una buena opcion para rushear y plantar en bomba"
			/>
			<Personajes 
			nombre="Azami" 
			imagen="https://static.wikia.nocookie.net/rainbowsix/images/6/61/Azami_Fullbody.png/revision/latest/scale-to-width-down/1200?cb=20240921073729"
			Descripcion="Defensora muy util con escopeta automatica y una barreras kiba para cerrar el punto o coger buenos pixeles"
			/>
			<Personajes 
			nombre="Goyo" 
			imagen="https://static.wikia.nocookie.net/rainbowsix/images/7/72/Goyo.png/revision/latest?cb=20190823091410"
			Descripcion="Defensor rapido y versatil con un buen subfusil y volcanes para detonar , se ponen en las entradas de punto para destruirlos y que no pueda entrar el enemigo"
			/>
		
		</div>
		</div>
		
		
)};

export default Home;