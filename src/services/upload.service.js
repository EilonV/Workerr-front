export const uploadService = {
  uploadImg,
}

function uploadImg(ev) {
  // console.log('ev.target.files:', typeof ev.target.files)

  const CLOUD_NAME = 'dxav3wzkl'
  const UPLOAD_PRESET = 'xwwpzyi2'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const files = Object.values(ev.target.files)
  const prms = files.map((file) => {
    const formData = new FormData()
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('file', file)
    return fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        return res
      })
      .catch((err) => console.error(err))
  })
  return Promise.all(prms)
}
