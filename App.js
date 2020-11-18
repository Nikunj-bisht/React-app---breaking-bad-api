import React ,{useState} from 'react'

import './App.css';
import Headercomponent from './Components/ui/Header';
import Charactergrid from './Components/ui/Charactergrid';

function App() {

const [items,setitemhook] = useState([]);

const fetchitems = async() =>{

const characters = await fetch(`https://breakingbadapi.com/api/characters`);

const jsondata = characters.json();
return jsondata;
}

fetchitems().then((characters) =>{
console.log(characters);
setitemhook(characters);


})

  return (
    <div className="App">
 
<form>


  
</form>

<Headercomponent/>
<Charactergrid items={items}/>
    </div>
  );
}

export default App;
