import { RepositoryList } from './components/RepositoryList'
import Counter from './components/Counter' 
import './styles/global.scss'

// Usando export default
export default function App() {
  return (
    // Fragment = Fragmento ( <></> )
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}