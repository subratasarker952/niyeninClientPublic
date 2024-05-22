import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Header from './Components/Shared/Header/Header'
import Loading from './Components/Shared/Loading/Loading'
import useAuth from './Components/hooks/useAuth'

function App() {

  const { userLoading } = useAuth()
  if (userLoading) {
    return <Loading></Loading>
  }

  return (<>
    <div className='min-h-screen flex flex-col justify-between relative'>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </>)
}

export default App
