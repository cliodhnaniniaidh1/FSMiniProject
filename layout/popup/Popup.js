import styles from "./Popup.module.css"
import { useState } from 'react'


export default function Popup(props) {

  const [show, setShow] = useState(false)

function close() {
  if (show == true) {
    setShow(false);
  } else {
    setShow(true);
  }
}
    return (
      <div className={styles.button} onClick={() => close(true)}>
        <p>Click Here!</p>
        {show && (
          <div className={styles.mainDiv} >
            <div className={styles.greyBackground}></div>
            <div className={styles.thePopup}>
              <div className={styles.button} onClick={() => close(false)}>Close</div>
              <div className={styles.description}>{props.description}</div>
            </div>
          </div>
        )}
      </div>
    );
}