import { Route, Routes } from 'react-router-dom'
import './assets/scss/styles.scss'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { Home } from './views/home'
import { GigExplore } from './views/gig-explore'
import { UserPage } from './views/user-page'
import { GigEdit } from './views/gig-edit'
import { GigDetails } from './views/gig-details'
import { GigCheckOut } from './views/gig-check-out'
import { AppHeaderExplore } from './cmps/app-header-explore'
import { AddNewGig } from './views/add-new-gig'
import { Orders } from './views/gig-orders'
import { GigPayment } from './views/gig-payment'
import { LoginSignup } from '../src/cmps/login-signup'
import { SellerOrders } from './views/gig-orders-seller'

function App() {
  return (
    <section>
      <div>
        <div className=''></div>

        <div className='main-app'>
          <main className='main-container'>
            <Routes>
              <Route
                path='gig/details/:id/checkout/payment'
                element={<GigPayment />}
              />
              <Route
                path='gig/details/:id/checkout'
                element={<GigCheckOut />}
              />
              <Route path='gig/details/:id' element={<GigDetails />} />
              <Route path='gig/edit/:id' element={<GigEdit />} />
              <Route path='gig/edit' element={<GigEdit />} />
              <Route path='/user/orders' element={<Orders />} />
              <Route path='/user/orders/seller' element={<SellerOrders />} />
              <Route path='/user/:' element={<AddNewGig />} />
              <Route path='/gigs' element={<GigExplore />} />
              <Route path='/user' element={<UserPage />} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<LoginSignup />} />
            </Routes>
          </main>
          <AppFooter />
        </div>
      </div>
    </section>
  )
}
export default App
