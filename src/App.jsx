import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import places from './data'


function App() {

  const placeComponents = places.map(place => (
    <Entry 
      key={place.id} 
      title={place.title} 
      text={place.text}  
      dates={place.dates}
      mapLink={place.googleMapsLink}
      country={place.country}
      img={place.img}
      />
  ))

  return (
    <>
      <Header />
      <div className='card-container'>
        {placeComponents}
      </div>
    </>
  )
}

export default App
