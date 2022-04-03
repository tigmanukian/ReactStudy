import {Link as RouterLink} from "react-router-dom";
import styles from "./Link.module.css"

function Link(props) {
    return <RouterLink  className={styles.link}{...props} />
    
}

export default Link;