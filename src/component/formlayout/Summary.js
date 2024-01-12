import React, { useState } from 'react'
import BackwordFawordLink from '../BackwordFawordLink';

export default function Summary() {
    const [summary, setSummary] = useState('');
    return (
        <>
            <div className='row ms-5 mt-5'>
                <div className='col-md-3'>
                    <h4>About Me :</h4>
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-8'>
                    <textarea name='summary' className='form-control' onClick={(e) => setSummary(e.target.value)} placeholder='add summary about you' />
                </div>
            </div>
            <BackwordFawordLink back="/address" next="/skill" />
        </>
    )
}
