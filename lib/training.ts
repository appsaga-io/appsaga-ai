export type CourseModule = {
  title: string;
  bullets: string[];
};

export type CourseDetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CourseStack = "HTML5" | "PHP" | "MySQL" | "Node.js" | "Express.js" | "MongoDB" | "CSS" | "JavaScript" | "jQuery" | "Bootstrap" | "WordPress" | "Python" | "React";

export type Course = {
  slug: string;
  courseCode?: string;
  award?: string;
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  details?: CourseDetailSection[];
  stack?: CourseStack[];
  duration: string;
  mode: string;
  level: string;
  prerequisites: string;
  totalFees?: string;
  eligibility?: string;
  benefits: string[];
  includes: string[];
  outcomes: string[];
  certification: string;
  curriculum: CourseModule[];
  keywords: string[];
};


import pool from './db';

export const courses: Course[] = [
  {
    slug: "ai-360",
    title: "AI 360 – Generative AI & ChatGPT Essentials",
    descriptionShort:
      "A 1‑month certification course covering AI fundamentals, Generative AI, ChatGPT, prompt engineering, tools, and responsible AI—focused on practical real‑world usage.",
    descriptionLong:
      "AI 360 is a comprehensive 1-month certification course designed to provide a complete understanding of Artificial Intelligence, Generative AI, and ChatGPT. The course focuses on practical usage of AI tools, prompt engineering, business and coding applications, and ethical considerations, enabling students and professionals to effectively use AI in real-world scenarios.",
    duration: "1 Month (4 Weeks)",
    mode: "Classroom",
    level: "Beginner to Intermediate",
    prerequisites: "No prior AI or coding experience required",
    benefits: [
      "Upgrade your skills with hands-on Generative AI + ChatGPT workflows",
      "Stand out in interviews and projects by using AI effectively",
      "Learn prompt engineering techniques you can apply immediately",
      "Use AI for business, productivity, and coding tasks",
      "Get a professional certification on completion",
    ],
    includes: [
      "E-book learning materials",
      "Surprise rewards & extra goodies",
      "Certificate on successful completion",
    ],
    outcomes: [
      "Understand AI and Generative AI concepts",
      "Use ChatGPT and AI tools effectively",
      "Apply prompt engineering techniques",
      "Utilize AI for business and coding tasks",
      "Understand ethical and responsible AI usage",
    ],
    certification: "AI 360 – Generative AI & ChatGPT Essentials (1‑Month Professional Certification)",
    keywords: ["AI course", "Generative AI certification", "ChatGPT training", "Prompt Engineering course", "AI for beginners", "Artificial Intelligence certification"],
    curriculum: [
      {
        title: "Module 1: Introduction to AI & Generative AI",
        bullets: [
          "Bird’s Eye View of Artificial Intelligence",
          "Understanding AI, ML, and Generative AI",
          "What is Machine Learning?",
          "Benefits of Artificial Intelligence",
          "Current State and Future of AI",
          "AI Tools on the Rise",
          "Roles and Careers in the AI Era",
          "Introduction to Generative AI",
          "Applications of AI",
          "Module Summary",
        ],
      },
      {
        title: "Module 2: Conversational AI",
        bullets: [
          "Introduction to Conversational AI",
          "Functions of Conversational AI Models",
          "How Conversational AI Works",
          "Demonstration of Conversational AI",
          "Use cases and industry adoption",
          "Module Conclusion",
        ],
      },
      {
        title: "Module 3: ChatGPT Fundamentals",
        bullets: [
          "What is ChatGPT?",
          "Evolution of ChatGPT",
          "How ChatGPT Works",
          "Using ChatGPT Effectively",
          "Common and Advanced Use Cases",
          "Limitations of ChatGPT",
        ],
      },
      {
        title: "Module 4: Prompt Engineering Techniques",
        bullets: [
          "Introduction to Prompt Engineering",
          "Zero-Shot Prompting",
          "Few-Shot Prompting",
          "Chain of Thought (CoT) Prompting",
          "Self-Consistency Prompting",
          "Generated Knowledge Prompting",
          "Tree of Thoughts (ToT)",
          "Prompting Frameworks",
          "Difference Between Good and Bad Prompts",
        ],
      },
      {
        title: "Module 5: Fine-Tuning & RAG Concepts",
        bullets: [
          "Overview of Fine-Tuning",
          "Advantages of Fine-Tuning",
          "Retrieval-Augmented Generation (RAG)",
          "Fine-Tuning vs RAG",
          "Enterprise use cases",
          "Conceptual understanding (no coding)",
        ],
      },
      {
        title: "Module 6: Advanced ChatGPT Usage",
        bullets: [
          "History of ChatGPT",
          "How People Use LLMs in Real Life",
          "What ChatGPT Can Do",
          "What ChatGPT Cannot Do",
          "Advanced and Professional Use Cases",
          "AI in the Work Environment",
        ],
      },
      {
        title: "Module 7: AI Tools & Industry Applications",
        bullets: [
          "AI in Marketing",
          "AI in Sales",
          "AI in Customer Support",
          "AI in Manufacturing",
          "AI in Project Management",
          "AI in Data Analysis",
        ],
      },
      {
        title: "Module 8: Generative AI Modalities",
        bullets: [
          "Text-to-Text AI",
          "Text-to-Image AI",
          "Text-to-Voice AI",
          "Text-to-Video AI",
          "Overview of popular Gen AI tools",
        ],
      },
      {
        title: "Module 9: AI for Coding & Development",
        bullets: [
          "How AI Helps in Coding",
          "Best LLM Options for Coding",
          "Areas Covered by AI Coding Tools",
          "Building Applications Using ChatGPT",
          "Best Practices for AI-Assisted Coding",
          "Challenges of AI-Assisted Development",
        ],
      },
      {
        title: "Module 10: Ethics & Responsible AI",
        bullets: [
          "Ethical Considerations in Generative AI",
          "Bias, Privacy, and Security",
          "AI Risks and Limitations",
          "Implications of AI for Enterprises",
          "Responsible Use of AI",
          "Course Conclusion",
        ],
      },
    ],
  },
  {
    slug: "php-and-mysql",
    courseCode: "C1282",
    award: "CERTIFICATE",
    title: "PHP AND MYSQL",
    stack: ["HTML5", "PHP", "MySQL"],
    descriptionShort:
      "A 2‑month part‑time skill development course covering PHP fundamentals and MySQL database essentials to build dynamic web applications and job‑ready skills.",
    descriptionLong:
      "This 2‑month part‑time skill development course on PHP and MySQL is designed to empower students with practical skills for self-employment and career growth in web development. You’ll learn PHP programming fundamentals, database management with MySQL, and how to build dynamic web applications that handle real data effectively.",
    details: [
      {
        title: "Course Objectives",
        bullets: [
          "Provide a comprehensive understanding of PHP programming and its syntax",
          "Teach how to work with MySQL databases for data storage and retrieval",
          "Enable students to develop dynamic web applications using PHP and MySQL",
          "Familiarize students with best practices in web development",
          "Equip learners with skills required for self-employment in web development",
        ],
      },
      {
        title: "Course Teaching Methodology",
        bullets: [
          "Lectures: In-depth theoretical sessions to explain concepts",
          "Practical Labs: Hands-on practice to reinforce learning",
          "Assignments: Real-world coding tasks to enhance skills",
          "Project Work: Build a web application using PHP and MySQL",
          "Group Discussions: Encouraging interaction and problem-solving",
          "Guest Lectures: Industry experts sharing insights",
        ],
      },
      {
        title: "Career Growth & Self‑Employment",
        bullets: [
          "Web development skills are in high demand, providing excellent career opportunities",
          "Strong self-employment potential through freelance web development projects",
          "Knowledge of PHP and MySQL opens doors to diverse web development roles",
          "Ability to create dynamic websites enhances employability",
        ],
      },
      {
        title: "Note",
        paragraphs: [
          "Course contents can be modified based on learner requirements or specific location preferences.",
        ],
      },
    ],
    duration: "2 Months",
    mode: "Part-Time",
    level: "Beginner",
    prerequisites: "Below SSC",
    totalFees: "200.00",
    eligibility: "Below SSC",
    benefits: [
      "Learn in-demand web development skills for strong career opportunities",
      "Build freelance-ready skills for self-employment",
      "Develop dynamic websites using PHP with MySQL databases",
      "Gain hands-on practice via labs, assignments, and a real project",
      "Earn a certificate on successful completion",
    ],
    includes: ["Practical labs", "Project work", "Certificate on successful completion"],
    outcomes: [
      "Understand PHP syntax, variables, data types, and operators",
      "Build dynamic pages using decisions, loops, and functions",
      "Work confidently with arrays, strings, files, sessions, and cookies",
      "Capture and validate HTML form data, including file uploads",
      "Connect PHP applications to MySQL and perform CRUD operations",
      "Use joins and parameterized queries for real-world database work",
      "Handle exceptions and debug common PHP/MySQL errors",
    ],
    certification: "PHP AND MYSQL (Certificate)",
    keywords: ["PHP course", "MySQL training", "Web development course", "PHP programming", "Database management course", "Backend development"],
    curriculum: [
      {
        title: "Module 1: Introduction to PHP",
        bullets: [
          "Evaluation of PHP",
          "Basic Syntax",
          "Defining Variables and Constants",
          "PHP Data Types",
          "Operators and Expressions",
        ],
      },
      {
        title: "Module 2: Decisions and Loops",
        bullets: [
          "Making Decisions",
          "Repetitive Tasks with Looping",
          "Mixing Decisions and Looping with HTML",
        ],
      },
      {
        title: "Module 3: Functions",
        bullets: [
          "What is a Function?",
          "Defining and Calling Functions",
          "Call by Value and Call by Reference",
          "Recursive Functions",
          "String Operations",
        ],
      },
      {
        title: "Module 4: Arrays",
        bullets: [
          "Anatomy of an Array",
          "Index-Based and Associative Arrays",
          "Accessing Array Elements",
          "Looping Through Arrays",
          "Useful Library Functions",
        ],
      },
      {
        title: "Module 5: Handling HTML Forms with PHP",
        bullets: [
          "Capturing Form Data",
          "Dealing with Multi-Value Fields",
          "File Upload Forms",
          "Redirecting After Form Submission",
        ],
      },
      {
        title: "Module 6: Working with Files and Directories",
        bullets: [
          "Understanding Files and Directories",
          "Opening, Closing, Copying, Renaming, and Deleting Files",
          "Working with Directories",
          "File Uploading and Downloading",
        ],
      },
      {
        title: "Module 7: Session and Cookie Handling",
        bullets: [
          "Introduction to Session Control",
          "Managing Sessions with PHP",
          "Working with Cookies",
          "Registering and Destroying Session Variables",
        ],
      },
      {
        title: "Module 8: Database Connectivity with MySQL",
        bullets: [
          "Introduction to RDBMS",
          "Connecting to MySQL Database",
          "Performing Basic Database Operations (DML)",
          "Setting Query Parameters",
          "Executing Queries",
          "Joins (Cross, Inner, Outer, Self Joins)",
        ],
      },
      {
        title: "Module 9: Exception Handling",
        bullets: ["Understanding Exceptions and Errors", "Try, Catch, Throw", "Error Tracking and Debugging"],
      },
    ],
  },
  {
    slug: "nodejs-full-course",
    courseCode: "CZID",
    award: "PROFESSIONAL CERTIFICATE",
    title: "NODE.JS FULL COURSE CURRICULUM (BEGINNER TO JOB-READY)",
    duration: "6 MONTHS",
    totalFees: "200.00",
    mode: "Classroom", // Assumed default
    level: "Beginner to Intermediate",
    prerequisites: "Basic JavaScript, HTML, and programming fundamentals",
    stack: ["Node.js", "Express.js", "MongoDB"],
    descriptionShort: "Master Node.js, Express, and MongoDB to build scalable backend applications. Learn authentication, REST APIs, and deployment in this 6-month job-ready course.",
    descriptionLong: "This comprehensive 6-month Professional Certificate course takes you from a beginner to a job-ready Node.js backend developer. You will master the fundamentals of backend development, learn to build robust REST APIs with Express.js, manage databases with MongoDB, and secure your applications with JWT authentication. The curriculum includes hands-on projects like an E-commerce backend and an LMS to ensure practical mastery.",
    benefits: [
      "Master Node.js, Express, and MongoDB",
      "Build REST APIs and secure auth systems",
      "Work on real-world projects like E-commerce",
      "Learn deployment to AWS/Render",
      "Job-ready skills with Professional Certificate"
    ],
    includes: ["Practical Labs", "Real-world Projects", "Professional Certificate"],
    outcomes: ["Build REST APIs", "Connect databases (MongoDB)", "Handle authentication", "Deploy Node.js apps"],
    certification: "NODE.JS FULL COURSE (Professional Certificate)",
    keywords: ["Node.js course", "Express.js training", "MongoDB certification", "MERN stack course", "Backend development course", "REST API development"],
    curriculum: [
      {
        title: "Module 1: Introduction to Backend & Node.js",
        bullets: [
          "What is Backend Development?",
          "Client–Server Architecture",
          "What is Node.js? Use cases",
          "Node.js vs PHP / Java / Python",
          "Installing Node.js & npm",
          "Running first Node.js program",
          "Hands-on: Hello World server"
        ]
      },
      {
        title: "Module 2: JavaScript Refresher for Node.js",
        bullets: [
          "JavaScript execution model",
          "Variables, functions, arrow functions",
          "let, const, var",
          "Destructuring & spread operator",
          "Callbacks, Promises, async / await",
          "Hands-on: JS mini exercises"
        ]
      },
      {
        title: "Module 3: Node.js Core Fundamentals",
        bullets: [
          "Node.js architecture & Event loop",
          "Single-threaded & non-blocking I/O",
          "Modules (CommonJS) & require/exports",
          "Built-in modules: fs, path, os, http",
          "Creating HTTP server using http module"
        ]
      },
      {
        title: "Module 4: npm & Project Structure",
        bullets: [
          "What is npm? package.json explained",
          "Dependencies vs DevDependencies",
          "nodemon & Project folder structure",
          "Environment variables (.env)",
          "Hands-on: Setup production-ready Node project"
        ]
      },
      {
        title: "Module 5: Express.js Framework",
        bullets: [
          "Why Express.js? Express setup",
          "Routing (GET, POST, PUT, DELETE)",
          "Request & Response objects",
          "Middleware concept & Custom middleware",
          "REST API principles",
          "Hands-on: CRUD API using Express"
        ]
      },
      {
        title: "Module 6: Database Integration (MongoDB)",
        bullets: [
          "SQL vs NoSQL & MongoDB basics",
          "MongoDB Atlas setup",
          "Mongoose ORM (Schema & Models)",
          "CRUD operations, Pagination & filtering",
          "Hands-on: Connect Express API with MongoDB"
        ]
      },
      {
        title: "Module 7: Authentication & Authorization",
        bullets: [
          "Password hashing (bcrypt) & JWT",
          "Login & Register API",
          "Role-based authorization (Admin/User)",
          "Securing routes",
          "Hands-on: Auth system with JWT"
        ]
      },
      {
        title: "Module 8: Advanced Concepts",
        bullets: [
          "File upload (multer)",
          "Email sending (nodemailer)",
          "Logging (winston)",
          "Rate limiting & CORS"
        ]
      },
      {
        title: "Module 9: Testing & Best Practices",
        bullets: ["Clean code practices", "MVC architecture", "Postman for API testing"]
      },
      {
        title: "Module 10: Deployment & Production",
        bullets: [
          "Environment configs",
          "Deployment (Render/Railway/AWS)",
          "Process manager (PM2)",
          "Hands-on: Deploy Node.js app"
        ]
      }
    ],
    details: [
      {
        title: "Final Project",
        bullets: [
          "E-commerce Backend API",
          "Learning Management System (LMS)",
          "Employee Management System",
          "Blog API with Auth"
        ]
      }
    ]
  },
  {
    slug: "web-designing",
    courseCode: "C1170",
    award: "CERTIFICATE",
    title: "WEB DESIGNING",
    duration: "2 MONTHS",
    totalFees: "200.00",
    mode: "Part-Time",
    level: "Beginner",
    prerequisites: "None", // Inferred
    eligibility: "Below SSC",
    stack: ["HTML5", "CSS", "MySQL", "PHP"],
    descriptionShort: "A 2-month course to master Web Designing using HTML5, CSS3, MySQL, and PHP. Learn to create visually appealing and functional websites.",
    descriptionLong: "This 2-month Web Designing course focuses on the fundamentals of creating interactive and responsive websites. You will gain hands-on experience with HTML5, CSS3, and integrate them with PHP and MySQL. Designed for self-employment and career growth, this course empowers you to build professional portfolios and service clients effectively.",
    benefits: [
      "Master HTML5 and CSS3",
      "Learn PHP and MySQL basics",
      "Create responsive and interactive sites",
      "Enhanced employability and freelance opportunities",
      "Create your own websites/portfolios"
    ],
    includes: ["Practical Sessions", "Case Studies", "Projects", "Certificate"],
    outcomes: [
      "Create visually appealing websites",
      "Understand HTML5 and CSS3",
      "Basic Database management with MySQL",
      "Dynamic content with PHP"
    ],
    certification: "WEB DESIGNING (Certificate)",
    keywords: ["Web designing course", "HTML5 CSS3 training", "Website design certification", "Frontend design course", "Responsive web design"],
    curriculum: [
      {
        title: "Module 1: HTML5",
        bullets: [
          "Introduction to HTML5 & New Structure Tags",
          "HTML5 Doctype",
          "New Form Tags & Media Tags",
          "Designing a Layout using HTML5"
        ]
      },
      {
        title: "Module 2: Cascading Style Sheets (CSS 3.0)",
        bullets: [
          "Introduction to CSS 3 & New Properties",
          "CSS Rounded Corners, Border Images, Shadows",
          "CSS Gradients & Background properties",
          "Text-Shadow & Text-Stroke",
          "Using CSS3 in Practical Layout"
        ]
      },
      {
        title: "Module 3: MYSQL",
        bullets: [
          "Create tables, fields, Insert, Update",
          "Delete, Select, Where condition",
          "Limits, Distinct Joins, Order by, Group by",
          "Union, Import and Export Database"
        ]
      },
      {
        title: "Module 4: PHP",
        bullets: [
          "PHP installation & introduction",
          "Loops, String Functions, Functions",
          "PHP Email & Image Uploading",
          "Arrays, Date & Time",
          "File handling & Error handling"
        ]
      }
    ]
  },
  {
    slug: "html-and-css",
    courseCode: "C1454",
    award: "CERTIFICATE",
    title: "HTML AND CSS",
    duration: "3 MONTHS",
    totalFees: "200.00",
    mode: "Part-Time",
    level: "Beginner",
    prerequisites: "Basic computer usage",
    eligibility: "Below SSC",
    stack: ["HTML5", "CSS"],
    descriptionShort: "A 3-month skill development course mastering HTML and CSS to build professional, responsive, and visually appealing websites.",
    descriptionLong: "This course is designed to introduce students to the fundamentals of HTML and CSS with a focus on developing practical skills for self-employment in web development. The course will cover both theoretical concepts and hands-on exercises to ensure a holistic learning experience. Students will learn how to create visually appealing and functional websites that are responsive and accessible across different devices.",
    benefits: [
      "Comprehensive understanding of HTML & CSS",
      "Develop professional and responsive websites",
      "Empowerment for self-employment",
      "Enhance creativity and problem-solving"
    ],
    includes: ["Hands-on Exercises", "Real-world Projects", "Industry Insights", "Certificate"],
    outcomes: [
      "Understand web page structure",
      "Style websites with CSS",
      "Create responsive layouts",
      "Incorporate multimedia"
    ],
    certification: "HTML AND CSS (Certificate)",
    keywords: ["HTML CSS course", "Web development basics", "Frontend development course", "HTML5 training", "CSS3 certification"],
    curriculum: [
      {
        title: "Module 1: Introduction to HTML",
        bullets: ["Web development career prospects", "Structure of a web page", "HTML elements and attributes", "Formatting text, adding links/images"]
      },
      {
        title: "Module 2: Advanced HTML",
        bullets: ["Tables and forms", "Multimedia elements", "Semantic HTML & accessibility", "HTML5 features"]
      },
      {
        title: "Module 3: Introduction to CSS",
        bullets: ["Role of CSS", "Syntax and selectors", "Colors, backgrounds, borders", "Styling text and fonts"]
      },
      {
        title: "Module 4: Advanced CSS",
        bullets: ["Box model & layout", "Responsive design & media queries", "CSS frameworks", "CSS3 animations"]
      },
      {
        title: "Module 5: Web Development Project",
        bullets: ["Applying HTML & CSS concepts", "Designing user-friendly interface", "Testing & optimization"]
      }
    ]
  },
  {
    slug: "professional-web-developer",
    courseCode: "C1281",
    award: "CERTIFICATE",
    title: "PROFESSIONAL WEB DEVELOPER",
    duration: "3 MONTHS",
    totalFees: "200.00",
    mode: "Part-Time",
    level: "Intermediate",
    eligibility: "Below SSC",
    prerequisites: "Basic computer usage",
    stack: ["HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap", "WordPress", "PHP", "MySQL", "Python"],
    descriptionShort: "Comprehensive 3-month course covering HTML5, CSS3, JS, PHP, MySQL, WordPress, and Python to launch your web development career.",
    descriptionLong: "The Professional Web Developer Program is designed to equip students with a comprehensive skill set in web development. This 3-month part-time course covers essential topics such as HTML5, CSS3, JavaScript, jQuery, Bootstrap 4, WordPress, PHP, MySQL, APIs, and Python. The course is geared towards empowering learners for self-employment and enhancing their career prospects.",
    benefits: [
      "Comprehensive skill set in frontend & backend",
      "Learn WordPress for freelance opportunities",
      "Introduction to Python and APIs",
      "Project-based learning (Twitter Clone)",
      "Job-ready skills for web industry"
    ],
    includes: ["Real-world projects", "Course materials", "Certificate"],
    outcomes: [
      "Build responsive websites",
      "Create WordPress themes",
      "Develop PHP/MySQL applications",
      "Understand MVC architecture"
    ],
    certification: "PROFESSIONAL WEB DEVELOPER (Certificate)",
    keywords: ["Professional web development course", "Full stack web developer", "WordPress training", "Python for web", "PHP MySQL course"],
    curriculum: [
      { title: "Module 1: HTML5", bullets: ["Introduction", "Semantic Elements", "Forms", "Audio/Video", "Canvas/SVG", "Geolocation", "Web Workers"] },
      { title: "Module 2: CSS3", bullets: ["Selectors", "Box Model", "Transitions/Animations", "Flexbox/Grid", "Bootstrap", "Responsive Design"] },
      { title: "Module 3: JavaScript", bullets: ["Variables/Types", "Control Structures", "Functions", "DOM Manipulation", "ES6 Features"] },
      { title: "Module 4: jQuery", bullets: ["DOM Traversal", "Effects/Animations", "Event Handling", "Ajax/JSON"] },
      { title: "Module 5: Bootstrap 4 & WordPress", bullets: ["Bootstrap Grid/Components", "WordPress Installation", "Theming", "Plugins/Widgets"] },
      { title: "Module 6: PHP & MySQL", bullets: ["PHP Syntax/Variables", "Forms Handling", "MySQL Queries", "PHP-MySQL Integration"] },
      { title: "Module 7: APIs & Mobile Apps", bullets: ["RESTful APIs", "Mobile-Responsive Apps", "Intro to Mobile App Dev"] },
      { title: "Module 8: HTML5 & CSS3 Special Features", bullets: ["Advanced Techniques", "Web Animation", "Accessibility"] },
      { title: "Module 9: Python", bullets: ["Syntax", "Control Structures", "Functions", "Intro to Django/Flask"] },
      { title: "Module 10: Bonus: Twitter Clone (MVC)", bullets: ["MVC Architecture", "Real-world features", "Deployment"] }
    ]
  },
  {
    slug: "full-stack-web-developer-diploma",
    courseCode: "C1489",
    award: "DIPLOMA",
    title: "FULL STACK WEB DEVELOPER (DIPLOMA)",
    duration: "6 MONTHS",
    totalFees: "200.00",
    mode: "Part-Time",
    level: "Beginner to Intermediate",
    eligibility: "Below SSC",
    prerequisites: "None",
    stack: ["HTML5", "CSS", "JavaScript", "Bootstrap", "PHP", "MongoDB"],
    descriptionShort: "A 6-month diploma program transforming beginners into professional full stack developers using HTML, CSS, JS, PHP, and MongoDB.",
    descriptionLong: "This course is designed to transform beginners into professional full stack web developers over six months. It covers front-end technologies like HTML, CSS, JavaScript, Bootstrap, and back-end technologies like PHP and MongoDB, along with cloud computing basics. tailored to meet the needs of Indian students, emphasizing practical skills high demand in the job market.",
    benefits: [
      "Comprehensive Full Stack curriculum",
      "Online & Offline blended learning",
      "Real-world project portfolio",
      "Self-employment & Freelance focus",
      "Cloud computing basics"
    ],
    includes: ["Live lectures", "Recorded videos", "Workshops", "Diploma"],
    outcomes: [
      "Build full-stack applications",
      "Deploy to the cloud",
      "Start a web dev business/freelancing",
      "Master Frontend & Backend"
    ],
    certification: "FULL STACK WEB DEVELOPER (Diploma)",
    keywords: ["Full stack diploma", "Web development diploma", "PHP MongoDB course", "Frontend Backend training", "Cloud computing basics"],
    curriculum: [
      { title: "1. HTML (4 Weeks)", bullets: ["Basics", "Forms", "Media", "Tables", "Div/Class/ID"] },
      { title: "2. CSS (5 Weeks)", bullets: ["Selectors", "Box Model", "Positioning", "Flexbox", "Responsive Design"] },
      { title: "3. JavaScript (6 Weeks)", bullets: ["Syntax", "DOM", "Events", "Arrays/Objects", "ES6+", "Debugging"] },
      { title: "4. Bootstrap (3 Weeks)", bullets: ["Typography", "Grid", "Components", "Responsiveness"] },
      { title: "5. PHP (4 Weeks)", bullets: ["Syntax", "Forms", "Sessions/Cookies", "MySQL Connectivity"] },
      { title: "6. MongoDB (3 Weeks)", bullets: ["NoSQL Basics", "CRUD Operations", "Cloud Connectivity"] },
      { title: "7. Cloud Computing Basics (3 Weeks)", bullets: ["Fundamentals", "IaaS/PaaS/SaaS", "Security"] }
    ]
  },
  {
    slug: "full-stack-web-development-pro",
    courseCode: "PUZJ",
    award: "PROFESSIONAL CERTIFICATE",
    title: "FULL STACK WEB DEVELOPMENT (FRONTEND + BACKEND)",
    duration: "6 MONTHS",
    totalFees: "200.00",
    mode: "Classroom",
    level: "Beginner to Advanced",
    eligibility: "Below SSC",
    prerequisites: "Basic computer knowledge",
    stack: ["HTML5", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB", "React"],
    descriptionShort: "Become a job-ready Full Stack Developer with this 6-month course covering MERN stack concepts: HTML, CSS, JS, Node.js, Express, and MongoDB.",
    descriptionLong: "PHASE 1 to PHASE 5 comprehensive curriculum taking you from web basics to advanced backend features. Learn to build static sites, dynamic frontend with JS, robust backends with Node/Express, and manage data with MongoDB. Concludes with a Capstone project.",
    benefits: [
      "Master Frontend (HTML/CSS/JS/Bootstrap)",
      "Master Backend (Node.js/Express/MongoDB)",
      "Authentication & Security (JWT)",
      "DevOps & Deployment basics",
      "Career Prep & Mock Interviews"
    ],
    includes: ["Portfolio Building", "Capstone Project", "Interview Prep", "Professional Certificate"],
    outcomes: [
      "Job-ready Full Stack Developer",
      "Build complex E-commerce/LMS apps",
      "Secure & Deploy applications",
      "Understand MVC & Architecture"
    ],
    certification: "FULL STACK WEB DEVELOPMENT (Professional Certificate)",
    keywords: ["Full stack professional course", "MERN stack certification", "React Node.js course", "Job-ready web dev course", "Advanced web development"],
    curriculum: [
      { title: "PHASE 1: Foundations", bullets: ["Internet Basics", "Tools Setup"] },
      { title: "PHASE 2: Frontend", bullets: ["HTML Structure", "CSS Styling", "Bootstrap UI", "JS Core", "JS DOM"] },
      { title: "PHASE 3: Backend (Node.js)", bullets: ["Node Fundamentals", "Express & REST APIs", "MongoDB", "Auth & Security"] },
      { title: "PHASE 4: Advanced", bullets: ["File Upload/Email", "Git & Testing", "Deployment & DevOps"] },
      { title: "PHASE 5: Projects", bullets: ["Mini Projects", "Capstone Project (E-com/LMS/Job Portal)", "Career Prep"] }
    ]
  },
];

// Helper to map DB row to Course object if needed, 
// though our column names mostly match (except snake_case vs camelCase if we weren't careful)
// In our schema index.ts API, we inserted as is. 
// Standard pg return snake_case unless we quote columns.
// Our schema: description_short, description_long, includes_list
// Our type: descriptionShort, descriptionLong, includes

function mapRowToCourse(row: any): Course {
  // Ensure we don't pass Date objects (created_at, updated_at) to Next.js props
  // and map our snake_case columns to camelCase properties.
  return {
    slug: row.slug,
    courseCode: row.course_code,
    award: row.award,
    title: row.title,
    descriptionShort: row.description_short,
    descriptionLong: row.description_long,
    details: row.details,
    stack: row.stack,
    duration: row.duration,
    mode: row.mode,
    level: row.level,
    prerequisites: row.prerequisites,
    totalFees: row.total_fees,
    eligibility: row.eligibility,
    benefits: row.benefits,
    includes: row.includes_list,
    outcomes: row.outcomes,
    certification: row.certification,
    curriculum: row.curriculum,
    keywords: row.keywords || [],
  };
}

export async function getAllCourses(): Promise<Course[]> {
  if (!pool || !process.env.DATABASE_URL) return courses;
  try {
    const client = await pool.connect();
    try {
      const res = await client.query('SELECT * FROM courses ORDER BY created_at ASC');
      if (res.rows.length === 0) return courses; // Fallback if DB empty? 
      // Actually if DB is empty, we should return empty, but to prevent breaking the site before seed:
      // return courses;
      // Let's decide: if DB works, return DB. 
      return res.rows.map(mapRowToCourse);
    } finally {
      client.release();
    }
  } catch (e) {
    console.error("Failed to fetch courses from DB, using fallback", e);
    return courses;
  }
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  // Try DB first
  if (pool && process.env.DATABASE_URL) {
    try {
      const client = await pool.connect();
      try {
        const res = await client.query('SELECT * FROM courses WHERE slug = $1', [slug]);
        if (res.rows.length > 0) {
          return mapRowToCourse(res.rows[0]);
        }
      } finally {
        client.release();
      }
    } catch (e) {
      console.error(`Failed to fetch course ${slug} from DB, checking fallback`, e);
    }
  }

  // Fallback
  return courses.find((c) => c.slug === slug);
}


