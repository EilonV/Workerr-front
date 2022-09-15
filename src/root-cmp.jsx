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

function App() {
  return (
    <div className='main-app main-layout'>
      <AppHeader />
      <main className='container'>
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
}

export default App
