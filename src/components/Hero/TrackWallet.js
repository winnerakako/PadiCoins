import { useState, useEffect, useRef } from "react";
import { TRACK_WALLET } from "../../Data/requests";
import { ImSpinner6 } from "react-icons/im";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
} from "react-icons/ai";
import styles from "./styles.module.css";

const dateHelper = (str) => {
  const formatted = new Date(str).toLocaleString();
  let date = formatted.split(",")[0];
  date = `${date.split("/")[1]}/${date.split("/")[0]}/${date.split("/")[2]}`;
  return `${date},${formatted.split(",")[1]}`;
};

const TrackWallet = ({ close }) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("track_id"))
      ? JSON.parse(localStorage.getItem("track_id"))
      : ""
  );
  const [wallet, setWallet] = useState();
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const inputRef = useRef(null);

  const trackHandler = (e) => {
    e?.preventDefault();
    setError(false);
    setEmpty(false);
    if (value) {
      setLoading(true);
      fetch(`${TRACK_WALLET}/${value}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);

          if (data.success) {
            localStorage.setItem("track_id", JSON.stringify(value));

            setForm(false);
            if (data.data.wallet.transactions.length === 0) setEmpty(true);
            setWallet(data.data.wallet);
          } else {
            setError(data.message);
            setWallet(null);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (!value) {
      setForm(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }
  };

  const startTrack = () => {
    setForm(true);
    setEmpty(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
    setWallet(null);
    setValue("");
  };
  useEffect(() => {
    trackHandler();
  }, []);

  return (
    <>
      <div className={styles.overlay_gray}></div>
      <div className={styles.track_container}>
        {loading ? (
          <ImSpinner6 className={`${styles.loading} ${styles.track_loading}`} />
        ) : (
          <p className={styles.track_wallet_cancel}>
            <AiOutlineArrowLeft onClick={close} />
          </p>
        )}
        {wallet && (
          <button
            onClick={startTrack}
            style={{ position: "absolute", right: "3%", top: "5%" }}
            className={styles.wallet_options_copy}
          >
            Track Wallet
          </button>
        )}
        <h1 className={styles.padi_wallet_name}>Padi Wallet</h1>

        {form && (
          <>
            <form onSubmit={trackHandler}>
              <input
                placeholder="Enter track ID..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                ref={inputRef}
              />

              {error && <p className={styles.form_error}>{error}</p>}

              <button className={styles.wallet_options_copy}>Track</button>
            </form>
          </>
        )}

        {wallet && (
          <div className={styles.track_wallet_container}>
            {empty ? (
              <p className={styles.form_error}>
                You have not made any transactions yet.
              </p>
            ) : (
              <>
                <p style={{ textAlign: "left" }}>
                  Transactions update as at {new Date().toLocaleDateString()}
                </p>
                <div className={styles.track_wallet_header}>
                  <span className={styles.track_span_date}>Date</span>
                  <span className={styles.track_span_coin}> Coin</span>
                  <span className={styles.track_span_sent}>Sent</span>
                  <span>Received</span>
                  <span>Confirmations</span>
                  <span className={styles.track_span_hide}>Complete</span>
                  <span className={styles.track_span_hide}>Hash</span>
                </div>
                <ul className={styles.track_ul}>
                  {wallet.transactions?.map((t) => (
                    <li key={t.id} className={styles.track_list_item}>
                      <span>{dateHelper(t.confimed_at)}</span>
                      <span>{wallet.coin_symbol}</span>
                      <span>
                        {t.amount_received}{" "}
                        <AiOutlineArrowUp style={{ color: "red" }} />
                        <br /> ({t.status})
                      </span>
                      <span>
                        {t.amount_paid}{" "}
                        <AiOutlineArrowDown style={{ color: "green" }} />
                        <br /> ({t.payment_status})
                      </span>
                      <span>{t.confirmations}</span>
                      <span className={styles.track_span_hide}>
                        {t.complete}
                      </span>
                      <span
                        className={styles.track_span_hide}
                        style={{ wordBreak: "break-word", fontSize: "smaller" }}
                      >
                        {t.hash}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TrackWallet;
