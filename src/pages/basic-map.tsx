import React, { ReactElement } from 'react';
import styles from '../pages-lib/basic-map/basic-map.module.scss';
import { Map } from '../components';

export default function Home(): ReactElement {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Hello World</h2>
                <Map />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
