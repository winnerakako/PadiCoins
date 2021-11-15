import React, { useState, useEffect, useRef } from "react";
import carbon from "../../Images/carbon_money.svg";
import person1 from "../../Images/person_1.svg";
import moneybag from "../../Images/money_bag.svg";
import pencil from "../../Images/pencil_icon.svg";
import success from "../../Images/success.png";
import mail from "../../Images/mail.svg";
import flag from "../../Images/flag.png";
import { ImSpinner6 } from "react-icons/im";
import Dropdown from "./Dropdown";
import WalletDetails from "./WalletDetails";
import {
  GET_COINS,
  GET_BANKS,
  VERIFY_BANK,
  CREATE_WALLET,
  postheaders,
} from "../../Data/requests";
import styles from "./styles.module.css";

const user_wallet = JSON.parse(localStorage.getItem("Wallet"));

const SideForm = () => {
  const [coins, setCoins] = useState([]);
  const [banks, setBanks] = useState([]);
  const [step2, setStep2] = useState(user_wallet ? true : false);
  const [creating, setCreating] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [accountError, setAccountError] = useState(false);
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const [wallet, setWallet] = useState(user_wallet ? user_wallet : {});
  const accountRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const topRef = useRef(null);

  const initials = {
    coin: {
      display: false,
      dropdown: false,
      value: "",
    },
    bank: {
      display: false,
      dropdown: false,
      value: "",
    },
    account: {
      display: false,
      value: "",
      ref: accountRef,
    },
    email: {
      display: false,
      value: "",
      ref: emailRef,
    },
    phone: {
      display: false,
      value: "",
      ref: phoneRef,
    },
    submit: {
      display: false,
      value: "",
    },
  };
  const [selectFields, setSelectFields] = useState(initials);
  const reset = () => {
    setSelectFields(initials);
    topRef.current.scrollIntoView({ behavior: "smooth" });
    setStep2(false);
    setAccountError(false);
    setError(false);
    setChecked(false);
    localStorage.removeItem("Wallet");
  };
  const toggleDropdown = (field) => {
    let newFields = Object.assign({}, selectFields);
    newFields[field].dropdown = !newFields[field].dropdown;
    setSelectFields(newFields);
  };

  const getValues = (field1, field2, value) => {
    let newFields = Object.assign({}, selectFields);
    newFields[field1].display = true;
    newFields[field2].value = value;
    if (newFields[field2].dropdown) {
      newFields[field2].dropdown = !newFields[field2].dropdown;
    }
    setSelectFields(newFields);
    setTimeout(() => {
      newFields[field1].ref && newFields[field1].ref.current?.focus();
    }, 1500);
  };

  const verifyBank = (value) => {
    setVerifying(true);
    setAccountError(false);
    let newFields = Object.assign({}, selectFields);
    newFields.account.value = "";
    newFields.email.display = false;
    newFields.submit.display = false;
    newFields.email.value = "";
    newFields.phone.value = "";
    setSelectFields(newFields);
    fetch(VERIFY_BANK, {
      ...postheaders,
      body: JSON.stringify({
        bank_id: selectFields.bank.value.id,
        account_number: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAccountError(false);
        setVerifying(false);
        if (data.success) {
          const account_details = {
            account_number: value,
            name: data.data?.account_name,
          };
          if (data.data.user_details) {
            newFields.email.value = data.data.user_details.email;
            newFields.phone.value = data.data.user_details.mobile;

            setSelectFields(newFields);
          }
          getValues("email", "account", account_details);
          accountRef.current.offsetParent.classList.remove(
            styles.error_boundary
          );
        }
        if (!data.success) {
          accountRef.current.offsetParent.classList.add(styles.error_boundary);
          setAccountError(true);
        }
      })
      .catch((err) => {
        setAccountError(true);
        setVerifying(false);
        console.log(err);
      });
  };

  const submitHandler = (e) => {
    e?.preventDefault();
    setError("");
    if (!checked) {
      return;
    }

    if (
      selectFields.email.value === "" ||
      selectFields.phone.value === "" ||
      selectFields.account.value.account_number === ""
    ) {
      setError("Please fill all fields.");
      return;
    }
    setCreating(true);
    const body = {
      ...selectFields.account.value,
      email: selectFields.email.value,
      mobile: selectFields.phone.value,
      bank_id: selectFields.bank.value.id,
      coin_id: selectFields.coin.value.id,
    };
    console.log(body);
    fetch(CREATE_WALLET, { ...postheaders, body: JSON.stringify(body) })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCreating(false);
        if (data.success) {
          setWallet(data.data.wallet);
          localStorage.setItem("Wallet", JSON.stringify(data.data.wallet));
          setStep2(true);
          topRef.current.scrollIntoView({ behavior: "smooth" });
        } else setError(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetch(GET_COINS)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.data.coins);
      })
      .catch((err) => console.log(err));
    fetch(GET_BANKS)
      .then((res) => res.json())
      .then((data) => {
        setBanks(data.data.banks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p ref={topRef}></p>
      <div className={styles.hero__cta}>
        <p className={styles.hero__cta_step}>Step {step2 ? "2" : "1"} of 2</p>
        <div className={styles.hero__cta_progress}>
          <div className={styles.hero__cta_progress_img1}>
            <img src={person1} alt="person-img" />
          </div>
          <div
            className={step2 ? styles.step_2 : styles.hero__cta_progress_bar}
          ></div>
          <div className={styles.hero__cta_progress_img2}>
            <img src={carbon} alt="carbon_money-img" />
          </div>
        </div>
        {!step2 ? (
          <>
            <p className={styles.hero__cta_text}>Buy and Sell Instantly</p>

            <div className={`${styles.hero__cta_sell}`} id="sell">
              <p className={styles.hero__cta_sell_heading}>
                Select the coin type to sell
              </p>

              <form
                className={styles.hero__cta_sell_form}
                onSubmit={submitHandler}
              >
                <div className={styles.input_select}>
                  <img src={moneybag} alt="money-img" />
                  <p className={styles.title}>Select Coin </p>
                  <p
                    onClick={() => toggleDropdown("coin")}
                    className={styles.select_dropdown}
                  >
                    {selectFields.coin.value.name
                      ? selectFields.coin.value.name
                      : "Select..."}
                  </p>
                  {selectFields.coin.dropdown && (
                    <Dropdown
                      items={coins}
                      arr={["bank", "coin"]}
                      getValues={(field1, field2, value) =>
                        getValues(field1, field2, value)
                      }
                      close={() => toggleDropdown("coin")}
                    />
                  )}
                </div>

                {selectFields.bank.display && (
                  <div className={styles.input_select}>
                    <img src={moneybag} alt="money-img" />
                    <p className={styles.title}>Select Bank </p>
                    <p
                      className={styles.select_dropdown}
                      onClick={() => toggleDropdown("bank")}
                    >
                      {selectFields.bank.value.name
                        ? selectFields.bank.value.name
                        : "Select..."}
                    </p>
                    {selectFields.bank.dropdown && (
                      <Dropdown
                        items={banks}
                        arr={["account", "bank"]}
                        getValues={(field1, field2, value) =>
                          getValues(field1, field2, value)
                        }
                        close={() => toggleDropdown("bank")}
                      />
                    )}
                  </div>
                )}

                {selectFields.account.display && (
                  <div className={styles.input_group}>
                    <img src={pencil} alt="ethereum-img" />
                    <input
                      type="text"
                      id="naira-amount"
                      ref={accountRef}
                      onFocus={() => setAccountError(false)}
                      placeholder="Account Number"
                      onChange={(e) => {
                        if (e.target.value.length === 10)
                          verifyBank(e.target.value);
                      }}
                    />
                    <label htmlFor="naira-amount"> ACCOUNT NUMBER </label>
                    {verifying && (
                      <ImSpinner6
                        className={styles.loading}
                        style={{ fontSize: "smaller", marginRight: "20px" }}
                      />
                    )}

                    {selectFields.account.value.name && (
                      <>
                        <span className={styles.name_span}>
                          {selectFields.account.value.name}
                        </span>
                        <img src={success} alt="" />
                      </>
                    )}
                    {accountError && (
                      <p className={styles.account_error}>
                        Your account cannot be verified. Try again.
                      </p>
                    )}
                  </div>
                )}

                {selectFields.email.display && (
                  <>
                    <div className={styles.input_group}>
                      <img src={mail} alt="email-img" />
                      <input
                        type="email"
                        id="email"
                        placeholder="EMAIL ADDRESS"
                        ref={emailRef}
                        defaultValue={selectFields.email.value}
                        onBlur={(e) =>
                          getValues("phone", "email", e.target.value)
                        }
                      />
                      <label htmlFor="email"> EMAIL ADDRESS </label>
                    </div>
                    <div className={styles.input_group}>
                      <img src={flag} alt="flag-img" />
                      <input
                        type="text"
                        id="phone"
                        placeholder=" PHONE NUMBER"
                        ref={phoneRef}
                        defaultValue={selectFields.phone.value}
                        onChange={(e) => {
                          if (e.target.value.length === 11)
                            getValues("submit", "phone", e.target.value);
                        }}
                      />
                      <label htmlFor="phone"> PHONE NUMBER </label>
                    </div>
                  </>
                )}
                {error && <p className={styles.form_error}>{error}</p>}

                {(selectFields.submit.display ||
                  selectFields.phone.value.length === 11) && (
                  <>
                    <p className={styles.create_wallet_paragraph}>
                      <input
                        type="checkbox"
                        onChange={(e) => setChecked(e.target.checked)}
                        value={checked}
                      />{" "}
                      I hearby agree that I have read and understood Padicoins
                      policies, terms and conditions found{" "}
                      <span className={styles.track_wallet_link}>here.</span>
                    </p>
                    <div className={styles.submit_btn}>
                      <button onClick={submitHandler} disabled>
                        {!creating ? (
                          <input
                            type="submit"
                            value="Create Wallet"
                            className={styles.btn}
                          />
                        ) : (
                          <ImSpinner6 className={styles.loading} />
                        )}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </>
        ) : (
          <WalletDetails wallet={wallet} close={reset} />
        )}
      </div>
    </>
  );
};

export default SideForm;
