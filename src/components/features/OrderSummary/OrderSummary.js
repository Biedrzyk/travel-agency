import React from 'react';
import styles from './OrderSummary.module.scss';


const OrderSummary = () => (
    <h2 className={styles.component}>
        Total: <strong>$12,345</strong>
    </h2>
);

export default OrderSummary;