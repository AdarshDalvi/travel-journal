import './styles/Card.css'
import marker from './assets/marker.png'

export default function Card(cardData){
    return (
        <div className="Card">
            <img className='cardImage' src={cardData.item.imageUrl} ></img>
            <div className='other-info'>
                <div className='top-desc'>
                    <img style={{height: 10,}} src={marker}></img>
                    <p style={{fontSize:10,marginLeft:4,marginRight:12,marginTop:0,marginBottom:0}}>{cardData.item.location}</p>
                    <p className='view-maps' onClick={()=>openInNewWindow(cardData.item.googleMapsLocation)}>View on Google Maps</p>
                </div>
                <p className='title'>{cardData.item.title}</p>
                <p className='date'>{`${cardData.item.startDate} - ${cardData.item.endDate}`}</p>
                <p className='description'>{cardData.item.description}</p>
            </div>
        </div>
    )
}

const openInNewWindow = (url)=>{
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

