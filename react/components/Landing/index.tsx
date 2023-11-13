import React, { useEffect, useState } from 'react';
import ShareButton from '../ShareButton';
import PrintButton from '../PrintButton';
import AccountButton from '../AccountButton';
import StoreButton from '../StoreButton';
import styles from '../../styles.css';

const Landing = () => {
    const [printStatus, setPrintStatus] = useState('flex');
    const [url, setUrl] = useState('');
    const [showStatus, setShowStatus] = useState('dn');
    const [loaderStatus, setLoaderStatus] = useState('flex');

    const getUrlParams = () => {
        const params = new URLSearchParams(location.search);
        const id = params.get('id');
        const src = params.get('src');
        setUrl(encodeURIComponent(`https://ventadirectanewqa.myvtex.com/tienda?id=${id}&src=${src}`));
    }

    useEffect(() => {
        getUrlParams();
    }, []);

    const handleLoader = () => {
        setShowStatus('flex flex-wrap');
        setLoaderStatus('dn')
    }

    return (
        <div>
            <div className={ loaderStatus }>
                <div className={ styles.logoCenter }>
                    <img src="https://ventadirectanew.vtexassets.com/assets/vtex/assets-builder/ventadirectanew.vdnewtheme/1.0.79/linkapp-logo-tienda___909bf5acb2c98b2630da6f785a7b2107.png" alt="Logo LinkApp" />
                </div>
            </div>
            <div className={showStatus + ' w-100'}>
                <div className='w-100 pa3 flex flex-wrap'>
                    <div className='w-100'>
                        <img className='db center' src={`https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl=${url}`} onLoad={() => handleLoader()}></img>
                    </div>
                    <div className={printStatus + ' w-100 flex-wrap justify-center align-center'}>
                        <PrintButton setPrintStatus={setPrintStatus} />
                        <ShareButton url={url} />
                    </div>
                </div>
                <div className={printStatus + ' w-100 pa3 flex-column justify-center align-center'}>
                    <AccountButton />
                    <StoreButton url={url} />
                </div>
            </div>
        </div>
    )
}

export default Landing;
