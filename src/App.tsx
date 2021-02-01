import React, { useState } from 'react'
import { Question } from './components/Question'
import data from './data'


interface Props {}


const App = (props: Props) => {
	const [ questions, setQuestions] = useState(data)

	return (
		<main> 
			<div className="container">
				<h3> question and answers about login </h3>
				<section className="info" >
					{
						questions.map((question) => (
							<Question key={ question.id } { ...question } />
						))
					}
				</section>
			</div>
		</main>
	)
}

export default App
