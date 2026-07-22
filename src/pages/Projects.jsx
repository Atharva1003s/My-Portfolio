import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '💳 Credit-Wise Loan Approval System',
    desc: 'Developed an end-to-end ML pipeline to predict loan approval status, enhancing decision-making efficiency based on historical applicant data. Performed data pre-processing including label/one-hot encoding and normalization.',
    ss: null,
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Machine Learning'],
    date: 'May 2026 – Jun 2026',
    code: 'https://github.com/Atharva1003s/Credit-Wise-Loan-Approval-App',
  },
  {
    title: '📝 Text Summarizer',
    desc: 'Built an AI-powered text summarization system using T5-Small to generate concise, context-aware summaries from long-form text, with an end-to-end pipeline for preprocessing, inference, and API deployment.',
    ss: null,
    tech: ['Python', 'Transformers (T5-Small)', 'Hugging Face', 'PyTorch', 'FastAPI'],
    date: 'Jun 2026 – Jul 2026',
    code: '#',
  },
  {
    title: '🛒 SmartShop — AI-Driven Purchase Intent Predictor',
    desc: 'Built a Decision Tree-based model to predict customer purchase intent from user behavior and session data, with a complete pipeline from preprocessing to Flask-based real-time deployment.',
    ss: null,
    tech: ['Python', 'Scikit-learn', 'Decision Tree', 'Pandas', 'NumPy', 'Flask', 'HTML', 'CSS'],
    date: 'Jan 2026 – Feb 2026',
    code: 'https://github.com/Atharva1003s/SmartShop-AI-Driven-Purchase-Intent-Predictor-',
  },
  {
    title: '🎓 AI-Powered Mock Interview Web App — Final Year Project',
    desc: 'An AI-powered mock interview platform generating role-specific technical/HR questions with automated, personalized feedback via Google Gemini AI. Full-stack architecture with secure auth, hybrid MySQL/Firebase database, and progress analytics.',
    ss: null,
    tech: ['Next.js', 'React', 'Google Gemini AI', 'MySQL', 'Firebase', 'Clerk Authentication'],
    date: 'Oct 2025 – Jun 2026',
    code: '#',
  },
  {
    title: '🎥 AI YouTube Video Analyzer',
    desc: 'An intelligent, end-to-end multi-agent AI assistant designed to extract, organize, and analyze content directly from any YouTube video link—transforming long hours of footage into precise, structured insights in seconds.',
    ss: null,
    tech: ['Python' , 'Agno (Phidata) ' , 'Groq API' , 'Llama 3.3 70B' , 'Streamlit' , 'SQLite' , 'Dotenv' , 'Jupyter Notebook' ,],
    date: 'July 2026 – July 2026',
    code: 'https://github.com/Atharva1003s/AI-YouTube-Video-Analyzer-',
  },
   {
    title: '🎬 AI-Powered Sentiment Analyzer',
    desc: 'Developed an end-to-end Machine Learning NLP web application to classify movie review sentiments, helping platforms automatically analyze user feedback and quantify viewer reception in real time.',
    ss: null,
    tech: ['Python' , 'PyTorch' , 'Streamlit' , 'NLP' , 'RNN' ,'NLTK' , 'Scikit-learn (TF-IDF)' , 'Pickle' , 'Jupyter Notebook' , 'HTML/CSS'],
    date: 'July 2026 – July 2026',
    code: 'https://github.com/Atharva1003s/Sentiment-Analyzer',
  },
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending AI/ML, data science, and full-stack development.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              {p.ss && (
                <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <img
                    src={p.ss}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: 12
                    }}
                  />
                </motion.div>
              )}

              <div style={{ marginTop: p.ss ? 12 : 0 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                {p.date && (
                  <p style={{ fontSize: 12, color: '#888', marginBottom: 6, fontStyle: 'italic' }}>{p.date}</p>
                )}
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
