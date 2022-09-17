import { GigPreview } from './gig-preview'

export const GigList = ({ gigs }) => {
  if (!gigs) return <div className='flex justify-center'>Loading...</div>
  if (gigs.length > 0) console.log(gigs)
  return (
    <section>
      <div className='gig-list'>
        {gigs.map((gig) => (
          <GigPreview key={gig._id} gig={gig} />
        ))}
      </div>
    </section>
  )
}
