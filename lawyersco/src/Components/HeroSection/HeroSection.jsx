import React, { useState } from 'react'
import styles from "./HeroSection.module.css"
import { Typography } from '@mui/material'
import HeroImg from "../../Assets/heroImg.png"
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';


export default function HeroSection() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email submitted: ${email}`);
    };
    return (
        <div>
            <div className={styles.row}>
                <div className={styles.column1}>
                    <div className='container-fluid'>
                        <h1 className={styles.heroText}>You don't have to <br /> <b>Fight them Alone</b></h1>
                        <Typography variant='body1' color='textSecondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tenetur vel non voluptatem, commodi culpa reprehenderit? Voluptate delectus pariatur autem omnis modi expedita quibusdam reprehenderit, sint sit maiores quas ullam?</Typography>
                    </div>
                    <div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            
                            <OutlinedInput
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                className={styles.emailInput}
                                onChange={handleEmailChange}
                                // startAdornment={
                                //     <InputAdornment position="start">
                                //         <EmailIcon className={styles.emailIcon} />
                                //     </InputAdornment>
                                // }
                                placeholder={`Enter your email`}
                                required
                            />
                            <button type="submit" className={styles.submitBtn}>Let's Talk</button>
                        </form>
                    </div>
                </div>
                <div className={styles.column2}>
                    <div className='container-fluid'>
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
