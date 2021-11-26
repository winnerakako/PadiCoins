import { useEffect, useRef } from "react";
import Header from "../Hero/Header";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./styles.module.css";

const Terms = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollIntoView();
  }, []);
  return (
    <>
      <Header background="white" />
      <div className={styles.terms_container}>
        <div style={{ height: "80px" }} ref={ref}></div>
        <h2 className={styles.terms_heading}>Terms and Conditions</h2>
        <div>
          <div>
            This will serve as an agreement between you and us. This Terms of
            Use is entered into by you (which will be hereafter referred to
            “you” or “your”) and our operators. By accessing, using or clicking
            on “I agree” to accept any service provided by us, you agree that
            you have read, understood and accepted all the terms and conditions
            stipulated in this Terms of Use (herein after referred to as “these
            Terms”) as well as our{" "}
            <NavLink to="/privacy-policy" className={styles.terms_link}>
              privacy policy{" "}
            </NavLink>{" "}
            at Padicoins. If by any means you do not agree with or understand
            any of the terms contained herein, kindly desist from using this
            service. We reserve the right to update, revise, or otherwise,
            reissue these terms without prior notice to you.
          </div>

          <div>
            <h3
              style={{
                marginBottom: "-20px",
                marginTop: "20px",
                color: "#f1590e",
              }}
            >
              PART A: General Overview.
            </h3>
            <ol className={styles.terms_ordered_list}>
              <li>
                <h4 className={styles.list_h4}>Our Services </h4>
                Padicoins provides you with a simple and convenient way to trade
                legal tender such as Naira, dollars and Euros for digital assets
                such as Bitcoin, Ethereum, Pokadot, Doge, XRP, Litecoin etc and
                to trade one type of digital asset for another type of digital
                asset. You may also use our services to buy and sell
                cryptocurrencies directly from and to us. Our digital currency
                wallet permit you to send supported digital currencies to, and
                request, get, and store supported digital currencies from other
                exchanges following instructions we give through our website. We
                maintain all rights to decline to process or reject any pending
                transaction as legally necessary or because of, summon, court
                request, or other restricting government request or to authorize
                exchange limits. We cannot reverse a digital currency
                transaction that has been communicated to a digital currency
                network. The hosted digital currency wallet services are
                accessible only in connections with those digital currencies
                that we, in our sole desire, choose to support. By no means
                should you try to use your hosted digital currency wallet
                service to store, send, demand, or get digital coins in any form
                that isn't upheld by us. We accept no accountability or risks
                regarding any attempt to use our services for digital currencies
                that we do not support. We process supported currencies as per
                the order received from our users and we don't guarantee the
                true identity of any client, beneficiary, requester, or another
                party. You should carefully check all exchange data preceding
                submitting information to us. When you start a transaction by
                entering the beneficiary's wallet address on the network, you
                will be required to pay a network fee. When your transactions
                are submitted to the network, it will be unverified for a while,
                pending on the time it may take the network to confirm your
                transactions. An exchange isn't finished while it is pending.
                Funds related to pending exchanges will be assigned in like
                manner, and won't be included in your account balance or be made
                available for trades. We may charge network fee, to facilitate
                the exchanges on your behalf. We decide the fee, although we
                will let you know the network charges, at or before the time you
                approve the transactions.{" "}
              </li>
              <li>
                <h4 className={styles.list_h4}>Eligibility</h4>
                Our services are not available to person(s) under 18 years of
                age. Ensure you’re mentally and physically capable before
                registering for our services. Our services are only available to
                those residing in Nigeria at the moment, however we look forward
                to expanding to other regions in the not so distant future.
                Reserves related to forthcoming exchanges will be assigned in
                like manner, and won't be remembered for your Padicoins Account
                accessible adjust or be accessible to manage exchanges. We may
                charge network expenses (excavator expenses) to deal with an
                exchange for your benefit. We will as certain the organization's
                expense in its caution, although we will consistently notify you
                of the organization charge at or before the time you approve the
                transactions.
              </li>
              <li>
                <h4 className={styles.list_h4}>Registration</h4>
                In order to use Padicoins, you should duly register for a
                Padicoins account. When registering, you will be required to
                give your genuine name, email address, and password, and
                acknowledge these terms, the privacy policy, and other platform
                rules. We reserve the right to reject creating an account for
                you if we notice anything suspicious with the provided data. You
                consent to give total and precise data when opening an account,
                and consent to timely update any data you give to us to keep up
                with the honesty and authenticity of the data. A single user can
                be registered at a time, but each user (counting any user that
                is a business or legitimate substance) may keep up with only one
                principle account at a time.
              </li>
              <li>
                <h4 className={styles.list_h4}>KYC Verification</h4>
                To have full access to all our features, you will be mandated to
                give additional data that will assist us with confirming your
                records. This data includes, and not limited to, your name,
                address, phone number, email address, date of birth, Bank
                Verification Number (BVN), and data in regards to your bank
                account (e.g. statement of your account that is not older than
                months). By presenting these or some other individual data as
                may be required, you affirm that the data given is exact and
                credible, and you consent to update us at whatever point there
                are changes.
              </li>

              <li>
                <h4 className={styles.list_h4}>Cancellations and Reversals </h4>
                Be aware that it’s impossible to cancel, reverse, or change any
                transaction(s) set apart as complete or pending. Assuming your
                payment isn't successful or maybe there is no sufficient balance
                to complete your transactions, you approve Padicoins, in its
                sole prudence to terminate the transaction. You are liable for
                keeping a sufficient balance as well as adequate credit limits
                to stay away from overdraft, inadequate funds, fees charged by
                your payment service provider. We have the authority to decline
                to process, or to terminate or reverse, any buys or sales of
                cryptocurrencies in its sole discretions, even after payment
                have been debited from your account(s). If we presume the
                exchange involves or has a high tendency of be associated with
                illegal tax avoidance, fear monger financing, misrepresentation,
                or some other kind of money laundering activities; because of a
                summon, court request, or another government request; assuming
                we sensibly suspect that the exchange was made in error, or then
                again in case we suspect the exchange identifies with prohibited
                use or a prohibited business as shown below. In such cases, we
                will reverse the exchange and we are under no commitment to
                permit you to enter the transaction again. Payment Services
                Partners. We leverage on third party payment service processors
                to handle any Fiat currency installment between you and us.
              </li>
              <li>
                <h4 className={styles.list_h4}>Prices Accuracy</h4>
                While we are striving hard to give precise and accurate data on
                our website. The site may not always be totally precise,
                complete, or current and may likewise sometimes include
                technical mistakes or typographical errors. With an end goal to
                keep on giving you as complete and exact data as could be
                expected, data might be changed or updated occasionally without
                notice, including without restriction data in regards to our
                strategies, products, and services. As needs are, you ought to
                check all data before depending on it, and all choices dependent
                on data contained on our website are your sole liabilities and
                we will have no responsibility for such choices.
              </li>
              <li>
                <h4 className={styles.list_h4}> Amendments Right</h4>
                We reserve the right to correct or modify this agreement by
                posting on our website or by messaging you the changed
                agreement, and the amended agreement will be effective at such
                time. In case you disagree with any of such amendment, your sole
                and exclusive right is to end your use of the services and
                proceed to close your account. You consent that we will not be
                responsible to you or any other person for any alteration or end
                of our services, or suspension or end of your access to our
                services, but to the degree in any case explicitly put forward
                in this. If the reconsidered Agreement includes a material
                change, we will make an honest effort to give you a timely
                notification through our site or potentially email before the
                material change takes effect.
              </li>
              <li>
                {" "}
                <h4 className={styles.list_h4}>Force Majeure </h4>
                We will not be liable for any unforeseen circumstances that may
                come in forms of delays, failure in execution or interference of
                services which result directly or indirectly from any reason or
                condition beyond our possible control, including yet not
                restricted to, any deferral or failure due to any actof God,
                civil act or act of military, act of militants or terrorist,
                civil unrest, war, strike or other work question, fire, break-in
                broadcast communications or Internet services or organization
                supplier administrations, the disappointment of equipment as
                well as software programming, other disaster or whatever another
                event which is past or beyond our control and will not
                invalidate the enforceability of any of the other provisions of
                this agreement.
              </li>
            </ol>
            <h3 style={{ marginTop: "20px", color: "#f1590e" }}>
              PART B: Prohibited Use
            </h3>
            You consent to use Padicoins in total compliance with the Terms,
            solely for your account or your business purposes. You will not
            sell, rent or in any case give access to the platform to any other
            person, nor go about as a help agency or in any case use the
            platform for the benefit of any unrecognized individual.
            <p>
              (I).You shall not use our website or its affiliate in any way for
              the following activities:
            </p>
            <ol className={styles.terms_ordered_list1}>
              <li>Unlawful business activities such as money laundering.</li>
              <li>
                Posting of vulgar, sexually explicit or hostile materials.
              </li>
              <li>Promotion of other business activities on Padicoins.</li>
              <li>
                {" "}
                Posting of content that is probably going to, upset, harass,
                humiliate, alert or annoy some other users.
              </li>
              <li>
                Actions liable to disturb the Platform in any capacity;
                promoting religion intolerance, tribalism, political
                affiliations.
              </li>
              <li>
                Infringe any copyright, brand name, proprietary innovation, or
                another restrictive right of some other individual.
              </li>
              <li>
                {" "}
                Restrict or restrain some other individual from using the
                platform, including, without limit, through hacking or defacing
                any part of the platform.
              </li>
              <li>
                Disable, harm or adjust the working or presence of the platform.
              </li>
              <li>
                Frame or duplicate any piece of the platform without our express
                written approval.
              </li>
              <li>
                Use any robot, bug, website search/recovery application, or
                other manual or programmed gadget or cycle to download, recover,
                list, information mine, scratch, reap or in any capacity
                replicate or go around the navigational construction or show of
                the Platform or its content.
              </li>
              <li>
                Unauthorized harvests or stealing of data about different users
                without their knowledge.
              </li>
              <li>
                Sending spontaneous or unapproved promotions, spam, or junk
                letter to different users.{" "}
              </li>
              <li>
                Except as in any case allowed by the company recorded as a hard
                copy, open different accounts besides as in any case expressly
                allowed by the platform.
              </li>
              <li>
                {" "}
                Transmitting any substance which contains programming virus, or
                documents, or projects.
              </li>
            </ol>
            <p>
              (II) You comprehend and consent that the data and service offered
              by the platform are not provided to, and may not be used by
              anybody or institutions in regions where the provisions or the use
              of such service would be contrary to the laws applicable in such
              jurisdictions.
            </p>
            <p>
              (II) We reserve the right at our discretion to determine, edit or
              remove whatever information we suspect to violate these terms.
            </p>
            <h3 style={{ marginTop: "20px", color: "#f1590e" }}> PART C:</h3>
            <h4 className={styles.list_h4}>
              {" "}
              (1) Indemnifications and Limited Liabilities.
            </h4>
            <ol type="a" className={styles.terms_ordered_list1}>
              <li>
                {" "}
                To the greatest degree allowed by material law, you consent to
                Indemnify, repay, and hold harmless the indemnified parties,
                from and against all possible cases (This includes third party
                cases), activities, misfortune, liabilities, costs, expenses, or
                requests, including, without limit, lawful and accounting
                charges, directly or by implication, coming about because of or
                by reason of (I) your (or then again assuming you are under
                another people authority, including without impediment,
                governmental authorities, such different people) use, abuse, or
                failure to utilize the site, the platform, any account on the
                platform, or any of the substance, including Third-Party content
                contained in that or any substance or data that you gave to the
                platform; or (ii) your break of this these terms or the
                Third-Party services’ provider terms, including those archives
                that are explicitly fused into these terms or the Third-Party
                services’ provider terms.
              </li>
              <li>
                {" "}
                We will tell you by email, mail, or other proper means, of any
                such case or suit, and sensibly participate in the defense of
                such case at your expenses. We maintain all authority to take an
                interest in the defense of such cases or pick our own legal
                partners, however are not committed to doing as such.
              </li>
              <li>
                Under no conditions and under no theory of law (whether being,
                contract, tort, strict liabilities or in any case), will we or
                any of the indemnities be at risk to you or some other
                individual for any harms emerging from the use or abuse of, or
                failure to use, the site, third party content or any record,
                whether or not such harms are immediate, roundabout, unique,
                accidental or noteworthy harms of any person, including harms
                for exchanging misfortunes, loss of data, business interference
                or lost benefits, lost reserve funds, or loss of information, or
                liabilities under any agreement, carelessness, severe
                responsibility, or other theories emerging out of or relating in
                any way to the site, the stage, third party record or any record
                or for any case or interest by any third party, regardless of
                whether we knew or had motivation to know about the chance of
                such harms, case or interest assuming that the previous
                disclaimer and waiver of obligation ought to be considered
                invalid or inadequate.
              </li>
            </ol>
            <h4 className={styles.list_h4}>
              2. Termination and Suspension of Accounts.
            </h4>
            <br />
            Access to the platform may be suspended or terminated in entirety or
            to a limited extent either by the user or by us as per the terms.
            Furthermore, we reserve the right at our sole discretion to suspend
            or end quickly and without notice, any user's access to or the use
            of the site and the platform in the event that they abuse any
            provisions of these terms. We may, whenever and at our sole
            discretion, limit, suspend or end, or issue an advice or warning to
            you in regards to, the platform or the account, including ending the
            account (or certain functionalities thereof, for example,
            transferring, getting, sending, or potentially pulling out digital
            assets), if:
            <ol type="i">
              <li>
                We accept it is fundamental or important to ensure the security
                of the account.
              </li>
              <li>
                If any trade are made which we in our sole discretion considers
                being (a) settled on in break of this agreement or in the break
                of the security prerequisites of the account; or (b) dubious,
                unapproved or deceitful, remembering without limit for
                connection to tax evasion, fraudulent, misrepresentation or
                other criminal operations.
              </li>
              <li>
                If we become mindful or think that any digital assets or assets
                held in your account might be related to criminal returns or in
                any case are not legitimately owned by you.
              </li>

              <li>
                Upon the indebtedness, liquidation, wrapping up, insolvency,
                organization, receivership, or dissolution of user, or where we
                reasonably think about that there is a threat of same to you.
              </li>
              <li>We can't confirm or validate any data you gave.</li>
              <li>
                We accept, in our sole and outright discretion, that your
                activities might cause lawful responsibility for you, the
                platform, or different users of the platform.
              </li>
              <li>
                We choose to stop tasks or to in any case suspend any
                administrations or choices given by the platform, or parts
                thereof.
              </li>

              <li>
                There is an adjustment of your conditions (citing a
                deterioration for or change to your monetary position) which we
                consider, at our sole attentiveness, material to the
                continuation of the account.
              </li>
              <li>We are mandated as such by any governmental authority.</li>
              <li>We are generally needed to do as such by material law.</li>

              <li>
                {" "}
                There is a problematic market occasion that triggers an
                exchanging stop; or we, in any case, choose in our sole
                watchfulness that end or suspension of the account, the
                platform, or the terms is essential.
              </li>
            </ol>
            <p>
              {" "}
              (3). We have no commitment to educating you regarding the ground
              or reason for suspending, ending, or freezing your account or any
              computerized resources in your Account or different moves we make
              in regards to the site, the account, or the platform.
            </p>
            <p>
              (4). Neither the company, the platform nor any third party
              following up for their benefit will be responsible to you for any
              suspension, constraint, or end of your account or your access to
              any part of the platform as clearly expressed in this agreement.
            </p>
          </div>
        </div>
        <NavLink
          to="/"
          className={`${styles.terms_link} ${styles.back_homepage}`}
        >
          <AiOutlineArrowLeft style={{ paddingTop: "2px" }} /> Back to homepage
        </NavLink>
      </div>
    </>
  );
};

export default Terms;
