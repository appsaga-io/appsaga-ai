export type CourseModule = {
  title: string;
  bullets: string[];
};

export type Course = {
  slug: string;
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  duration: string;
  mode: string;
  level: string;
  prerequisites: string;
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
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}


