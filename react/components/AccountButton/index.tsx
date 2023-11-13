import React, { useState } from "react";

const AccountButton = () => {

    const [accountLoading, setAccountLoading] = useState('dn');

    return (
        <a href='https://www.linkapp.com.co/account' className='db w-90 w-50-l mv4 pa4 bn br3 bg-action-primary pointer hover-shadow-3 white center tc no-underline' onClick={() => setAccountLoading('')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-person-circle mr3" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            Mi Cuenta
            <svg fill="none" width="16" height="16" viewBox="0 0 100 100" className={accountLoading}>
                <g id="sti-loading">
                    <circle cx="50" opacity="0.4" cy="50" fill="none" stroke="#000000" r="40" className="c-muted-1" stroke-width="14"></circle>
                    <circle cx="50" cy="50" fill="none" stroke="#ffffff" r="40" stroke-dasharray="60 900" stroke-width="12" stroke-linecap="round">
                        <animateTransform attributeName="transform" attributeType="XML" dur="0.7s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                    </circle>
                </g>
            </svg>
        </a>
    )
}

export default AccountButton;
