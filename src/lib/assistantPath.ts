export interface AssistantPathModule {
  order: number;
  slug: string;
  label: string;
  focus: string;
  duration: number;
}

export interface AssistantPathTrack {
  id: string;
  name: string;
  eyebrow: string;
  color: string;
  tint: string;
  modules: AssistantPathModule[];
}

export const assistantPathCommon: AssistantPathModule[] = [
  {
    order: 0,
    slug: 'comprendre-ia-generative',
    label: "Comprendre l'IA générative",
    focus: 'LLM, probabiliste, responsable',
    duration: 120,
  },
  {
    order: 1,
    slug: 'apprendre-dialoguer-ia',
    label: "Apprendre à parler avec l'IA",
    focus: 'Source → Objectif → Contexte → Attentes → Validation',
    duration: 210,
  },
  {
    order: 2,
    slug: 'piloter-conversation-ia',
    label: 'Piloter une conversation pour réaliser une tâche',
    focus: 'Conduire une tâche de bout en bout par la conversation',
    duration: 210,
  },
];

export const assistantPathTracks: AssistantPathTrack[] = [
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    eyebrow: 'Assistant généraliste Microsoft',
    color: '#2563eb',
    tint: '#eff6ff',
    modules: [
      { order: 3, slug: 'microsoft-copilot-interface', label: 'Interface, paramètres et personnalisation', focus: 'Installer son espace de travail', duration: 210 },
      { order: 4, slug: 'microsoft-copilot-fichiers-recherche', label: 'Rechercher, analyser et travailler avec des fichiers', focus: 'Mobiliser les sources utiles à la tâche', duration: 210 },
      { order: 5, slug: 'microsoft-copilot-cowork', label: 'Cowork', focus: 'Déléguer une tâche', duration: 210 },
      { order: 6, slug: 'microsoft-copilot-code', label: 'Copilot Code', focus: 'Créer une solution', duration: 210 },
      { order: 7, slug: 'microsoft-copilot-autopilot', label: 'Autopilot', focus: 'Travail persistant et proactif', duration: 210 },
      { order: 8, slug: 'github-copilot-cli', label: 'GitHub Copilot CLI', focus: 'Réaliser une tâche dans le terminal', duration: 210 },
    ],
  },
  {
    id: 'microsoft-365-copilot',
    name: 'Microsoft 365 Copilot',
    eyebrow: 'Assistant de travail Microsoft 365',
    color: '#059669',
    tint: '#ecfdf5',
    modules: [
      { order: 3, slug: 'microsoft-365-copilot-interface', label: 'Interface, Work IQ, sources et permissions', focus: 'Comprendre le contexte de travail Microsoft 365', duration: 210 },
      { order: 4, slug: 'microsoft-365-copilot-word-powerpoint', label: 'Word & PowerPoint', focus: 'Produire et transformer', duration: 210 },
      { order: 5, slug: 'microsoft-365-copilot-excel-analyst', label: 'Excel & Analyst', focus: 'Analyser les données', duration: 210 },
      { order: 6, slug: 'microsoft-365-copilot-outlook-teams', label: 'Outlook & Teams', focus: 'Communiquer et collaborer', duration: 210 },
      { order: 7, slug: 'microsoft-365-copilot-sharepoint-onedrive', label: 'SharePoint & OneDrive', focus: 'Retrouver et capitaliser', duration: 210 },
      { order: 8, slug: 'microsoft-365-copilot-pages-loop-bloc-notes', label: 'Pages, Loop & Bloc-notes', focus: 'Contexte de travail persistant', duration: 210 },
      { order: 9, slug: 'microsoft-365-copilot-researcher-agents', label: 'Researcher & Agents', focus: 'Recherche et délégation', duration: 210 },
      { order: 10, slug: 'microsoft-365-copilot-cowork', label: 'Copilot Cowork', focus: 'Exécuter une tâche entre applications', duration: 210 },
    ],
  },
  {
    id: 'chatgpt',
    name: 'OpenAI — ChatGPT',
    eyebrow: 'Assistant OpenAI',
    color: '#7c3aed',
    tint: '#f5f3ff',
    modules: [
      { order: 3, slug: 'chatgpt-interface', label: 'Interface, paramètres et personnalisation', focus: 'Installer son espace de travail', duration: 210 },
      { order: 4, slug: 'chatgpt-documents-donnees', label: 'Documents, fichiers et analyse de données', focus: 'Travailler avec ses sources', duration: 210 },
      { order: 5, slug: 'chatgpt-projects', label: 'Projects', focus: 'Contexte de travail persistant', duration: 210 },
      { order: 6, slug: 'chatgpt-recherche-plugins', label: 'Recherche, plugins et sources connectées', focus: 'Étendre les sources et capacités', duration: 210 },
      { order: 7, slug: 'chatgpt-work', label: 'ChatGPT Work', focus: 'Déléguer une tâche complexe', duration: 210 },
      { order: 8, slug: 'codex', label: 'Codex', focus: 'Réaliser une tâche de développement', duration: 210 },
      { order: 9, slug: 'codex-cli', label: 'Codex CLI', focus: 'Réaliser une tâche dans le terminal', duration: 210 },
    ],
  },
  {
    id: 'claude',
    name: 'Anthropic — Claude',
    eyebrow: 'Assistant Anthropic',
    color: '#ea580c',
    tint: '#fff7ed',
    modules: [
      { order: 3, slug: 'claude-interface', label: 'Interface, paramètres et personnalisation', focus: 'Installer son espace de travail', duration: 210 },
      { order: 4, slug: 'claude-documents-artifacts', label: 'Documents & Artifacts', focus: 'Produire des livrables', duration: 210 },
      { order: 5, slug: 'claude-projects-connectors-skills', label: 'Projects, Connectors & Skills', focus: 'Contexte de travail persistant', duration: 210 },
      { order: 6, slug: 'claude-recherche-analyse', label: 'Recherche et analyse', focus: 'Travailler avec des sources', duration: 210 },
      { order: 7, slug: 'claude-cowork', label: 'Claude Cowork', focus: 'Déléguer une tâche complexe', duration: 210 },
      { order: 8, slug: 'claude-code', label: 'Claude Code', focus: 'Réaliser une tâche de développement', duration: 210 },
      { order: 9, slug: 'claude-code-cli', label: 'Claude Code CLI', focus: 'Réaliser une tâche dans le terminal', duration: 210 },
    ],
  },
  {
    id: 'mistral-vibe',
    name: 'Mistral — Vibe',
    eyebrow: 'Assistant Mistral AI',
    color: '#ca8a04',
    tint: '#fefce8',
    modules: [
      { order: 3, slug: 'mistral-vibe-interface', label: 'Interface, paramètres, Fast / Think', focus: 'Installer son espace de travail', duration: 210 },
      { order: 4, slug: 'mistral-vibe-documents-recherche', label: 'Documents, recherche et analyse', focus: 'Travailler avec ses sources', duration: 210 },
      { order: 5, slug: 'mistral-vibe-projects-skills', label: 'Projects, Skills et tâches planifiées', focus: 'Contexte et capacités persistantes', duration: 210 },
      { order: 6, slug: 'mistral-vibe-agentique', label: 'Vibe agentique', focus: 'Réaliser une tâche multi-étapes', duration: 210 },
      { order: 7, slug: 'mistral-vibe-code', label: 'Vibe Code', focus: 'Réaliser une tâche de développement', duration: 210 },
      { order: 8, slug: 'mistral-vibe-cli', label: 'Vibe CLI', focus: 'Réaliser une tâche dans le terminal', duration: 210 },
    ],
  },
];
