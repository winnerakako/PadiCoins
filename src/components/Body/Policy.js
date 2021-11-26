import { useEffect, useRef } from "react";
import Header from "../Hero/Header";
import styles from "./styles.module.css";

const Policy = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollIntoView();
  }, []);
  return (
    <>
      <Header background="white" />
      <div className={styles.terms_container}>
        <div style={{ height: "80px" }} ref={ref}></div>
        <h1 className={styles.terms_heading}> Privacy Policy</h1>
        <p>
          Padicoins built this platform with the privacy and safety of our users
          in mind, right from inception. That being said, this policy serves to
          provide our visitors a general overview of how we are committed to the
          protection of their privacy. This page shows how we collect, store,
          share, and protect your data.
        </p>
        <h3 className={styles.list_h4}>Information We Collect From You.</h3>
        <p>
          We collect information from you when you sign up to use Padicoins. We
          collect information that you give to us when you’re registering to use
          Padicoins and we also collect some information from you when using our
          services.
        </p>
        <h3 className={styles.list_h4}>
          Information we collect from you directly.
        </h3>
        We collect the following information from you voluntarily to enable us
        to provide our services to you. They include but are not limited to:
        <ul>
          <li>Full Name.</li> <li>Gender.</li> <li>Mobile phone number.</li>
          <li>Email address. </li>
          <li>Date of birth.</li>
          <li>Residential address.</li>
        </ul>
        <h3 className={styles.list_h4}>
          Information we collect from you automatically.
        </h3>
        When you use our website, the servers automatically collect data using
        cookies and other tracking devices. This information includes but not
        limited to:
        <ul>
          <li>Cookie data.</li>
          <li>Your Internet Protocol address.(IP)</li>
          <li>Your browser type and settings. </li>
          <li>Language preferences.</li>
          <li>The type of device you use on the Platform.</li>
        </ul>
        <h3 className={styles.list_h4}>Ways we share your Information.</h3>
        From time to time, it may become absolutely necessary for us to share
        your data with a third party. However, in whatever way we choose to
        share your data, we will always ensure we conform to the terms and
        privacy of this platform. Below are a few ways we may share your
        information.
        <ol>
          <li>
            Our Service Provider: We may reveal the data we get from you to
            third-party sellers, service providers, agents, who will carry out
            some duties on our behalf, given that such third-party have
            consented to just use such data to render services to us.
          </li>

          <li>
            Business Transfers or Acquisitions: If we are in dealings with, or
            we are being acquired by or merged with another organization, if
            it’s required that all of our assets are being moved to such
            organization, we may move the data we have gathered from you to the
            next organization.
          </li>

          <li>
            For Court Order or In Response to Legal Process: We additionally may
            reveal the information we get from you to the court if we are
            ordered to do so for the sake of the law; a legal procedure, court
            request, or another legal reason, for example, because of a summon.
          </li>

          <li>
            To Protect the Platform and Others: We likewise may reveal the data
            we get from you, assuming that we accept it is important to
            investigate, forestall, or make a move in regards to criminal
            activities, suspected fraud, circumstances including possible
            dangers to the safety of any individual, infringement of our service
            agreement or this policy, or as proof in the case in which we are
            involved.
          </li>

          <li>
            For Marketing Purpose: We may take, process, assess and share total
            or partial data about users with third parties and openly for
            product improvement or development, advertising, marketing, research
            or related purposes.
          </li>
        </ol>
        <h3 className={styles.list_h4}>The Uses of Data</h3>
        While we are always committed to the privacy of our users, we may use
        your data for the following purposes: To let you know about changes to
        our administration or service.
        <ul>
          <li>
            To give assessment or important information with the goal to improve
            our service.
          </li>
          <li>To regulate the use of the service. </li>
          <li>To open and keep a record for you.</li>
          <li>To provide timely customer care and support.</li>
          <li>
            To reveal, prevent and address specialized issues like technical
            issues.
          </li>
          <li>For service maintenance. </li>
        </ul>
        <h3 className={styles.list_h4}>Third Party Link.</h3>
        <p>
          Our platform may contain some links to third parties websites not
          operated by us. In case you click on these links, you will be
          redirected to another website. We sincerely encourage you to always
          check out the privacy policy of such websites you visit. We do not
          have any control over such website and so we assume no liability over
          any content, practices or privacy terms of third party websites or the
          services they provide.
        </p>
        <h3 className={styles.list_h4}>Changes to policy</h3>
        <p>
          We may change our privacy policy every once in a while. We will always
          post such update on this page to notify you. Ensure you check here
          time to time for any updates.
          <br />
          We will inform you through email as well as by any notification on our
          service. However before the change becomes effective, an update on the
          date it will take effect will be displayed at the top of this privacy
          policy page.
          <br />
          You are encouraged to always check this privacy policy occasionally
          for any changes. Changes to this privacy policy take effect from the
          day they are posted on this page.
        </p>
        <h3 className={styles.list_h4}>Children under 18</h3>
        <p>
          Our services are not meant for anybody younger than 18 years. If we
          find any account of an underage individual, we will delete it.
          <br />
          We don't purposely collect information from anybody younger than 18.
          In case you are a parent or guardian and you know that your child has
          registered with us with personal data, kindly reach us.
        </p>
        <h3 className={styles.list_h4}>User Liabilities</h3>
        <p>
          The security of your information is critical to us. However, remember
          that no strategy for transmission over the web, or technique for
          electronic capacity is 100% secure.
          <br />
          While we will always put in great effort to safe guide your own data,
          we can't assure the security of any data that you communicate to us
          and you are exclusively liable for keeping up with the secrecy of any
          passwords or other data.
          <br />
          By using the service, you consent to the collection and use of data as
          contained in this agreement.
        </p>
      </div>
    </>
  );
};

export default Policy;
