import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
 

interface IQuestion {
	id: number
	title: string
	info: string
}



export const Question = ({ id, title, info }: IQuestion) => {
	const [ viewInfo, setViewInfo ] = useState<boolean>(false)

	return <article className="question" >
		<header>
			<h4> {title} </h4>
			<button 
			onClick={ ()=> setViewInfo( !viewInfo ) }
			className="btn" > 
					{ viewInfo ? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle/>  }
			 </button>
		</header>
			{ viewInfo ? 		<p> { info } </p> : "" }
	</article>
}
