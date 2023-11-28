import React from 'react'
import styles from "./IntroSection.module.css"
import { Typography } from '@mui/material'
import SuccessCard from '../SuccessCard/SuccessCard'

export default function IntroSection() {
    return (
        <div>
            <div className={styles.introRow}>
                <div className={styles.leftColumn}>
                    <h1 >Let's Introduce <br />Ourself</h1>
                </div>
                <div className={styles.rightColumn}>
                    <h2> Criminal Lawyer</h2>
                    <Typography variant='body2' color='textSecondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Consectetur dolor, doloremque sequi inventore ratione quaerat voluptatibus delectus repellat fugiat dolorem consequuntur <br />nam autem laboriosam alias tenetur voluptate in laudantium neque.
                    </Typography>
                </div>
            </div>
            <div className={styles.chooseUs}>
                <h1>Why Choose us?</h1>
                <div className={styles.cardContainer}>
                    <SuccessCard heading={"98% Success Rate"}/>
                    <SuccessCard heading={"100% Success Rate"}/>
                    <SuccessCard heading={"100% Success Rate"}/>
                </div>
            </div>
        </div>
    )
}
