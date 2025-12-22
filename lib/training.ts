export type CourseModule = {
  title: string;
  bullets: string[];
};

export type CourseDetailSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CourseStack = "HTML5" | "PHP" | "MySQL";

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
};

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
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}


