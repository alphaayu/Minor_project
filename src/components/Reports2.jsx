// src/components/Reports2.jsx
import React from "react";

const Reports2 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Historic Challenges in Supply Chain</h1>
      <div style={styles.textContainer}>
        <p style={styles.paragraph}>
          The supply chain has faced numerous challenges over the years. From
          unexpected disruptions to inadequate infrastructure, the industry has
          struggled with managing the flow of goods and resources. In
          particular, we have seen delays in shipments, inventory shortages, and
          increasing costs. These historical supply chain challenges have had
          far-reaching impacts on global trade and economy, affecting businesses
          and consumers alike.
        </p>
        <p style={styles.paragraph}>
          While progress has been made in certain areas, many of these problems
          persist. Our project aims to address these inefficiencies, offering
          innovative solutions to streamline operations and provide greater
          transparency and visibility across the supply chain.
        </p>
      </div>

      <div style={styles.clippingSection}>
        <h2 style={styles.clippingHeading}>Historic News Headlines</h2>
        <div style={styles.clippingContainer}>
          <div style={styles.clippingBox}>
            <a
              href="https://nshift.com/blog/supply-chain-shortages-affect-retailers-and-consumer-behavior" // Link to the related news article
              target="_blank"
              rel="noopener noreferrer"
              style={styles.clippingLink}
            >
              <img
                src="https://c8.alamy.com/comp/2J90JTC/strips-of-newspaper-with-the-words-supply-chain-crisis-black-and-white-close-up-2J90JTC.jpg"
                alt="News Clipping 1"
                style={styles.clippingImage}
              />
              <p style={styles.clippingCaption}>
                "Supply Chain Crisis Leaves Retailers Struggling"
              </p>
            </a>
          </div>
          <div style={styles.clippingBox}>
            <a
              href="https://www.youtube.com/watch?app=desktop&v=SqN9h4fhjmM" // Link to the related news article
              target="_blank"
              rel="noopener noreferrer"
              style={styles.clippingLink}
            >
              <img
                src="https://i.ytimg.com/vi/SqN9h4fhjmM/maxresdefault.jpg"
                alt="News Clipping 2"
                style={styles.clippingImage}
              />
              <p style={styles.clippingCaption}>
                "Logistical Nightmares: Port Congestions and Delays"
              </p>
            </a>
          </div>
          <div style={styles.clippingBox}>
            <a
              href="https://cnectgpo.com/blog/how-inflation-can-impact-your-supply-chain/" // Link to the related news article
              target="_blank"
              rel="noopener noreferrer"
              style={styles.clippingLink}
            >
              <img
                src="https://cnectgpo.com/wp-content/uploads/2021/08/2021.08.12_InflationSupplyChain_Tw-LI-1024x536.png"
                alt="News Clipping 3"
                style={styles.clippingImage}
              />
              <p style={styles.clippingCaption}>
                "Rising Costs and Inflation Impacting Supply Chain"
              </p>
            </a>
          </div>
        </div>
      </div>

      <div style={styles.projectNeedSection}>
        <h2 style={styles.projectNeedHeading}>Why This Project is Essential</h2>
        <p style={styles.projectNeedText}>
          As supply chains continue to evolve, the need for real-time tracking,
          analytics, and streamlined processes becomes increasingly critical.
          Our project seeks to bridge the gap between traditional logistics
          methods and modern technology by introducing tools that can provide
          immediate visibility into supply chain operations. By improving
          transparency and efficiency, we aim to reduce delays, cut costs, and
          enhance overall reliability in supply chains across industries.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    padding: "40px 20px",
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
    marginBottom: "40px",
  },
  paragraph: {
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "1.6",
    color: "#555",
  },
  clippingSection: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  clippingHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  clippingContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  clippingBox: {
    width: "300px",
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  clippingImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  clippingCaption: {
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: "500",
    color: "#333",
  },
  clippingLink: {
    textDecoration: "none", // Remove underline from the link
  },
  projectNeedSection: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  projectNeedHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  projectNeedText: {
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.6",
    color: "#555",
  },
};

export default Reports2;