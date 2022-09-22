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
import { GigDetails } from './views/gig-details'
import { GigCheckOut } from './views/gig-check-out'
import { AppHeaderExplore } from './cmps/app-header-explore'
import { AddNewGig } from './views/add-new-gig'
import { Orders } from './views/gig-orders'
import { GigPayment } from './views/gig-payment'

function App() {
  return (
    <section>
      <div>
        <div className=''></div>

        <div className='main-app main-layout'>
          <main className='main-container'>
            <Routes>
              <Route path='gig/details/:id/payment' element={<GigPayment />} />
              <Route
                path='gig/details/:id/checkout'
                element={<GigCheckOut />}
              />
              <Route path='gig/details/:id' element={<GigDetails />} />
              <Route path='gig/edit/:id' element={<GigEdit />} />
              <Route path='gig/edit' element={<GigEdit />} />
              <Route path='/about' element={<About />} />
              <Route path='/gigs' element={<GigExplore />} />
              <Route path='/user/:' element={<AddNewGig />} />
              <Route path='/user' element={<UserPage />} />
              <Route path='/admin' element={<AdminPage />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
          <AppFooter />
        </div>
      </div>
    </section>
  )
}
export default App
