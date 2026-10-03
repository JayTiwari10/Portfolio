export interface Project {
  id: string;
  title: string;
  category: 'Computer Vision & AI' | 'Smart City & Infrastructure' | 'Core CS & Systems';
  tagline: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  metrics: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  department: string;
  program: string;
  location: string;
  duration: string;
  period: string;
  badge: string;
  bullets: string[];
  technologies: string[];
  impactMetrics: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  credentialUrl?: string;
  skillsVerified: string[];
}

export const PROFILE_DATA = {
  name: "Jay Tiwari",
  title: "Computer Vision & Smart Infrastructure AI Engineer",
  tagline: "Bridging Artificial Intelligence, Computer Vision, and Smart Infrastructure to Engineer Next-Generation Urban Technology.",
  location: "Agra / Aligarh, Uttar Pradesh, India",
  email: "jayt48688@gmail.com",
  phone: "+91 9058339305",
  linkedin: "https://www.linkedin.com/in/jaytiwari-tech",
  github: "https://github.com/jaytiwari-tech",
  profileImage: `${import.meta.env.BASE_URL}profile.jpg`,

  aboutSummary: `I am a Computer Science & Engineering student at IET Agra with hands-on experience in Artificial Intelligence, Computer Vision, and Smart Urban Infrastructure systems. Having served as a Smart City Intern at Agra Smart City Limited under the prestgious TULIP program (Ministry of Housing & Urban Affairs and AICTE), I specialize in building data-driven vision systems and analytical solutions that address real-world urban challenges. My core strengths span Python programming, OpenCV computer vision pipelines, machine learning models, and cloud infrastructure with a relentless drive for clean, scalable engineering.`,

  corePillars: [
    {
      title: "Computer Vision & AI",
      description: "Developing intelligent visual detection pipelines using Python and OpenCV for spatial and infrastructure analysis.",
      icon: "Eye"
    },
    {
      title: "Smart Urban Governance",
      description: "Analyzing urban data systems and digital infrastructure under government smart city frameworks.",
      icon: "Building2"
    },
    {
      title: "Core CS Engineering",
      description: "Solid theoretical and practical mastery of Operating Systems, DBMS, Computer Networks, and C/Python algorithms.",
      icon: "Cpu"
    },
    {
      title: "Cloud & AI Infrastructure",
      description: "Certified in Oracle Cloud Infrastructure 2025 AI Foundations, architecting cloud-based AI analytics.",
      icon: "Cloud"
    }
  ],

  statistics: [
    { label: "Government Internship", value: "TULIP", description: "Ministry of Housing & Urban Affairs & AICTE" },
    { label: "AI & Cloud Certifications", value: "Oracle OCI", description: "Certified 2025 AI Foundations Associate" },
    { label: "Core CS Focus", value: "IET Agra", description: "B.E. Computer Science & Engineering" },
    { label: "Technical Specialization", value: "Python / CV", description: "OpenCV, Machine Learning & Infrastructure AI" }
  ],

  skillsByCategory: {
    "AI & Computer Vision": [
      { name: "Computer Vision", level: 90, icon: "Eye" },
      { name: "OpenCV", level: 92, icon: "Scan" },
      { name: "Machine Learning", level: 85, icon: "Brain" },
      { name: "Data Science", level: 82, icon: "BarChart3" },
      { name: "Image Processing", level: 88, icon: "Layers" }
    ],
    "Programming Languages": [
      { name: "Python", level: 94, icon: "Code2" },
      { name: "C Programming", level: 86, icon: "FileCode" },
      { name: "C++", level: 80, icon: "Terminal" },
      { name: "SQL", level: 85, icon: "Database" }
    ],
    "Core CS Fundamentals": [
      { name: "Operating Systems", level: 88, icon: "Cpu" },
      { name: "Database Management (DBMS)", level: 87, icon: "Database" },
      { name: "Computer Networks", level: 85, icon: "Network" },
      { name: "Data Structures & Algorithms", level: 84, icon: "GitBranch" }
    ],
    "Cloud & Infrastructure": [
      { name: "Oracle Cloud Infrastructure (OCI)", level: 88, icon: "Cloud" },
      { name: "Smart Urban Data Systems", level: 90, icon: "Building2" },
      { name: "Digital Infrastructure Planning", level: 86, icon: "Compass" },
      { name: "Git & Version Control", level: 88, icon: "GitCommit" }
    ]
  },

  experiences: [
    {
      id: "agra-smart-city",
      role: "Smart City Intern",
      company: "Agra Smart City Limited",
      department: "Department of Information Systems",
      program: "The Urban Learning Internship Program (TULIP)",
      location: "Agra, Uttar Pradesh, India",
      duration: "July 2025 – October 2025",
      period: "4 Months",
      badge: "Government Initiative",
      bullets: [
        "Selected for the prestigious TULIP internship program jointly launched by the Ministry of Housing & Urban Affairs (MoHUA) and AICTE.",
        "Worked directly with the Department of Information Systems at Agra Smart City Limited on municipal technology infrastructure.",
        "Supported smart city initiatives by contributing to urban data systems, infrastructure analysis, and smart governance technology.",
        "Engaged in the development, analysis, and reporting of smart urban systems and digital infrastructure planning.",
        "Submitted regular monthly technical reports to nodal officers while adhering to strict workplace ethics and engineering standards."
      ],
      technologies: ["Urban Data Systems", "Smart Governance", "Data Analytics", "Information Systems", "Python", "Infrastructure Reporting"],
      impactMetrics: [
        { label: "Scope", value: "Smart City Governance" },
        { label: "Program", value: "MoHUA & AICTE TULIP" },
        { label: "Domain", value: "Urban Data Systems" }
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "road-damage-detection",
      title: "Smart Infrastructure Road Damage & Anomaly Detection",
      category: "Computer Vision & AI",
      tagline: "Automated real-time computer vision pipeline for urban road condition monitoring and pothole classification.",
      description: "A computer vision solution engineered to automatically detect, localize, and classify road surface defects, potholes, and structural wear from video streams and image feeds. Designed to assist municipal infrastructure planning and smart city automated surveys.",
      problemSolved: "Manual road surface inspection in municipal management is time-consuming and expensive. This AI vision pipeline automates detection with high precision.",
      keyFeatures: [
        "Real-time video frame processing with OpenCV contour and spatial feature analysis",
        "Bounding box localization and severity scoring for surface anomalies",
        "Automated reporting dashboard for urban governance teams",
        "Optimized frame-skipping algorithm for edge computing deployment"
      ],
      technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning", "NumPy", "Matplotlib"],
      impact: "Reduces manual road inspection latency by up to 70% using automated video analysis.",
      githubUrl: "https://github.com/jaytiwari-tech/Road-Damage-Detection",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        { label: "Detection Latency", value: "< 35ms" },
        { label: "Accuracy Rate", value: "92.4%" },
        { label: "Framework", value: "OpenCV + Python" }
      ]
    },
    {
      id: "urban-mobility-vision",
      title: "AI-Driven Urban Traffic & Mobility Vision Analytics",
      category: "Smart City & Infrastructure",
      tagline: "Visual analytics system for municipal traffic monitoring, density estimation, and smart governance insights.",
      description: "An urban data intelligence pipeline leveraging computer vision to analyze vehicle flow, pedestrian density, and road usage patterns in smart city environments. Engineered during insights research for municipal infrastructure systems.",
      problemSolved: "Urban traffic bottleneck detection often relies on static hardware sensors. Vision-based monitoring leverages existing CCTV streams without extra infrastructure costs.",
      keyFeatures: [
        "Multi-object detection and tracking across dynamic urban intersections",
        "Real-time traffic density heatmap generation",
        "Automated congestion alert triggers for city control centers",
        "Data export integration for urban mobility planning reports"
      ],
      technologies: ["Python", "OpenCV", "Data Science", "Pandas", "Matplotlib", "Urban Data Systems"],
      impact: "Provides actionable traffic throughput statistics for smart city traffic light scheduling.",
      githubUrl: "https://github.com/jaytiwari-tech/urban-mobility-vision",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        { label: "Stream Support", value: "Full HD 60fps" },
        { label: "Data Pipeline", value: "Real-Time" },
        { label: "Target Sector", value: "Smart Governance" }
      ]
    },
    {
      id: "oci-cloud-ai-pipeline",
      title: "Oracle Cloud Native AI Infrastructure & Prediction Engine",
      category: "Computer Vision & AI",
      tagline: "Scalable cloud-integrated machine learning workflow leveraging Oracle Cloud Infrastructure AI services.",
      description: "A cloud architecture blueprint combining Oracle Cloud Infrastructure (OCI) AI Foundations principles with custom Python backend services for cloud-based machine learning data ingest and automated inference.",
      problemSolved: "Deploying local ML models to enterprise production environments requires robust cloud infrastructure and scalable storage management.",
      keyFeatures: [
        "OCI Cloud Object Storage integration for large-scale datasets",
        "RESTful model inference endpoint implementation",
        "Automated telemetry and cloud resource optimization",
        "Security-first identity and access management (IAM) policy design"
      ],
      technologies: ["Oracle Cloud Infrastructure", "Python", "Cloud Computing", "AI Foundations", "REST APIs"],
      impact: "Demonstrates enterprise-grade AI model deployment on Oracle Cloud Infrastructure.",
      githubUrl: "https://github.com/jaytiwari-tech/oci-cloud-ai-pipeline",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        { label: "Cloud Provider", value: "Oracle OCI" },
        { label: "Certification", value: "2025 AI Associate" },
        { label: "Uptime Goal", value: "99.9%" }
      ]
    },
    {
      id: "core-cs-data-engine",
      title: "Low-Level Database Kernel & Memory Optimizer",
      category: "Core CS & Systems",
      tagline: "High-performance data storage and query optimizer written in C and Python implementing core DBMS principles.",
      description: "An academic exploration into low-level systems programming, indexing algorithms (B-Tree & Hash Indexing), memory allocation, and relational query evaluation designed to demonstrate core CS data structure mastery.",
      problemSolved: "Understanding relational database engines at the byte and memory layout level to write optimized SQL and system software.",
      keyFeatures: [
        "Custom binary file page manager and buffer pool implementation",
        "B-Tree index creation and multi-column lookup benchmarking",
        "Process scheduling and memory management simulations",
        "SQL query parser and execution tree visualization"
      ],
      technologies: ["C Programming", "Python", "DBMS", "Operating Systems", "Data Structures"],
      impact: "Demonstrates strong foundational knowledge in systems programming, OS memory structures, and database internals.",
      githubUrl: "https://github.com/jaytiwari-tech/core-cs-data-engine",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        { label: "Language", value: "C / Python" },
        { label: "Domain", value: "Systems & DBMS" },
        { label: "Speed", value: "Native C Exec" }
      ]
    }
  ] as Project[],

  education: [
    {
      institution: "Institute of Engineering & Technology (IET), Agra",
      affiliation: "Dr. Bhim Rao Ambedkar University, Agra",
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
      startYear: "2022 – 2026",
      status: "CSE Major (2022 – 2026)",
      highlights: [
        "Specializing in Computer Science & Engineering with coursework in OS, DBMS, Computer Networks, and AI.",
        "Active technical project developer focusing on Python, Computer Vision, and Data Science applications."
      ]
    }
  ],

  certifications: [
    {
      id: "oracle-oci-ai-2025",
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle Corporation",
      date: "2025",
      badge: "Verified Oracle Certification",
      description: "Demonstrates foundational expertise in AI/ML concepts, Oracle Cloud AI services, Generative AI models, machine learning lifecycle management, and cloud architecture.",
      skillsVerified: ["Oracle Cloud Infrastructure", "Artificial Intelligence", "Machine Learning", "Generative AI", "Cloud Architecture"]
    },
    {
      id: "tulip-internship-cert",
      title: "The Urban Learning Internship Program (TULIP) Certification",
      issuer: "Ministry of Housing & Urban Affairs (MoHUA) & AICTE",
      date: "2025",
      badge: "Government Internship Program",
      description: "Official government recognition for completing the Smart City Internship with Agra Smart City Limited in the Department of Information Systems.",
      skillsVerified: ["Smart Infrastructure", "Urban Data Systems", "Digital Governance", "Technical Reporting", "Smart City Technologies"]
    }
  ] as Certification[]
};
