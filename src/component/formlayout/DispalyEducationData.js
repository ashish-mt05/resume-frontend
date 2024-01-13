import React, { useState } from 'react'
import Education from './Education';

export default function DispalyEducationData(prop) {
    const [isMoreEducation, setIsMoreEducation] = useState(false);
    const updateAddMoreFlage =()=>{
        setIsMoreEducation(true);
    }
    return (
        <>
            {
                prop.loading ?
                    <div className='row ms-5 mb-3'>
                        <div className='col-md-2'>schoolName</div>
                        <div className='col-md-2'>location</div>
                        <div className='col-md-2'>qualification</div>
                        <div className='col-md-2'>specilization</div>
                        <div className='col-md-2'>year</div>
                    </div> : <></>
            }
            {
                prop.loading && prop.eduArr.map((item, index) =>
                    <>
                        <div className='row ms-5 mb-3' key={index}>
                            <div className='col-md-2'>{item.schoolName}</div>
                            <div className='col-md-2'>{item.location}</div>
                            <div className='col-md-2'>{item.qualification}</div>
                            <div className='col-md-2'>{item.specilization}</div>
                            <div className='col-md-2'>{item.year}</div>
                        </div>
                        {
                            isMoreEducation ? <Education /> : <div className='row ms-5 mb-3'>
                            <div className='col-md-3'>
                                <i class="bi bi-plus" /> <a href='#' onClick={updateAddMoreFlage}>Add More Education</a>
                            </div>
                        </div>
                        }
                         
                    </>
                )
            }
        </>

    )
}
