/**
 * Skills data organized by category
 * Based on resume: Ramoji Saikiran
 * To add new skills:
 * 1. Add a new object to the category array with { name, level }
 * 2. level: "expert" | "advanced" | "intermediate"
 */

export const skillsData = {
  programmingLanguages: {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", level: "expert" },
    ]
  },
  
  backendFrameworks: {
    category: "Frameworks & Libraries",
    icon: "server",
    skills: [
      { name: "FastAPI", level: "expert" },
      { name: "Flask", level: "advanced" },
      { name: "Hugging Face Transformers", level: "expert" },
    ]
  },

  llmMetrics: {
    category: "LLM Evaluation Metrics",
    icon: "brain",
    skills: [
      { name: "Cosine Similarity", level: "expert" },
      { name: "ROUGE", level: "expert" },
      { name: "BLEU", level: "expert" },
      { name: "LLM Fine-tuning", level: "advanced" },
    ]
  },

  databases: {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: "advanced" },
      { name: "Redis", level: "advanced" },
    ]
  },

  monitoring: {
    category: "Monitoring & Visualization",
    icon: "chart",
    skills: [
      { name: "Grafana", level: "advanced" },
      { name: "Prometheus", level: "advanced" },
      { name: "Matplotlib", level: "advanced" },
      { name: "GPU/CPU/RAM Monitoring", level: "advanced" },
    ]
  },

  devops: {
    category: "DevOps & Tools",
    icon: "deploy",
    skills: [
      { name: "Docker", level: "advanced" },
      { name: "CI/CD Pipelines", level: "advanced" },
      { name: "Git/GitHub", level: "advanced" },
      { name: "Postman", level: "advanced" },
    ]
  },

  collaboration: {
    category: "Project Management",
    icon: "tools",
    skills: [
      { name: "JIRA", level: "advanced" },
      { name: "Slack", level: "advanced" },
    ]
  }
};

/**
 * Flat array of all skills for easier filtering/searching
 */
export const allSkills = Object.values(skillsData).flatMap(category =>
  category.skills.map(skill => ({
    ...skill,
    category: category.category
  }))
);
