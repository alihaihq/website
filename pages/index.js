import { useState } from 'react';
import {
  Divider, Button, Tooltip, message,
} from 'antd';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import styles from './Home.module.css';
import { getApiEndpointURL } from '../utils';
import ContactUsForm from '../components/ContactUsForm';
import HeaderBanner from '../components/HeaderBanner';

const Home = () => {
  const [isSending, setIsSending] = useState(false);

  const onContactUsSubmit = ({
    mobile: userMobile,
    email: userEmail,
    message: userMessage,
  }) => {
    setIsSending(true);

    const data = {
      mobile: userMobile,
      email: userEmail,
      message: userMessage,
    };

    axios
      .post(getApiEndpointURL('/api/v1/forms/contactus'), data)
      .then((resp) => {
        console.log(resp);
        message.success(
          'Thanks for contacting us. We will reach you as soon as possible.',
        );
        setIsSending(false);
      })
      .catch((err) => {
        console.error(err);
        message.error(err.message || String(err));
        setIsSending(false);
      });
  };

  return (
    <div className={styles.home}>
      <NextSeo title="Alihai Store - Home" />
      <main className={styles.main}>
        <HeaderBanner buttonText="See our products" buttonURL="/products" />
        <div className={styles.contactFormPanel}>
          <div className={styles.leftPanel}>
            <h3 style={{ fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              We accept bulk Orders
            </h3>
            <p>
              You can order the followings by filling up the contact us form:
            </p>
            <ul>
              <li>Printed T-Shirts</li>
              <li>Blank T-Shirts</li>
              <li>Customized Collections</li>
              <li>Branded T-Shirts and Jeans</li>
            </ul>
          </div>
          <Divider type="vertical" style={{ height: 'auto' }} />
          <div className={styles.rightPanel}>
            <div className={styles.formContainer}>
              <ContactUsForm
                onSubmit={onContactUsSubmit}
                isLoading={isSending}
              />
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <Button.Group>
            <Tooltip title="Connect with Facebook">
              <Button
                type="link"
                href="https://www.facebook.com/alihaistore/"
                target="_blank"
                icon="facebook"
              />
            </Tooltip>
            <Tooltip title="Connect with Instagram">
              <Button
                type="link"
                href="https://www.instagram.com/alihai_store/"
                target="_blank"
                icon="instagram"
              />
            </Tooltip>
            <Tooltip title="Send us mail">
              <Button
                type="link"
                href="mailto:alihaistore@gmail.com,hello@rousan.io"
                icon="mail"
              />
            </Tooltip>
          </Button.Group>
        </footer>
      </main>
    </div>
  );
};

export default Home;
