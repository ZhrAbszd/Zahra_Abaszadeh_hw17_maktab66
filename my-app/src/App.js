import { useState } from 'react';
import './App.css';
import Allitems from './components/Allitems';
import { ItemContext } from './context/context';
import Selectitems from './components/Selectitems';

function App() {
    const [selectitems, setSelectedItems] = useState([])
    
    const selectItems = (item) => {
		setSelectedItems(prevState => {
			if (prevState.includes(item)) {
				return prevState.filter(obj => obj !== item)
			} else {
				return [...prevState, item]
			}
		})
    }

    
    return (
      <div className="App">
		<ItemContext.Provider value={{selectitems, selectItems}}>
			<div className='box'>
				<Allitems />
				<Selectitems />
			</div>
		</ItemContext.Provider>
      </div>
    );
}

export default App;