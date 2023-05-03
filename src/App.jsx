import { useState } from 'react'
import TopMenu from './components/TopMenu.jsx'
import './App.css'
import FancyBox from './components/FancyBox.jsx'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
		<header>
			<TopMenu />
		</header>
		<main>
			main 
			<FancyBox> box 1 </FancyBox>
			<FancyBox> box 2 </FancyBox>
		</main>
		</div>
	)
}

export default App
