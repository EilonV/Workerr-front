import { useEffect, useState } from 'react'

export const useForm = (initialState, callBack) => {
  const [fields, setFields] = useState(initialState)

  useEffect(() => {
    if (callBack) callBack(fields)
  }, [fields])

  const handleChange = ({ target }) => {
    // console.log(target)
    const field = target.name
    if (target.type === 'checkbox') {
      setFields((prevFields) => ({ ...prevFields, [field]: target.checked }))
      return
    }
    const value = target.type === 'number' ? +target.value || '' : target.value
    setFields((prevFields) => ({ ...prevFields, [field]: value }))
  }

  return [fields, handleChange, setFields]
}
