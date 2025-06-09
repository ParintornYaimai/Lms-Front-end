"use client";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { FaFilePdf } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

type Document = {
  name: string;
  url: string;
};

type SubjectResources = {
  subjectName: string;
  documents: Document[];
};

const resources: SubjectResources[] = [
  {
    subjectName: "Science",
    documents: [
      {
        name: "Physics Fundamentals.pdf",
        url: "/docs/science/physics-fundamentals.pdf",
      },
      {
        name: "Biology Cell Structure.pdf",
        url: "/docs/science/biology-cell.pdf",
      },
      {
        name: "Chemistry Periodic Table.pdf",
        url: "/docs/science/chemistry-periodic.pdf",
      },
      {
        name: "Astronomy Basics.pdf",
        url: "/docs/science/astronomy-basics.pdf",
      },
      {
        name: "Environmental Science.pdf",
        url: "/docs/science/environmental-science.pdf",
      },
    ],
  },
  {
    subjectName: "History",
    documents: [
      { name: "World War I.pdf", url: "/docs/history/world-war-1.pdf" },
      {
        name: "Ancient Civilizations.pdf",
        url: "/docs/history/ancient-civilizations.pdf",
      },
      {
        name: "Modern History Overview.pdf",
        url: "/docs/history/modern-history.pdf",
      },
      { name: "History of Asia.pdf", url: "/docs/history/history-of-asia.pdf" },
      {
        name: "European Renaissance.pdf",
        url: "/docs/history/european-renaissance.pdf",
      },
      { name: "Cold War Events.pdf", url: "/docs/history/cold-war-events.pdf" },
    ],
  },
  {
    subjectName: "Computer Science",
    documents: [
      { name: "Data Structures.pdf", url: "/docs/cs/data-structures.pdf" },
      { name: "Algorithms.pdf", url: "/docs/cs/algorithms.pdf" },
      { name: "Operating Systems.pdf", url: "/docs/cs/operating-systems.pdf" },
      { name: "Networking Basics.pdf", url: "/docs/cs/networking-basics.pdf" },
      { name: "Database Systems.pdf", url: "/docs/cs/database-systems.pdf" },
      { name: "Machine Learning.pdf", url: "/docs/cs/machine-learning.pdf" },
      { name: "Cybersecurity.pdf", url: "/docs/cs/cybersecurity.pdf" },
    ],
  },
  {
    subjectName: "Literature",
    documents: [
      { name: "Shakespeare Plays.pdf", url: "/docs/lit/shakespeare-plays.pdf" },
      { name: "Poetry Analysis.pdf", url: "/docs/lit/poetry-analysis.pdf" },
      { name: "Modern Novels.pdf", url: "/docs/lit/modern-novels.pdf" },
      {
        name: "Literary Criticism.pdf",
        url: "/docs/lit/literary-criticism.pdf",
      },
      { name: "World Literature.pdf", url: "/docs/lit/world-literature.pdf" },
    ],
  },
  {
    subjectName: "Mathematics",
    documents: [
      { name: "Algebra Basics.pdf", url: "/docs/math/algebra-basics.pdf" },
      {
        name: "Calculus Advanced.pdf",
        url: "/docs/math/calculus-advanced.pdf",
      },
      { name: "Geometry Shapes.pdf", url: "/docs/math/geometry-shapes.pdf" },
      {
        name: "Trigonometry Formulas.pdf",
        url: "/docs/math/trigonometry-formulas.pdf",
      },
      {
        name: "Probability Theory.pdf",
        url: "/docs/math/probability-theory.pdf",
      },
      { name: "Linear Algebra.pdf", url: "/docs/math/linear-algebra.pdf" },
      {
        name: "Statistics Introduction.pdf",
        url: "/docs/math/statistics-intro.pdf",
      },
      {
        name: "Discrete Mathematics.pdf",
        url: "/docs/math/discrete-mathematics.pdf",
      },
    ],
  },
  {
    subjectName: "Mathematics",
    documents: [
      { name: "Algebra Basics.pdf", url: "/docs/math/algebra-basics.pdf" },
      {
        name: "Calculus Advanced.pdf",
        url: "/docs/math/calculus-advanced.pdf",
      },
      { name: "Geometry Shapes.pdf", url: "/docs/math/geometry-shapes.pdf" },
      {
        name: "Trigonometry Formulas.pdf",
        url: "/docs/math/trigonometry-formulas.pdf",
      },
      {
        name: "Probability Theory.pdf",
        url: "/docs/math/probability-theory.pdf",
      },
      { name: "Linear Algebra.pdf", url: "/docs/math/linear-algebra.pdf" },
      {
        name: "Statistics Introduction.pdf",
        url: "/docs/math/statistics-intro.pdf",
      },
      {
        name: "Discrete Mathematics.pdf",
        url: "/docs/math/discrete-mathematics.pdf",
      },
    ],
  },
  {
    subjectName: "Science",
    documents: [
      {
        name: "Physics Fundamentals.pdf",
        url: "/docs/science/physics-fundamentals.pdf",
      },
      {
        name: "Biology Cell Structure.pdf",
        url: "/docs/science/biology-cell.pdf",
      },
      {
        name: "Chemistry Periodic Table.pdf",
        url: "/docs/science/chemistry-periodic.pdf",
      },
      {
        name: "Astronomy Basics.pdf",
        url: "/docs/science/astronomy-basics.pdf",
      },
      {
        name: "Environmental Science.pdf",
        url: "/docs/science/environmental-science.pdf",
      },
    ],
  },
  {
    subjectName: "History",
    documents: [
      { name: "World War I.pdf", url: "/docs/history/world-war-1.pdf" },
      {
        name: "Ancient Civilizations.pdf",
        url: "/docs/history/ancient-civilizations.pdf",
      },
      {
        name: "Modern History Overview.pdf",
        url: "/docs/history/modern-history.pdf",
      },
      { name: "History of Asia.pdf", url: "/docs/history/history-of-asia.pdf" },
      {
        name: "European Renaissance.pdf",
        url: "/docs/history/european-renaissance.pdf",
      },
      { name: "Cold War Events.pdf", url: "/docs/history/cold-war-events.pdf" },
    ],
  },
  {
    subjectName: "History",
    documents: [
      { name: "World War I.pdf", url: "/docs/history/world-war-1.pdf" },
      {
        name: "Ancient Civilizations.pdf",
        url: "/docs/history/ancient-civilizations.pdf",
      },
      {
        name: "Modern History Overview.pdf",
        url: "/docs/history/modern-history.pdf",
      },
      { name: "History of Asia.pdf", url: "/docs/history/history-of-asia.pdf" },
      {
        name: "European Renaissance.pdf",
        url: "/docs/history/european-renaissance.pdf",
      },
      { name: "Cold War Events.pdf", url: "/docs/history/cold-war-events.pdf" },
    ],
  },
  {
    subjectName: "Science",
    documents: [
      {
        name: "Physics Fundamentals.pdf",
        url: "/docs/science/physics-fundamentals.pdf",
      },
      {
        name: "Biology Cell Structure.pdf",
        url: "/docs/science/biology-cell.pdf",
      },
      {
        name: "Chemistry Periodic Table.pdf",
        url: "/docs/science/chemistry-periodic.pdf",
      },
      {
        name: "Astronomy Basics.pdf",
        url: "/docs/science/astronomy-basics.pdf",
      },
      {
        name: "Environmental Science.pdf",
        url: "/docs/science/environmental-science.pdf",
      },
    ],
  },
  {
    subjectName: "History",
    documents: [
      { name: "World War I.pdf", url: "/docs/history/world-war-1.pdf" },
      {
        name: "Ancient Civilizations.pdf",
        url: "/docs/history/ancient-civilizations.pdf",
      },
      {
        name: "Modern History Overview.pdf",
        url: "/docs/history/modern-history.pdf",
      },
      { name: "History of Asia.pdf", url: "/docs/history/history-of-asia.pdf" },
      {
        name: "European Renaissance.pdf",
        url: "/docs/history/european-renaissance.pdf",
      },
      { name: "Cold War Events.pdf", url: "/docs/history/cold-war-events.pdf" },
    ],
  },
  {
    subjectName: "Computer Science",
    documents: [
      { name: "Data Structures.pdf", url: "/docs/cs/data-structures.pdf" },
      { name: "Algorithms.pdf", url: "/docs/cs/algorithms.pdf" },
      { name: "Operating Systems.pdf", url: "/docs/cs/operating-systems.pdf" },
      { name: "Networking Basics.pdf", url: "/docs/cs/networking-basics.pdf" },
      { name: "Database Systems.pdf", url: "/docs/cs/database-systems.pdf" },
      { name: "Machine Learning.pdf", url: "/docs/cs/machine-learning.pdf" },
      { name: "Cybersecurity.pdf", url: "/docs/cs/cybersecurity.pdf" },
    ],
  },
  {
    subjectName: "Computer Science",
    documents: [
      { name: "Data Structures.pdf", url: "/docs/cs/data-structures.pdf" },
      { name: "Algorithms.pdf", url: "/docs/cs/algorithms.pdf" },
      { name: "Operating Systems.pdf", url: "/docs/cs/operating-systems.pdf" },
      { name: "Networking Basics.pdf", url: "/docs/cs/networking-basics.pdf" },
      { name: "Database Systems.pdf", url: "/docs/cs/database-systems.pdf" },
      { name: "Machine Learning.pdf", url: "/docs/cs/machine-learning.pdf" },
      { name: "Cybersecurity.pdf", url: "/docs/cs/cybersecurity.pdf" },
    ],
  },
  {
    subjectName: "Computer Science",
    documents: [
      { name: "Data Structures.pdf", url: "/docs/cs/data-structures.pdf" },
      { name: "Algorithms.pdf", url: "/docs/cs/algorithms.pdf" },
      { name: "Operating Systems.pdf", url: "/docs/cs/operating-systems.pdf" },
      { name: "Networking Basics.pdf", url: "/docs/cs/networking-basics.pdf" },
      { name: "Database Systems.pdf", url: "/docs/cs/database-systems.pdf" },
      { name: "Machine Learning.pdf", url: "/docs/cs/machine-learning.pdf" },
      { name: "Cybersecurity.pdf", url: "/docs/cs/cybersecurity.pdf" },
    ],
  },
];

const breakpointColumnsObj = {
  default: 4,
  1536: 3,
  1024: 2,
  640: 1,
};

const Page = () => {
  // เก็บสถานะเปิด/ปิดหัวข้อ
  const [openSubjects, setOpenSubjects] = useState<{ [key: number]: boolean }>(
    {}
  );

  // toggle เปิด/ปิดหัวข้อ
  const toggleSubject = (idx: number) => {
    setOpenSubjects((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="min-h-screen bg-white px-5 py-6">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl font-bold text-black mb-10">Resources</h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {resources.map((subject, idx) => (
            <div
              key={idx}
              className="mb-6 border border-gray-200  shadow-md bg-white rounded cursor-pointer"
            >
              {/* กดหัวข้อนี้เพื่อเปิด/ปิด */}
              <h2
                className="text-xl  p-5 font-semibold text-black  select-none"
                onClick={() => toggleSubject(idx)}
              >
                {subject.subjectName}
              </h2>

              {/* แสดงเอกสารเฉพาะถ้าเปิด */}
              <AnimatePresence initial={false}>
                {openSubjects[idx] && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-2 overflow-hidden"
                  >
                    {subject.documents.map((doc, docIdx) => (
                      <li
                        key={docIdx}
                        className="flex justify-between items-center px-4 py-2 border border-gray-200 rounded-sm m-5 mt-0"
                      >
                        <div className="flex items-center gap-2 text-black">
                          <FaFilePdf className="text-orange-600" />
                          <span>{doc.name}</span>
                        </div>
                        <a
                          href={doc.url}
                          download
                          className="text-sm text-white bg-orange-600 hover:bg-orange-700 px-4 py-1.5 rounded transition-colors"
                        >
                          Download
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Page;
