import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  return (
    /*!!! work needs to be done- full-screen only renders the color to a small portion 
    in the center of the laptop screen
    need to work on getting the the entire screen filled with color
    */
    <div className='full-screen'>
        <ColorPicker />
    </div>
  );
}

export default App;
