import React, { useState } from 'react'
import BackwordFawordLink from '../BackwordFawordLink';

export default function PersonalDetails() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState(123467890);

    return (
        <>
            <div className='row ms-5 mt-5'>
                <div className='col-md-3'>
                    <h4>Personal Details :</h4>
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                    <input name='firstname' className='form-control' onClick={(e) => setFirstname(e.target.value)} placeholder='first name' />
                </div>
                <div className='col-md-3'>
                    <input name='lastname' className='form-control' onClick={(e) => setLastname(e.target.value)} placeholder='last name' />
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                    <input name='email' className='form-control' onClick={(e) => setFirstname(e.target.value)} placeholder='email' />
                </div>
                <div className='col-md-3'>
                    <input name='mobile' className='form-control' onClick={(e) => setLastname(e.target.value)} placeholder='mobile number' />
                </div>
            </div>
            <BackwordFawordLink back="/" next="/address"/>
        </>
    )
}
