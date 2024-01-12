import React, { useState } from 'react'
import BackwordFawordLink from '../BackwordFawordLink';

export default function Address() {
    const [houseNumber, setHouseNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [conutry, setCountry] = useState('');
    const [pineCode, setPineCode] = useState('');
    
    return (
        <>
            <div className='row ms-5 mt-3'>
                <div className='col-md-3'>
                    <h4>Address Details :</h4>
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                    <input name='houseNumber' className='form-control' onClick={(e) => setHouseNumber(e.target.value)} placeholder='flat/house Number' />
                </div>
                <div className='col-md-3'>
                    <input name='street' className='form-control' onClick={(e) => setStreet(e.target.value)} placeholder='street' />
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                    <input name='city' className='form-control' onClick={(e) => setCity(e.target.value)} placeholder='city' />
                </div>
                <div className='col-md-3'>
                    <input name='state' className='form-control' onClick={(e) => setState(e.target.value)} placeholder='state' />
                </div>
            </div>
            <div className='row ms-5 mb-3'>
                <div className='col-md-3'>
                    <input name='conutry' className='form-control' onClick={(e) => setCountry(e.target.value)} placeholder='country' />
                </div>
                <div className='col-md-3'>
                    <input name='pineCode' className='form-control' onClick={(e) => setPineCode(e.target.value)} placeholder='pinecode' />
                </div>
            </div>
            <BackwordFawordLink back="/" next="/summary"/>
        </>
    )
}
