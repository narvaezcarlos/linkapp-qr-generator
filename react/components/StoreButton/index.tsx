import React, { useState } from "react";

type buttonProps = {
    url: string
}

const StoreButton = ({url}: buttonProps) => {

    const [storeLoading, setStoreLoading] = useState('dn');

    return (
        <a href={`${decodeURIComponent(url)}`} className='db w-90 w-50-l mv4 pa4 bn br3 bg-action-primary pointer hover-shadow-3 white center tc no-underline' onClick={() => setStoreLoading('')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart mr3">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Ir a Tienda
            <svg fill="none" width="16" height="16" viewBox="0 0 100 100" className={storeLoading}>
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

export default StoreButton;