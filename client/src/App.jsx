import {useState} from 'react'
import Landing from './components/Landing';


function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	
	const authenticate = (boolean) => {
		setIsAuthenticated(boolean);
	};

  return (
    <>
			<Landing />
   </>
  )
}

export default App
