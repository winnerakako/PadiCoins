import { useState, useEffect, useRef } from "react";
import { TRACK_WALLET } from "../../Data/requests";
import { ImSpinner6 } from "react-icons/im";
import styles from "./styles.module.css";

const TrackWallet = ({ close }) => {
  const [value, setValue] = useState("");
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const trackHandler = (e) => {
    e?.preventDefault();
    setError(false);
    if (value) {
      setLoading(true);
      fetch(`${TRACK_WALLET}/${value}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          if (data.success) {
            setWallet(data.data.wallet);
            localStorage.setItem(
              "trackWallet",
              JSON.stringify(data.data.wallet.transactions)
            );
          } else {
            setError(true);
            setWallet(null);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div className={styles.overlay_gray}></div>
      <div className={styles.track_container}>
        <p className={styles.track_wallet_cancel} onClick={close}>
          X
        </p>
        <p style={{ marginTop: "17%", fontSize: "smaller" }}>
          Please provide your track ID to check status of your transaction
        </p>
        <form onSubmit={trackHandler}>
          <input
            placeholder="Track ID..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={trackHandler}
            ref={inputRef}
          />
          {loading && (
            <ImSpinner6
              className={styles.loading}
              style={{ display: "block", margin: "0 auto" }}
            />
          )}
          {error && (
            <p className={styles.form_error}>
              No transaction with that track ID found.
            </p>
          )}
          <button className={styles.hidden}></button>
        </form>

        {wallet && (
          <div className={styles.track_wallet_container}>
            <div className={styles.track_wallet_header}>
              <span>Date</span>
              <span>Coin</span>
              <span>Sent</span>
              <span>Received</span>
              <span>Confirmations</span>
              <span>Complete</span>
              <span>Hash</span>
            </div>
            <ul className={styles.track_ul}>
              {wallet.transactions.map((t) => (
                <li key={t.id} className={styles.track_list_item}>
                  <span>{t.confimed_at}</span>
                  <span>{t.coin_symbol}</span>
                  <span>
                    {t.amount_received}
                    <br /> ({t.status})
                  </span>
                  <span>
                    {t.amount_paid}
                    <br /> ({t.payment_status})
                  </span>
                  <span>{t.confirmations}</span>
                  <span>{t.complete}</span>
                  <span>{t.hash}</span>
                </li>
              ))}
            </ul>
            {/* <div className={styles.track_wallet_status_info}>
              <h3>Transaction - {wallet.status}</h3>
              <p>Your transaction status is still {wallet.status}</p>

              <MdOutlineQrCode className={styles.qr_icon} />
            </div>

            <p>{wallet.coin.symbol} ADDRESS</p>
            <p className={styles.wallet_address_address}>{wallet.address} </p>
            <div className={styles.wallet_track_info}>
              <p>Track ID</p>
              <p className={styles.wallet_address_address}>
                {wallet.track_id}{" "}
              </p>
            </div>

            <div className={styles.track_wallet_qrbox}>
              <div className={styles.track_wallet_status}>
                <span>Status:</span>
                <span>{wallet.status}</span>
              </div>
              <div
                style={{ flex: "1", paddingRight: "10%", fontSize: "small" }}
              >
                <p>{wallet.bank_account?.bank_name}</p>
                <p>{wallet.bank_account?.account_number}</p>
                <p>{wallet.bank_account?.account_name}</p>
              </div>
            </div>
            <p>We haven't received your payment yet</p>
          </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default TrackWallet;
