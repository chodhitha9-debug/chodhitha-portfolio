export const profile = {
  name: "Chodhitha Mamidala",
  title: "CSE(AIML) Student | AI/ML Enthusiast",
  email: "chodhitha9@gmail.com",
  linkedin: "https://linkedin.com/in/mamidala-chodhitha",
  github: "https://github.com/chodhitha9-debug",
  college: "Vignan's Foundation for Science, Technology and Research",
  graduation: "2028",
};

export const skillCategories = [
  "All",
  "AI & Machine Learning",
  "NLP & RAG",
  "Programming",
  "Frameworks & Tools",
  "Problem Solving",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skills: { name: string; category: Exclude<SkillCategory, "All">; note: string }[] = [
  { name: "Python", category: "Programming", note: "Primary language for ML, NLP and backend work." },
  { name: "Machine Learning", category: "AI & Machine Learning", note: "Model training, evaluation and practical use cases." },
  { name: "Artificial Intelligence", category: "AI & Machine Learning", note: "Applying AI techniques to real-world problems." },
  { name: "Scikit-learn", category: "AI & Machine Learning", note: "Classical ML models and pipelines." },
  { name: "NLP", category: "NLP & RAG", note: "Text processing and language understanding tasks." },
  { name: "RAG", category: "NLP & RAG", note: "Retrieval-augmented answering over documents." },
  { name: "Streamlit", category: "Frameworks & Tools", note: "Interactive interfaces for data and ML apps." },
  { name: "Git & GitHub", category: "Frameworks & Tools", note: "Version control and project collaboration." },
  { name: "Design and Analysis of Algorithms", category: "Problem Solving", note: "Algorithmic thinking and complexity analysis." },
  { name: "Problem Solving", category: "Problem Solving", note: "Breaking problems down into workable solutions." },
];

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  category: "AI/ML" | "NLP" | "Web";
  categoryLabel: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  caseStudy: { heading: string; body: string | string[] }[];
  architecture?: string[];
};

export const projects: Project[] = [
  {
    id: "schememitra",
    title: "SchemeMitra",
    subtitle: "Government Scheme Discovery Platform",
    category: "Web",
    categoryLabel: "Web / AI-assisted application",
    description:
      "SchemeMitra is a multilingual web application that helps users discover government schemes they may be eligible for. Users can provide details such as age, income, occupation, caste, state, and location, and the application recommends relevant schemes along with application guidance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
    github: "https://github.com/chodhitha9-debug/schememitra",
    demo: "https://schememitra.lovable.app",
    caseStudy: [
      {
        heading: "Problem",
        body: "Government schemes are spread across many sources and languages, which makes it hard for people to find the ones they are actually eligible for.",
      },
      {
        heading: "Solution",
        body: "A multilingual web application that takes user details such as age, income, occupation, caste, state and location, and recommends relevant schemes with application guidance.",
      },
      {
        heading: "Features",
        body: [
          "Eligibility-based scheme matching",
          "Multilingual support: English, Hindi, Telugu, Tamil, Malayalam",
          "Responsive user interface",
          "Direct application guidance",
        ],
      },
      { heading: "Tech Stack", body: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"] },
      {
        heading: "My Contribution",
        body: "Designed and developed the application to simplify government-scheme discovery through eligibility-based matching, multilingual support, responsive UI, and direct application guidance.",
      },
    ],
  },
  {
    id: "sif",
    title: "Oil & Gas SIF Precursor Detection System",
    category: "AI/ML",
    categoryLabel: "AI / ML / NLP",
    description:
      "An AI/ML safety-analysis application designed to identify Serious Injury and Fatality (SIF) precursors from safety-related information in oil and gas operations.",
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Joblib",
      "Matplotlib",
      "NLP / Text Processing",
      "deep-translator",
    ],
    github: "https://github.com/chodhitha9-debug/sif-precursor-detection",
    demo: "https://chodhitha9-debug-sif-precursor-detection-app-wsrx5g.streamlit.app/",
    caseStudy: [
      {
        heading: "Problem",
        body: "Safety-related information in oil and gas operations contains early signals of serious incidents that are easy to miss when reviewed manually.",
      },
      {
        heading: "Approach",
        body: [
          "Processes safety-related information",
          "Identifies potential SIF precursor patterns",
          "Provides safety insights",
          "Offers an interactive Streamlit interface with multilingual support",
        ],
      },
      {
        heading: "ML / NLP Components",
        body: [
          "Machine learning models for precursor classification",
          "Rule-based detection alongside the models",
          "Text processing of safety narratives",
          "Translation support for multilingual input",
        ],
      },
      {
        heading: "Tech Stack",
        body: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Joblib", "Matplotlib", "NLP / Text Processing", "Google Translator / deep-translator"],
      },
      {
        heading: "My Contribution",
        body: "Developed the interactive safety-analysis application by combining machine learning models, rule-based detection, text processing, multilingual support, and Streamlit.",
      },
    ],
  },
  {
    id: "zepto",
    title: "Zepto AI Support Assistant",
    category: "NLP",
    categoryLabel: "AI / NLP / RAG",
    description:
      "An AI-powered customer-support assistant that answers Zepto policy-related questions using document-based retrieval.",
    tech: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "Sentence Transformers",
      "LangGraph",
      "Uvicorn",
      "Docker",
      "Vector Embeddings",
    ],
    github: "https://github.com/chodhitha9-debug/zepto-ai-platform",
    architecture: [
      "Policy Documents",
      "Document Processing",
      "Embeddings",
      "ChromaDB",
      "Relevant Retrieval",
      "Answer Generation",
      "FastAPI API",
    ],
    caseStudy: [
      {
        heading: "How it works",
        body: [
          "Uses policy documents as its knowledge source",
          "Retrieves relevant information for a question",
          "Generates answers based on available policy content",
          "Exposes API endpoints for querying",
          "Uses vector embeddings for document retrieval",
        ],
      },
      {
        heading: "Tech Stack",
        body: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "LangGraph", "Uvicorn", "Docker", "Retrieval-based Question Answering"],
      },
      {
        heading: "My Contribution",
        body: "Built a document-based AI support assistant including document ingestion, embeddings, vector storage, retrieval, policy-based answering, FastAPI endpoints, and Docker containerization.",
      },
    ],
  },
  {
    id: "pixel-art",
    title: "Pixel Art Maker",
    category: "Web",
    categoryLabel: "Web",
    description:
      "A browser-based pixel-art creation tool with an interactive grid for creating pixel-based designs.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chodhitha9-debug/pixel-art-maker",
    caseStudy: [
      { heading: "Problem", body: "Creating simple pixel-based designs usually requires installing dedicated software." },
      { heading: "Solution", body: "A lightweight browser tool with an interactive grid for drawing pixel art directly in the page." },
      { heading: "Features", body: ["Interactive drawing grid", "Colour selection", "Grid-based drawing functionality"] },
      { heading: "Tech Stack", body: ["HTML", "CSS", "JavaScript"] },
      {
        heading: "My Contribution",
        body: "Designed and implemented an interactive pixel-art interface using HTML, CSS, and JavaScript, including grid-based drawing functionality.",
      },
    ],
  },
];

export const timeline = [
  { year: "2025", text: "Started building practical AI/ML and web development projects." },
  { year: "2025", text: "Participated in hackathons and student technology events." },
  { year: "2025–2026", text: "Explored AI, NLP, RAG, machine learning, and practical application development." },
  {
    year: "2026",
    text: "Developed projects including SchemeMitra, SIF Precursor Detection System, Zepto AI Support Assistant, and Pixel Art Maker.",
  },
  { year: "2026", text: "Continuing to build projects and strengthen AI/ML problem-solving skills." },
];

export const hackathons = [
  "SIH Internal Hackathon",
  "LaunchpadX",
  "GDG Agentathon",
  "FRONTIER AI Hackathon",
  "Vibe Hack 2.0",
  "Visionova 2K25",
  "VINNOVATE 2K25",
  "SKILSPRINT 1.0",
  "SKILSPRINT 2.0",
];

export const exploring = [
  "Artificial Intelligence",
  "Machine Learning",
  "Natural Language Processing",
  "Retrieval-Augmented Generation",
  "AI Agents",
  "Practical AI Applications",
  "Problem Solving",
];
