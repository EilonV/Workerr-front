import { Route, Routes } from 'react-router-dom'
import './assets/scss/styles.scss'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { About } from './views/about'
import { Home } from './views/home'
import { GigExplore } from './views/gig-explore'
import { UserPage } from './views/user-page'
import { AdminPage } from './views/admin-page'
import { GigEdit } from './views/gig-edit'
import { GigDetails } from './views/gig-details';

function App() {
<<<<<<< HEAD


    return (
        <div className="main-app main-layout">
            <AppHeader />
            <main className='main-container'>
                <Routes>
                    <Route path='gig/details/:id' element={<GigDetails />} />
                    <Route path='gig/edit/:id' element={<GigEdit />} />
                    <Route path='gig/edit' element={<GigEdit />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/gigs' element={<GigExplore />} />
                    <Route path='/user' element={<UserPage />} />
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/' element={<Home />} />
                </Routes>

            </main>
            <AppFooter />
        </div>
    )
=======
  return (
    <div className='main-app main-layout'>
      <AppHeader />
      <main className='main-container'>
        <Routes>
          <Route path='gig/edit/:id' element={<GigEdit />} />
          <Route path='gig/edit' element={<GigEdit />} />
          <Route path='/about' element={<About />} />
          <Route path='/gigs' element={<GigExplore />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
>>>>>>> 0bea6b7fb757f6bdcfea9e46a523cce8af413a82
}

export default App
