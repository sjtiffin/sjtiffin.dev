export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl">
        Hermes - Hot-swappable and self-hostable speech-to-text system
      </h1>
      <h2 className="text-md">First Orion</h2>
      <p>
        Developed a microservice based system using Python, Docker, AWS, MLFlow,
        and Databricks to produce a system where custom and open source
        speech-to-text ML models could be implemented, replaced, and versioned
        as needed. This project helped First Orion reduce its dependence on
        Amazon Transcribe to handle translation of speech data into text for
        analysis by the data science team.
      </p>
      <h1 className="text-xl">Customer Certification</h1>
      <h2 className="text-md">First Orion</h2>
      <p>
        Implemented microservices using Go, NATS, AWS, and DynamoDB to provide
        automated verification for businesses signing up for First Orion&apos;s
        core platforms - reducing onboarding time for well-qualified businesses
        from roughly two weeks to minutes. Explored and implemented CI/CD
        pipelines with Bitbucket Pipelines, self-hosted runners on AWS, ArgoCD
        for GitOps, and the LGTM stack for monitoring and observability.
      </p>
    </div>
  );
}
