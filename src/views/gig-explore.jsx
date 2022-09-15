import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { gigService } from "../services/gig.service"
import { loadGigs } from "../store/actions/gig.action"

export const GigExplore = () => {

    const gigs = useSelector(state => state.gigModule.gigs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGigs())
    }, [])

    return (<section>
        <h2>EXPLORE</h2>
        <div>
            
        </div>
    </section>
    )
} 