/**
 * Combined Experience & Projects Section
 * Displays work experience and projects in a unified layout
 */

import { Section, Container, Card } from '../components';

export const ExperienceProjectsSection = () => {
    return (
        <Section id="experience" dark={false}>
            <Container>
                <div className="max-w-3xl mx-auto">
                    {/* Experience Card */}
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-dark-900 dark:text-white">
                            Experience
                        </h2>

                        <Card className="bg-white dark:bg-dark-800 shadow-md hover:shadow-lg transition-shadow">
                            <div className="space-y-4">
                                <ul className="space-y-2 text-base text-dark-700 dark:text-dark-300">
                                    <li>Designed and developed Python FastAPI backend services for LLM evaluation and fine-tuning workflows</li>
                                    <li>Integrated Hugging Face Transformers to manage LLM inference and fine-tuning pipelines</li>
                                    <li>Implemented NLP evaluation metrics including ROUGE, BLEU, and Cosine Similarity</li>
                                    <li>Built real-time GPU, CPU, and RAM monitoring using Prometheus and Grafana</li>
                                    <li>Designed scalable data storage using MongoDB and Redis</li>
                                    <li>Containerized AI backend services using Docker with GPU-enabled deployments</li>
                                    <li>Implemented observability and performance monitoring to detect system bottlenecks</li>
                                </ul>
                            </div>
                        </Card>
                    </div>

                    {/* Projects Card */}
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-dark-900 dark:text-white">
                            Projects
                        </h2>

                        <Card className="bg-white dark:bg-dark-800 shadow-md hover:shadow-lg transition-shadow">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-dark-900 dark:text-white">
                                    GEN-X Platform
                                </h3>
                                <p className="text-sm text-dark-700 dark:text-dark-300 leading-relaxed">
                                    Developed an AI-driven backend platform for building, evaluating, and improving AI agents using prompt engineering, automated NLP evaluation metrics, and fine-tuning workflows. The platform supports real-time performance and resource monitoring dashboards and is designed for scalable, GPU-enabled production workloads of Large Language Models (LLMs).
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default ExperienceProjectsSection;
