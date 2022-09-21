


export const ReviewPreview = () => {
 
console.log(gig)

    return (
        <div className='seller-reviews flex column'>
            <div className='flex row gap'>
                <img className='user-review-img border-radius' src={gig.user[0].imgUrl} alt="user avatar" />

                <div className='inner-container flex column'>

                    <div className=' user-name-svg flex row gap'>
                        <h4>{gig.user[0].fullname}</h4><span>{gig.user[0].reviews[0].rate}</span>
                        <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /> </svg>
                    </div>

                    <div className='user-country-flag flex row gap'>
                        <img src={gig.user[0].reviews[0].by.flag} alt=""></img><span>{gig.user[0].reviews[0].by.country}</span>
                    </div>

                    <p className='user-review-txt'>{gig.user[0].reviews[0].txt}</p>
                    <h5 className='reviewed-at'>{gig.user[0].reviews[0].by.reviewedAt}</h5>
                </div>

            </div>

        </div>

    )
}




