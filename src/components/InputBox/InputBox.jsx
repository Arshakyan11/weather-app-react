import React, { useEffect } from "react";
import styles from "./InputBox.module.scss";
import { useDispatch } from "react-redux";
import { requestData, requestWeeklyData } from "../../store/api/api";
const InputBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestData("Abovyan"));
    dispatch(requestWeeklyData("Abovyan"));
  });
  return (
    <section className={styles.inputBox}>
      <div className={styles.container}>
        <form
          onSubmit={(e) => {
            const value = e.target[0].value;
            e.preventDefault();
            dispatch(requestData(value));
            dispatch(requestWeeklyData(value));
            e.target.reset();
          }}
        >
          <input type="text" placeholder="Search City/Country" />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default InputBox;
