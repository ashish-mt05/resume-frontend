import React, { useState } from 'react'
import BackwordFawordLink from '../BackwordFawordLink';

export default function Skills() {
    const [skills, setSkills] = useState('');
    return (
        <>
            <div className='row ms-5 mt-5'>
                <div className='col-md-3'>
                    <h4>Add Skills :</h4>
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-8'>
                    <textarea name='skills' className='form-control' onClick={(e) => setSkills(e.target.value)} placeholder='add skills with comma separated' />
                </div>
            </div>
            <BackwordFawordLink back="/summary" next="/education" />
        </>
    )
}
