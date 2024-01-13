import React, { useState } from 'react'
import Education from './Education'
import BackwordFawordLink from '../BackwordFawordLink'

export default function EducationDetails() {
    const [isAddMorEdu, setIsAddMorEdu] = useState(false);
    
    return (
        <>
            <div className='row ms-5 mt-5'>
                <div className='col-md-3'>
                    <h4>Education :</h4>
                </div>
            </div>
            <Education />
            
            <BackwordFawordLink back="/summary" next="/education" />
        </>
    )
}
