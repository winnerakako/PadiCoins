import React, { useState, useEffect, useRef } from "react";
import carbon from "../../Images/carbon_money.svg";
import person1 from "../../Images/person_1.svg";
import moneybag from "../../Images/money_bag.svg";
import pencil from "../../Images/pencil_icon.svg";
import success from "../../Images/success.png";
import mail from "../../Images/mail.svg";
import flag from "../../Images/flag.png";
import { CgShapeHalfCircle } from "react-icons/cg";
import { VscSearch } from "react-icons/vsc";
import styles from "./styles.module.css";
import {
  GET_COINS,
  GET_BANKS,
  VERIFY_BANK,
  CREATE_WALLET,
} from "../../Data/requests";

const SideForm = () => {
  const [coins, setCoins] = useState([]);
  const [banks, setBanks] = useState([]);
  const [step2, setStep2] = useState(false);
  const [loading, setLoading] = useState(false);
  const accountRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [selectFields, setSelectFields] = useState({
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
  });
  const toggleDropdown = (field) => {
    console.log(field);
    let newFields = Object.assign({}, selectFields);
    newFields[field].dropdown = !newFields[field].dropdown;
    setSelectFields(newFields);
  };

  const getValues = (field1, field2, value) => {
    console.log(field1, field2, value, "getValues");
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
    fetch(VERIFY_BANK, {
      method: "POST",
      mode: "cors",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        bank_id: selectFields.bank.value,
        account_number: value,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => console.log(data, "from verify"))
      .catch((err) => console.log(err));
    getValues("email", "account", value);
  };

  const submitHandler = (e) => {
    e?.preventDefault();
    setLoading(true);
    const body = {
      name: "Nafisat Musa Faruk",
      email: selectFields.email.value,
      mobile: selectFields.phone.value,
      bank_id: selectFields.bank.value.id,
      account_number: selectFields.account.value,
      coin_id: selectFields.coin.value.id,
    };
    console.log(body);
    fetch(CREATE_WALLET, {
      method: "POST",
      header: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setStep2(true);
      });
  };
  useEffect(() => {
    fetch(GET_COINS)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    <div className={styles.hero__cta}>
      <p className={styles.hero__cta_step}>Step 1 of 2</p>
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
      <p className={styles.hero__cta_text}>Buy and Sell Instantly</p>

      <div className={`${styles.hero__cta_sell}`} id="sell">
        <p className={styles.hero__cta_sell_heading}>
          Select the coin type to sell
        </p>

        <form className={styles.hero__cta_sell_form} onSubmit={submitHandler}>
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
                placeholder="Account Number"
                onChange={(e) => {
                  if (e.target.value.length === 10) verifyBank(e.target.value);
                }}
              />
              <label htmlFor="naira-amount"> ACCOUNT NUMBER </label>

              {selectFields.email.display && <img src={success} alt="" />}
            </div>
          )}

          {selectFields.email.display && (
            <div className={styles.input_group}>
              <img src={mail} alt="email-img" />
              <input
                type="email"
                id="email"
                placeholder="EMAIL ADDRESS"
                ref={emailRef}
                onBlur={(e) => getValues("phone", "email", e.target.value)}
              />
              <label htmlFor="email"> EMAIL ADDRESS </label>
            </div>
          )}
          {selectFields.phone.display && (
            <div className={styles.input_group}>
              <img src={flag} alt="flag-img" />
              <input
                type="text"
                id="phone"
                placeholder=" PHONE NUMBER"
                ref={phoneRef}
                onChange={(e) => {
                  if (e.target.value.length === 11)
                    getValues("submit", "phone", e.target.value);
                }}
              />
              <label htmlFor="phone"> PHONE NUMBER </label>
            </div>
          )}

          {selectFields.submit.display && (
            <div className={styles.submit_btn} onClick={submitHandler}>
              {!loading ? (
                <input
                  type="submit"
                  value="Create Wallet"
                  className={styles.btn}
                />
              ) : (
                <CgShapeHalfCircle className={styles.loading} />
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SideForm;

const Dropdown = ({ items, arr, getValues, close }) => {
  const [item1, item2] = arr;
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);
  const inputRef = useRef(null);

  const searchInput = items.filter((item) => {
    return (
      item.name.toLowerCase()?.includes(input.toLowerCase()) ||
      item.title?.includes(input)
    );
  });
  const startSearch = () => {
    setSearch(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 1000);
  };

  return (
    <>
      <div className={styles.overlay} onClick={close}></div>
      <div
        className={styles.dropdown}
        style={items.length > 10 ? { height: "300px" } : { height: "auto" }}
      >
        {items.length > 20 && (
          <>
            {search ? (
              <input
                type="search"
                placeholder="Search bank..."
                value={input}
                ref={inputRef}
                onChange={(e) => setInput(e.target.value)}
                className={styles.dropdown_input}
              />
            ) : (
              <VscSearch onClick={startSearch} className={styles.search_icon} />
            )}
          </>
        )}
        {searchInput.map((item) => (
          <p key={item.id} onClick={() => getValues(item1, item2, item)}>
            {item.name ? item.name : item.title}
          </p>
        ))}
      </div>
    </>
  );
};
