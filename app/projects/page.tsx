import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Hermes - Hot-swappable and self-hostable speech-to-text system
          </CardTitle>
          <CardDescription>First Orion</CardDescription>
        </CardHeader>
        <CardContent>
          Developed a microservice based system using Python, Docker, AWS,
          MLFlow, and Databricks to produce a system where custom and open
          source speech-to-text ML models could be implemented, replaced, and
          versioned as needed. This project helped First Orion reduce its
          dependence on Amazon Transcribe to handle translation of speech data
          into text for analysis by the data science team.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Certification</CardTitle>
          <CardDescription>First Orion</CardDescription>
        </CardHeader>
        <CardContent>
          Implemented microservices using Go, NATS, AWS, and DynamoDB to provide
          automated verification for businesses signing up for First
          Orion&apos;s core platforms - reducing onboarding time for
          well-qualified businesses from roughly two weeks to minutes. Explored
          and implemented CI/CD pipelines with Bitbucket Pipelines, self-hosted
          runners on AWS, ArgoCD for GitOps, and the LGTM stack for monitoring
          and observability.
        </CardContent>
      </Card>
    </div>
  );
}
