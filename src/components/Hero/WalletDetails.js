import { useState } from "react";
import styles from "./styles.module.css";
import TrackWallet from "./TrackWallet";

const WalletDetails = ({ wallet, close }) => {
  const [track, setTrack] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className={`${styles.wallet_container}`}>
      <div className={styles.wallet_address}>
        <div className={styles.wallet_address_info}>
          <p>TRANSFER TO OUR WALLET</p>
          <p className={styles.wallet_address_paragraph}>
            Make payment to the address or scan barcode below. Check your email
            for more details.
          </p>
          <p>{wallet.coin.symbol} ADDRESS</p>
          <p className={styles.wallet_address_address_1}>{wallet.address} </p>
        </div>
        <div className={styles.wallet_track_info}>
          <p>Track ID</p>
          <p className={styles.wallet_address_address}>{wallet.track_id} </p>
        </div>
      </div>

      <div className={styles.wallet_account_info}>
        <img
          src={`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${wallet.address}`}
          alt="wallet-address"
        />
        <div className={styles.wallet_account_info_details}>
          <p>{wallet.bank_account?.bank_name}</p>
          <p>{wallet.bank_account?.account_number}</p>
          <p>{wallet.bank_account?.account_name}</p>
        </div>
      </div>
      <p className={styles.wallet_address_paragraph}>
        Your bank account will be credited after transaction has been confirmed.
      </p>
      <p className={styles.wallet_address_paragraph}>
        Track this transaction
        <span
          className={styles.track_wallet_link}
          onClick={() => setTrack(true)}
        >
          here
        </span>
      </p>
      <div className={styles.wallet_options}>
        <button
          className={
            !copied
              ? styles.wallet_options_copy
              : styles.wallet_options_copy_green
          }
          onClick={copyToClipboard}
        >
          {copied ? "Copied" : "Copy wallet address"}
        </button>
        <button className={styles.wallet_options_cancel} onClick={close}>
          {" "}
          Cancel{" "}
        </button>
      </div>
      {track && <TrackWallet close={() => setTrack(false)} />}
    </div>
  );
};

export default WalletDetails;
