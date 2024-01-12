import React from 'react'
import { Link } from 'react-router-dom'

export default function BackwordFawordLink(props) {
    return (
        <>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                    <Link to={props.back}><button className='btn btn-primary'>back</button></Link>
                </div>
                <div className='col-md-3 d-flex justify-content-end'>
                    <Link to={props.next}><button className='btn btn-primary'>next</button></Link>
                </div>
            </div>
        </>
    )
}
