import data from '../data.js'
import locationMarker from '../images/marker.png'

export default function Entry(props) {    

    return (
        <article className='article-card'>
            <div className='main-img-container'>
                <img className='main-img' src={data[0].img.src} alt={data[0].img.alt} />
            </div>
            <div className='card-details'>
                <img className='marker' src={locationMarker} alt="map marker icon" />
                <span className='country'>{data[0].country}</span>
                <a href={data[0].googleMapsLink}>View on Google Maps</a>
                <h2 className='details-title'>{data[0].title}</h2>
                <p className='details-date'>{data[0].dates}</p>
                <p className='details-text'>{data[0].text}</p>
            </div>
        </article>
    )
}