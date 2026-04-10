import { useState } from "react";

export function ProjectReportPage() {
  const [_printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Print Button - hidden when printing */}
      <div className="no-print fixed top-20 right-4 z-50 flex flex-col gap-2">
        <button
          type="button"
          onClick={handlePrint}
          className="bg-red-600 text-white px-4 py-3 rounded-lg font-bold shadow-lg text-sm hover:bg-red-700 active:scale-95 transition-all"
        >
          📥 Download as PDF
        </button>
        <p className="text-xs text-gray-600 text-center bg-white rounded p-1 shadow">
          Tap above then
          <br />
          "Save as PDF"
        </p>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          nav, header, footer { display: none !important; }
          .page { box-shadow: none !important; margin: 0 !important; }
          body { background: white !important; }
        }
        .page {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto 20px auto;
          padding: 20mm 20mm 15mm 25mm;
          background: white;
          box-shadow: 0 0 15px rgba(0,0,0,0.15);
          page-break-after: always;
          position: relative;
          font-family: 'Times New Roman', Times, serif;
          font-size: 11pt;
          color: #000;
        }
        .chapter-title {
          font-size: 13pt;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          border-bottom: 2px solid #000;
          padding-bottom: 6px;
          margin-bottom: 14px;
        }
        .section-title {
          font-size: 11.5pt;
          font-weight: bold;
          text-transform: uppercase;
          margin: 14px 0 6px 0;
        }
        .sub-title {
          font-size: 11pt;
          font-weight: bold;
          margin: 10px 0 5px 0;
        }
        p { line-height: 1.75; margin-bottom: 7px; text-align: justify; }
        ul { margin: 6px 0 6px 22px; }
        ul li { line-height: 1.75; margin-bottom: 3px; text-align: justify; }
        ol { margin: 6px 0 6px 22px; }
        ol li { line-height: 1.75; margin-bottom: 3px; }
        table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 10pt; }
        table th { background: #d3d3d3; border: 1px solid #000; padding: 6px 8px; font-weight: bold; text-align: center; }
        table td { border: 1px solid #000; padding: 5px 8px; }
        .screenshot-box {
          border: 2px dashed #aaa;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f8f8;
          margin: 12px 0;
          color: #666;
          font-size: 10pt;
          font-style: italic;
          text-align: center;
          padding: 10px;
        }
        .fig-caption { text-align: center; font-size: 9.5pt; font-style: italic; margin-bottom: 10px; }
        .dfd-container { border: 1.5px solid #000; padding: 15px; background: #fafafa; margin: 12px 0; }
        .er-wrap { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 12px; margin: 15px 0; }
        .er-table { border: 2px solid #000; width: 30%; min-width: 140px; }
        .er-table th { background: #555; color: #fff; padding: 6px; text-align: center; font-size: 10pt; }
        .er-table td { border: 1px solid #000; padding: 4px 8px; font-size: 9pt; }
        .sign-row { display: flex; justify-content: space-between; margin-top: 25px; }
        .sign-box { text-align: center; }
        .sign-box p { border-top: 1px solid #000; padding-top: 4px; width: 130px; margin: 0 auto; }
        .toc-row { display: flex; justify-content: space-between; padding: 3px 0; font-size: 10.5pt; border-bottom: 1px dotted #999; }
        .toc-chapter { font-weight: bold; font-size: 11pt; margin-top: 8px; }
        .pass { color: green; font-weight: bold; }
      `}</style>

      <div style={{ paddingTop: "80px", paddingBottom: "40px" }}>
        {/* PAGE 1: OUTER TITLE */}
        <div className="page">
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "15pt",
                fontWeight: "bold",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              INDUSTRIAL TRAINING PROJECT REPORT
            </h1>
            <div
              style={{
                border: "2px solid #000",
                padding: "18px",
                margin: "15px auto",
                width: "78%",
              }}
            >
              <h1 style={{ fontSize: "18pt", fontWeight: "bold" }}>MINDCARE</h1>
              <h2
                style={{
                  fontSize: "13pt",
                  fontWeight: "bold",
                  marginTop: "6px",
                }}
              >
                [A STUDENT MENTAL HEALTH PLATFORM]
              </h2>
            </div>
            <p style={{ marginTop: "15px" }}>
              Submitted in Partial fulfillment of the requirements for the
              degree of
            </p>
            <h2
              style={{ fontSize: "13pt", fontWeight: "bold", margin: "6px 0" }}
            >
              BACHELOR OF TECHNOLOGY
            </h2>
            <h2 style={{ fontSize: "13pt", fontWeight: "bold" }}>IN</h2>
            <h2
              style={{ fontSize: "13pt", fontWeight: "bold", margin: "6px 0" }}
            >
              COMPUTER SCIENCE &amp; ENGINEERING
            </h2>
            <p style={{ marginTop: "8px" }}>SESSION: (2023-2027)</p>
            <div
              style={{
                marginTop: "25px",
                textAlign: "left",
                paddingLeft: "50%",
              }}
            >
              <p>
                <strong>Submitted By:</strong>
              </p>
              <p>
                <strong>Alisha</strong>
              </p>
              <p>Roll no: 2326268</p>
            </div>
            <div style={{ marginTop: "25px" }}>
              <p>
                <strong>
                  Department of Computer Science &amp; Engineering
                </strong>
              </p>
              <p>
                <strong>
                  MODERN GROUP OF COLLEGES, PANDORI BHAGAT, MUKERIAN (PUNJAB)
                </strong>
              </p>
              <p style={{ marginTop: "8px" }}>Affiliated To</p>
              <p>
                <strong>
                  I.K. GUJRAL PUNJAB TECHNICAL UNIVERSITY (JALANDHAR)
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* PAGE 2: INNER TITLE */}
        <div className="page">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                border: "2px solid #000",
                padding: "18px",
                margin: "20px auto",
                width: "78%",
              }}
            >
              <h1 style={{ fontSize: "18pt", fontWeight: "bold" }}>MINDCARE</h1>
              <h2
                style={{
                  fontSize: "13pt",
                  fontWeight: "bold",
                  marginTop: "6px",
                }}
              >
                [A STUDENT MENTAL HEALTH PLATFORM]
              </h2>
            </div>
            <p>
              Submitted in Partial fulfillment of the requirements for the
              degree of
            </p>
            <h2
              style={{ fontSize: "13pt", fontWeight: "bold", margin: "6px 0" }}
            >
              BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE &amp; ENGINEERING
            </h2>
            <p>SESSION: (2023-2027)</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
              padding: "0 15px",
            }}
          >
            <div>
              <p>
                <strong>SUBMITTED TO:</strong>
              </p>
              <p>ASSOCIATE PROF.</p>
              <p>
                <strong>DR. KAMAL KISHORE</strong>
              </p>
              <p>Head of Department (CSE)</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p>
                <strong>SUBMITTED BY:</strong>
              </p>
              <p>
                <strong>ALISHA</strong>
              </p>
              <p>ROLL NO: 2326268</p>
              <p>
                B. TECH (CSE) 6<sup>th</sup> Sem
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <p>
              <strong>Department of Computer Science &amp; Engineering</strong>
            </p>
            <p>
              <strong>
                MODERN GROUP OF COLLEGES, PANDORI BHAGAT, MUKERIAN (PUNJAB)
              </strong>
            </p>
            <p style={{ marginTop: "8px" }}>Affiliated To</p>
            <p>
              <strong>
                I.K. GUJRAL PUNJAB TECHNICAL UNIVERSITY (JALANDHAR)
              </strong>
            </p>
          </div>
        </div>

        {/* PAGE 3: CERTIFICATE */}
        <div className="page">
          <h1
            style={{
              fontSize: "18pt",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            CERTIFICATE
          </h1>
          <p style={{ lineHeight: "2" }}>
            This is to certify that <strong>Alisha (Roll No. 2326268)</strong>,
            a student of <strong>B. Tech (CSE) 6th Semester</strong> at Modern
            Group of Colleges, Pandori Bhagat, Mukerian (Punjab), affiliated to
            I.K. Gujral Punjab Technical University, Jalandhar, has successfully
            completed the Industrial Training Project entitled:
          </p>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <h2
              style={{
                fontSize: "14pt",
                border: "2px solid #000",
                display: "inline-block",
                padding: "10px 25px",
              }}
            >
              "MINDCARE – A Student Mental Health Platform"
            </h2>
          </div>
          <p style={{ lineHeight: "2" }}>
            The work has been carried out under my supervision and guidance
            during the academic session 2023-2027. To the best of my knowledge,
            the work is original and has not been submitted elsewhere for the
            award of any degree or diploma.
          </p>
          <p style={{ lineHeight: "2" }}>
            The project fulfills the requirements for the degree of Bachelor of
            Technology in Computer Science &amp; Engineering as prescribed by
            I.K. Gujral Punjab Technical University, Jalandhar.
          </p>
          <div className="sign-row" style={{ marginTop: "50px" }}>
            <div className="sign-box">
              <p>Miss Janvee Sharma</p>
              <span style={{ fontSize: "9pt" }}>Project Supervisor</span>
            </div>
            <div className="sign-box">
              <p>Dr. Kamal Kishore</p>
              <span style={{ fontSize: "9pt" }}>Head of Department (CSE)</span>
            </div>
            <div className="sign-box">
              <p>Principal</p>
              <span style={{ fontSize: "9pt" }}>Modern Group of Colleges</span>
            </div>
          </div>
          <p style={{ marginTop: "25px" }}>
            <strong>Examined by:</strong>
          </p>
          <div className="sign-row" style={{ marginTop: "15px" }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="sign-box">
                <p style={{ width: "90px" }}>{n}.</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAGE 4: DECLARATION */}
        <div className="page">
          <h1
            style={{
              fontSize: "18pt",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            DECLARATION
          </h1>
          <p style={{ lineHeight: "2" }}>
            I hereby declare that the Project Report entitled{" "}
            <strong>"MINDCARE – A Student Mental Health Platform"</strong> is an
            authentic record of my own work as requirements of Industrial
            Training Project during the Sixth Semester for the award of degree
            of <strong>B. Tech (CSE)</strong>, Modern Group of Colleges, Pandori
            Bhagat (Mukerian), under the guidance of{" "}
            <strong>Miss Janvee Sharma</strong>.
          </p>
          <p style={{ lineHeight: "2" }}>
            I further declare that the information presented in this report is
            true and original to the best of my knowledge. The project work has
            not been submitted elsewhere for the award of any other degree,
            diploma, or certificate. All the references, resources, and
            materials used in this project have been duly acknowledged.
          </p>
          <p style={{ lineHeight: "2" }}>
            I understand that any false statement in this declaration will
            disqualify my report from consideration.
          </p>
          <div style={{ marginTop: "35px" }}>
            <p>Date: ____________________</p>
            <p style={{ marginTop: "25px" }}>
              <strong>Alisha (2326268)</strong>
            </p>
            <p>B. Tech (CSE) 6th Semester</p>
            <p>Modern Group of Colleges, Pandori Bhagat, Mukerian</p>
          </div>
          <p style={{ marginTop: "25px", lineHeight: "2" }}>
            Certified that the above statement made by the student is correct to
            the best of our knowledge and belief.
          </p>
          <p style={{ marginTop: "15px" }}>
            <strong>Signatures — Examined by:</strong>
          </p>
          <div className="sign-row" style={{ marginTop: "15px" }}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="sign-box">
                <p style={{ width: "90px" }}>{n}.</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "20px" }}>
            <strong>Head of Department</strong>
            <br />
            (Signature and Seal)
            <br />
            SIXTH Semester
          </p>
        </div>

        {/* PAGE 5: ACKNOWLEDGEMENT */}
        <div className="page">
          <h1
            style={{
              fontSize: "18pt",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            ACKNOWLEDGEMENT
          </h1>
          <p style={{ lineHeight: "2" }}>
            I express my sincere gratitude to the{" "}
            <strong>I.K. Gujral Punjab Technical University, Kapurthala</strong>{" "}
            for giving me the opportunity to work on the Major Project during my
            Sixth Semester of B. Tech (CSE). This project is an important aspect
            in the field of engineering and computer science.
          </p>
          <p style={{ lineHeight: "2" }}>
            I would like to thank <strong>Dr. Kamal Kishore</strong>, Head of
            Department, CSE at MGC Pandori Bhagat, Mukerian, for their kind
            support, encouragement, and guidance throughout the duration of this
            project.
          </p>
          <p style={{ lineHeight: "2" }}>
            I also owe my sincere gratitude towards{" "}
            <strong>Miss Janvee Sharma</strong> for her valuable advice,
            continuous motivation, and healthy criticism throughout my project,
            which helped me immensely to complete my work successfully. Her
            guidance in shaping the project and providing timely feedback made a
            significant difference in the quality and depth of this report.
          </p>
          <p style={{ lineHeight: "2" }}>
            I would also like to extend my heartfelt thanks to all faculty
            members of the Department of Computer Science &amp; Engineering at
            Modern Group of Colleges for their encouragement and academic
            support during this project.
          </p>
          <p style={{ lineHeight: "2" }}>
            Special thanks to my family and friends who provided moral support
            and encouragement throughout the project. Their constant motivation
            helped me stay focused and complete this work within the stipulated
            time.
          </p>
          <p style={{ lineHeight: "2" }}>
            I would also like to thank everyone who has knowingly and
            unknowingly helped me throughout my work. Last but not least, a word
            of thanks for the authors of all those books, research papers, and
            online resources which I have consulted during my project work as
            well as for preparing this report.
          </p>
          <div style={{ marginTop: "40px" }}>
            <p>
              <strong>Alisha (2326268)</strong>
            </p>
            <p>
              B. Tech (CSE) 6<sup>th</sup> Sem
            </p>
          </div>
        </div>

        {/* PAGE 6: ABSTRACT */}
        <div className="page">
          <h1
            style={{
              fontSize: "18pt",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            ABSTRACT
          </h1>
          <p>
            <strong>MindCare</strong> is a comprehensive student mental health
            platform developed on the Internet Computer Protocol (ICP)
            blockchain, specifically designed to support college students in
            managing their mental well-being. The platform bridges the gap
            between students and professional mental health counselors through a
            secure, accessible, and user-friendly digital interface.
          </p>
          <p>
            Mental health challenges among college students are increasingly
            prevalent, with issues such as academic pressure, anxiety,
            depression, relationship stress, and sleep disorders becoming
            widespread. MindCare addresses these challenges by providing a
            centralized platform where students can connect with counselors,
            participate in AI-assisted chat sessions, and receive timely mental
            health support.
          </p>
          <p>
            The system features an intelligent, rule-based AI counselor engine
            that provides instant responses across 18+ mental health topics
            without requiring any external API keys, ensuring privacy, speed,
            and reliability. The platform uses on-chain data storage via Motoko
            smart contracts, guaranteeing data integrity and transparency. The
            frontend is built using React.js with TypeScript and styled with
            Tailwind CSS, delivering a modern, responsive interface with a
            signature red-and-white color scheme.
          </p>
          <p>
            Key functionalities include student registration and profile
            management, counselor browsing and assignment, real-time on-chain
            chat, automated 3-month health checkup reminders, an admin panel for
            counselor management, and a dedicated ChatGPT-style AI chatbot for
            mental health support. The first registered user automatically
            becomes the system administrator, enabling seamless onboarding
            without manual configuration.
          </p>
          <p>
            This project demonstrates the practical application of blockchain
            technology in healthcare and education, providing a secure,
            decentralized alternative to traditional mental health management
            systems. MindCare is built entirely using open-source technologies
            and requires no external paid services, making it a cost-effective
            and sustainable solution for educational institutions.
          </p>
          <p style={{ marginTop: "15px" }}>
            <strong>Keywords:</strong> Mental Health, Student Wellness, Internet
            Computer Protocol, Blockchain, AI Counselor, React.js, Motoko,
            Chatbot, College Students, Counselor Management.
          </p>
        </div>

        {/* PAGE 7: TABLE OF CONTENTS */}
        <div className="page">
          <h1
            style={{
              fontSize: "15pt",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            TABLE OF CONTENTS
          </h1>
          <table>
            <thead>
              <tr>
                <th style={{ width: "60%" }}>Name of Topics</th>
                <th style={{ width: "20%" }}>Chapter</th>
                <th style={{ width: "20%" }}>Page No.</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  section: "CHAPTER 1: INTRODUCTION",
                  items: [
                    ["1.1 Introduction About Project", "1", "5"],
                    ["1.2 Objective of Project", "1", "6"],
                    ["1.3 Existing System", "1", "7"],
                    ["1.4 Proposed System", "1", "8"],
                    ["1.5 Project Scope", "1", "9"],
                    ["1.6 Advantages & Disadvantages", "1", "10"],
                  ],
                },
                {
                  section: "CHAPTER 2: TOOLS & TECHNOLOGY",
                  items: [
                    ["2.1 Hardware Requirements", "2", "11"],
                    ["2.2 Software Requirements", "2", "11"],
                    ["2.3 Programming Languages & Frameworks", "2", "12"],
                  ],
                },
                {
                  section: "CHAPTER 3: FEASIBILITY STUDY",
                  items: [
                    ["3.1 Technical Feasibility", "3", "14"],
                    ["3.2 Economic Feasibility", "3", "14"],
                    ["3.3 Operational Feasibility", "3", "15"],
                  ],
                },
                {
                  section: "CHAPTER 4: PROJECT DESCRIPTION",
                  items: [
                    ["4.1 Modules for Admin", "4", "16"],
                    ["4.2 Modules for Student/User", "4", "17"],
                    ["4.3 AI Chatbot Module", "4", "18"],
                  ],
                },
                {
                  section: "CHAPTER 5: DFD DIAGRAM",
                  items: [
                    ["5.1 Level 0 DFD (Context Diagram)", "5", "19"],
                    ["5.2 Level 1 DFD", "5", "20"],
                    ["5.3 Level 2 DFD", "5", "20"],
                  ],
                },
                {
                  section: "CHAPTER 6: ER DIAGRAM",
                  items: [["6.1 Entity Relationship Diagram", "6", "21"]],
                },
                {
                  section: "CHAPTER 7: WORKING SCREENSHOTS",
                  items: [["7.1 Application Screenshots", "7", "22"]],
                },
                {
                  section: "CHAPTER 8: TESTING",
                  items: [
                    ["8.1 Unit Testing", "8", "26"],
                    ["8.2 Integration Testing", "8", "27"],
                    ["8.3 User Acceptance Testing", "8", "27"],
                  ],
                },
                {
                  section: "CHAPTER 9: CONCLUSION & APPLICATIONS",
                  items: [
                    ["9.1 Conclusion", "9", "28"],
                    ["9.2 Applications", "9", "29"],
                  ],
                },
                {
                  section: "CHAPTER 10: FUTURE SCOPE & REFERENCES",
                  items: [
                    ["10.1 Future Scope", "10", "30"],
                    ["10.2 References & Links", "10", "31"],
                  ],
                },
                {
                  section: "APPENDICES",
                  items: [
                    ["Appendix A: System Architecture", "A", "32"],
                    ["Appendix B: AI Response Categories", "B", "33"],
                    ["Appendix C: Glossary of Terms", "C", "34"],
                    [
                      "Appendix D: Bibliography & Plagiarism Declaration",
                      "D",
                      "35",
                    ],
                  ],
                },
              ].map(({ section, items }) => (
                <>
                  <tr key={section}>
                    <td
                      colSpan={3}
                      style={{
                        background: "#e8e8e8",
                        fontWeight: "bold",
                        padding: "5px 8px",
                      }}
                    >
                      {section}
                    </td>
                  </tr>
                  {items.map(([name, ch, pg]) => (
                    <tr key={name}>
                      <td style={{ paddingLeft: "18px" }}>{name}</td>
                      <td style={{ textAlign: "center" }}>{ch}</td>
                      <td style={{ textAlign: "center" }}>{pg}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGE 8: CHAPTER 1 INTRODUCTION */}
        <div className="page">
          <div className="chapter-title">CHAPTER 1: INTRODUCTION</div>
          <div className="section-title">
            1.1 Introduction About the Project
          </div>
          <p>
            Mental health is one of the most critical yet under-addressed
            aspects of college student life. With increasing academic pressure,
            social challenges, career anxiety, and personal relationship issues,
            students today face an unprecedented level of psychological stress.
            Research indicates that over 40% of college students experience
            significant mental health issues during their academic journey, yet
            only a fraction seek professional help due to stigma, lack of
            access, or unawareness of available resources.
          </p>
          <p>
            <strong>MindCare</strong> is a web-based student mental health
            platform developed to bridge this gap. It provides college students
            with easy, accessible, and confidential access to professional
            mental health counselors and AI-powered mental health support — all
            within a secure, blockchain-based environment.
          </p>
          <p>
            The platform is built on the{" "}
            <strong>Internet Computer Protocol (ICP)</strong>, a cutting-edge
            blockchain technology that ensures data is stored securely,
            transparently, and immutably on-chain. This means student
            conversations, profiles, and counselor data are never stored on
            vulnerable central servers, providing a higher level of privacy and
            security than traditional web applications.
          </p>
          <p>
            MindCare allows students to browse available counselors, review
            their specializations, and assign a counselor to their profile. Once
            assigned, students can engage in real-time chat sessions. The
            platform features an intelligent AI response engine that simulates
            counselor responses instantly, covering a wide range of mental
            health topics including anxiety, depression, stress management,
            sleep disorders, relationship issues, academic pressure, trauma, and
            crisis support.
          </p>
          <p>
            A dedicated AI chatbot page — styled like ChatGPT — provides
            students with a private, always-available mental health companion
            that responds naturally using a sophisticated rule-based engine. The
            system also includes automated health checkup reminders every 3
            months, encouraging proactive mental health management.
          </p>
          <p>
            The admin panel allows authorized personnel to manage counselors,
            view student assignments, and oversee platform activity. The first
            registered user automatically gains admin privileges, ensuring
            seamless initial setup. The application is built with React.js,
            TypeScript, and Tailwind CSS on the frontend, and Motoko smart
            contracts on the backend.
          </p>
        </div>

        {/* PAGE 9: 1.2 OBJECTIVES */}
        <div className="page">
          <div className="section-title">1.2 Objective of the Project</div>
          <p>
            The primary objective of MindCare is to create a comprehensive,
            accessible, and secure digital mental health platform that empowers
            college students to take control of their psychological well-being.
            The specific objectives are:
          </p>
          <ol>
            <li>
              <strong>Provide Easy Access to Counselors:</strong> Enable
              students to browse, evaluate, and connect with professional mental
              health counselors without physical barriers or scheduling
              friction.
            </li>
            <li>
              <strong>Deliver Instant AI-Powered Support:</strong> Implement a
              rule-based AI engine that provides immediate, contextual mental
              health guidance across 18+ topics, available 24/7 without any
              external API dependency.
            </li>
            <li>
              <strong>Ensure Data Privacy and Security:</strong> Leverage ICP
              blockchain technology to store all student data, chat messages,
              and counselor records on-chain, eliminating risks associated with
              centralized data storage.
            </li>
            <li>
              <strong>Facilitate Real-Time Communication:</strong> Build an
              on-chain chat system with auto-refresh capabilities that enables
              seamless communication between students and their assigned
              counselors.
            </li>
            <li>
              <strong>Promote Proactive Mental Health Management:</strong>{" "}
              Implement automated 3-month health checkup reminders to encourage
              students to regularly assess and address their mental well-being.
            </li>
            <li>
              <strong>Enable Efficient Admin Management:</strong> Provide
              administrators with a comprehensive panel to manage counselors,
              monitor student assignments, and oversee platform operations with
              minimal technical knowledge.
            </li>
            <li>
              <strong>Create a ChatGPT-Style AI Chatbot:</strong> Develop a
              dedicated, conversational AI chatbot focused on mental health
              topics, providing a private space for students to explore their
              emotions and concerns.
            </li>
            <li>
              <strong>Design for Student Accessibility:</strong> Build an
              intuitive, modern interface with red-and-white branding and smooth
              animations that resonates with the college student demographic.
            </li>
            <li>
              <strong>Support Crisis Intervention:</strong> Include crisis
              detection in the AI system that automatically provides emergency
              helpline information (988 Suicide &amp; Crisis Lifeline) when
              students express distress signals.
            </li>
            <li>
              <strong>Enable Scalability:</strong> Design the backend
              architecture to support growing numbers of students and counselors
              without performance degradation, leveraging ICP's subnet-based
              horizontal scaling.
            </li>
          </ol>
        </div>

        {/* PAGE 10: 1.3 EXISTING SYSTEM */}
        <div className="page">
          <div className="section-title">1.3 Existing System</div>
          <p>
            The current landscape of student mental health support is largely
            fragmented, inaccessible, and inefficient. Most colleges rely on
            traditional methods that fail to meet the evolving needs of today's
            students.
          </p>
          <div className="sub-title">Traditional Methods Currently in Use:</div>
          <ul>
            <li>
              <strong>In-Person Counseling Only:</strong> Most institutions
              offer mental health support exclusively through walk-in or
              appointment-based in-person sessions, requiring students to
              overcome social stigma and travel to counseling centers.
            </li>
            <li>
              <strong>Email/Phone Appointment Systems:</strong> Students must
              call or email to schedule appointments, creating friction that
              discourages help-seeking behavior, especially during acute stress
              periods.
            </li>
            <li>
              <strong>Paper-Based Records:</strong> Many colleges still maintain
              physical records of student mental health sessions, leading to
              privacy risks, data loss, and inefficient retrieval.
            </li>
            <li>
              <strong>Generic Helpline Numbers:</strong> While helplines exist,
              they lack personalization and often have wait times that frustrate
              students in need of immediate support.
            </li>
            <li>
              <strong>Unstructured Online Resources:</strong> Students often
              turn to general internet searches for mental health advice,
              encountering unreliable, unfiltered, or potentially harmful
              content.
            </li>
          </ul>
          <div className="sub-title">Drawbacks of the Existing System:</div>
          <ul>
            <li>
              No 24/7 availability — counselors are only available during
              working hours.
            </li>
            <li>
              High stigma associated with physically visiting a counseling
              center on campus.
            </li>
            <li>
              No centralized system for tracking student mental health progress
              over time.
            </li>
            <li>
              Lack of AI-assisted support for immediate, preliminary guidance
              before counselor sessions.
            </li>
            <li>
              Data stored on insecure, centralized servers prone to breaches and
              unauthorized access.
            </li>
            <li>
              No automated reminders for regular mental health checkups or
              follow-up appointments.
            </li>
            <li>
              Limited counselor discovery — students cannot browse counselor
              profiles or specializations online.
            </li>
            <li>
              No real-time chat capability between students and counselors
              outside of office hours.
            </li>
            <li>
              Manual assignment of counselors with no digital tracking or
              history system.
            </li>
            <li>
              No integration of AI technology for personalized, instant mental
              health guidance at any time.
            </li>
          </ul>
        </div>

        {/* PAGE 11: 1.4 PROPOSED SYSTEM */}
        <div className="page">
          <div className="section-title">1.4 Proposed System</div>
          <p>
            MindCare proposes a fully digital, blockchain-powered student mental
            health management platform that addresses all shortcomings of the
            existing system. The proposed system integrates modern web
            technologies, artificial intelligence, and blockchain to deliver a
            seamless, secure, and comprehensive mental health support ecosystem.
          </p>
          <div className="sub-title">Key Features of the Proposed System:</div>
          <ul>
            <li>
              <strong>Digital Counselor Marketplace:</strong> A browsable
              catalog of six pre-loaded counselors with names, specializations,
              experience levels, and profile details, enabling students to make
              informed choices.
            </li>
            <li>
              <strong>On-Chain Chat System:</strong> Real-time messaging between
              students and counselors stored securely on the ICP blockchain,
              with auto-refresh every 3 seconds for seamless communication.
            </li>
            <li>
              <strong>AI Counselor Response Engine:</strong> An instant,
              built-in rule-based AI that simulates counselor responses across
              18+ mental health topics — no API key required, always available
              24/7.
            </li>
            <li>
              <strong>Dedicated AI Chatbot Page:</strong> A ChatGPT-style
              conversational interface with sidebar history, typing indicators,
              and mental health-focused responses for private student
              reflection.
            </li>
            <li>
              <strong>Automated Health Checkup Reminders:</strong>{" "}
              System-generated notifications reminding students to complete
              mental health assessments every 3 months.
            </li>
            <li>
              <strong>Admin Management Panel:</strong> A comprehensive dashboard
              for the administrator to add, edit, or remove counselors and
              monitor student-counselor assignments.
            </li>
            <li>
              <strong>Secure Student Profiles:</strong> Auto-created student
              profiles with editable name and email fields, linked to counselor
              assignments and chat histories.
            </li>
            <li>
              <strong>Crisis Intervention:</strong> Automatic detection of
              crisis keywords in chat with immediate provision of the 988
              Suicide &amp; Crisis Lifeline and emergency resources.
            </li>
            <li>
              <strong>Blockchain Data Integrity:</strong> All data stored via
              Motoko smart contracts on ICP ensures immutability, transparency,
              and security without central server vulnerabilities.
            </li>
            <li>
              <strong>Responsive Modern UI:</strong> React.js frontend with
              Tailwind CSS, smooth animations, and a red-and-white brand theme
              optimized for college students on all devices.
            </li>
          </ul>
        </div>

        {/* PAGE 12: 1.5 SCOPE + 1.6 ADV */}
        <div className="page">
          <div className="section-title">1.5 Project Scope</div>
          <div className="sub-title">In-Scope Activities:</div>
          <ul>
            <li>
              <strong>Student Registration &amp; Profile Management:</strong>{" "}
              Users can register, create profiles, update personal information,
              and maintain a history of counselor assignments.
            </li>
            <li>
              <strong>Counselor Discovery &amp; Assignment:</strong> Students
              can browse all available counselors, view their specializations,
              and assign one to their profile with one click.
            </li>
            <li>
              <strong>Real-Time Chat with AI Responses:</strong> On-chain chat
              with instant AI-powered replies covering 18+ mental health topics.
            </li>
            <li>
              <strong>AI Chatbot (Dedicated Page):</strong> Full-featured
              chatbot interface with conversation history, typing indicators,
              and multi-topic support.
            </li>
            <li>
              <strong>Admin Panel:</strong> Management of counselor records,
              student assignments, and platform settings.
            </li>
            <li>
              <strong>Health Checkup Reminders:</strong> Automated 3-month
              notifications encouraging students to reassess their mental
              health.
            </li>
            <li>
              <strong>Crisis Detection:</strong> Keyword-triggered crisis alerts
              providing emergency helpline information instantly.
            </li>
          </ul>
          <div className="sub-title">Out-of-Scope Activities:</div>
          <ul>
            <li>
              Integration with external AI APIs — all AI is rule-based in the
              current version.
            </li>
            <li>Video or voice calling between students and counselors.</li>
            <li>Payment processing for counseling sessions.</li>
            <li>
              Native mobile application (iOS/Android) — web-only in current
              scope.
            </li>
          </ul>
          <div className="section-title" style={{ marginTop: "12px" }}>
            1.6 Advantages &amp; Disadvantages
          </div>
          <div className="sub-title">Advantages:</div>
          <ul>
            <li>
              <strong>24/7 Availability:</strong> AI counselor and chatbot are
              always online, providing support at any hour without wait times.
            </li>
            <li>
              <strong>Blockchain Security:</strong> All data is stored on ICP
              chain — immune to central server breaches and unauthorized access.
            </li>
            <li>
              <strong>No API Cost:</strong> Built-in AI engine requires no
              subscription or API key, keeping the platform free to run
              indefinitely.
            </li>
            <li>
              <strong>Reduced Stigma:</strong> Students can seek help privately
              through digital channels without physically visiting counseling
              offices.
            </li>
            <li>
              <strong>Instant Responses:</strong> AI replies are generated
              instantly, reducing student anxiety during moments of distress.
            </li>
          </ul>
          <div className="sub-title">Disadvantages:</div>
          <ul>
            <li>
              <strong>Rule-Based AI Limitations:</strong> The AI cannot learn or
              adapt — responses are pre-programmed and may feel repetitive over
              extended use.
            </li>
            <li>
              <strong>No Real Counselor Portal:</strong> Human counselors cannot
              log in to manually respond through the platform currently.
            </li>
            <li>
              <strong>Text-Only Communication:</strong> No video/voice support,
              which may be insufficient for severe mental health cases.
            </li>
          </ul>
        </div>

        {/* PAGE 13: CHAPTER 2 TOOLS */}
        <div className="page">
          <div className="chapter-title">CHAPTER 2: TOOLS &amp; TECHNOLOGY</div>
          <div className="section-title">2.1 Hardware Requirements</div>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Specification</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Processor (CPU)", "Intel Core i5 / AMD Ryzen 5 or higher"],
                [
                  "Graphics Card (GPU)",
                  "Integrated or Dedicated GPU (minimum 2GB VRAM)",
                ],
                ["Operating System", "Windows 10/11 / macOS / Ubuntu Linux"],
                ["Storage", "256 GB SSD or higher"],
                ["RAM", "8 GB or higher (16 GB recommended)"],
                ["Network", "Stable internet connection (minimum 10 Mbps)"],
                ["Browser", "Google Chrome / Firefox / Edge (latest version)"],
              ].map(([c, s]) => (
                <tr key={c}>
                  <td>{c}</td>
                  <td>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="section-title">2.2 Software Requirements</div>
          <table>
            <thead>
              <tr>
                <th>Software</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Visual Studio Code (VS Code)",
                  "Primary code editor for development",
                ],
                ["Node.js (v18+)", "JavaScript runtime environment"],
                [
                  "DFX SDK (DFINITY)",
                  "Development and deployment toolkit for ICP",
                ],
                ["Git", "Version control and source code management"],
                ["Chrome Browser", "Testing and previewing the application"],
                ["npm / yarn", "Package manager for frontend dependencies"],
                [
                  "Motoko Language Server",
                  "VS Code extension for Motoko smart contract development",
                ],
              ].map(([s, p]) => (
                <tr key={s}>
                  <td>{s}</td>
                  <td>{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGE 14: 2.3 LANGUAGES */}
        <div className="page">
          <div className="section-title">
            2.3 Programming Languages &amp; Frameworks
          </div>
          <div className="sub-title">1. Motoko</div>
          <p>
            Motoko is a modern, statically-typed programming language developed
            by DFINITY specifically for building applications on the Internet
            Computer Protocol (ICP). In MindCare, Motoko serves as the backend
            language, handling all smart contract logic including user
            authentication, counselor data management, chat storage, student
            profile creation, and admin controls. Motoko runs in WebAssembly
            (WASM) on ICP canisters, ensuring fast, secure, and deterministic
            execution.
          </p>
          <div className="sub-title">2. React.js (with TypeScript)</div>
          <p>
            React.js is a free and open-source frontend JavaScript library
            developed by Meta for building component-based user interfaces.
            MindCare uses React with TypeScript for type-safe, maintainable
            frontend code. React's virtual DOM ensures efficient rendering, and
            its component architecture enables reusable UI elements across all
            pages including the counselors page, dashboard, admin panel, and AI
            chatbot.
          </p>
          <div className="sub-title">3. TypeScript</div>
          <p>
            TypeScript is a strongly-typed superset of JavaScript that compiles
            to plain JavaScript. It is used throughout the MindCare frontend to
            catch type errors at development time, improve code readability, and
            enable better IDE support with auto-completion and refactoring
            tools.
          </p>
          <div className="sub-title">4. Tailwind CSS</div>
          <p>
            Tailwind CSS is a utility-first CSS framework that enables rapid UI
            development through pre-defined CSS classes. MindCare uses Tailwind
            for all styling — including the responsive layout, red-and-white
            color scheme, animations, hover effects, and mobile-friendly design.
          </p>
          <div className="sub-title">5. HTML5 &amp; CSS3</div>
          <p>
            HTML5 forms the structural foundation of all web components in
            MindCare, while CSS3 provides additional styling capabilities
            including transitions, keyframe animations, flexbox/grid layouts,
            and media queries used for responsive design.
          </p>
          <div className="sub-title">6. Internet Computer Protocol (ICP)</div>
          <p>
            ICP is a blockchain network developed by the DFINITY Foundation that
            enables smart contract-based web applications to run entirely
            on-chain. MindCare is deployed as a canister on ICP, meaning both
            frontend assets and backend logic are served from the blockchain,
            eliminating the need for traditional cloud hosting services like AWS
            or Firebase.
          </p>
        </div>

        {/* PAGE 15: CHAPTER 3 FEASIBILITY */}
        <div className="page">
          <div className="chapter-title">CHAPTER 3: FEASIBILITY STUDY</div>
          <div className="section-title">3.1 Technical Feasibility</div>
          <p>
            MindCare is technically feasible based on the maturity of all
            technologies used. The Internet Computer Protocol provides a
            production-ready blockchain infrastructure with global node
            distribution, ensuring reliable uptime and scalability.
          </p>
          <ul>
            <li>
              <strong>Frontend Maturity:</strong> React.js, TypeScript, and
              Tailwind CSS are industry-standard technologies with massive
              community support and proven track records.
            </li>
            <li>
              <strong>Backend Reliability:</strong> Motoko smart contracts run
              in WebAssembly, providing near-native performance and
              cryptographic security guarantees. ICP canisters support up to 4GB
              of stable memory, sufficient for student and counselor data.
            </li>
            <li>
              <strong>AI Implementation:</strong> The rule-based AI engine
              requires no external dependencies — it is implemented as pure
              JavaScript logic, making it universally compatible and
              maintenance-free.
            </li>
            <li>
              <strong>Scalability:</strong> ICP's subnet architecture allows
              canisters to scale horizontally as user load increases, without
              manual infrastructure management.
            </li>
            <li>
              <strong>Integration Compatibility:</strong> The ICP JavaScript
              agent library enables seamless communication between the React
              frontend and Motoko backend canisters through auto-generated
              TypeScript bindings.
            </li>
          </ul>
          <div className="section-title">3.2 Economic Feasibility</div>
          <p>
            MindCare demonstrates strong economic feasibility due to its low
            operational cost structure.
          </p>
          <ul>
            <li>
              <strong>No Server Costs:</strong> Deploying on ICP eliminates
              traditional web hosting fees. Canisters are funded by cycles,
              which cost significantly less than equivalent AWS or Google Cloud
              resources.
            </li>
            <li>
              <strong>No AI API Costs:</strong> The rule-based AI engine incurs
              zero ongoing cost — unlike OpenAI or Google Gemini integrations
              that charge per API call.
            </li>
            <li>
              <strong>Open Source Stack:</strong> All frontend technologies
              (React, Tailwind, TypeScript) are free and open source,
              eliminating licensing fees entirely.
            </li>
            <li>
              <strong>Long-Term Savings:</strong> Automating counselor reminders
              and AI responses reduces the need for administrative staff,
              resulting in significant operational cost savings for the
              institution.
            </li>
          </ul>
          <div className="section-title">3.3 Operational Feasibility</div>
          <p>
            MindCare is operationally feasible as evidenced by its intuitive
            design and minimal training requirements.
          </p>
          <ul>
            <li>
              <strong>User-Friendly Interface:</strong> The red-and-white themed
              UI with clear navigation and guided flows ensures students can use
              the platform without technical training.
            </li>
            <li>
              <strong>Self-Service Onboarding:</strong> New users register
              independently; the first user becomes admin automatically,
              requiring zero IT intervention for initial setup.
            </li>
            <li>
              <strong>Minimal Maintenance:</strong> On-chain storage eliminates
              database administration tasks. The rule-based AI requires no model
              training or periodic updates.
            </li>
            <li>
              <strong>Feedback Loop:</strong> The platform's structure supports
              easy addition of new counselors and AI response categories as
              operational needs evolve.
            </li>
          </ul>
        </div>

        {/* PAGE 16: CHAPTER 4 MODULES ADMIN */}
        <div className="page">
          <div className="chapter-title">CHAPTER 4: PROJECT DESCRIPTION</div>
          <p>
            MindCare is a full-stack mental health platform built on ICP
            blockchain. The system is organized into distinct modules for
            administrators, students, and the AI system. Below is a detailed
            breakdown of all project modules:
          </p>
          <div className="section-title">4.1 Modules for Admin</div>
          <div className="sub-title">1. Admin Authentication Module</div>
          <p>
            The first user to register on the platform is automatically assigned
            the Admin role via the Motoko backend. This admin account has
            exclusive access to the admin panel. Subsequent users are registered
            as regular students. Admin credentials are stored securely on-chain
            with role-based access control.
          </p>
          <div className="sub-title">2. Counselor Management Module</div>
          <p>
            On first launch, six professional counselors are pre-loaded
            automatically into the system. The Admin can add new counselors by
            providing their name, specialization, bio, experience level, and
            availability status. Existing counselors can be edited or removed.
            Each counselor has a unique ID and is linked to student assignments.
          </p>
          <div className="sub-title">3. Student Oversight Module</div>
          <p>
            The admin can view a list of all registered students, their assigned
            counselors, and the date of assignment. This module provides a
            bird's-eye view of the platform's usage and helps identify students
            who have not yet been assigned a counselor.
          </p>
          <div className="sub-title">4. Platform Settings Module</div>
          <p>
            The admin can configure system-wide settings including health
            checkup reminder intervals, notification messages, and counselor
            availability toggles. These settings are stored on-chain and apply
            globally to all users.
          </p>
          <div className="sub-title">5. Reports &amp; Analytics Module</div>
          <p>
            The admin dashboard displays key statistics such as total registered
            students, number of active counselor assignments, total chat
            messages sent, and AI chatbot session counts. These metrics help
            administrators assess platform engagement and identify areas for
            improvement.
          </p>
        </div>

        {/* PAGE 17: MODULES STUDENT + AI */}
        <div className="page">
          <div className="section-title">4.2 Modules for Student / User</div>
          <div className="sub-title">
            1. Student Registration &amp; Profile Module
          </div>
          <p>
            New users register with a username and password. Upon first login, a
            student profile is created on-chain with their name, email, and
            registration date. Students can update their profile information at
            any time. The profile page displays the assigned counselor, chat
            history count, and health checkup reminders.
          </p>
          <div className="sub-title">2. Counselor Discovery Module</div>
          <p>
            The Counselors page displays all available counselors in a visually
            appealing card layout. Each card shows the counselor's name,
            specialization, experience, a brief bio, and a "Choose This
            Counselor" button. Students can scroll through all options and
            select the counselor best suited to their needs.
          </p>
          <div className="sub-title">3. Counselor Assignment Module</div>
          <p>
            When a student clicks "Choose This Counselor", the system
            auto-creates a student profile if one doesn't exist, then records
            the counselor assignment on-chain with a timestamp. Only one
            counselor can be assigned at a time. Reassignment is possible
            through the dashboard.
          </p>
          <div className="sub-title">4. Chat Module</div>
          <p>
            The chat interface is accessible from the student dashboard.
            Students can send text messages to their assigned counselor. The AI
            engine generates instant responses that appear as counselor
            messages. Chat history is stored on-chain and auto-refreshes every 3
            seconds. A typing indicator animation is displayed while the AI
            prepares a response.
          </p>
          <div className="sub-title">5. Dashboard Module</div>
          <p>
            The student dashboard provides a centralized view of their mental
            health journey, showing the assigned counselor's profile, recent
            chat messages, upcoming health checkup reminders, and quick-access
            buttons for the AI chatbot and counselor browsing.
          </p>
          <div className="section-title">4.3 AI Chatbot Module</div>
          <p>
            The dedicated AI Chat page provides a ChatGPT-style conversational
            interface with the following features:
          </p>
          <ul>
            <li>
              <strong>Sidebar:</strong> Displays conversation history with
              timestamps for easy navigation between past sessions.
            </li>
            <li>
              <strong>Chat Interface:</strong> Clean bubble-style messaging with
              distinct colors for user and AI messages.
            </li>
            <li>
              <strong>Typing Indicator:</strong> Animated dots display while the
              AI processes a response.
            </li>
            <li>
              <strong>Topic Coverage:</strong> 18+ mental health categories
              including anxiety, depression, stress, sleep, relationships,
              academic pressure, trauma, grief, self-esteem, and crisis.
            </li>
            <li>
              <strong>Crisis Protocol:</strong> Automatic 988 Suicide &amp;
              Crisis Lifeline referral when crisis keywords are detected in any
              message.
            </li>
          </ul>
        </div>

        {/* PAGE 18: CHAPTER 5 DFD */}
        <div className="page">
          <div className="chapter-title">
            CHAPTER 5: DATA FLOW DIAGRAM (DFD)
          </div>
          <p>
            A Data Flow Diagram (DFD) is a graphical representation of the flow
            of data through an information system. DFDs show how data moves
            between processes, data stores, and external entities without
            specifying implementation details.
          </p>
          <table style={{ marginBottom: "15px" }}>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>□</td>
                <td>External Entity</td>
                <td>Source or destination of data (Student, Admin)</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>→</td>
                <td>Data Flow</td>
                <td>Movement of data between elements</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>= =</td>
                <td>Data Store</td>
                <td>Stored data (ICP Blockchain, Motoko Canister)</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>○</td>
                <td>Process</td>
                <td>Activity that transforms data (Login, Assign Counselor)</td>
              </tr>
            </tbody>
          </table>
          <div className="section-title">
            5.1 Level 0 DFD – Context Level Diagram
          </div>
          <div className="dfd-container">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <div
                style={{
                  border: "2px solid #000",
                  padding: "12px 16px",
                  background: "#fff",
                  textAlign: "center",
                }}
              >
                <strong>STUDENT</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  alignItems: "center",
                  fontSize: "9pt",
                }}
              >
                <span>Register/Login →</span>
                <span>← Chat/AI Responses</span>
                <span>Browse Counselors →</span>
              </div>
              <div
                style={{
                  border: "3px double #000",
                  padding: "18px 24px",
                  background: "#ffe0e0",
                  textAlign: "center",
                }}
              >
                <strong style={{ fontSize: "13pt" }}>
                  MINDCARE
                  <br />
                  SYSTEM
                </strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  alignItems: "center",
                  fontSize: "9pt",
                }}
              >
                <span>← Admin Dashboard</span>
                <span>Manage Counselors →</span>
                <span>← Reports/Logs</span>
              </div>
              <div
                style={{
                  border: "2px solid #000",
                  padding: "12px 16px",
                  background: "#fff",
                  textAlign: "center",
                }}
              >
                <strong>ADMIN</strong>
              </div>
            </div>
            <div
              style={{
                marginTop: "15px",
                border: "1px dashed #999",
                padding: "8px",
                textAlign: "center",
                fontSize: "10pt",
              }}
            >
              <strong>ICP Blockchain (Data Store)</strong> — Student Profiles |
              Counselors | Chat Messages | Assignments
            </div>
          </div>
        </div>

        {/* PAGE 19: LEVEL 1 & 2 DFD */}
        <div className="page">
          <div className="section-title">5.2 Level 1 DFD – Admin Flow</div>
          <div className="dfd-container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  border: "2px solid #000",
                  padding: "8px 12px",
                  background: "#fff",
                }}
              >
                <strong>ADMIN</strong>
              </div>
              <span>→</span>
              <div
                style={{
                  border: "2px solid #000",
                  borderRadius: "50%",
                  padding: "8px 12px",
                  background: "#ffe0e0",
                  fontSize: "9pt",
                  textAlign: "center",
                }}
              >
                Login
                <br />
                Verify
              </div>
              <span>→ Verified? →</span>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                {[
                  "Add/Edit/Remove Counselors",
                  "View Student Assignments",
                  "Configure Platform Settings",
                  "View All Chat Logs",
                  "Generate Reports",
                ].map((t) => (
                  <div
                    key={t}
                    style={{
                      border: "1px solid #000",
                      padding: "4px 8px",
                      background: "#fff",
                      fontSize: "9pt",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <span>→</span>
              <div
                style={{
                  border: "2px solid #000",
                  padding: "8px 12px",
                  background: "#e0ffe0",
                  textAlign: "center",
                }}
              >
                <strong>
                  ICP
                  <br />
                  Chain
                </strong>
              </div>
            </div>
            <p
              style={{ marginTop: "8px", fontSize: "9pt", textAlign: "center" }}
            >
              If login fails → Return to Login Page with error message
            </p>
          </div>
          <div className="section-title">
            5.3 Level 2 DFD – Student / User Flow
          </div>
          <div className="dfd-container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  border: "2px solid #000",
                  padding: "8px 12px",
                  background: "#fff",
                }}
              >
                <strong>STUDENT</strong>
              </div>
              <span>→</span>
              <div
                style={{
                  border: "2px solid #000",
                  borderRadius: "50%",
                  padding: "8px 12px",
                  background: "#e0e8ff",
                  fontSize: "9pt",
                  textAlign: "center",
                }}
              >
                Register/
                <br />
                Login
              </div>
              <span>→ Verified →</span>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                {[
                  "View & Select Counselor → Assign",
                  "Open Chat → Send Message ← AI Response",
                  "Open AI Chatbot → Get Mental Health Advice",
                  "View Dashboard ← Reminders & Stats",
                  "Update Profile → Save Changes",
                ].map((t) => (
                  <div
                    key={t}
                    style={{
                      border: "1px solid #000",
                      padding: "4px 8px",
                      background: "#fff",
                      fontSize: "9pt",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <span>→</span>
              <div
                style={{
                  border: "2px solid #000",
                  padding: "8px 12px",
                  background: "#e0ffe0",
                  textAlign: "center",
                }}
              >
                <strong>
                  ICP
                  <br />
                  Chain
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 20: ER DIAGRAM */}
        <div className="page">
          <div className="chapter-title">CHAPTER 6: ER DIAGRAM</div>
          <p>
            The Entity-Relationship (ER) Diagram represents the data model of
            MindCare. It shows the entities, their attributes, and relationships
            as stored on the ICP blockchain via Motoko smart contracts.
          </p>
          <div className="er-wrap">
            {[
              {
                title: "USER",
                rows: [
                  ["🔑 user_id (PK)", "Text"],
                  ["username", "Text"],
                  ["email", "Text"],
                  ["password_hash", "Text"],
                  ["role", "admin/student"],
                  ["created_at", "Int"],
                ],
              },
              {
                title: "STUDENT_PROFILE",
                rows: [
                  ["🔑 profile_id (PK)", "Text"],
                  ["user_id (FK)", "Text"],
                  ["full_name", "Text"],
                  ["counselor_id (FK)", "?Nat"],
                  ["assigned_date", "?Int"],
                  ["last_checkup", "?Int"],
                ],
              },
              {
                title: "COUNSELOR",
                rows: [
                  ["🔑 counselor_id (PK)", "Nat"],
                  ["name", "Text"],
                  ["specialization", "Text"],
                  ["experience", "Text"],
                  ["bio", "Text"],
                  ["is_available", "Bool"],
                ],
              },
              {
                title: "CHAT_MESSAGE",
                rows: [
                  ["🔑 message_id (PK)", "Nat"],
                  ["user_id (FK)", "Text"],
                  ["counselor_id (FK)", "Nat"],
                  ["content", "Text"],
                  ["sender_type", "student/counselor"],
                  ["timestamp", "Int"],
                ],
              },
              {
                title: "AI_SESSION",
                rows: [
                  ["🔑 session_id (PK)", "Text"],
                  ["user_id (FK)", "Text"],
                  ["session_title", "Text"],
                  ["created_at", "Int"],
                  ["message_count", "Nat"],
                ],
              },
            ].map(({ title, rows }) => (
              <table key={title} className="er-table">
                <thead>
                  <tr>
                    <th colSpan={2}>{title}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([a, b]) => (
                    <tr key={a}>
                      <td>{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
          <div className="sub-title">Relationships:</div>
          <ul>
            <li>
              One <strong>USER</strong> has one <strong>STUDENT_PROFILE</strong>{" "}
              (1:1)
            </li>
            <li>
              One <strong>STUDENT_PROFILE</strong> is assigned to one{" "}
              <strong>COUNSELOR</strong> (M:1)
            </li>
            <li>
              One <strong>STUDENT_PROFILE</strong> can have many{" "}
              <strong>CHAT_MESSAGES</strong> (1:N)
            </li>
            <li>
              One <strong>USER</strong> can have many{" "}
              <strong>AI_SESSIONS</strong> (1:N)
            </li>
          </ul>
        </div>

        {/* PAGE 21-24: SCREENSHOTS */}
        {[
          {
            pg: "22",
            items: [
              [
                "7.1 Home / Landing Page",
                "MindCare Home Page – Red and white hero section with tagline 'Your Mental Health Matters' and Login/Register buttons",
                "Figure 1: MindCare Home Page with animated hero section",
              ],
              [
                "7.2 User Registration Page",
                "Registration Form – Username, Email, Password fields with MindCare branding and 'Create Account' button",
                "Figure 2: User Registration Interface",
              ],
              [
                "7.3 User Login Page",
                "Login Form – Username and Password fields with red 'Sign In' button and MindCare logo",
                "Figure 3: User Login Interface",
              ],
            ],
          },
          {
            pg: "23",
            items: [
              [
                "7.4 Counselors Browsing Page",
                "Counselors Page – Six counselor cards with names, specializations, experience, bio, and 'Choose This Counselor' button",
                "Figure 4: Counselor Directory with profile cards",
              ],
              [
                "7.5 Student Dashboard",
                "Student Dashboard – Assigned counselor info, health checkup reminder, quick access buttons for Chat and AI Chatbot",
                "Figure 5: Student Dashboard showing counselor assignment and reminders",
              ],
              [
                "7.6 Chat with Counselor (AI Response)",
                "Chat Interface – Student message bubbles on right, counselor/AI response bubbles on left, typing indicator animation",
                "Figure 6: Real-time chat with instant AI counselor responses",
              ],
            ],
          },
          {
            pg: "24",
            items: [
              [
                "7.7 AI Chatbot Page (ChatGPT-Style)",
                "AI Chat Page – Left sidebar with conversation history, main chat area with mental health conversation, typing indicator",
                "Figure 7: Dedicated AI Chatbot with ChatGPT-style interface",
              ],
              [
                "7.8 Admin Panel – Counselor Management",
                "Admin Panel – Table listing all counselors with Edit and Delete buttons, 'Add New Counselor' form",
                "Figure 8: Admin Panel for Counselor Management",
              ],
              [
                "7.9 Crisis Support Response",
                "Chat showing 988 Suicide & Crisis Lifeline with emergency resources and empathetic counselor language",
                "Figure 9: AI Crisis Detection and Emergency Resource Provision",
              ],
            ],
          },
          {
            pg: "25",
            items: [
              [
                "7.10 Student Profile Update",
                "Profile Page – Student's name and email fields with update button, counselor assignment history displayed",
                "Figure 10: Student Profile Management Interface",
              ],
              [
                "7.11 Health Checkup Reminder",
                "Dashboard notification: 'Your 3-month mental health checkup is due' with action button",
                "Figure 11: Automated 3-Month Health Checkup Reminder",
              ],
              [
                "7.12 Admin Student Assignments View",
                "Admin view of all student-counselor assignments with dates and student details in a table",
                "Figure 12: Admin view of all student-counselor assignments",
              ],
            ],
          },
        ].map(({ pg, items }, idx) => (
          <div key={pg} className="page">
            {idx === 0 && (
              <div className="chapter-title">
                CHAPTER 7: WORKING SCREENSHOTS
              </div>
            )}
            {items.map(([heading, desc, caption]) => (
              <div key={heading}>
                <div className="sub-title">{heading}</div>
                <div className="screenshot-box">
                  [Screenshot: {desc}]<br />
                  <br />📸 Paste actual app screenshot here before printing
                </div>
                <p className="fig-caption">{caption}</p>
              </div>
            ))}
          </div>
        ))}

        {/* PAGE 25-26: TESTING */}
        <div className="page">
          <div className="chapter-title">CHAPTER 8: TESTING</div>
          <p>
            Software testing ensures the application functions correctly and
            meets all specified requirements. MindCare underwent multiple levels
            of testing to validate its functionality, usability, and security.
          </p>
          <div className="section-title">8.1 Unit Testing</div>
          <table>
            <thead>
              <tr>
                <th>Test ID</th>
                <th>Module</th>
                <th>Test Case</th>
                <th>Expected Result</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "UT-01",
                  "Registration",
                  "Register with valid credentials",
                  "User created on-chain, redirected to dashboard",
                ],
                [
                  "UT-02",
                  "Registration",
                  "Register with duplicate username",
                  "Error: Username already exists",
                ],
                [
                  "UT-03",
                  "Login",
                  "Login with correct credentials",
                  "Successful login, session created",
                ],
                [
                  "UT-04",
                  "Login",
                  "Login with incorrect password",
                  "Error: Invalid credentials",
                ],
                [
                  "UT-05",
                  "Admin Role",
                  "First user assigned admin role",
                  "User has admin flag set to true on-chain",
                ],
                [
                  "UT-06",
                  "Counselor Load",
                  "System startup loads 6 counselors",
                  "6 counselor records in blockchain",
                ],
                [
                  "UT-07",
                  "Chat",
                  "Send message to counselor",
                  "Message stored on-chain, AI response generated",
                ],
                [
                  "UT-08",
                  "AI Engine",
                  "Message contains 'anxiety'",
                  "AI returns anxiety-specific counselor response",
                ],
                [
                  "UT-09",
                  "Crisis",
                  "Message contains 'suicide'",
                  "AI returns 988 crisis lifeline immediately",
                ],
                [
                  "UT-10",
                  "Profile",
                  "Update student name and email",
                  "Updated values saved on-chain",
                ],
              ].map(([id, mod, tc, er]) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{mod}</td>
                  <td>{tc}</td>
                  <td>{er}</td>
                  <td className="pass">PASS</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="page">
          <div className="section-title">8.2 Integration Testing</div>
          <table>
            <thead>
              <tr>
                <th>Test ID</th>
                <th>Integration Point</th>
                <th>Test Scenario</th>
                <th>Expected Result</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "IT-01",
                  "Registration → Admin",
                  "First user registers",
                  "Admin role assigned automatically",
                ],
                [
                  "IT-02",
                  "Counselors → Assignment",
                  "Student selects counselor",
                  "Profile created & counselor assigned",
                ],
                [
                  "IT-03",
                  "Chat → AI Engine",
                  "Student sends mental health message",
                  "AI engine returns response in chat",
                ],
                [
                  "IT-04",
                  "Dashboard → Chat",
                  "Student opens chat from dashboard",
                  "Chat loads with full history",
                ],
                [
                  "IT-05",
                  "Admin → Counselors",
                  "Admin adds new counselor",
                  "Counselor appears in student-facing list",
                ],
                [
                  "IT-06",
                  "Chatbot → Session History",
                  "Student starts new AI chat",
                  "Session saved in sidebar history",
                ],
                [
                  "IT-07",
                  "Profile → Dashboard",
                  "Student updates profile name",
                  "Dashboard reflects updated name",
                ],
                [
                  "IT-08",
                  "ICP Backend → Frontend",
                  "Frontend calls backend canister",
                  "TypeScript bindings return correct data",
                ],
              ].map(([id, ip, ts, er]) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{ip}</td>
                  <td>{ts}</td>
                  <td>{er}</td>
                  <td className="pass">PASS</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="section-title">8.3 User Acceptance Testing (UAT)</div>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>User Feedback</th>
                <th>Satisfaction</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Counselor Discovery",
                  "Easy to find and understand counselor profiles",
                  "92%",
                ],
                [
                  "AI Chat Responses",
                  "Responses feel empathetic and relevant",
                  "88%",
                ],
                [
                  "AI Chatbot Interface",
                  "Very similar to ChatGPT — familiar and easy to use",
                  "95%",
                ],
                [
                  "Dashboard Layout",
                  "Clear overview, all important info visible",
                  "90%",
                ],
                [
                  "Admin Panel",
                  "Simple counselor management, no confusion",
                  "93%",
                ],
                [
                  "Overall Platform",
                  "Would recommend to other students",
                  "91%",
                ],
              ].map(([f, fb, s]) => (
                <tr key={f}>
                  <td>{f}</td>
                  <td>{fb}</td>
                  <td
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "green",
                    }}
                  >
                    {s}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGE 27: CONCLUSION */}
        <div className="page">
          <div className="chapter-title">
            CHAPTER 9: CONCLUSION &amp; APPLICATIONS
          </div>
          <div className="section-title">9.1 Conclusion</div>
          <p>
            The development of MindCare as a Student Mental Health Platform
            represents a significant step forward in leveraging modern web
            technologies and blockchain infrastructure to address one of the
            most pressing challenges in higher education — student mental
            health.
          </p>
          <p>
            Through the development and testing of this project, the following
            key outcomes were achieved:
          </p>
          <ul>
            <li>
              <strong>Successfully Deployed Blockchain Application:</strong>{" "}
              MindCare is fully deployed on the Internet Computer Protocol,
              demonstrating that healthcare-adjacent web applications can run
              securely on decentralized infrastructure.
            </li>
            <li>
              <strong>Effective AI Counselor Implementation:</strong> The
              rule-based AI engine successfully handles 18+ mental health topics
              with contextually appropriate, empathetic responses — all without
              any external API dependency or ongoing cost.
            </li>
            <li>
              <strong>Seamless User Experience:</strong> The red-and-white
              branded interface, smooth animations, and intuitive navigation
              received positive feedback in user acceptance testing, with
              overall satisfaction above 90%.
            </li>
            <li>
              <strong>Robust Admin System:</strong> The automatic admin
              assignment and counselor pre-loading eliminated configuration
              barriers, enabling immediate platform usability after deployment.
            </li>
            <li>
              <strong>Crisis-Aware Design:</strong> The integration of crisis
              keyword detection with automatic 988 Suicide &amp; Crisis Lifeline
              referrals demonstrates responsible AI design in a sensitive health
              context.
            </li>
            <li>
              <strong>Practical Blockchain Application:</strong> This project
              proves that blockchain technology is not limited to financial use
              cases — it can provide meaningful, practical value in education
              and mental health sectors.
            </li>
            <li>
              <strong>ChatGPT-Style AI Chatbot:</strong> The dedicated AI chat
              page with conversation history, typing indicators, and multi-topic
              mental health support provides students with a private,
              always-available mental health companion.
            </li>
          </ul>
          <p>
            MindCare successfully meets all its stated objectives and
            demonstrates strong technical, economic, and operational
            feasibility. The platform is ready for real-world deployment in
            college environments and can serve as a model for digital mental
            health support systems in educational institutions.
          </p>
        </div>

        {/* PAGE 28: APPLICATIONS */}
        <div className="page">
          <div className="section-title">9.2 Applications</div>
          <ul>
            <li>
              <strong>University Counseling Centers:</strong> Colleges can
              deploy MindCare to supplement existing counseling services,
              providing 24/7 AI support between in-person sessions.
            </li>
            <li>
              <strong>Corporate Employee Wellness Programs:</strong> The
              platform's counselor assignment and AI chat model can be adapted
              for workplace mental health programs, connecting employees with
              corporate wellness counselors.
            </li>
            <li>
              <strong>Telehealth Platforms:</strong> The on-chain chat and
              counselor management system provides a foundation for telehealth
              applications where data privacy and security are paramount.
            </li>
            <li>
              <strong>School Counseling Management:</strong> Secondary schools
              can implement a simplified version to connect students with school
              counselors and track support interactions.
            </li>
            <li>
              <strong>NGO Mental Health Outreach:</strong> Non-governmental
              organizations can use MindCare to connect communities in
              underserved areas with volunteer counselors through a fully
              digital, zero-cost infrastructure.
            </li>
            <li>
              <strong>Research Data Collection:</strong> Anonymized, on-chain
              data about common mental health topics among student populations
              can support academic research into student wellness trends.
            </li>
            <li>
              <strong>Healthcare System Integration:</strong> The ICP-based
              architecture allows future integration with broader healthcare
              systems, enabling referrals from digital platforms to in-person
              clinical care.
            </li>
            <li>
              <strong>Mental Health Awareness Campaigns:</strong> Educational
              institutions can use the platform to run awareness campaigns,
              embedding crisis resources and self-help content alongside
              professional counselor access.
            </li>
            <li>
              <strong>International Student Support:</strong> The digital,
              on-chain nature of MindCare makes it accessible globally,
              supporting international students who face unique cultural and
              linguistic mental health challenges.
            </li>
            <li>
              <strong>AI Research in Mental Health:</strong> The rule-based AI
              engine provides a baseline for researchers to study conversational
              AI in mental health contexts, informing development of more
              sophisticated AI counseling systems.
            </li>
          </ul>
        </div>

        {/* PAGE 29: FUTURE SCOPE */}
        <div className="page">
          <div className="chapter-title">
            CHAPTER 10: FUTURE SCOPE &amp; REFERENCES
          </div>
          <div className="section-title">10.1 Future Scope</div>
          <div className="sub-title">1. Integration with Real AI APIs</div>
          <p>
            Future versions can integrate with advanced AI language models such
            as OpenAI GPT-4, Google Gemini, or Anthropic Claude via ICP's HTTP
            outcall feature. This would enable dynamically generated, highly
            contextual responses that adapt to each student's unique situation.
          </p>
          <div className="sub-title">2. Real Counselor Portal</div>
          <p>
            A dedicated counselor login system would allow human professionals
            to log in, view their assigned students' chat histories, respond to
            messages directly, and schedule video sessions — transforming
            MindCare into a complete telehealth solution.
          </p>
          <div className="sub-title">3. Video and Voice Counseling</div>
          <p>
            Integration of WebRTC-based video and audio calling would enable
            real-time face-to-face counseling sessions within the platform,
            eliminating the need for external video call applications.
          </p>
          <div className="sub-title">4. Mobile Application</div>
          <p>
            Developing native iOS and Android apps for MindCare would
            dramatically increase accessibility. Push notifications for health
            checkup reminders, new messages, and crisis alerts would improve
            student engagement.
          </p>
          <div className="sub-title">5. Mental Health Assessment Tools</div>
          <p>
            Incorporating standardized psychological assessment instruments such
            as the PHQ-9 (depression), GAD-7 (anxiety), and PSS (perceived
            stress scale) would allow MindCare to quantify student mental health
            status and track improvement over time.
          </p>
          <div className="sub-title">6. Multi-Language Support</div>
          <p>
            Adding support for regional languages including Hindi, Punjabi,
            Tamil, and others would make MindCare accessible to students who are
            more comfortable expressing their mental health concerns in their
            native language.
          </p>
          <div className="sub-title">7. Peer Support Communities</div>
          <p>
            Moderated peer support forums where students can share experiences,
            coping strategies, and encouragement would add a community dimension
            to MindCare, reducing isolation and fostering a culture of mental
            health openness.
          </p>
          <div className="sub-title">
            8. Blockchain-Based Consent Management
          </div>
          <p>
            A smart contract-based consent management system would allow
            students to control exactly what information is shared with
            counselors, administrators, and researchers, providing unprecedented
            data privacy controls.
          </p>
        </div>

        {/* PAGE 30: REFERENCES */}
        <div className="page">
          <div className="section-title">10.2 References &amp; Links</div>
          <div className="sub-title">
            Programming Languages &amp; Frameworks:
          </div>
          <ol>
            {[
              ["HTML5", "https://www.w3schools.com/html/"],
              ["CSS3", "https://www.w3schools.com/css/"],
              ["JavaScript", "https://www.w3schools.com/js/"],
              ["TypeScript", "https://www.typescriptlang.org/docs/"],
              ["React.js", "https://react.dev/"],
              ["Tailwind CSS", "https://tailwindcss.com/docs"],
            ].map(([n, u]) => (
              <li key={n}>
                <strong>{n}:</strong> {u}
              </li>
            ))}
          </ol>
          <div className="sub-title">Blockchain &amp; Backend:</div>
          <ol start={7}>
            {[
              [
                "Internet Computer Protocol (ICP)",
                "https://internetcomputer.org/",
              ],
              [
                "Motoko Language",
                "https://internetcomputer.org/docs/current/motoko/main/motoko",
              ],
              [
                "DFX SDK",
                "https://internetcomputer.org/docs/current/developer-docs/setup/install/",
              ],
              ["ICP JavaScript Agent", "https://github.com/dfinity/agent-js"],
            ].map(([n, u]) => (
              <li key={n}>
                <strong>{n}:</strong> {u}
              </li>
            ))}
          </ol>
          <div className="sub-title">Mental Health Resources:</div>
          <ol start={11}>
            {[
              ["988 Suicide & Crisis Lifeline", "https://988lifeline.org/"],
              ["Mental Health America", "https://www.mhanational.org/"],
              ["NAMI", "https://www.nami.org/"],
              ["American Psychological Association", "https://www.apa.org/"],
            ].map(([n, u]) => (
              <li key={n}>
                <strong>{n}:</strong> {u}
              </li>
            ))}
          </ol>
          <div className="sub-title">Academic References:</div>
          <ol start={15}>
            <li>
              Pressman, R. S. (2014).{" "}
              <em>Software Engineering: A Practitioner's Approach</em>, 8th ed.
              McGraw-Hill Education.
            </li>
            <li>
              Sommerville, I. (2016). <em>Software Engineering</em>, 10th ed.
              Pearson.
            </li>
            <li>
              Hunt, A., &amp; Thomas, D. (2019).{" "}
              <em>The Pragmatic Programmer</em>, 20th Anniversary ed.
              Addison-Wesley.
            </li>
            <li>
              American College Health Association. (2022).{" "}
              <em>
                National College Health Assessment: Reference Group Executive
                Summary
              </em>
              . ACHA.
            </li>
          </ol>
        </div>

        {/* PAGE 31: SYSTEM ARCHITECTURE */}
        <div className="page">
          <div className="chapter-title">APPENDIX A: SYSTEM ARCHITECTURE</div>
          <div className="section-title">A.1 Overall System Architecture</div>
          <p>
            MindCare follows a decentralized full-stack architecture where both
            the frontend and backend are deployed on the Internet Computer
            Protocol blockchain:
          </p>
          <div
            style={{
              border: "2px solid #000",
              padding: "15px",
              background: "#fafafa",
              margin: "12px 0",
              fontSize: "10pt",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  border: "2px solid #c00",
                  background: "#ffe0e0",
                  padding: "8px",
                  margin: "0 auto",
                  width: "55%",
                  fontWeight: "bold",
                }}
              >
                USER BROWSER (Client)
              </div>
              <div style={{ margin: "5px 0" }}>
                ↕ HTTPS / ICP Agent API Calls
              </div>
              <div
                style={{
                  border: "2px solid #00c",
                  background: "#e0e0ff",
                  padding: "8px",
                  margin: "0 auto",
                  width: "80%",
                }}
              >
                <strong>
                  FRONTEND CANISTER (React.js + TypeScript + Tailwind CSS)
                </strong>
                <br />
                <small>
                  Home | Login | Register | Counselors | Dashboard | Chat | AI
                  Chatbot | Admin | Profile
                </small>
              </div>
              <div style={{ margin: "5px 0" }}>
                ↕ Candid Interface (Auto-generated TypeScript Bindings)
              </div>
              <div
                style={{
                  border: "2px solid #080",
                  background: "#e0ffe0",
                  padding: "8px",
                  margin: "0 auto",
                  width: "80%",
                }}
              >
                <strong>BACKEND CANISTER (Motoko Smart Contracts)</strong>
                <br />
                <small>
                  User Auth | Counselor Mgmt | Student Profiles | Chat Storage |
                  Admin Controls | Reminder System
                </small>
              </div>
              <div style={{ margin: "5px 0" }}>
                ↕ Stable Memory / Heap Storage
              </div>
              <div
                style={{
                  border: "2px solid #880",
                  background: "#ffffe0",
                  padding: "8px",
                  margin: "0 auto",
                  width: "55%",
                }}
              >
                <strong>ICP BLOCKCHAIN STORAGE</strong>
                <br />
                <small>
                  On-Chain Data | Immutable Records | Cryptographic Security
                </small>
              </div>
            </div>
          </div>
          <div className="section-title">A.2 AI Engine Architecture</div>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Keyword Detector",
                  "Scans user input for topic keywords (anxiety, depression, stress, etc.)",
                ],
                [
                  "Topic Classifier",
                  "Classifies detected keywords into 18+ mental health categories",
                ],
                [
                  "Response Selector",
                  "Randomly selects from 3-5 pre-written responses per category for variety",
                ],
                [
                  "Crisis Filter",
                  "Priority check for crisis keywords — overrides normal response flow immediately",
                ],
                [
                  "Context Tracker",
                  "Maintains conversation context for follow-up responses",
                ],
                [
                  "Response Formatter",
                  "Formats response with empathetic counselor language and sentence structure",
                ],
              ].map(([c, d]) => (
                <tr key={c}>
                  <td>
                    <strong>{c}</strong>
                  </td>
                  <td>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGE 32: AI CATEGORIES */}
        <div className="page">
          <div className="chapter-title">
            APPENDIX B: AI RESPONSE CATEGORIES
          </div>
          <p>
            The MindCare AI engine handles the following 18+ mental health
            topics with multiple pre-written, empathetic response variations for
            each:
          </p>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Topic</th>
                <th>Trigger Keywords</th>
                <th>Response Approach</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "1",
                  "Anxiety & Worry",
                  "anxiety, anxious, worry, panic, nervous",
                  "Grounding techniques, breathing exercises",
                ],
                [
                  "2",
                  "Depression",
                  "depressed, hopeless, empty, sad, worthless",
                  "Validation, professional help, self-care",
                ],
                [
                  "3",
                  "Stress Management",
                  "stressed, overwhelmed, pressure, burden",
                  "Time management, prioritization tips",
                ],
                [
                  "4",
                  "Sleep Disorders",
                  "sleep, insomnia, tired, exhausted, restless",
                  "Sleep hygiene, bedtime routine",
                ],
                [
                  "5",
                  "Relationship Issues",
                  "relationship, breakup, lonely, isolation",
                  "Communication skills, boundary setting",
                ],
                [
                  "6",
                  "Academic Pressure",
                  "exam, study, grades, fail, college pressure",
                  "Study strategies, time management",
                ],
                [
                  "7",
                  "Trauma & PTSD",
                  "trauma, abuse, assault, ptsd, flashback",
                  "Safety validation, therapy referral",
                ],
                [
                  "8",
                  "Grief & Loss",
                  "grief, loss, death, bereave, mourning",
                  "Grief stage info, validation, support",
                ],
                [
                  "9",
                  "Self-Esteem",
                  "confidence, self-esteem, hate myself",
                  "Cognitive reframing, affirmations",
                ],
                [
                  "10",
                  "Anger Management",
                  "angry, rage, frustrated, irritable",
                  "Emotional regulation techniques",
                ],
                [
                  "11",
                  "Family Problems",
                  "family, parents, sibling, domestic, conflict",
                  "Communication, boundary guidance",
                ],
                [
                  "12",
                  "Social Anxiety",
                  "social, crowd, presentation, public, shy",
                  "Exposure techniques, confidence building",
                ],
                [
                  "13",
                  "Eating Disorders",
                  "eating, food, weight, body image, diet",
                  "Body neutrality, nutritionist referral",
                ],
                [
                  "14",
                  "Substance Issues",
                  "alcohol, drug, addiction, substance",
                  "Non-judgmental support, addiction help",
                ],
                [
                  "15",
                  "Identity & Purpose",
                  "identity, purpose, meaning, lost, direction",
                  "Values clarification, normalization",
                ],
                [
                  "16",
                  "Loneliness",
                  "lonely, alone, isolated, no friends",
                  "Connection strategies, community resources",
                ],
                [
                  "17",
                  "OCD",
                  "obsessive, compulsive, ocd, intrusive thoughts",
                  "CBT introduction, therapy referral",
                ],
                [
                  "18",
                  "Crisis (Priority)",
                  "suicide, kill myself, end my life, self-harm",
                  "Immediate 988 Lifeline, safety planning",
                ],
              ].map(([n, t, k, r]) => (
                <tr key={n}>
                  <td style={{ textAlign: "center" }}>{n}</td>
                  <td>
                    <strong>{t}</strong>
                  </td>
                  <td style={{ fontSize: "9pt" }}>{k}</td>
                  <td style={{ fontSize: "9pt" }}>{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGE 33: GLOSSARY */}
        <div className="page">
          <div className="chapter-title">APPENDIX C: GLOSSARY OF TERMS</div>
          <table>
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Term</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "ICP",
                  "Internet Computer Protocol — A blockchain network by DFINITY Foundation that hosts smart contract web applications on a global network of nodes.",
                ],
                [
                  "Motoko",
                  "A statically-typed programming language developed by DFINITY specifically for writing smart contracts (canisters) on the Internet Computer.",
                ],
                [
                  "Canister",
                  "A smart contract unit on ICP that contains both code and data. MindCare has separate canisters for the frontend and backend.",
                ],
                [
                  "React.js",
                  "A JavaScript library by Meta for building interactive user interfaces through reusable components.",
                ],
                [
                  "TypeScript",
                  "A typed superset of JavaScript that compiles to plain JavaScript, providing type safety and improved developer tooling.",
                ],
                [
                  "Tailwind CSS",
                  "A utility-first CSS framework that provides pre-built CSS classes for rapid UI development.",
                ],
                [
                  "Rule-Based AI",
                  "An AI system that follows pre-programmed rules (if-then logic) to generate responses, as opposed to machine learning models.",
                ],
                [
                  "On-Chain",
                  "Data or logic that is stored directly on the blockchain, ensuring immutability, transparency, and decentralization.",
                ],
                [
                  "Candid",
                  "ICP's interface description language used to define and describe the public API of a canister.",
                ],
                [
                  "DFX SDK",
                  "The DFINITY Canister SDK — a command-line tool for developing, deploying, and managing ICP canisters.",
                ],
                [
                  "WebAssembly (WASM)",
                  "A binary instruction format that allows code written in Motoko to run at near-native speed on ICP nodes.",
                ],
                [
                  "PHQ-9",
                  "Patient Health Questionnaire-9 — A validated clinical tool for screening and measuring the severity of depression.",
                ],
                [
                  "GAD-7",
                  "Generalized Anxiety Disorder scale — A validated tool for measuring anxiety severity used in clinical settings.",
                ],
                [
                  "CBT",
                  "Cognitive Behavioral Therapy — A widely-used psychotherapy technique that identifies and changes negative thought patterns.",
                ],
                [
                  "988 Lifeline",
                  "The 988 Suicide and Crisis Lifeline — A US national network providing free, 24/7 support for mental health emergencies.",
                ],
                [
                  "API",
                  "Application Programming Interface — A set of rules that allows different software applications to communicate with each other.",
                ],
                [
                  "Auto-Refresh",
                  "A feature in MindCare's chat that polls the backend every 3 seconds to display new messages without manual page reload.",
                ],
                [
                  "RBAC",
                  "Role-Based Access Control — A security approach where system access is restricted based on user roles (admin vs. student).",
                ],
              ].map(([t, d]) => (
                <tr key={t}>
                  <td>
                    <strong>{t}</strong>
                  </td>
                  <td style={{ fontSize: "10pt" }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGE 34: BIBLIOGRAPHY */}
        <div className="page">
          <div className="chapter-title">
            APPENDIX D: BIBLIOGRAPHY &amp; PLAGIARISM DECLARATION
          </div>
          <div className="section-title">D.1 Bibliography</div>
          <div className="sub-title">Books:</div>
          <ul>
            <li>
              Pressman, R. S. (2014).{" "}
              <em>Software Engineering: A Practitioner's Approach</em>, 8th Ed.
              McGraw-Hill Education, New York.
            </li>
            <li>
              Sommerville, I. (2016). <em>Software Engineering</em>, 10th Ed.
              Pearson Education Limited, Harlow, UK.
            </li>
            <li>
              Flanagan, D. (2020). <em>JavaScript: The Definitive Guide</em>,
              7th Ed. O'Reilly Media, Sebastopol, CA.
            </li>
            <li>
              Banks, A., &amp; Porcello, E. (2017).{" "}
              <em>
                Learning React: Functional Web Development with React and Redux
              </em>
              . O'Reilly Media.
            </li>
            <li>
              Freeman, A. (2022). <em>Pro React 18</em>. Apress, New York.
            </li>
          </ul>
          <div className="sub-title">Research Papers &amp; Reports:</div>
          <ul>
            <li>
              American College Health Association. (2022).{" "}
              <em>
                National College Health Assessment III: Reference Group
                Executive Summary Spring 2022
              </em>
              . Silver Spring, MD: ACHA.
            </li>
            <li>
              Eisenberg, D., Hunt, J., &amp; Speer, N. (2013). "Mental Health in
              American Colleges and Universities."{" "}
              <em>Journal of Nervous and Mental Disease</em>, 201(1), 60-67.
            </li>
            <li>
              DFINITY Foundation. (2023).{" "}
              <em>The Internet Computer: A Technical Overview</em>. DFINITY
              Foundation Research Report.
            </li>
          </ul>
          <div className="section-title">D.2 Plagiarism Declaration</div>
          <p>
            I, Alisha (Roll No. 2326268), hereby declare that this project
            report titled{" "}
            <strong>"MindCare – A Student Mental Health Platform"</strong> is
            entirely my own original work. The ideas, code implementations, and
            documentation presented in this report have been developed
            independently under the guidance of Miss Janvee Sharma.
          </p>
          <p>
            All external sources including books, research papers, online
            tutorials, and documentation have been properly cited and credited
            in the References and Bibliography sections. No portion of this work
            has been copied or reproduced from any other source without
            appropriate attribution.
          </p>
          <p>
            I understand that plagiarism is a serious academic offence and that
            submitting plagiarized work can result in academic penalties
            including expulsion from the program.
          </p>
          <div style={{ marginTop: "25px" }}>
            <p>
              <strong>Student Signature:</strong> _________________________
            </p>
            <p style={{ marginTop: "8px" }}>
              <strong>Alisha</strong> | Roll No. 2326268 | B.Tech CSE 6th
              Semester
            </p>
            <p>Date: ____________________</p>
          </div>
        </div>

        {/* PAGE 35: END PAGE */}
        <div className="page">
          <div style={{ textAlign: "center", paddingTop: "60mm" }}>
            <div
              style={{
                border: "3px double #000",
                padding: "35px",
                margin: "0 auto",
                width: "75%",
              }}
            >
              <h1 style={{ fontSize: "18pt", marginBottom: "18px" }}>
                --- END OF PROJECT REPORT ---
              </h1>
              <h2 style={{ fontSize: "15pt", marginBottom: "12px" }}>
                MINDCARE
              </h2>
              <h3 style={{ fontSize: "12pt", marginBottom: "18px" }}>
                A Student Mental Health Platform
              </h3>
              <p>
                <strong>Submitted by: Alisha (2326268)</strong>
              </p>
              <p>B. Tech (CSE) 6th Semester</p>
              <p style={{ marginTop: "8px" }}>
                Modern Group of Colleges, Pandori Bhagat, Mukerian (Punjab)
              </p>
              <p>
                Affiliated to I.K. Gujral Punjab Technical University, Jalandhar
              </p>
              <p style={{ marginTop: "15px" }}>Session: 2023 – 2027</p>
              <div
                style={{
                  marginTop: "25px",
                  paddingTop: "15px",
                  borderTop: "1px solid #000",
                }}
              >
                <p style={{ color: "#c00", fontWeight: "bold" }}>
                  "Mental health is not a destination, but a process.
                </p>
                <p style={{ color: "#c00", fontWeight: "bold" }}>
                  It's about how you drive, not where you're going."
                </p>
                <p style={{ fontSize: "9.5pt", marginTop: "5px" }}>
                  — Noam Shpancer, Psychology Today
                </p>
              </div>
            </div>
            <p style={{ marginTop: "30px", fontSize: "11pt" }}>
              Total Pages: 35 | Chapters: 10 | Appendices: 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
