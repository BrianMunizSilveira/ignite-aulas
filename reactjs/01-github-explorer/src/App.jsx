import { RepositoryList } from './components/RepositoryList'
import { Counter } from './components/Counter'
import './styles/global.scss'

export function App () {
  return (
    // Fragment = Fragmento ( <></> )
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}
