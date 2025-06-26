import locationMarker from '../images/marker.png'

export default function Entry({title, text, dates, mapLink, country, img }) {  
    return (
        <article className='article-card'>
            <div className='main-img-container'>
                <img className='main-img' src={img.src} alt={img.alt} />
            </div>
            <div className='card-details'>
                <img className='marker' src={locationMarker} alt="map marker icon" />
                <span className='country'>{country}</span>
                <a href={mapLink}>View on Google Maps</a>
                <h2 className='details-title'>{title}</h2>
                <p className='details-date'>{dates}</p>
                <p className='details-text'>{text}</p>
            </div>
        </article>
    )
}