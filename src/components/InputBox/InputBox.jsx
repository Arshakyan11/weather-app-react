import React, { useEffect } from "react";
import styles from "./InputBox.module.scss";
import { useDispatch } from "react-redux";
import { requestData, requestWeeklyData } from "../../store/api/api";
import search from "../../assets/img/search.png";
const InputBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestData("Abovyan"));
    dispatch(requestWeeklyData("Abovyan"));
  });
  return (
    <nav className={styles.inputBox}>
      <div className={styles.container}>
        <div className={styles.navSection}>
          <form
            onSubmit={(e) => {
              const value = e.target[0].value;
              e.preventDefault();
              if (value) {
                dispatch(requestData(value));
                dispatch(requestWeeklyData(value));
                e.target.reset();
              }
            }}
          >
            <input type="text" placeholder="Search City/Country" />
            <button type="submit">
              <img src={search} alt="searchBtn" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default InputBox;
