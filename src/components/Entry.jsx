import places from '../data.js'
import locationMarker from '../images/marker.png'

export default function Entry() {    
    const data = places.map(place => {
        return (
            <article key={place.id} className='article-card'>
                <div className='main-img-container'>
                    <img className='main-img' src={place.img.src} alt={place.img.alt} />
                </div>
                <div className='card-details'>
                    <img className='marker' src={locationMarker} alt="map marker icon" />
                    <span className='country'>{place.country}</span>
                    <a href={place.googleMapsLink}>View on Google Maps</a>
                    <h2 className='details-title'>{place.title}</h2>
                    <p className='details-date'>{place.dates}</p>
                    <p className='details-text'>{place.text}</p>
                </div>
            </article>
        )
    })

    return (
        <div className='card-container'>
            {data}
        </div>
    )
}