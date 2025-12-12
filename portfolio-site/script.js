const projects = [
  {
    title: 'Kubernetes Microservice App',
    summary: 'Gateway + two services deployed to Kubernetes with Docker images, Helm-ready manifests, and CI coverage.',
    focus: 'Kubernetes · Docker · GitHub Actions',
    link: 'https://github.com/Kennethfeh/devops-projects-portfolio/tree/main/01-kubernetes-microservice-app',
    tags: ['K8s', 'Node.js', 'Service Mesh']
  },
  {
    title: 'CI/CD Pipeline Service',
    summary: 'Express API with lint/test/build stages, container scans, and deployment-ready GitHub Actions.',
    focus: 'CI/CD · DevSecOps',
    link: 'https://github.com/Kennethfeh/devops-projects-portfolio/tree/main/02-ci-cd-pipeline-demo',
    tags: ['GitHub Actions', 'Docker', 'Testing']
  },
  {
    title: 'Fullstack Docker Platform',
    summary: 'React + Express notes app with Compose integration tests, backend APIs, and smoke testing scripts.',
    focus: 'Docker Compose · Integration Tests',
    link: 'https://github.com/Kennethfeh/devops-projects-portfolio/tree/main/03-fullstack-docker-app',
    tags: ['React', 'Express', 'Automation']
  },
  {
    title: 'Helm Deployment Project',
    summary: 'Reusable Helm chart for a Node.js service, including linting, templating, and namespace-safe values.',
    focus: 'Helm · Kubernetes Packaging',
    link: 'https://github.com/Kennethfeh/devops-projects-portfolio/tree/main/04-helm-deployment-project',
    tags: ['Helm', 'CI/CD']
  },
  {
    title: 'Ansible Config Management',
    summary: 'Role-based automation that configures nginx hosts with templates, handlers, and linted playbooks.',
    focus: 'Infrastructure as Code',
    link: 'https://github.com/Kennethfeh/devops-projects-portfolio/tree/main/05-ansible-config-management',
    tags: ['Ansible', 'IaC', 'Linting']
  },
  {
    title: 'Monitoring & Logging Stack',
    summary: 'Prometheus, Grafana, Loki, and Promtail Compose stack with dashboards, provisioning, and smoke tests.',
    focus: 'Observability · SLOs',
    link: 'https://github.com/Kennethfeh/devops-projects-portfolio/tree/main/06-monitoring-and-logging-stack',
    tags: ['Prometheus', 'Grafana', 'Loki']
  }
];

const grid = document.getElementById('project-grid');

projects.forEach((project) => {
  const card = document.createElement('article');
  card.className = 'project-card';

  card.innerHTML = `
    <p class="eyebrow">${project.focus}</p>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <div class="project-meta">
      ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
    </div>
    <a class="btn secondary" href="${project.link}" target="_blank" rel="noreferrer">See repository</a>
  `;

  grid.appendChild(card);
});
