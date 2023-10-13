import './App.css';
import Mensaje from './mensaje'
const Description = () =>{
  return <p>Esta es la app del curso</p>
}
function App() {
  return (
    <div className="App">
      <Mensaje color='red' message= 'Estamos'/>
      <Mensaje color = 'green' message= 'trabajando'/>
      <Mensaje color = 'blue' message= 'En React'/>

      <Description/>
    </div>
  );
}

export default App;
