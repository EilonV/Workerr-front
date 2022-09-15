import { Route, Routes } from 'react-router-dom'
import './assets/scss/styles.scss'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { About } from './views/about'
import { Home } from './views/home'
import { GigExplore } from './views/gig-explore'
import { UserPage } from './views/user-page'
import { AdminPage } from './views/admin-page'


function App() {


    return (
        <div className="main-app main-layout">
            <AppHeader />
            <main className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/explore' element={<GigExplore />} />
                    <Route path='/user' element={<UserPage />} />
                    <Route path='/admin' element={<AdminPage />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}

export default App