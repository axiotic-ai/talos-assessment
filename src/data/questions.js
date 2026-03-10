export const sections = [
  {
    id: 1,
    title: 'AI Landscape & Data Governance',
    emoji: '🗄️',
    description: 'Understand your current AI usage, data foundations, and shadow AI exposure.',
    questions: [
      'Do you have a complete inventory of all AI tools and systems currently used across your organisation?',
      'Have you identified any "shadow AI" — tools or AI services being used informally without IT or leadership approval?',
      'Is there a written policy covering how data is collected, stored, and used — including for AI purposes?',
      'Do you have processes for data quality assurance, versioning, and lineage tracking?',
      'Have you assessed your existing data to determine its suitability, accuracy, and completeness for AI use cases?',
    ],
  },
  {
    id: 2,
    title: 'Governance, Risk & Oversight',
    emoji: '🛡️',
    description: 'Evaluate your AI governance structures, risk management, and human oversight.',
    questions: [
      'Is there an AI governance committee or designated oversight function within your organisation?',
      'Do you have a process for classifying AI use cases by risk level (minimal, limited, high, prohibited)?',
      'Are there defined roles and responsibilities (e.g., RACI) for AI decision-making, risk, and compliance?',
      'Do you have human oversight mechanisms — including override and appeal processes — for AI-driven decisions?',
      'Is there a documented process for identifying, assessing, and managing AI-specific risks?',
    ],
  },
  {
    id: 3,
    title: 'Procurement, Operations & Security',
    emoji: '⚙️',
    description: 'Review your AI procurement practices, operational readiness, and security posture.',
    questions: [
      'Do you have a structured checklist or framework for evaluating and procuring AI tools and vendors?',
      'Is there a clear process for testing, validating, and approving AI models before they go live?',
      'Do you have tools and processes to monitor AI models in production — including drift detection and performance tracking?',
      'Have you implemented security measures against AI-specific threats (adversarial attacks, prompt injection, data poisoning)?',
      'Is there an incident response plan specifically for AI system failures or harmful outputs?',
    ],
  },
  {
    id: 4,
    title: 'Compliance, Ethics & AI Literacy',
    emoji: '📚',
    description: 'Assess your regulatory compliance, ethical AI practices, and organisational AI literacy.',
    questions: [
      'Have you mapped how applicable regulations (EU AI Act, GDPR, sector-specific rules) apply to your AI systems?',
      'Is there a responsible AI policy or ethical guidelines covering fairness, transparency, and accountability?',
      'Do you have processes for AI transparency — including disclosing to users when AI is being used?',
      'Have you implemented AI literacy training appropriate for different roles (leadership, technical teams, all staff)?',
      'Do you have documented evidence of AI governance training that demonstrates regulatory compliance readiness?',
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
      'Your organisation has significant gaps in AI governance and readiness. You are at risk of shadow AI exposure, regulatory non-compliance, and unmanaged AI risks. We recommend starting with a comprehensive AI landscape assessment and establishing foundational policies. Talos Stage 1 — AI Usage Assessment & Baseline Controls — is designed for exactly this starting point.',
  },
  {
    min: 31,
    max: 50,
    label: 'Developing',
    color: '#f59e0b',
    recommendation:
      'You\'ve started building some AI capabilities but there are important gaps — particularly around governance structure, procurement practices, and regulatory alignment. With the EU AI Act Article 4 (AI Literacy) enforcement beginning August 2026, now is the time to formalise your approach. Talos can help you build a compliant governance framework and upskill your teams.',
  },
  {
    min: 51,
    max: 75,
    label: 'Established',
    color: '#3b82f6',
    recommendation:
      'Your organisation has solid foundations in place. To advance further, focus on scaling your governance model — moving from static documentation to dynamic, adaptive governance. Consider strengthening AI procurement frameworks, implementing continuous monitoring, and preparing for EU AI Act compliance deadlines. Talos Stage 2–3 can help you close the remaining gaps.',
  },
  {
    min: 76,
    max: 100,
    label: 'Advanced',
    color: '#00d4aa',
    recommendation:
      'Excellent — your organisation demonstrates strong AI governance maturity across all dimensions. To maintain your edge, consider deploying an agentic AI governance assistant that provides on-demand, policy-aligned guidance and adapts dynamically as regulations evolve. Talos Stage 4 — Scaling AI Governance — is built for organisations at your level.',
  },
];
