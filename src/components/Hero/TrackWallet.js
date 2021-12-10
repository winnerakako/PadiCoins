import { useState, useEffect, useRef } from "react";
import { TRACK_WALLET } from "../../Data/requests";
import { ImSpinner6 } from "react-icons/im";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
} from "react-icons/ai";
import styles from "./styles.module.css";

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
          console.log(data, "data");
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
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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

              {error && (
                <p className={styles.form_error} style={{ fontSize: "1rem" }}>
                  {error}
                </p>
              )}

              <button className={styles.wallet_options_copy}>Track</button>
            </form>
          </>
        )}

        {wallet && (
          <div className={styles.track_wallet_container}>
            {empty ? (
              <p className={styles.form_error} style={{ marginTop: "15%" }}>
                You have not made any transactions yet.
              </p>
            ) : (
              <>
                <p style={{ textAlign: "left", marginBottom: "10px" }}>
                  Transactions update as at {new Date().toLocaleDateString()}
                </p>

                <table style={{ width: "100%" }}>
                  <th className={styles.track_wallet_header}>
                    <td>Date</td>
                    <td>Coin</td>
                    <td>Sent</td>
                    <td>Received</td>
                    <td className={styles.track_span_hide}>Complete</td>
                    <td className={styles.track_span_hide}>Hash</td>
                  </th>
                  {wallet.transactions?.map((t) => (
                    <tbody className={styles.track_list_item}>
                      <tr>
                        {new Date(t.created_at).toLocaleString().split(",")[0]}
                        <br />
                        {new Date(t.created_at).toLocaleString().split(",")[1]}
                      </tr>
                      <tr>{wallet.coin_symbol}</tr>
                      <tr style={{ whiteSpace: "nowrap" }}>
                        {(+t.amount_received).toFixed(4)}
                        <AiOutlineArrowUp style={{ color: "red" }} />
                      </tr>
                      <tr style={{ whiteSpace: "nowrap" }}>
                        {t.amount_paid}{" "}
                        <AiOutlineArrowDown style={{ color: "green" }} />
                        <br />
                      </tr>

                      <tr className={styles.track_span_hide}>{t.complete}</tr>
                      <tr
                        className={styles.track_span_hide}
                        style={{ wordBreak: "break-word", fontSize: "smaller" }}
                      >
                        {t.hash}
                      </tr>
                    </tbody>
                  ))}
                </table>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TrackWallet;
