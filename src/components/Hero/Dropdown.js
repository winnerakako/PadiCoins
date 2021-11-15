import {useState, useRef} from 'react'
import styles from "./styles.module.css"
import { VscSearch } from "react-icons/vsc";

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
export default Dropdown
