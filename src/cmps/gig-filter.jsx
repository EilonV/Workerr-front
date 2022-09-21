import { useFormRegister } from '../hooks/useFormRegister'
import * as React from 'react'

export const GigFilter = (props) => {
  const [register, setFilterBy, filterBy] = useFormRegister(
    {
      title: '',
      tags: '',
    },
    props.onChangeFilter
  )

  return (
    <form className='filter'>
      <section>
        <label htmlFor='title'>TITLE</label>
        <input {...register('title', 'text')} />
      </section>
    </form>
  )
}
