
import './styles/App.css'
import Header from './Header'
import Card from './Card'
import Data from './assets/Data'

export default function App() {
  const card= Data.map(item=>{
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Header/>
      <div>{card}</div>
    </div>
  )
}




