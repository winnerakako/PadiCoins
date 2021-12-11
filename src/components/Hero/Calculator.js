import React, { useEffect, useState, useRef } from "react";
import {
  GET_RATES,
  GET_RATES__BITCOIN,
  GET_RATES__ETHEREUM,
} from "../../Data/requests";
import Footer from "../Body/Footer";
import Header from "./Header";
import styles from "./styles.module.css";
import { CgScrollH } from "react-icons/cg";
let converted1;
const Calculator = () => {
  const [rateBtcUsd, setRateBtcUsd] = useState("");
  const [rateEthUsd, setRateEthUsd] = useState("");
  const [converted, setConverted] = useState("");
  const [rateBtcNgn, setRateBtcNgn] = useState("");
  const [rateEthNgn, setRateEthNgn] = useState("");
  const [type, setType] = useState("BTC");
  const [usdPrice, setUsdPrice] = useState();
  const scrollRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState(0);
  const switchConvert = () => {
    // setType("USD")
  };

  const change = (param) => {
    setType(param);
    scrollRef.current?.focus();
  };
  useEffect(() => {
    scrollRef.current?.focus();
    fetch(GET_RATES__BITCOIN)
      .then((res) => res.json())
      .then((data) => setRateBtcUsd(data.price))
      .catch((err) => {});
    fetch(GET_RATES__ETHEREUM)
      .then((res) => res.json())
      .then((data) => setRateEthUsd(data.price))
      .catch((err) => {});
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const factor = 1 / +searchTerm;

      if (type === "BTC") {
        converted1 = +rateBtcUsd / factor;
        setConverted(converted1);
        setRateBtcNgn(converted1 * 555);
      } else if (type === "ETH") {
        converted1 = +rateEthUsd / factor;
        setConverted(converted1);
        setRateEthNgn(converted1 * 549);
      } else if (type === "USD") {
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, type]);

  return (
    <>
      <div className={styles.calculator_container}>
        <Header />
        <div className={styles.calculatorNavWrapper}>
          <h1>Calculate your exchange</h1>
          <p className={styles.calculator_description}>
            Convert your coins to naira in seconds. Switch between bitcoin and
            ethereum to see price.
          </p>
          <div className={styles.mt5}>
            <div>
              <div className={styles.calculator_btn_div}>
                <p
                  onClick={() => change("BTC")}
                  className={`${styles.calculator_btn} ${
                    type === "BTC" && styles.pressed
                  }`}
                >
                  BTC
                </p>
                <p
                  onClick={() => change("ETH")}
                  className={`${styles.calculator_btn} ${
                    type === "ETH" && styles.pressed
                  }`}
                >
                  ETH
                </p>
              </div>
              <div className={styles.btcSell}>If you sell</div>
              <div className={styles.calculatorFormWrap}>
                <div className={styles.flexjustifybetween}>
                  <div className={styles.btcText}>{type}</div>
                  <div className={styles.formWrapper}>
                    <input
                      min="1"
                      className={`${styles.form_control1} ${styles.col_6} ${styles.inputScroll}`}
                      id="btc"
                      placeholder="0.00"
                      type="number"
                      pattern="\d*"
                      ref={scrollRef}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div>
                    <CgScrollH
                      className={styles.calculator_scroll}
                      onClick={switchConvert}
                    />
                  </div>
                </div>
              </div>
              {type !== "USD" && (
                <div className={styles.currencyChange}>
                  <span> USD </span>
                  <span>${converted.toLocaleString()}</span>
                </div>
              )}
              {type === "USD" && (
                <div className={styles.currencyChange}>
                  <span> btc {} </span>
                  <span>eth {} </span>
                </div>
              )}
              <div className={styles.btcSell}>You will get</div>
              <div
                className={`${styles.form_group} ${styles.calculatorFormWrap}`}
              >
                <div className={styles.d_flex}>
                  <div className={`${styles.btcText} ${styles.mr_2}`}>NGN </div>
                  <div className={styles.btcText} id="btcText">
                    &#8358;
                    {type === "BTC"
                      ? rateBtcNgn.toLocaleString()
                      : rateEthNgn.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;
