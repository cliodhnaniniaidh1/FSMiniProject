import classes from "./Popup.module.css"
import { useState } from 'react'


export default function Popup(props) {
  let [showMe, setShowMe] = useState()

  if(props.show) { /* Move the show / hide code to the component itself: */
    return null
  }

  if(showMe) { /* Move the show / hide code to the component itself: */
    return null
  }

  return (
    <div className={classes.mainDiv} onClick={() => setShowMe(true)} >
      <div className={classes.greyBackground}></div>
      <div className={classes.thePopup}>
      </div>
    </div>
  )
}

