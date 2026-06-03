import styles from './styles.module.css'

import someSvg from '../../../assets/somesvg.svg'


export const Page4 = () => {
    return (
        <div className={styles.sectionBackground}>
            <div>
                <img src={someSvg} width='400' height='400' />
            </div>
        </div> 
    )
} 
