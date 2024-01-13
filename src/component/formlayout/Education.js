import React, { useState } from 'react'
import BackwordFawordLink from '../BackwordFawordLink';
import { Link } from 'react-router-dom';
import DispalyEducationData from './DispalyEducationData';

export default function Education(prop) {

    const [educationInfo, setEducationInfo] = useState({
        schoolName: '',
        location: '',
        qualification: '',
        specilization: '',
        year: ''
    });
    const [eduArr, setEduArr] = useState([]);
    const [loading, setLoading] = useState(false);
    
    function handleInputField(e) {
        setEducationInfo({
            ...educationInfo,
            [e.target.name]: e.target.value
        })
        setEduArr([educationInfo]);
        if(e.target.name === 'year'){
            setLoading(true);
        } 
    }
    
    return (
        <>
            <DispalyEducationData eduArr={eduArr} loading={loading} />
            {
                loading ? <></> :
                    <>
                        <div className='row ms-5 mb-3'>
                            <div className='col-md-3'>
                                <input name='schoolName' className='form-control' onChange={handleInputField} placeholder='school name' />
                            </div>
                            <div className='col-md-3'>
                                <input name='location' className='form-control' onChange={handleInputField} placeholder='school location' />
                            </div>
                        </div>

                        <div className='row ms-5 mb-3'>
                            <div className='col-md-3'>
                                <select className="form-select" name='qualification' onChange={handleInputField}>
                                    <option selected>Select Qualification</option>
                                    <option value="10th">10th</option>
                                    <option value="12th">12th</option>
                                    <option value="B-Tech">B-Tech</option>
                                    <option value="M-Tech">M-Tech</option>
                                </select>
                            </div>
                            <div className='col-md-3'>
                                <select className="form-select" name='specilization' onChange={handleInputField} >
                                    <option selected>Select Specilization</option>
                                    <option value="IT">IT</option>
                                    <option value="CSE">CSE</option>
                                    <option value="PCM">PCM</option>
                                    <option value="PCB">PCB</option>
                                </select>
                            </div>
                        </div>
                        <div className='row ms-5 mb-3'>
                            <div className='col-md-3'>
                                <input name='year' className='form-control' onChange={handleInputField} placeholder='StartYear-EndYear' />
                            </div>
                        </div>
                    </>
            }
        </>
    )
}
