/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ApplicantSignup from 'components/user/applicant/signup/Signup';
import ApplicantLogin from 'components/user/applicant/login/Login';

const signUpSubComponent = (
    <>
      <h1 className='title'>Create Affinidi Wallet account</h1>
      <p>Welcome to your personal wallet. Here you will be able to store, view and manage your digital identity.</p>
      <p>In order to access your wallet you will need to set up a password first</p>
      <ApplicantSignup/>
    </>
)

const logInSubComponent = (
    <>
      <h1 className='title'>Applicant Login</h1>
      {/* <p>Please log in using Affindi Wallet's credentials.</p> */}
      <ApplicantLogin/>
    </>
)

const ApplicantLoginPage: React.FC = (): React.ReactElement => {
    // Toggle to which between Login or Sign up component
    const [showSignUp, setShowSignUp] = useState<boolean>(false)

    return (
        <div className='page-form page-form--slim'>
            { showSignUp ? signUpSubComponent : logInSubComponent }
            <p style={{marginTop:'20px'}}>
                { showSignUp ? <>Already have an account?<a href='#' onClick={() => setShowSignUp(false)}> Log in here </a></>: <>Don't have an account?<a href='#' onClick={() => setShowSignUp(true)}> Sign up here </a></>}
            </p>        
        </div>
    )
}

export default ApplicantLoginPage