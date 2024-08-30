import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

export default function SignIn() {
  return (
    <div>
      <Link className={styles.signIn}>Sign in</Link>
    </div>
  );
}
