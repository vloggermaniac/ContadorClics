import React  from "react";
import '../hojas-de-estilo/Boton.css'
function Boton ({texto, esDeBotonDeClic, manejarClic}){
	return (
		<button className= { esDeBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
			onClick={manejarClic}> 
			{texto}  
		</button>
	);	
}

export default Boton; 