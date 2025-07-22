import { ResumeData } from '../types/resume';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

interface ResumeProps {
  data: ResumeData;
}

export default function Resume({ data }: ResumeProps) {
  return (
    <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-gray-800 p-4 md:p-8 shadow-lg font-sans mx-auto">
      <header className="mb-6 md:mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.name}</h1>
          <p className="mt-1 text-lg md:text-xl text-blue-600">{data.title}</p>
          <div className="flex flex-wrap gap-2 md:gap-4 mt-4 text-xs md:text-sm text-gray-600">
            <div className="flex items-center">
              <FaEnvelope className="mr-1 md:mr-2" />
              <span className="break-all">{data.email}</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-1 md:mr-2" />
              {data.phone}
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1 md:mr-2" />
              {data.location}
            </div>
            <div className="flex items-center">
              <FaGlobe className="mr-1 md:mr-2" />
              <span className="break-all">{data.website}</span>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="mr-1 md:mr-2" />
              <span className="break-all">{data.linkedin}</span>
            </div>
            <div className="flex items-center">
              <FaGithub className="mr-1 md:mr-2" />
              <span className="break-all">{data.github}</span>
            </div>
          </div>
        </div>
        <div className="ml-4">
          {/* Profile image - square shape */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
            alt="Profile"
            className="w-24 h-24 object-cover border-2 border-blue-500"
            style={{ borderRadius: '0' }}
          />
        </div>
      </header>

      <section className="mb-6 md:mb-8">
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Summary
        </h2>
        <p className="leading-relaxed text-sm md:text-base text-gray-700">{data.summary}</p>
      </section>

      <section className="mb-6 md:mb-8">
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="mb-1 font-semibold text-gray-700">
                {skillGroup.category}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {skillGroup.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6 md:mb-8">
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Experience
        </h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-700">{exp.company} &mdash; {exp.location}</p>
            <p className="text-xs text-gray-500">{exp.date}</p>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
              {exp.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6 md:mb-8">
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Education
        </h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-700">{edu.school} &mdash; {edu.location}</p>
            <p className="text-xs text-gray-500">{edu.date}</p>
          </div>
        ))}
      </section>

      <section className="mb-6 md:mb-8">
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Certifications
        </h2>
        <ul className="list-disc pl-5">
          {data.certifications.map((cert, idx) => (
            <li key={idx} className="text-sm text-gray-700">
              <span className="font-semibold">{cert.name}</span> - {cert.issuer} ({cert.date})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Languages
        </h2>
        <ul className="list-disc pl-5">
          {data.languages.map((lang, idx) => (
            <li key={idx} className="text-sm text-gray-700">
              {lang.language} - {lang.proficiency}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
