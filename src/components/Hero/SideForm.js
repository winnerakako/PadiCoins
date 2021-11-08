import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import carbon from "../../Images/carbon_money.svg";
import person1 from "../../Images/person_1.svg";
import moneybag from "../../Images/money_bag.svg";
import pencil from "../../Images/pencil_icon.svg";
import success from "../../Images/success.png";
import mail from "../../Images/mail.svg";
import flag from "../../Images/flag.png";
const SideForm = () => {
  useEffect(() => {}, []);
  return (
    <div className={styles.hero__cta}>
      <p className={styles.hero__cta_step}>Step 1 of 2</p>
      <div className={styles.hero__cta_progress}>
        <div className={styles.hero__cta_progress_img1}>
          <img src={person1} alt="person-img" />
        </div>
        <div className={styles.hero__cta_progress_bar}></div>
        <div className={styles.hero__cta_progress_img2}>
          <img src={carbon} alt="carbon_money-img" />
        </div>
      </div>
      <p className={styles.hero__cta_text}>Buy and Sell Instantly</p>
      <p className={styles.hero__cta_heading}>Select the coin to sell</p>

      <select>
        <option>Select Coin</option>
      </select>
      <div className={`${styles.hero__cta_sell} ${styles.hidden}`} id="sell">
        <p className={styles.hero__cta_sell_heading}>
          Select the coin type to sell
        </p>

        <form className={styles.hero__cta_sell_form}>
          <div className={styles.input_select}>
            <img src="images/money_bag.svg" alt="money-img" />
            <p className={styles.title}>SELECT COIN</p>
            <p className={styles.coin_name}>ETH</p>
          </div>

          <div className={styles.input_select}>
            <img src={moneybag} alt="money-img" />
            <p className={styles.title}>SELECT BANK</p>
            <p className={styles.coin_name}>ACCESS BANK</p>
          </div>

          <div className={styles.input_group}>
            <img src={pencil} alt="ethereum-img" />
            <input type="text" id="naira-amount" placeholder="5,000" />
            <label for="naira-amount"> NAIRA AMOUNT </label>
          </div>

          <div className={styles.input_group}>
            <img src={pencil} alt="ethereum-img" />
            <input
              type="text"
              id="naira-amount"
              placeholder="1394362765 - MUSTAPHA ADEKUNE SANUSItytttt"
            />
            <label for="naira-amount"> ACCOUNT NUMBER </label>

            <img src={success} alt="" />
          </div>

          <div className={styles.input_group}>
            <img src={mail} alt="email-img" />
            <input type="text" id="email" placeholder="EMAIL ADDRESS" />
            <label for="email"> EMAIL ADDRESS </label>
          </div>

          <div className={styles.input_group}>
            <img src={flag} alt="flag-img" />
            <input type="text" id="phone" placeholder=" PHONE NUMBER" />
            <label for="phone"> PHONE NUMBER </label>
          </div>

          <div className={styles.submit_btn}>
            <input type="submit" value="SELL ETH" className={styles.btn} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideForm;
