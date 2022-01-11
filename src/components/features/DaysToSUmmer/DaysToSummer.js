import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  constructor() {
    super();
  }

  render() {
    
    const countdownDays = this.getCountdownDay();

    return (
      <div className={styles.component}>
        <h3 className={styles.summerDays}>{countdownDays}</h3>
      </div>
    );
  }
  getCountdownDay() {
    const currentDay = new Date();
    const year = currentDay.getUTCFullYear();
    let summerDay = new Date(`${year}-06-21`);
    const endSummerDay = new Date(`${year}-09-23`);
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeLeft = (summerDay.getTime() - currentDay.getTime());
    const timeGone = (currentDay.getTime() - endSummerDay.getTime());
    const e_daysGone = timeGone / msPerDay;
    const e_daysLeft = timeLeft / msPerDay;
    let daysLeft = Math.round(e_daysLeft);
    let daysGone = Math.floor(e_daysGone);
    console.log(daysGone, daysLeft);
    if (timeLeft > 0 && timeGone < 0 && daysLeft !== 1) {
      daysLeft = daysLeft % 365;
      return (daysLeft + ' days to summer!');
    } else if (timeLeft < 0 && timeGone < 0) {
      return '';
    } else if (timeLeft < 0 && timeGone > 0) {
      summerDay = new Date(`${year + 1}-06-21`);
      const proba = (summerDay.getTime() - currentDay.getTime());
      const e_proba = proba / msPerDay;
      const e_probaDone = Math.floor(e_proba);
      return (e_probaDone + ' days to summer!');
    } else if (daysLeft == 1) {
      return (daysLeft + ' day to summer!');
    }
  }
    
}
export default DaysToSummer;