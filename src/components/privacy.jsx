import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for Vizzle</h1>
     

      <p>
        Welcome to <strong>Vizzle</strong> (“we”, “our”, “us”). This Privacy Policy explains how we 
        collect, use, and protect your personal information when you use our mobile application (“App”).
      </p>

      <h2 style={styles.heading}>1. Data We Collect</h2>
      <p>We collect the following data to provide and improve our services:</p>

      <h3 style={styles.subheading}>a. Personal Information</h3>
      <ul>
        <li>Phone Number – for login and authentication</li>
        <li>Email Address – for verification and support</li>
      </ul>

      <h3 style={styles.subheading}>b. Uploaded Photos</h3>
      <p>
        If you choose to upload a photo for virtual try-on, Vizzle processes it temporarily using 
        ML (Machine Learning) models.  
        <br />
        <strong>We do NOT store, save, or share your photos.</strong>
      </p>

      <h3 style={styles.subheading}>c. Usage Data</h3>
      <ul>
        <li>Device and app usage information</li>
        <li>Approximate location (non-precise)</li>
        <li>IP address</li>
      </ul>

      <h2 style={styles.heading}>2. How We Use Your Data</h2>
      <ul>
        <li>To authenticate your account</li>
        <li>To provide virtual try-on features</li>
        <li>To improve app performance</li>
        <li>To provide customer support</li>
      </ul>

      <h2 style={styles.heading}>3. Data Sharing</h2>
      <p>
        We <strong>do not sell</strong> your personal data.  
        <br />We also do <strong>not use any third-party SDKs</strong> that collect user data.
      </p>

      <h2 style={styles.heading}>4. Data Retention</h2>
      <p>
        We retain your phone number and email only as long as your account is active.  
        Uploaded photos are <strong>not stored</strong>.
      </p>

      <h2 style={styles.heading}>5. Your Rights</h2>
      <ul>
        <li>Request data deletion</li>
        <li>Access or update your information</li>
        <li>Withdraw consent</li>
      </ul>
      <p>
        Contact us at: <strong>[Insert Email]</strong>
      </p>

      <h2 style={styles.heading}>6. Children’s Privacy</h2>
      <p>We do not knowingly collect data from children under 13.</p>

      <h2 style={styles.heading}>7. Updates to This Policy</h2>
      <p>We may update this Privacy Policy periodically. The latest version will be posted on this page.</p>

      <h2 style={styles.heading}>8. Contact Us</h2>
      <p>
        If you have questions, contact us at:  
        <br />
        📧 <strong>[Insert Email Address]</strong>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "24px",
    marginTop: "25px",
  },
  subheading: {
    fontSize: "20px",
    marginTop: "15px",
  },
};

export default PrivacyPolicy;
