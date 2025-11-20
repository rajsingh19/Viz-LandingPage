import { useState } from "react";
import { Link } from "react-router-dom";

function PrivacyCheckbox({ onAcceptChange }) {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleChange = () => {
    const newVal = !isAccepted;
    setIsAccepted(newVal);
    onAcceptChange(newVal);
  };

  return (
    <div style={styles.container}>
      <input
        type="checkbox"
        checked={isAccepted}
        onChange={handleChange}
        style={styles.checkbox}
      />
      <span style={styles.text}>
        I agree to the{" "}
        <Link
          to="/privacy-policy"
          target="_blank"
          style={styles.link}
        >
          Privacy Policy
        </Link>
      </span>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "15px",
    fontSize: "16px",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    marginRight: "10px",
  },
  text: {
    color: "#333",
  },
  link: {
    color: "#007bff",
    textDecoration: "underline",
  },
};

export default PrivacyCheckbox;
