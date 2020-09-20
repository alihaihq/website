import { useState } from "react";
import { Icon, Divider, Button, Tooltip, message } from "antd";
import axios from "axios";
import Head from "next/head";
import { NextSeo } from "next-seo";
import styles from "../styles/Home.module.css";
import logoImg from "../assets/images/logo.png";
import { getApiEndpointURL } from "../utils";
import ContactUsForm from "../components/ContactUsForm";

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
      .post(getApiEndpointURL("/api/v1/forms/contactus"), data)
      .then((resp) => {
        console.log(resp);
        message.success(
          "Thanks for contacting us. We will reach you as soon as possible."
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
      <NextSeo
        title="Alihai Store"
        description="Fashion is in your hand, we just help you to make it."
        openGraph={{
          url: "https://alihaistore.com/",
          title: "Alihai Store",
          description: "Fashion is in your hand, we just help you to make it.",
          images: [
            {
              url: "http://avatars0.githubusercontent.com/u/70004592?s=200&v=4",
              width: 200,
              height: 200,
              alt: "Fashion is in your hand, we just help you to make it.",
            },
          ],
          site_name: "Alihai Store",
        }}
      />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.curveContainer}>
            <div className={styles.curve}></div>
          </div>
          <div className={styles.content}>
            <div className={styles.headerBar}>
              <div className={styles.contactItem}>
                <Icon type="phone" style={{ marginRight: 5 }} />
                <div className={styles.contactList}>
                  <span>+91 7001871118</span>
                  <span>,&nbsp;</span>
                  <span>+91 9123796456</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Icon type="mail" style={{ marginRight: 5 }} />
                <div className={styles.contactList}>
                  <span>alihaistore@gmail.com</span>
                  <span>,&nbsp;</span>
                  <span>hello@rousan.io</span>
                </div>
              </div>
            </div>
            <header className={styles.header}>
              <img src={logoImg} alt="Alihai Logo" />
            </header>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Alihai Store</h3>
              <h4 className={styles.subtitle}>
                Fashion is in your hand, we just help you to make it.
              </h4>
            </div>
            <div className={styles.heroButtonContainer}>
              <a
                href="https://www.amazon.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>See our products</span>
                <Icon type="right" style={{ marginLeft: 10 }} />
              </a>
            </div>
          </div>
        </div>
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
          <Divider type="vertical" style={{ height: "auto" }} />
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
