import './App.css'
import Header from './components/Header';
import Map from './components/Map';
import Data from './components/FetchData';

function App() {

  return (
    <main className='max-w-[1440px] m-auto '>
      <Header />
      <Map />
      <Data />
    </main>
  )
}

export default App
