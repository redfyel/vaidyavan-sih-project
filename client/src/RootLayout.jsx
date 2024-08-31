import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'


function RootLayout() {
  return (
    <div>
        <Header />
        {/* Body -> outlet */}
        <div style={{minHeight : "100vh"}} className='container'>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout

