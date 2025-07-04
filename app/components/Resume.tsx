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
      <header className="mb-6 md:mb-8">
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
        {data.experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-gray-800">{job.title}</h3>
            <p className="italic text-sm md:text-base text-gray-600">
              {job.company} | {job.location}
            </p>
            <p className="text-xs md:text-sm text-gray-500">{job.date}</p>
            <ul className="mt-2 text-sm md:text-base text-gray-700 list-disc list-inside">
              {job.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6 md:mb-8">
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
            <p className="text-sm md:text-base text-gray-600">
              {edu.school}, {edu.location}
            </p>
            <p className="text-xs md:text-sm text-gray-500">{edu.date}</p>
          </div>
        ))}
      </section>

      <section className="mb-6 md:mb-8">
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.certifications.map((cert, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-700">{cert.name}</h3>
              <p className="text-xs md:text-sm text-gray-600">
                {cert.issuer}, {cert.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="pb-1 mb-3 text-xl md:text-2xl font-semibold text-gray-800 border-b-2 border-blue-500">
          Languages
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {data.languages.map((lang, index) => (
            <div
              key={index}
              className="px-2 md:px-3 py-1 text-xs md:text-sm bg-gray-100 rounded-full"
            >
              <span className="font-semibold">{lang.language}:</span>{' '}
              {lang.proficiency}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
