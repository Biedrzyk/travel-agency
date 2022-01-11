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
    const msPerDay = 24 * 60 * 60 * 1000; //milisekundy na dzień
    const timeLeft = (summerDay.getTime() - currentDay.getTime());
    const timeGone = (currentDay.getTime() - endSummerDay.getTime());
    const e_daysGone = timeGone / msPerDay;
    const e_daysLeft = timeLeft / msPerDay; //przelicznik na dni
    let daysLeft = Math.round(e_daysLeft);
    let daysGone = Math.floor(e_daysGone);
    console.log(daysGone, daysLeft);
    if (timeLeft > 0 && timeGone < 0) {
      daysLeft = daysLeft % 365;
      return (daysLeft + ' days to summer!');
    } else if (timeLeft < 0 && timeGone < 0) {
      return '';
    }
  }
    
}
export default DaysToSummer;