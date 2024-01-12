import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Address from './formlayout/Address'
import PersonalDetails from './formlayout/PersonalDetails'
import Summary from './formlayout/Summary'
import Skills from './formlayout/Skills'
import Education from './formlayout/Education'

export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<PersonalDetails />} />
                            <Route path='personaldetails' element={<PersonalDetails />} />
                            <Route path='address' element={<Address />} />
                            <Route path='summary' element={<Summary />} />
                            <Route path='skill' element={<Skills />} />
                            <Route path='/education' element={<Education />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>

        </>
    )
}
