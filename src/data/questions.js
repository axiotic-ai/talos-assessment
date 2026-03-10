export const sections = [
  {
    id: 1,
    title: 'Data & Infrastructure',
    emoji: '🗄️',
    description: 'Assess your data foundations and infrastructure readiness for AI adoption.',
    questions: [
      'Does your organisation have the computing resources needed to run AI tools?',
      'Do you have reliable systems for storing and managing data securely?',
      'Have you reviewed your data to check it\'s accurate, complete, and suitable for AI use?',
      'Is there a written policy covering how data is collected, stored, and used?',
      'Do you have processes for data versioning and lineage tracking?',
    ],
  },
  {
    id: 2,
    title: 'People & Skills',
    emoji: '👥',
    description: 'Evaluate your team\'s AI capabilities and organisational readiness.',
    questions: [
      'Do you have team members with experience in AI or machine learning?',
      'Have you identified people responsible for driving AI initiatives?',
      'Is there a plan to upskill staff as AI is introduced?',
      'Does your leadership team understand AI well enough to make informed decisions?',
      'Do you have access to external AI expertise when needed?',
    ],
  },
  {
    id: 3,
    title: 'Technology & Operations',
    emoji: '⚙️',
    description: 'Review your technical capabilities and operational processes for AI.',
    questions: [
      'Can your technology setup scale to handle AI workloads?',
      'Do you use agile or iterative methods suited to AI development?',
      'Is there a clear process for testing and validating AI models before deployment?',
      'Do you have tools to monitor AI models in production?',
      'Is there an MLOps or model lifecycle management process in place?',
    ],
  },
  {
    id: 4,
    title: 'Governance & Compliance',
    emoji: '🛡️',
    description: 'Examine your governance frameworks and regulatory compliance posture.',
    questions: [
      'Do you have a process for identifying and managing AI-specific risks?',
      'Have you mapped how regulations (GDPR, EU AI Act) apply to your AI work?',
      'Is there a responsible AI policy or ethical guidelines in place?',
      'Do you have processes for AI model explainability and transparency?',
      'Is there an AI governance committee or designated oversight function?',
    ],
  },
];

export const answerOptions = [
  { value: 0, label: "Don't Know", color: 'bg-slate-600 border-slate-500' },
  { value: 1, label: 'No', color: 'bg-red-900/30 border-red-500/50' },
  { value: 2, label: 'Yes', color: 'bg-teal/20 border-teal/50' },
];

export const readinessLevels = [
  {
    min: 0,
    max: 30,
    label: 'Not Ready',
    color: '#ef4444',
    recommendation:
      'Your organisation is in the early stages of AI readiness. Focus on building foundational data infrastructure, upskilling your team, and establishing basic governance frameworks. Consider partnering with AI consultants to develop a strategic roadmap.',
  },
  {
    min: 31,
    max: 50,
    label: 'Developing',
    color: '#f59e0b',
    recommendation:
      'You\'ve started building AI capabilities but there are significant gaps to address. Prioritise formalising your data management practices, expanding AI skills across your team, and developing comprehensive governance policies aligned with regulations like the EU AI Act.',
  },
  {
    min: 51,
    max: 75,
    label: 'Established',
    color: '#3b82f6',
    recommendation:
      'Your organisation has solid AI foundations in place. To advance further, focus on scaling your AI operations, implementing robust MLOps practices, and strengthening your governance framework. Consider establishing an AI Centre of Excellence to drive innovation.',
  },
  {
    min: 76,
    max: 100,
    label: 'Advanced',
    color: '#00d4aa',
    recommendation:
      'Excellent! Your organisation demonstrates strong AI readiness across all dimensions. Continue to refine your practices, stay ahead of evolving regulations, and focus on driving measurable business value from your AI investments. Consider sharing best practices across your industry.',
  },
];
