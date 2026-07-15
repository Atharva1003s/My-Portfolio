import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Atharva Shendkar
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              BE — Computer Engineering | KJ College of Engineering and Management Research, SPPU, Pune
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Pune, Maharashtra, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ atharvashendkar26@gmail.com | 📞 +91 8010077479
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Final-year Computer Engineering student with practical experience in
              Machine Learning, Generative AI, and Python. Built end-to-end AI
              projects using LangChain, FastAPI, SQL, and vector databases.
              Comfortable across the complete AI/ML lifecycle — from data
              preprocessing and model development to API deployment and evaluation.
              Passionate about applying AI to solve real-world problems and eager
              to contribute to enterprise-scale AI engineering teams.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Bachelor of Engineering, Computer Engineering</strong> — KJ College of Engineering and Management Research
              (Savitribai Phule Pune University), Nov 2022 – May 2026 <br />
              <span style={{ color: "#aaa" }}>SGPA: 8.4</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>ITPA Intern — AutomationEdge</strong> (IT Process Automation, ValueDX) <br />
              <span style={{ color: "#aaa" }}>May 2026 – Present | Maharashtra, India</span>
              <ul style={{ paddingLeft: "1.2rem", marginTop: 4 }}>
                <li style={{ color: "#bbb" }}>Training in Intelligent Process Automation (ITPA): enterprise automation, workflow design, RPA concepts.</li>
                <li style={{ color: "#bbb" }}>Building hands-on skills in process automation, bot development, Python integration, and AI-powered automation.</li>
              </ul>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ Credit-Wise Loan Approval System</li>
            <li>2️⃣ Text Summarizer (T5-Small + FastAPI)</li>
            <li>3️⃣ SmartShop — AI-Driven Purchase Intent Predictor</li>
            <li>4️⃣ AI-Powered Mock Interview Web App — Final Year Project</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "JavaScript",
              "React.js",
              "FastAPI",
              "Flask",
              "LangChain",
              "RAG",
              "FAISS",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Hugging Face",
              "BERT",
              "Pandas",
              "NumPy",
              "Matplotlib",
              "SQL",
              "MongoDB",
              "Docker",
              "Git",
              "Node.js",
              "Express.js",
              "Google Gemini",
              "OpenAI GPT",
              "Prompt Engineering",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏅 Certifications</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>📜 Data Science Certificate — Cisco Academy</li>
            <li>📜 Data Analytics Certificate — Deloitte</li>
            <li>📜 TCS iON Career Edge - Young Professional — TCS</li>
            <li>📜 Intro to Machine Learning — Kaggle</li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/Atharva1003s" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/atharvashendkar-67b81326b" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume2.pdf"
            title="Atharva Shendkar Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume2.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
