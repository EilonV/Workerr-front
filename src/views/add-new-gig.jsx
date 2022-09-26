import { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { gigService } from '../services/gig.service'
import { addGig, updateGig } from '../store/actions/gig.action'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'

export const AddNewGig = () => {
  const user = JSON.parse(sessionStorage.loggedinUser)
  const loggedinUser = sessionStorage.loggedinUser
  ? JSON.parse(sessionStorage.loggedinUser)
  : ''

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const gigs = useSelector((state) => state.gigModule.gigs)
 
  const title ='I will '
   const [gig, handleChange, setGig] = useForm({
     title: title,
     price: '',
     daysToMake: '',
     longerDescription: '',
     tags: [],
     order: '',
     imgUrl: [],
   })

   const inputRef = useRef()

   useEffect(() => {
    //  inputRef.current.focus()
     const gigId = params.id
     if (!gigId) return
     gigService
       .getById(gigId)
       .then((gig) => {
         setGig(gig)
       })
       .catch((err) => {
         console.log('err:', err)
       })
   }, [])

      const onSaveGig = () => {
        // console.log('onSaveGig:active')
        
        //  ev.preventDefault()
     if (gig._id) {
       dispatch(updateGig(gig)).then(() => {
         navigate('/gigs')
       })
     } else {
       dispatch(addGig(gig)).then(() => {
         navigate('/gigs')
       })
     }
   }

   const handleSelect =(ev) =>{
    // console.log('ev:', ev.target.value)
    const updatedTags = [...gig.tags, ev.target.value]
   setGig({...gig, tags: updatedTags})
    
   }

   return (
     <section className='main-container'>
       <AppHeaderExplore />
       <HeaderCategories />
    
       <form>
        
       <section className='content-container'>
         <div className='create-container flex column'>
           <div className='title-container flex'>
             <div className='title-nav'>
               <div className='desc' htmlFor='name'>
                 <h1>Gig Title</h1>
               </div>
               <p>
                 As your Gig storefront, your title is the most important place
                 to include keywords that buyers would likely use to search for a
                 service like yours.
               </p>
             </div>

             <div className='text-area'>
               <textarea value ={gig.title} onChange={handleChange} name='title' placeholder="I will do something I'm really good at"></textarea>

               <div className='title-footer flex space-between'>
                 <span className='title-status-msg '></span>
                 <span className='chars-count'>0 / 80 max</span>
               </div>
             </div>
           </div>

           <div className='category-container flex'>
             <div className='title-nav category'>
               <div className='desc' htmlFor='name'>
                 <h1>Category</h1>
               </div>
               <p>
                 Choose the category and sub-category most suitable for your Gig.
               </p>
             </div>

             <div className='selection-bar flex space-between'>
               <select  value={gig.tags} onChange={handleSelect}  name='tags' id='tag-select'>
                 <option value='digital-marketing'>Digital Marketing</option>
                 <option value='writing-translation'>
                   Writing & Translation
                 </option>
                 <option value='video-animation'>Video & Animation</option>
                 <option value='music-audio'>Music & Audio</option>
                 <option value='programming-Tech'>Programming & Tech</option>
                 <option value='data'>Data</option>
                 <option value='busines'>Busines</option>
                 <option value='lifeStyle'>LifeStyle</option>
               </select>



               <select name='tags' id='tag-select'>
                 {/* <option value='digital-marketing'>Digital Marketing</option>
                 <option value='wWriting-translation'>
                   Writing & Translation
                 </option>
                 <option value='video-animation'>Video & Animation</option>
                 <option value='music-audio'>Music & Audio</option>
                 <option value='programming-Tech'>Programming & Tech</option>
                 <option value='data'>Data</option>
                 <option value='busines'>Busines</option>
                 <option value='lifeStyle'>LifeStyle</option> */}
               </select>
               <div className='title-footer flex space-between'></div>
             </div>
           </div>

           {/* <div className='tag-container flex '>
             <div className='title-nav'>
               <div className='desc'>
                 <h1>Search Tags</h1>
               </div>
               <p>
                 Tag your Gig with buzz words that are relevant to the services
                 you offer. Use all 5 tags to get found.
               </p>
             </div>
             <div className='search-tags'>
               <div className='desc' htmlFor='name'>
                 <h1>Positive keywords</h1>
                 <p>
                   Enter search terms you feel your buyers will use when looking
                   for your service.
                 </p>
                 <textarea value ={gig.tags} onChange={handleChange} name='tags' placeholder=''></textarea>
                 <h6>5 tags maximum. Use letters and numbers only.</h6>
               </div>
             </div>
           </div> */}

           <div className='price-container flex '>
             <div className='title-nav'>
               <div className='desc'>
                 <h1>Insert your price</h1>
               </div>
         
             </div>
             <div className='search-tags'>
               <div className='desc' htmlFor='name'>
            
               <label htmlFor='price'></label>
           <input
           value={gig.price}
           onChange={handleChange}
           type='number'
           name='price'
           id='price'
           />
               </div>
             </div>
           </div>
           <div className='days-container flex '>
             <div className='title-nav'>
               <div className='desc'>
                 <h1>Insert your days to make</h1>
               </div>
         
             </div>
             <div className='search-tags'>
               <div className='desc' htmlFor='name'>
            
           <label htmlFor='daysToMake'></label>
           <input
           value={gig.daysToMake}
           onChange={handleChange}
           type='number'
           name='daysToMake'
           id='daysToMake'
           />
               </div>
             </div>
           </div>
{/* 
           <div className='image-container flex '>
             <div className='title-nav'>
               <div className='desc'>
                 <h1>Insert your image</h1>
               </div>
             
             </div>
             <div className='search-tags'>
               <div className='desc' htmlFor='name'>
               <div className='img-upload-container'>
                   <label for='imgUrl' className='not-drag'>
                     <img
                      value={gig.imgUrl}
                       alt='imgUrl'
                       src='https:higherr-app.herokuapp.com/img/upload.dc98df6c.png'
                     />
                     <h6>
                       Choose an image
                  </h6>
                   </label>
                   <input value={gig.imgUrl} type='file' name='imgUrl' id='imgUrl' />
                 </div>
               </div>
             </div>
           </div> */}

           <div className='note'>
             <p>
               <span>Please note: </span> Some categories require that sellers
               verify their skills.
             </p>
           </div>
         </div>

         <div className='btn'>
           <Link onClick={onSaveGig} to='/gigs'>
             <span className='create-btn align-center'>Save & Continue</span>
           </Link>
         </div>
       </section>
         </form>
     </section>
   )
 }
