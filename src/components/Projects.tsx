'use client';

import {
    SiC, SiSpringboot, SiApachemaven, SiHibernate,
    SiMysql, SiMongodb, SiJsonwebtokens, SiPostman
} from "react-icons/si";
import { FaJava, FaNodeJs, FaReact, FaGitAlt, FaServer, FaCogs, FaVial } from "react-icons/fa";

export default function Projects() {
    const skills = [
        {
            category: "Languages",
            items: [
                { name: "Java", icon: <FaJava className="w-5 h-5 text-orange-500" /> },
                { name: "C", icon: <SiC className="w-5 h-5 text-blue-500" /> }
            ]
        },
        {
            category: "Frameworks",
            items: [
                { name: "Spring Boot", icon: <SiSpringboot className="w-5 h-5 text-green-500" /> },
                { name: "Maven", icon: <SiApachemaven className="w-5 h-5 text-red-500" /> },
                { name: "Hibernate", icon: <SiHibernate className="w-5 h-5 text-amber-500" /> },
                { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 text-green-600" /> },
                { name: "React.js", icon: <FaReact className="w-5 h-5 text-cyan-400" /> }
            ]
        },
        {
            category: "Databases & Cloud",
            items: [
                { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-500" /> }
            ]
        },
        {
            category: "Tools & Practices",
            items: [
                { name: "Git", icon: <FaGitAlt className="w-5 h-5 text-red-500" /> },
                { name: "REST APIs", icon: <FaServer className="w-5 h-5 text-neutral-400" /> },
                { name: "JWT", icon: <SiJsonwebtokens className="w-5 h-5 text-pink-500" /> },
                { name: "CI/CD", icon: <FaCogs className="w-5 h-5 text-neutral-300" /> },
                { name: "Unit Testing", icon: <FaVial className="w-5 h-5 text-yellow-500" /> },
                { name: "Postman", icon: <SiPostman className="w-5 h-5 text-orange-500" /> }
            ]
        }
    ];

    const experience = [
        {
            role: "Back-End Developer Intern",
            company: "FABC LLC",
            date: "Jan 2025 – Feb 2025",
            location: "Remote",
            points: [
                "Developed and maintained RESTful APIs using Node.js and Express.js.",
                "Implemented secure JWT-based authentication and role-based access control.",
                "Optimized database queries and schema design, improving API response times.",
                "Collaborated in an Agile environment, participating in code reviews and daily standups."
            ]
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Blockchain Plagiarism Checker",
            category: "Node.js • MongoDB • Weaviate • Solidity",
            description: "Built backend for semantic similarity detection using Weaviate Vector Database. Integrated tamper-proof verification using blockchain hashes.",
            image: "/projects/plagiarism.png"
        },
        {
            id: 2,
            title: "Inventory Management System",
            category: "Java • Spring Boot • React • MySQL • Docker",
            description: "Developed a full-stack CRUD application with Java Spring Boot backend. Optimized backend using database indexing and efficient pagination logic.",
            image: "/projects/inventory.png"
        },
        {
            id: 3,
            title: "Public Infrastructure Management",
            category: "React.js • Solidity • Web3.js • MetaMask",
            description: "Built a transparent tender platform with secure backend and responsive frontend dashboard. Implemented wallet-based transactions.",
            image: "/projects/infrastructure.png"
        },
        {
            id: 4,
            title: "GitHub Open Source Contributor",
            category: "Git • GitHub • Peer Review",
            description: "Contributed to open-source repositories by resolving issues and improving documentation. Familiar with feature branching and upstream workflows.",
            image: "/projects/opensource.png"
        }
    ];

    return (
        <section className="min-h-screen bg-neutral-950 text-white relative pt-12 pb-32 px-8 md:px-24">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-20" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-24 md:space-y-32">

                {/* Tech Stack Section */}
                <div id="toolkit" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter">
                        Technical <span className="font-light italic text-neutral-400">Toolkit</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((group) => (
                            <div key={group.category} className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.05] transition-colors">
                                <h3 className="text-xl font-bold mb-6 text-emerald-400">{group.category}</h3>
                                <ul className="flex flex-wrap gap-3">
                                    {group.items.map(skill => (
                                        <li key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-neutral-200 shadow-sm hover:scale-105 transition-transform duration-300">
                                            {skill.icon}
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div id="experience" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter">
                        Professional <span className="font-light italic text-neutral-400">Experience</span>
                    </h2>
                    <div className="space-y-8">
                        {experience.map((exp, idx) => (
                            <div key={idx} className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-500">
                                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.role}</h3>
                                        <p className="text-lg text-emerald-400 font-semibold">{exp.company} <span className="text-neutral-500 font-normal">| {exp.location}</span></p>
                                    </div>
                                    <p className="text-neutral-400 mt-2 md:mt-0 font-mono text-sm tracking-wider">{exp.date}</p>
                                </div>

                                <ul className="relative z-10 space-y-4">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start text-neutral-300 text-lg font-light leading-relaxed">
                                            <span className="text-blue-500 mr-4 mt-1">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects Section */}
                <div id="works" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter">
                        Selected <span className="font-light italic text-neutral-400">Works</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative p-3 md:p-4 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
                            >
                                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-transparent via-blue-500/10 to-purple-500/10 blur-2xl" />
                                </div>

                                <div className="relative z-10 w-full h-48 md:h-64 bg-neutral-900 rounded-[1.25rem] overflow-hidden mb-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply" />
                                </div>

                                <div className="relative z-10 px-4 md:px-6 pb-4 md:pb-6 flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-semibold">{project.category}</p>
                                        <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight drop-shadow-sm">{project.title}</h3>
                                    </div>
                                    <p className="text-neutral-300 font-light text-base mt-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education & Certs */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter">
                        Education <span className="text-neutral-500">&</span> <span className="font-light italic text-neutral-400">Certifications</span>
                    </h2>
                    <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.05] flex flex-col md:flex-row gap-12 justify-between items-start">
                        <div className="flex-1">
                            <h3 className="text-xl text-neutral-400 uppercase tracking-widest text-xs font-bold mb-6">Education</h3>
                            <h4 className="text-2xl font-bold mb-2">Kalasalingam Academy of Research and Education</h4>
                            <p className="text-lg text-emerald-400 mb-2">B.Tech in Information Technology</p>
                            <p className="text-neutral-400 italic">2022 – 2026 | CGPA: 8.46</p>

                            <h3 className="text-xl text-neutral-400 uppercase tracking-widest text-xs font-bold mt-12 mb-6">Publications</h3>
                            <p className="text-lg font-light text-neutral-300">Forecasting Net Profit in Artificial Mussel Farming via Linear Regression<br /><span className="text-emerald-400 font-normal">ICMCSI 2025</span></p>
                        </div>
                        <div className="flex-1 w-full">
                            <h3 className="text-xl text-neutral-400 uppercase tracking-widest text-xs font-bold mb-6">Certifications</h3>
                            <ul className="space-y-4">
                                <li className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center">
                                    <span className="text-blue-500 mr-4">▪</span> Oracle OCI 2023 AI Foundations Associate Certified
                                </li>
                                <li className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center">
                                    <span className="text-purple-500 mr-4">▪</span> LearnTube Java Object-Oriented Programming (OOP)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <footer className="mt-48 border-t border-white/10 pt-16 pb-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500 max-w-7xl mx-auto relative z-10">
                <div>
                    <p className="text-lg font-bold text-white mb-2">M J Roshan Ackthar</p>
                    <p className="max-w-xs text-neutral-400 flex flex-col leading-relaxed">
                        <span>Junior Java Developer</span>
                        <span>Passionate about clean, maintainable code and continuous learning.</span>
                    </p>
                </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="mailto:mjroshanackthar@gmail.com" className="hover:text-white transition-colors">Email</a>
                    <a href="https://www.linkedin.com/in/m-j-roshan-ackthar-b43739268/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/mjroshanackthar" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </footer>
        </section>
    );
}
