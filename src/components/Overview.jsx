// src/components/Overview.js
import React from "react";

const Overview = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Project Overview</h1>
      <div style={styles.textContainer}>
        <p style={styles.paragraph}>
          Welcome to our project! We are Alpha Coders... This project is
          designed to provide a comprehensive view of the supply chain metrics
          and operations. It includes features such as real-time inventory
          tracking, analytics, order management, and more. The goal is to
          optimize various processes within the supply chain for improved
          efficiency and transparency.
        </p>
        <p style={styles.paragraph}>
          Feel free to explore the various sections to gain insights into the
          functionality and capabilities of this application.
        </p>
      </div>

      <div style={styles.teamSection}>
        <h2 style={styles.teamHeading}>Meet the Developers</h2>
        <div style={styles.teamMembers}>
          <p style={styles.memberBox}>
            <a
              href="https://www.linkedin.com/in/aayush-goyal-2211b6227/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.memberLink}
            >
              Aayush Goyal
            </a>
          </p>
          <p style={styles.memberBox}>
            <a
              href="https://www.linkedin.com/in/dushyant-chauhan-374075271/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.memberLink}
            >
              Dushyant Chauhan
            </a>
          </p>
          <p style={styles.memberBox}>
            <a
              href="https://www.linkedin.com/in/digvijay-raj-499107338//"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.memberLink}
            >
              Digvijay Raj
            </a>
          </p>
          <p style={styles.memberBox}>
            <a
              href="https://www.linkedin.com/in/arjun-singh-807b61293/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.memberLink}
            >
              Arjun Singh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Align content to the top instead of center
    minHeight: "100vh", // Ensure full height but allow flexibility
    padding: "40px 20px", // Increased padding to push content up
    backgroundColor: "#f4f4f4",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  textContainer: {
    maxWidth: "800px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "40px", // Space between text section and team section
  },
  paragraph: {
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "1.6",
    color: "#555",
  },
  teamSection: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  teamHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  teamMembers: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  memberBox: {
    display: "inline-block",
    padding: "10px 20px",
    border: "2px solid #0077b5",
    borderRadius: "8px",
    backgroundColor: "#fff", // Same as the textContainer background color
    textAlign: "center",
    minWidth: "150px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  memberLink: {
    color: "#0077b5",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.1rem",
    display: "block",
  },
  // Hover effect for member links
  memberLinkHover: {
    color: "#005a8e", // Darker LinkedIn blue on hover
    textDecoration: "underline",
  },
};

export default Overview;