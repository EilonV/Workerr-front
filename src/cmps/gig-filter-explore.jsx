import { useFormRegister } from '../hooks/useFormRegister'
import * as React from 'react'
import { setFilterBy } from '../store/actions/gig.action'

export const GigFilterExplore = ({ gigs, onChangeFilter }) => {
  // const [register, setFilterBy, filterBy] = useFormRegister(
  //   {
  //     tags: [],
  //   },
  //   onChangeFilter
  //   setFilterBy
  // )
  const filter = []

  let filterBy = {
    tags: [],
    userId: ''
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    // onChangeFilter(filterBy)
  }
  const closeModal = () => {
    const modal = document.querySelector('.filter-modal')
    modal.style.zIndex = -10
    modal.style.opacity = 0
    document.querySelector('.caret-svg').style.transform = 'rotate(0deg)'
    console.log('CLOSED MODAL')
  }
  const showModal = () => {
    const modal = document.querySelector('.filter-modal')
    modal.style.zIndex = 20
    modal.style.opacity = 1
    document.querySelector('.caret-svg').style.transform = 'rotate(180deg)'
    console.log('OPENED MODAL')
  }

  const handleChange = (ev) => {
    console.log('ev.target.value', ev.target.value)
    console.log(filterBy)
    if (ev.target.checked) {
      filterBy.tags.push(ev.target.value)
      // onChangeFilter(filterBy)
    }
    else {
      filterBy.tags.splice(filterBy.tags.indexOf(ev.target.value), 1)
      // onChangeFilter(filterBy)
    }
    console.log(filterBy)


  }

  const changeFilter = (ev) => {
    ev.preventDefault()
    onChangeFilter(filterBy)
  }

  const clearFilter = () => {
    console.log('entered clearFilter')
    filterBy.tags = []
    console.log(filterBy)
    document.querySelector('.filter-explore-form').reset()
    onChangeFilter(filterBy)
  }

  if (!gigs) return ''

  // Get all tags from gigs
  let categories = {}
  gigs.map(gig => {
    gig.tags.map(tag => {
      if (categories[tag]) {
        categories[tag] += 1
      }
      else
        categories[tag] = 1
    })
  })

  const tags = Object.keys(categories)
  const tagsV = Object.values(categories)
  let i = -1

  return <section className='filter-modal-container'>
    <form className='filter-explore-form' action="" onSubmit={handleSubmit}>
      <p onClick={showModal}>Service Options <span><svg className='caret-svg' width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path></svg></span></p>
      <div className='filter-modal' >
        <div className='filter-modal-content'>
          <h1 onClick={closeModal}>X</h1>
          <div className='filter-grid'>

            {tags.map((tag) => {
              i++
              return <div key={tag} className='filter-grid-item'>
                <input className='checkbox' type="checkbox" id={tag} name={tag} value={tag} unchecked='' onChange={handleChange} />
                <label htmlFor='title' for={tag}>{tags[i].charAt(0).toUpperCase() + tags[i].slice(1)} <span>({tagsV[i]})</span></label>
              </div>
            })}

          </div>
          <footer className='modal-footer'>
            <button className='clear' onClick={() => clearFilter()}>Clear All</button>
            <button className='apply' onClick={(ev) => {
              changeFilter(ev)
              closeModal()
            }}>Apply</button>
          </footer>
        </div>
      </div>
    </form>
  </section>
}
