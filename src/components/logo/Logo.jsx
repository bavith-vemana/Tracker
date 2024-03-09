import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import icon from "../icon.png";

function Logo() {
  return <Link to="/" ><img src={icon} alt="WorldWise logo" className={styles.logo} />World Wise</Link>;
}

export default Logo;
