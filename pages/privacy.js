'use strict'

import React from 'react'
import Link from 'next/link'

import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'
import { isLogged } from './../services/auth'

const Terms = () => {
  let items

  if (isLogged()) {
    items = [
      {name: 'Rankings', link: 'rankings', type: 'item'},
      {name: 'Profile', link: 'profile', type: 'button'}
    ]
  } else {
    items = [
      {name: 'Rankings', link: 'rankings', type: 'item'},
      {name: 'Login', link: 'login', type: 'button'}
    ]
  }

  return (
    <div>
      <Meta/>

      <Header items={items}/>

      <section className={style(styles.row)}>
        <h1 className={style(styles.title)}>Privacy Policy</h1>
        <h3 className={style(styles.subtitle)}>Last updated: Jan 18, 2017</h3>

        <h2 className={style(styles.exhibit)}>Our Policy</h2>
        <p className={style(styles.text)}>Welcome to the web site (the "Site") of Ritoplz. ("Ritoplz", "we", "us" and/or "our"). This Site is operated by Ritoplz and has been created to provide information about our company and services [Confirm description of your services] (together with the Site, the "Services") to our Service visitors ("you", "your"). This Privacy Policy sets forth Ritoplz's policy with respect to information including personally identifiable data ("Personal Data") and other information that is collected from visitors to the Site and Services.</p>

        <h2 className={style(styles.exhibit)}>Information We Collect</h2>
        <p className={style(styles.text)}>When you interact with us through the Services, we may collect Personal Data and other information from you, as further described below:</p>

        <h2 className={style(styles.exhibit)}>Personal Data That You Provide Through the Services</h2>
        <p className={style(styles.text)}>We collect Personal Data from you when you voluntarily provide such information, such as when you contact us with inquiries, respond to one of our surveys, register for access to the Services or use certain Services. Wherever Ritoplz collects Personal Data we make an effort to provide a link to this Privacy Policy.</p>
        <p className={style(styles.text)}>By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to the Services, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of Ritoplz and the authorized third parties referred to herein located in the United States.</p>

        <h2 className={style(styles.exhibit)}>Our Use of Your Personal Data and Other Information</h2>
        <p className={style(styles.text)}>Ritoplz uses the Personal Data you provide in a manner that is consistent with this Privacy Policy. If you provide Personal Data for a certain reason, we may use the Personal Data in connection with the reason for which it was provided. For instance, if you contact us by email, we will use the Personal Data you provide to answer your question or resolve your problem. Also, if you provide Personal Data in order to obtain access to the Services, we will use your Personal Data to provide you with access to such services and to monitor your use of such services. Ritoplz and its subsidiaries and affiliates (the "Related Companies") may also use your Personal Data and other personally non-identifiable information collected through the Services to help us improve the content and functionality of the Services, to better understand our users and to improve the Services. Ritoplz and its affiliates may use this information to contact you in the future to tell you about services we believe will be of interest to you. If we do so, each marketing communication we send you will contain instructions permitting you to "opt-out" of receiving future marketing communications. In addition, if at any time you wish not to receive any future marketing communications or you wish to have your name deleted from our mailing lists, please contact us as indicated below.</p>
        <p className={style(styles.text)}>If Ritoplz intends on using any Personal Data in any manner that is not consistent with this Privacy Policy, you will be informed of such anticipated use prior to or at the time at which the Personal Data is collected.</p>

        <h2 className={style(styles.exhibit)}>Our Disclosure of Your Personal Data and Other Information</h2>

        <p className={style(styles.text)}>Ritoplz is not in the business of selling your information. We consider this information to be a vital part of our relationship with you. There are, however, certain circumstances in which we may share your Personal Data with certain third parties without further notice to you, as set forth below:</p>

        <h2 className={style(styles.exhibit)}>Business Transfers:</h2>
        <p className={style(styles.text)}>As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution or similar event, Personal Data may be part of the transferred assets.</p>

        <h2 className={style(styles.exhibit)}>Related Companies:</h2>
        <p className={style(styles.text)}>We may also share your Personal Data with our Related Companies for purposes consistent with this Privacy Policy.</p>

        <h2 className={style(styles.exhibit)}>Agents, Consultants and Related Third Parties:</h2>
        <p className={style(styles.text)}>Ritoplz, like many businesses, sometimes hires other companies to perform certain business-related functions. Examples of such functions include mailing information, maintaining databases and processing payments. When we employ another entity to perform a function of this nature, we only provide them with the information that they need to perform their specific function.</p>

        <h2 className={style(styles.exhibit)}>Your Choices</h2>
        <p className={style(styles.text)}>You can visit the Site without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain Services.</p>

        <h2 className={style(styles.exhibit)}>Exclusions</h2>
        <p className={style(styles.text)}>This Privacy Policy does not apply to any Personal Data collected by Ritoplz other than Personal Data collected through the Services. This Privacy Policy shall not apply to any unsolicited information you provide to Ritoplz through the Services or through any other means. This includes, but is not limited to, information posted to any public areas of the Services, such as forums, any ideas for new products or modifications to existing products, and other unsolicited submissions (collectively, "Unsolicited Information"). All Unsolicited Information shall be deemed to be non-confidential and Ritoplz shall be free to reproduce, use, disclose, and distribute such Unsolicited Information to others without limitation or attribution.</p>

        <h2 className={style(styles.exhibit)}>Children</h2>
        <p className={style(styles.text)}>Ritoplz does not knowingly collect Personal Data from children under the age of 13. If you are under the age of 13, please do not submit any Personal Data through the Services. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce our Privacy Policy by instructing their children never to provide Personal Data on the Services without their permission. If you have reason to believe that a child under the age of 13 has provided Personal Data to Ritoplz through the Services, please contact us, and we will endeavor to delete that information from our databases.</p>

        <h2 className={style(styles.exhibit)}>Links to Other Web Sites</h2>
        <p className={style(styles.text)}>This Privacy Policy applies only to the Services. The Services may contain links to other web sites not operated or controlled by Ritoplz (the "Third Party Sites"). The policies and procedures we described here do not apply to the Third Party Sites. The links from the Services do not imply that Ritoplz endorses or has reviewed the Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.</p>

        <h2 className={style(styles.exhibit)}>Security</h2>
        <p className={style(styles.text)}>Ritoplz takes reasonable steps to protect the Personal Data provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or email transmission is ever fully secure or error free. In particular, email sent to or from the Services may not be secure. Therefore, you should take special care in deciding what information you send to us via email. Please keep this in mind when disclosing any Personal Data to Ritoplz via the Internet.</p>

        <h2 className={style(styles.exhibit)}>Other Terms and Conditions</h2>
        <p className={style(styles.text)}>Your access to and use of the Services is subject to the Terms of Service.</p>

        <h2 className={style(styles.exhibit)}>Changes to Ritoplz's Privacy Policy</h2>
        <p className={style(styles.text)}>The Services and our business may change from time to time. As a result, at times it may be necessary for Ritoplz to make changes to this Privacy Policy. Ritoplz reserves the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any Personal Data. This Privacy Policy was last updated on the date indicated above. Your continued use of the Services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.</p>

        <h2 className={style(styles.exhibit)}>Contacting Us</h2>

        <p className={style(styles.text)}>To keep your Personal Data accurate, current, and complete, please contact us as specified below. We will take reasonable steps to update or correct Personal Data in our possession that you have previously submitted via the Services.</p>
        <p className={style(styles.text)}>Please also feel free to contact us if you have any questions about Ritoplz's Privacy Policy or the information practices of the Services You may contact us as follows <a className={style(styles.linked)} href="mailto:ritoplzteam@gmail.com">ritoplzteam@gmail.com</a></p>
      </section>

      <Footer/>

      <style jsx>{`
        .row {
          maxWidth: 900px;
          marginLeft: auto;
          marginRight: auto;
        }

        .title {
          color: #333;
          fontWeight: 300;
          fontSize: 3rem;
          textAlign: center;
          marginTop: 50px;
        }

        .subtitle {
          color: '#ccc',
          fontWeight: '300',
          fontSize: '1.15rem',
          textAlign: 'center',
          marginBottom: '50px',
          marginTop: '5px'
        }

        .exhibit {
          fontWeight: 600;
          color: #333;
          fontSize: 1.25rem;
          marginBottom: 15px;
        }

        .text {
          fontSize: 1rem;
          lineHeight: 1.75rem;
          color: #777;
          marginBottom: 25px;
          fontWeight: 400;
        }

        .notice {
          lineHeight: 1.75rem;
          color: #777;
          marginBottom: 25px;
          fontWeight: 400;
          fontSize: .9rem;
          marginTop: 50px;
          textAlign: center;
          paddingLeft: 50px;
          paddingRight: 50px;
        }

        .linked {
          color: #333;
          fontWeight: 600;
        }
      `}</style>
    </div>
  )
}

export default Terms
