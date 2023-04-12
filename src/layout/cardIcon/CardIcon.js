import SBM_styles from './Submit.module.css'
import BTN_style from './Buttons.module.css'
import styles from './CardIcon.module.css'
import Tks from '../tkspage/Tks';

import { useState } from 'react'

function Card_Icon() {

    const [assessment, SetAssessment] = useState(0)
    const [showCard, SetShowCard] = useState(true)

    function tkspage() {
        if (assessment === 0) {
            return
        } else {
            SetShowCard(false)
        }
    }


    return (
        <div className={styles.main_container}>
            {showCard ? (<><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>

                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <div className={BTN_style.btn_line}>
                    <button onClick={(e) => SetAssessment(e.target.value)} value="1"> 1 </button>
                    <button onClick={(e) => SetAssessment(e.target.value)} value="2"> 2 </button>
                    <button onClick={(e) => SetAssessment(e.target.value)} value="3"> 3 </button>
                    <button onClick={(e) => SetAssessment(e.target.value)} value="4"> 4 </button>
                    <button onClick={(e) => SetAssessment(e.target.value)} value="5"> 5 </button>
                </div>
                <div className={SBM_styles.submitbtn}>
                    <button onClick={tkspage}>S U B M I T</button>
                </div>
            </>) : <Tks value={assessment}/> }
        </div>

    )
}

export default Card_Icon