import React, { useEffect, useState } from 'react';
import AccountButton from '../AccountButton';
import StoreButton from '../StoreButton';
import styles from '../../styles.css';
import ShareButton from '../ShareButton';
import QRCode from "react-qr-code";

const Landing = () => {
  const [url, setUrl] = useState('');
  const [showStatus, setShowStatus] = useState('dn');
  const [loaderStatus, setLoaderStatus] = useState('flex');

  const getUrlParams = () => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const src = params.get('src');
    setUrl(`https://www.linkapp.com.co/tienda?id=${id}&src=${src}`);
  }

  useEffect(() => {
    getUrlParams();
    setShowStatus('flex flex-wrap');
    setLoaderStatus('dn')
  }, []);

  return (
    <div>

      <div className={loaderStatus}>
        <div className={styles.logoCenter}>
          <img src="https://ventadirectanew.vtexassets.com/assets/vtex/assets-builder/ventadirectanew.vdnewtheme/1.0.79/linkapp-logo-tienda___909bf5acb2c98b2630da6f785a7b2107.png" alt="Logo LinkApp" />
        </div>
      </div>

      <div className={showStatus + ' w-100 pa4'}>

        <div className='w-100 pa3 flex flex-wrap'>

          <span
            className='dib center tc w-90'>
            Comparte este código con tus clientes, amigos o familiares y aumenta tus ingresos
          </span>

          <QRCode
            className='db center mv5'
            value={`${url}`}
          />

          <span
            className='dib center tc w-90'>
            Estamos más cerca de ti
          </span>

          <span
            className='dib center tc w-90'>
            Compra aquí los productos de OFFCORSS Ahorra tiempo y lleva lo mejor de moda infantil.
          </span>

        </div>

        <div className='w-100 flex flex-column justify-center align-center'>
          <ShareButton url={url} />
          <AccountButton />
          <StoreButton url={url} />
        </div>

      </div>

    </div>
  )
}

export default Landing;
