import { useFormRegister } from '../hooks/useFormRegister'
import * as React from 'react'

export const GigFilterExplore = ({ gigs, onChangeFilter }) => {
  const [register, setFilterBy, filterBy] = useFormRegister(
    {
      tags: '',
    },
    onChangeFilter
  )
  const closeModal = () => {
    const modal = document.querySelector('.filter-modal')
    modal.style.zIndex = -10
    modal.style.opacity = 0
    console.log('CLOSED MODAL')
  }
  const showModal = () => {
    const modal = document.querySelector('.filter-modal')
    modal.style.zIndex = 20
    modal.style.opacity = 1
    console.log('OPENED MODAL')
  }

  const handleChange = (ev) => {
    console.log(ev.target.value)
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
    <form action="" >
      <p onClick={showModal}>Service Options</p>
      <div className='filter-modal' >
        <div className='filter-modal-content'>
          <h1 onClick={closeModal}>X</h1>
          <div className='filter-grid'>

            {tags.map((tag) => {
              i++
              return <div key={tag} className='filter-grid-item'>
                <input type="checkbox" id={tag} name={tag} value={tag} onChange={handleChange} />
                <label for={tag}>{tags[i].charAt(0).toUpperCase() + tags[i].slice(1)} <span>({tagsV[i]})</span></label>
              </div>
            })}

          </div>
          <footer className='modal-footer'>
            <button className='clear'>Clear All</button>
            <button className='apply'>Apply</button>
          </footer>
        </div>
      </div>
    </form>
  </section>
}
