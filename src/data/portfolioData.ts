export interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  bullets: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface GitHubRepo {
  name: string;
  repoUrl: string;
  description: string;
  category: "Full Stack & Cloud" | "Backend Microservice" | "Data & Business Intelligence";
  techStack: string[];
  liveUrl?: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: "Microsoft" | "Google";
  validity: string;
  status: "Active" | "Certified";
  credentialId?: string;
  badgeColor: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: "Advanced" | "Proficient" | "Familiar"; icon?: string }[];
}

export const portfolioData = {
  personal: {
    name: "Aravind Kontham",
    role: "Azure, .NET & BizTalk Integration Engineer",
    company: "Capgemini",
    headline: "Engineering Scalable Cloud Services, Enterprise BizTalk Integrations & High-Throughput Microservices",
    bio: "Azure, .NET, and BizTalk Developer at Capgemini with specialized expertise in Enterprise Application Integration (EAI), orchestrations, schemas, and maps, combined with modern cloud solutions using Azure Integration Services (Logic Apps, Function Apps, Service Bus, APIM, and Data Factory) and ASP.NET Core microservices.",
    location: "Hyderabad / Telangana, India",
    phone: "+91 6305527319",
    email: "aravindkontham11@gmail.com",
    github: "https://github.com/aravindkontham",
    githubHandle: "aravindkontham",
    linkedin: "https://linkedin.com/in/aravind-kontham/",
    linkedinHandle: "aravind-kontham",
    leetcode: "https://leetcode.com/u/Aravind_Kontham/",
    leetcodeHandle: "Aravind_Kontham",
    resumeUrl: "/Aravind_Resume.pdf",
    stats: [
      { label: "Current Role", value: "Capgemini SWE" },
      { label: "Cloud & AI", value: "4x Certified" },
      { label: "Core Stack", value: "Azure, .NET & BizTalk" },
      { label: "B.Tech CGPA", value: "8.79 / 10" },
    ],
  },

  recruiterQuickFacts: [
    {
      title: "Current Status",
      desc: "Software Engineer at Capgemini building enterprise BizTalk integration workflows, .NET microservices, and Azure cloud solutions.",
    },
    {
      title: "Core Competency",
      desc: "Enterprise Application Integration (EAI) with Microsoft BizTalk Server (Orchestrations, Maps, Pipelines, Adapters), coupled with Azure Integration Services (Logic Apps, Service Bus, APIM, ADF) and ASP.NET Core microservices.",
    },
    {
      title: "Recognitions & Certifications",
      desc: "Microsoft Certified Azure AI Engineer Associate, Azure Fundamentals, Azure AI Fundamentals, and Google Generative AI Leader.",
    },
    {
      title: "Academic Background",
      desc: "B.Tech in Computer Science from Lovely Professional University (8.79 CGPA) with exceptional academic track record (98.2% Intermediate, 96.4% 10th JNV).",
    },
  ],

  experiences: [
    {
      company: "Capgemini Technology Services India Limited",
      role: "Software Engineer – Azure, .NET & BizTalk Developer",
      period: "Jul 2025 – Present",
      location: "India",
      type: "Full-time",
      summary: "Spearheading Enterprise Application Integration (EAI) with Microsoft BizTalk Server, cloud-native backend development, and Azure integrations for client systems.",
      bullets: [
        "Implement enterprise BizTalk Server integration use cases, building orchestrations, XML/XSLT maps, message schemas, and custom pipeline components.",
        "Configure BizTalk adapters (WCF, SQL, FILE, SFTP) to facilitate reliable B2B data exchanges and seamless connectivity with line-of-business systems.",
        "Bridge on-premise BizTalk architectures with Microsoft Azure cloud infrastructure using Azure Service Bus, Logic Apps, and API Management.",
        "Architect and develop scalable, secure RESTful microservices and data pipelines using ASP.NET Core (.NET 8) and Azure Data Factory (ADF).",
      ],
      technologies: ["Microsoft BizTalk Server", "C# .NET", "ASP.NET Core", "Azure Logic Apps", "Function Apps", "Service Bus", "Azure Data Factory", "APIM", "Docker", "SQL Server"],
    },
    {
      company: "Capgemini Technology Services India Limited",
      role: "Intern – .NET Backend Development",
      period: "Jan 2025 – Jun 2025",
      location: "India",
      type: "Internship",
      summary: "Intensive backend training and real-world microservice feature engineering in .NET and Azure ecosystems.",
      bullets: [
        "Completed rigorous enterprise training in .NET backend development, modern C# paradigms, and clean architectural patterns.",
        "Constructed high-performance Web APIs managing CRUD operations, transactional validation, and business logic layers.",
        "Integrated distributed Azure services including Azure Service Bus, Event Grid, Logic Apps, and Serverless Function Apps.",
        "Designed scalable microservices compliant with industry code quality standards, unit testing, and Swagger specifications.",
      ],
      technologies: ["C#", "ASP.NET Core Web API", "Event Grid", "Service Bus", "Logic Apps", "Entity Framework Core", "Swagger"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      title: "Azure Data Factory ETL Pipeline Implementation",
      category: "Cloud Data Engineering",
      period: "Feb 2026 – Mar 2026",
      description: "Enterprise-grade automated ETL pipeline built to extract, transform, and load relational transactional data into high-performance cloud storage.",
      bullets: [
        "Designed and orchestrated end-to-end ETL pipelines in Azure Data Factory connecting Azure SQL Database (Source) to Azure Blob Storage (Sink).",
        "Configured Copy and Data Flow activities for high-volume data ingestion, batch processing, and schema mapping.",
        "Applied robust data transformations using Derived Columns and conditional splits to cleanse and enhance downstream data quality.",
        "Automated scheduled triggers and monitor alerts ensuring pipeline reliability and minimum latency.",
      ],
      techStack: ["Azure Data Factory", "Azure SQL Database", "Azure Blob Storage", "ETL", "Data Flows", "Cloud Storage"],
      highlights: ["Automated Batch Processing", "Data Cleansing Transformations", "Enterprise Monitoring"],
    },
    {
      title: "API Management (APIM) Implementation for Car Wash Backend",
      category: "API Gateway & Security",
      period: "Jan 2026 – Feb 2026",
      description: "Centralized API Gateway and security policy layer built on Azure APIM to protect, throttle, and standardize backend microservices.",
      bullets: [
        "Provisioned and fine-tuned Azure API Management (APIM) as a unified gateway for distributed car wash backend microservices.",
        "Enforced security compliance by implementing JWT token validation, rate-limiting policies, and custom header transformations.",
        "Configured centralized inbound/outbound error handling and logging policies to elevate service availability and resilience.",
        "Exposed clear developer documentation and API mocks for frictionless frontend and partner consumption.",
      ],
      techStack: ["Azure API Management", "JWT Auth", "Policy XML", "ASP.NET Core", "Rate Limiting", "Swagger/OpenAPI"],
      highlights: ["JWT Token Validation", "DDoS & Rate Limiting Policies", "Fault-tolerant Error Handling"],
    },
    {
      title: "On-Demand Car Wash Backend Management System",
      category: "Backend Microservices",
      period: "Feb 2025",
      description: "Robust modular RESTful backend system managing customer bookings, service packages, technician assignments, and billing workflows.",
      bullets: [
        "Engineered scalable REST APIs using ASP.NET Core adhering to the Controller-Service-Repository multi-tiered pattern.",
        "Integrated Microsoft SQL Server with Entity Framework Core, incorporating migrations, indexing, and optimistic concurrency.",
        "Enforced SOLID principles, dependency injection, and clean separation of concerns throughout the codebase.",
        "Documented all endpoints interactively with Swagger/OpenAPI for rapid integration testing.",
      ],
      techStack: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "REST APIs", "Repository Pattern", "Swagger"],
      githubUrl: "https://github.com/aravindkontham/On-Demand-Car-Wash",
      highlights: ["Controller-Service-Repository Pattern", "Entity Framework Core", "Full Swagger Documentation"],
    },
    {
      title: "ChandaTracker - Cloud Donation & Donor Management",
      category: "Full Stack & Cloud",
      period: "Recent",
      description: "Full-stack cloud application featuring login authentication, receipt photo uploads to cloud storage, automated timestamps, and an auto-scrolling donor leaderboard.",
      bullets: [
        "Developed modern reactive UI with Next.js and Tailwind CSS hosted on Vercel.",
        "Integrated Supabase PostgreSQL database, authentication triggers, and S3-compatible cloud storage buckets.",
        "Implemented strict Row-Level Security (RLS) policies ensuring regular members can view/contribute while only admins can modify entries.",
        "Constructed an auto-scrolling leaderboard algorithm aggregating donor contributions in real time.",
      ],
      techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS Policies", "Vercel", "Tailwind CSS"],
      githubUrl: "https://github.com/aravindkontham/ChandaTracker",
      liveUrl: "https://chanda-tracker-swart.vercel.app/",
      highlights: ["Supabase Row-Level Security", "Cloud Photo Storage", "Real-Time Leaderboard"],
    },
    {
      title: "CRM Sales Pipeline Executive Analytics Dashboard",
      category: "Data & Business Intelligence",
      period: "Recent",
      description: "Multi-page interactive Power BI dashboard providing deep visibility into sales pipeline conversion, deal velocity, stage attrition, and revenue projections.",
      bullets: [
        "Modelled enterprise sales data relationships and formulated optimized DAX measures for pipeline tracking.",
        "Engineered visual dashboards covering single-page executive overviews and detailed multi-page drilldowns.",
        "Enabled sales leadership to benchmark sales rep win/loss ratios and identify revenue bottlenecks.",
      ],
      techStack: ["Power BI", "DAX", "Data Modeling", "ETL", "Sales Analytics", "Data Visualization"],
      githubUrl: "https://github.com/aravindkontham/CRM-SALES-PIPELINE-DASHBOARD",
      highlights: ["Executive Dashboard", "Advanced DAX Calculations", "Multi-Page Drilldowns"],
    },
    {
      title: "Email Insights & Workforce Communication Analytics",
      category: "Data & Business Intelligence",
      period: "Recent",
      description: "Comprehensive Power BI business analytics report uncovering email communication patterns, response latency across departments, and employee engagement metrics.",
      bullets: [
        "Built customized data models in Power BI to analyze workforce email velocity and communication volume.",
        "Created multi-page analytical views (Overview and Employee Breakdown) with dynamic filtering and KPIs.",
        "Surfaced actionable productivity insights regarding peak email hours and organizational response delays.",
      ],
      techStack: ["Power BI", "Data Modeling", "DAX", "Workforce Analytics", "KPI Dashboards"],
      githubUrl: "https://github.com/aravindkontham/Email-Insights-PowerBi-Report",
      highlights: ["Communication Analytics", "Workforce Metrics", "Interactive Filtering"],
    },
  ] as Project[],

  githubRepos: [
    {
      name: "ChandaTracker",
      repoUrl: "https://github.com/aravindkontham/ChandaTracker",
      liveUrl: "https://chanda-tracker-swart.vercel.app/",
      description: "Login-protected web application to record chanda (donations) with photo uploads to Supabase storage, automated timestamps, Row-Level Security (RLS) policies, and an auto-scrolling donor leaderboard.",
      category: "Full Stack & Cloud",
      techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
      highlights: ["Supabase Auth & Storage", "Row-Level Security (RLS)", "Auto-scrolling Leaderboard"],
    },
    {
      name: "On-Demand-Car-Wash",
      repoUrl: "https://github.com/aravindkontham/On-Demand-Car-Wash",
      description: "Modular enterprise RESTful backend system built with ASP.NET Core managing customer bookings, service packages, technician assignments, and billing workflows with EF Core & SQL Server.",
      category: "Backend Microservice",
      techStack: ["ASP.NET Core", "C#", "EF Core", "SQL Server", "REST APIs", "Swagger"],
      highlights: ["Controller-Service-Repository Pattern", "Relational EF Core Migrations", "Swagger UI"],
    },
    {
      name: "CRM-SALES-PIPELINE-DASHBOARD",
      repoUrl: "https://github.com/aravindkontham/CRM-SALES-PIPELINE-DASHBOARD",
      description: "Executive multi-page Power BI dashboard delivering deep analytics on sales pipeline conversion, deal velocity, quarterly forecasts, and sales team KPI performance.",
      category: "Data & Business Intelligence",
      techStack: ["Power BI", "DAX", "Data Modeling", "ETL", "Executive Dashboards"],
      highlights: ["Executive Dashboard", "Advanced DAX Measures", "Executive Reporting"],
    },
    {
      name: "Email-Insights-PowerBi-Report",
      repoUrl: "https://github.com/aravindkontham/Email-Insights-PowerBi-Report",
      description: "Enterprise communication analytics report tracking email velocity, department response latencies, employee engagement distributions, and peak collaboration hours.",
      category: "Data & Business Intelligence",
      techStack: ["Power BI", "DAX", "Workforce Analytics", "KPIs", "Data Visualization"],
      highlights: ["Workforce Analytics", "Employee Metrics", "Peak Hour Analysis"],
    },
  ] as GitHubRepo[],

  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "C# (.NET)", level: "Advanced" },
        { name: "Python", level: "Proficient" },
        { name: "Java", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      category: "Backend & Architecture",
      skills: [
        { name: "ASP.NET Core Web API", level: "Advanced" },
        { name: "Microservices Architecture", level: "Advanced" },
        { name: "RESTful API Design", level: "Advanced" },
        { name: "Entity Framework Core", level: "Advanced" },
        { name: "SOLID Principles & Clean Architecture", level: "Advanced" },
        { name: "Dependency Injection", level: "Advanced" },
      ],
    },
    {
      category: "Enterprise Integration & BizTalk",
      skills: [
        { name: "Microsoft BizTalk Server", level: "Advanced" },
        { name: "BizTalk Orchestrations & Workflows", level: "Advanced" },
        { name: "Schemas, Maps & XSLT", level: "Advanced" },
        { name: "Custom Pipelines & Decoders", level: "Advanced" },
        { name: "BizTalk Adapters (WCF, SQL, FILE, SFTP)", level: "Advanced" },
        { name: "EAI & B2B Messaging", level: "Advanced" },
        { name: "Hybrid Cloud Integration (BizTalk + Azure)", level: "Advanced" },
      ],
    },
    {
      category: "Microsoft Azure Cloud",
      skills: [
        { name: "Azure Logic Apps", level: "Advanced" },
        { name: "Azure Function Apps (Serverless)", level: "Advanced" },
        { name: "Azure Service Bus", level: "Advanced" },
        { name: "Azure Data Factory (ADF)", level: "Advanced" },
        { name: "Azure API Management (APIM)", level: "Advanced" },
        { name: "Azure Event Grid", level: "Proficient" },
        { name: "Azure Blob Storage", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "Azure SQL Database", level: "Advanced" },
        { name: "Microsoft SQL Server", level: "Advanced" },
        { name: "PostgreSQL / Supabase", level: "Proficient" },
        { name: "MySQL", level: "Proficient" },
        { name: "Data Modeling & Indexing", level: "Proficient" },
      ],
    },
    {
      category: "DevOps & Developer Tools",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Proficient" },
        { name: "Visual Studio & VS Code", level: "Advanced" },
        { name: "Swagger / OpenAPI", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Power BI (DAX)", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  certifications: [
    {
      name: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      validity: "Mar 2026 – Mar 2027",
      status: "Certified",
      badgeColor: "from-blue-600 to-cyan-500",
    },
    {
      name: "Generative AI Leader Certification",
      issuer: "Google",
      validity: "Mar 2026 – Mar 2029",
      status: "Certified",
      badgeColor: "from-amber-500 to-rose-500",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      validity: "Issued Jan 2026",
      status: "Certified",
      badgeColor: "from-blue-500 to-indigo-600",
    },
    {
      name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      validity: "Issued Oct 2022",
      status: "Certified",
      badgeColor: "from-cyan-600 to-blue-700",
    },
  ] as Certification[],

  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      score: "CGPA: 8.79 / 10",
      period: "2020 – 2024",
      location: "Phagwara, Punjab",
    },
    {
      institution: "Nano Junior College",
      degree: "Intermediate (Class XII, MPC)",
      score: "Percentage: 98.2%",
      period: "Apr 2018 – Mar 2019",
      location: "Hyderabad, Telangana",
    },
    {
      institution: "Jawahar Navodaya Vidyalaya (JNV)",
      degree: "Secondary School (Class X, CBSE)",
      score: "Percentage: 96.4%",
      period: "Jun 2017 – Mar 2018",
      location: "Warangal, Telangana",
    },
  ],
};
