import React, { useRef, useState, useMemo } from 'react'

export const GigFilterExplore = ({ gigs, onChangeFilter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filterTags, setFilterTags] = useState([])

  const formRef = useRef(null)

  const handleChange = ({ target: { checked, value } }) => {
    if (checked) setFilterTags([...filterTags, value])
    else setFilterTags(filterTags.filter((tag) => tag !== value))
  }

  const changeFilter = (ev) => {
    ev.preventDefault()
    onChangeFilter({ tags: filterTags })
  }

  const clearFilter = () => {
    setFilterTags([])
    formRef?.current.reset()
    onChangeFilter({ tags: [] })
  }

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  // Get all tags from gigs
  const gigCountByCategory = useMemo(() => {
    return gigs.reduce((map, gig) => {
      gig.tags.forEach((tag) => {
        if (!map[tag]) map[tag] = 1
        else map[tag]++
      })
      return map
    }, {})
  }, [gigs])

  const tags = Object.keys(gigCountByCategory)

  if (!gigs) return ''

  return (
    <section className='filter-modal-container'>
      <form className='filter-explore-form' ref={formRef}>
        <p onClick={() => setIsModalOpen(true)}>
          Service Options{' '}
          <span>
            <svg
              className='caret-svg'
              style={{
                transform: isModalOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
              width='11'
              height='7'
              viewBox='0 0 11 7'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z'></path>
            </svg>
          </span>
        </p>
        <div
          className='filter-modal'
          style={{
            zIndex: isModalOpen ? 20 : -10,
            opacity: isModalOpen ? 1 : 0,
          }}
        >
          <div className='filter-modal-content'>
            <h1 onClick={() => setIsModalOpen(false)}>X</h1>
            <div className='filter-grid'>
              {tags.map((tag) => {
                return (
                  <div key={tag} className='filter-grid-item'>
                    <input
                      className='checkbox'
                      type='checkbox'
                      id={tag}
                      name={tag}
                      value={tag}
                      onChange={handleChange}
                    />
                    <label htmlFor={tag}>
                      {capitalizeWord(tag)}{' '}
                      <span>({gigCountByCategory[tag]})</span>
                    </label>
                  </div>
                )
              })}
            </div>
            <footer className='modal-footer'>
              <button className='clear' onClick={clearFilter}>
                Clear All
              </button>
              <button
                className='apply'
                onClick={(ev) => {
                  changeFilter(ev)
                  setIsModalOpen(false)
                }}
              >
                Apply
              </button>
            </footer>
          </div>
        </div>
      </form>
    </section>
  )
}
