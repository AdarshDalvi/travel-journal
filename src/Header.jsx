import './styles/Header.css'
import earth from './assets/earth.png'

export default function Header(){
    
    return (
        <div className="Header">
            <img src={earth}></img>
            <p>my travel journal</p>
        </div>
    )
}