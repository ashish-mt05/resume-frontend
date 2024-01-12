import React, { useState } from 'react'
import BackwordFawordLink from '../BackwordFawordLink';
import { Link } from 'react-router-dom';

export default function Education() {
    const [schoolName, setSchoolName] = useState('');
    const [location, setLocation] = useState('');
    const [qualification, setQualification] = useState('');
    const [specilization, setSpecilization] = useState('');
    const [year, setYear] = useState('');
    return (
        <>
            <div className='row ms-5 mt-5'>
                <div className='col-md-3'>
                    <h4>Education :</h4>
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                    <input name='schoolName' className='form-control' onClick={(e) => setSchoolName(e.target.value)} placeholder='school name' />
                </div>
                <div className='col-md-3'>
                    <input name='location' className='form-control' onClick={(e) => setLocation(e.target.value)} placeholder='school location' />
                </div>
            </div>
            
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                    <select className="form-select" name='qualification' aria-label="Default select example">
                        <option selected>Select Qualification</option>
                        <option value="1">10th</option>
                        <option value="2">12th</option>
                        <option value="3">B-Tech</option>
                        <option value="3">M-Tech</option>
                    </select>
                </div>
                <div className='col-md-3'>
                    <select className="form-select" name='specilization' aria-label="Default select example">
                        <option selected>Select Specilization</option>
                        <option value="1">IT</option>
                        <option value="2">CSE</option>
                        <option value="3">PCM</option>
                        <option value="3">PCB</option>
                    </select>
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                <input name='year' className='form-control' onClick={(e) => setYear(e.target.value)} placeholder='StartYear-EndYear' />
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                <i class="bi bi-plus"/> <span>Add More Education</span>
                </div>
            </div>

            <BackwordFawordLink back="/summary" next="/education" />
        </>
    )
}
