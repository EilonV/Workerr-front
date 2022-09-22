import { AppHeaderExplore } from '../cmps/app-header-explore'
import ArrowRight from '../assets/imgs/icons/arrow-right.svg'

export const AddNewGig = () => {
  return (
    <section>
      <AppHeaderExplore />
      <div className='top-navbar-container wizard-mode'>
        <nav className='navbar-overview'>
          <ul>
            <li>
              <li className='list flex'>
                <p className='number num'>1</p>
                <p className='text text1'>Order Details</p>
                <img className='svg' src={ArrowRight} alt='arrow-right' />
              </li>
              <li className='list flex'>
                <p className='number num'>2</p>
                <p className='text text2'>Order Details</p>
                <img className='svg' src={ArrowRight} alt='arrow-right' />
              </li>
              <li className='list flex'>
                <p className='number num'>3</p>
                <p className='text text3'>Order Details</p>
                <img className='svg' src={ArrowRight} alt='arrow-right' />
              </li>
            </li>
          </ul>
        </nav>
        <div className='save-btn-container'>
          <button type='button' className='naked-button co-blue text-bold'>
            Save
          </button>
        </div>
      </div>
    </section>
  )
}
