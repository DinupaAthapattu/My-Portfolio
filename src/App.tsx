
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Database, Globe, Terminal, Brain, GitBranch, Cpu, CheckCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import type { Project, Skill, Experience } from './types';
import Profile from './assets/logo.png';
import Ecom from './assets/Ecom.png'
import Lecspace from './assets/Lecspace.png'

const experiences: Experience[] = [
  // {
  //   title: "Senior Full Stack Developer",
  //   company: "Tech Solutions Inc",
  //   period: "2021 - Present",
  //   description: "Led development of enterprise applications using React and Node.js",
  //   achievements: [
  //     "Improved application performance by 40%",
  //     "Mentored junior developers",
  //     "Implemented CI/CD pipeline"
  //   ]
  // },
  {
    title: "Web Developer",
    company: "Freelancing",
    period: "2021",
    description: "Developed and maintained multiple local client projects",
    achievements: [
      "Delivered 5+ successful projects",
      "Did SEO for the websites",
      "Succesfully deployed the projects"
    ]
  }
];

const skills: Skill[] = [
  {
    name: "Frontend Development",
    level: 90,
    icon: Code2,
    details: "ReactJS,NextJS,HTML, CSS",
    category: "frontend"
  },
  {
    name: "Backend Development",
    level: 85,
    icon: Terminal,
    details: "Node.js,Express.js",
    category: "backend"
  },
  {
    name: "Database",
    level: 88,
    icon: Database,
    details: "SQL, MongoDB",
    category: "backend"
  },
  {
    name: "API Development",
    level: 82,
    icon: Globe,
    details: "REST, GraphQL",
    category: "backend"
  },
  {
    name: "System Architecture",
    level: 78,
    icon: Cpu,
    details: "Azure,GCP,AWS",
    category: "tools"
  },
  {
    name: "Code Quality",
    level: 85,
    icon: CheckCircle,
    details: "Testing, CI/CD",
    category: "tools"
  },
  {
    name: "Problem Solving",
    level: 90,
    icon: Brain,
    details: "Algorithms, Data Structures",
    category: "tools"
  },
  {
    name: "Version Control",
    level: 88,
    icon: GitBranch,
    details: "Git, GitHub",
    category: "tools"
  }
];

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with admin panel",
    image: Ecom,
    tags: ["ReactJS", "Node.js","ExpressJS", "MongoDB","Tailwind CSS"],
    link: "https://github.com/DinupaAthapattu/Ecommerce-Website"
  },
  {
    title: "Lab and Lecture Hall Booking System",
    description: "Full stack lab and lecture hall reservation system",
    image: Lecspace,
    tags: ["ReactJS","NextJS","Node.js","Springboot","SQL","Tailwind CSS","TypeScript"],
    link: "https://github.com/Lecspace/lecspace-frontend"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <Section id="hero" className="min-h-screen flex items-center relative " title=''>
        <div className="hero-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-64 md:w-96 aspect-square relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl transform -translate-y-4" />
              <img
                src={Profile}
                alt="Profile"
                className="relative rounded-full w-full h-full object-cover shadow-2xl ring-4 ring-white/50 dark:ring-gray-800/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center md:text-left"
            >
              <h2 className="text-xl font-medium text-purple-600 dark:text-purple-400 mb-4">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                Dinupa Athapattu
              </h1>
              <p className="text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer
              </p>
              <div className="flex gap-4 justify-center md:justify-start mb-8">
                <a href="https://github.com/DinupaAthapattu" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/dinupa-athapattu-767bb0190/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:dinupaathapattu@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              >
                View My Work
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className=" bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <span className="text-sm ">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </Section>

      <Section id="about" title="About Me">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
  >
    <h3 className="text-xl font-semibold mb-3">Hi, I'm Dinupa Athapattu 👋</h3>
    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
    A highly motivated undergraduate at the Faculty of Technology, University of Sri Jayewardenepura, with a strong passion for blending technology and creativity. Skilled in balancing academic excellence with hands-on experience, I excel in adapting to diverse environments, collaborating effectively, and delivering successful project outcomes.

With a keen interest in software development, UI/UX design, and cloud technologies, I have worked on various projects, ranging from web and mobile applications to AI-driven solutions. My expertise spans across full-stack development, MERN stack, Next.js, Firebase, and cloud computing, along with a growing interest in machine learning and automation.

Beyond academics, I actively engage in project-based learning, hackathons, and research-driven initiatives, allowing me to explore innovative solutions to real-world challenges. As a self-driven learner and team player, I enjoy working on interdisciplinary projects that merge technical skills with creative problem-solving.

I am eager to apply my technical expertise, problem-solving skills, and leadership abilities in industry settings to drive innovation, optimize workflows, and create meaningful impact. My goal is to continuously grow as a technology professional while contributing to cutting-edge advancements in the field.
    </p>
  </motion.div>
</Section>


      {/* Skills Section */}
      <Section id="skills" title="Skills & Expertise">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{skill.details}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience">
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400" />
              <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400" />
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-4">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/DinupaAthapattu"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dinupa-athapattu-767bb0190/"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:dinupaathapattu@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;