
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from "../common/Header"
import Footer from "../common/Footer"
import { ContextProvider } from '../context/GlobalState'
import RightMenu from '../components/RightMenu'
import Menu from '../components/Menu'



const AppRouter = () => {
  return (
    <ContextProvider>
    <BrowserRouter>
        <Header/>
        <div className='flex'>
        <RightMenu/>
        <Menu/>
        </div>
        <Routes>
            {/* <Route path='/' element */}
        </Routes>
        <Footer/>
    </BrowserRouter>
    </ContextProvider>
  )
}

export default AppRouter