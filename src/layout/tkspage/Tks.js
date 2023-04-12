import Svg from './Svg';
import styles from './Tks.module.css'

function Tks({value}) {

    return (
        <div className={styles.main_container}>
            <div className={styles.centralizer}>
                <Svg />
                <div>
                    You selected {value} out of 5
                </div>
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don't hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}

export default Tks;