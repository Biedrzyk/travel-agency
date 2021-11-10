import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';



export const OrderOptionNumber = (currentValue, limits, setOptionValue) => {
    <div className={styles.number}>
      <input
      className={styles.input}
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
      >
      </input>
    </div>
  };