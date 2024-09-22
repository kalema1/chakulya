import { Link } from "react-router-dom";
import styles from "./Social.module.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div>
      <div className={styles.socialBox}>
        <Link className={styles.socialLink}>
          <FaFacebook className={styles.socialLinkIcon} />
        </Link>
        <Link className={styles.socialLink}>
          <FaTwitter className={styles.socialLinkIcon} />
        </Link>
        <Link className={styles.socialLink}>
          <FaLinkedin className={styles.socialLinkIcon} />
        </Link>
      </div>
    </div>
  );
}
