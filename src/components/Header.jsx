import globe from '../images/globe.png'

export default function Header() {
    return (
        <header>
            <img className='header-img' src={globe} />
            <h1 className='header-title'>my travel journal.</h1>
        </header>
    )
}