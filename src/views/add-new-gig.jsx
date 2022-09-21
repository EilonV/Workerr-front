import { AppHeaderExplore } from '../cmps/app-header-explore'
import ArrowRight from '../assets/imgs/icons/arrow-right.svg'

export const AddNewGig = (gig) => {
  return (
    <section>
      <AppHeaderExplore />
      <div className='top-navbar-container wizard-mode'>
        <nav className='fit-breadcrumbs top-navbar wizard fit-breadcrumbs-progress'>
          <ul>
            <li>
              <li className='list flex'>
                <p className='number num'>1</p>
                <p className='text text1'>Order Details</p>
                <img className='svg' src={ArrowRight} alt='arrow-right' />
              </li>
              <span className='fit-crumb current fit-crumb-current'>
                <span className='crumb-content'>
                  Overview<div className='floating-border'></div>
                </span>
              </span>
              <span
                className='fit-icon fit-breadcrumbs-separator'
                style='width: 12px; height: 12px;'
              ></span>
            </li>
            <li>
              <span className='fit-breadcrumbs-icon'>2</span>
              <span className='fit-crumb disabled fit-crumb-next'>
                <span
                  className='crumb-content'
                  title='Complete the current step before moving on'
                >
                  Pricing<div className='floating-border'></div>
                </span>
              </span>
              <span
                className='fit-icon fit-breadcrumbs-separator'
                style='width: 12px; height: 12px;'
              >
                <img classNameName='svg' src={ArrowRight} alt='arrow-right' />
              </span>
            </li>
            <li>
              <span className='fit-breadcrumbs-icon'>3</span>
              <span className='fit-crumb disabled fit-crumb-next'>
                <span
                  className='crumb-content'
                  title='Complete the current step before moving on'
                >
                  Description &amp; FAQ<div className='floating-border'></div>
                </span>
              </span>
              <span
                className='fit-icon fit-breadcrumbs-separator'
                style='width: 12px; height: 12px;'
              >
                <img classNameName='svg' src={ArrowRight} alt='arrow-right' />
              </span>
            </li>
            <li>
              <span className='fit-breadcrumbs-icon'>4</span>
              <span className='fit-crumb disabled fit-crumb-next'>
                <span
                  className='crumb-content'
                  title='Complete the current step before moving on'
                >
                  Requirements<div className='floating-border'></div>
                </span>
              </span>
              <span
                className='fit-icon fit-breadcrumbs-separator'
                style='width: 12px; height: 12px;'
              >
                <img classNameName='svg' src={ArrowRight} alt='arrow-right' />
              </span>
            </li>
            <li>
              <span className='fit-breadcrumbs-icon'>5</span>
              <span className='fit-crumb disabled fit-crumb-next'>
                <span
                  className='crumb-content'
                  title='Complete the current step before moving on'
                >
                  Gallery<div className='floating-border'></div>
                </span>
              </span>
              <span
                className='fit-icon fit-breadcrumbs-separator'
                style='width: 12px; height: 12px;'
              >
                <img classNameName='svg' src={ArrowRight} alt='arrow-right' />
              </span>
            </li>
            <li>
              <span className='fit-breadcrumbs-icon'>6</span>
              <span className='fit-crumb disabled fit-crumb-next'>
                <span
                  className='crumb-content'
                  title='Complete the current step before moving on'
                >
                  Publish<div className='floating-border'></div>
                </span>
              </span>
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
