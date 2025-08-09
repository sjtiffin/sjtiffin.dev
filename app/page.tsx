import Image from "next/image";

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Sara Tiffin</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi, my name is Sara, and I'm a software professential living in
          Arkansas.
        </p>

        <br />

        <p>
          I'm a Software Engineer with a variety of experience in frontend and
          backend development, familiarity with modern tooling, and a passion
          for building secure, performant, and pleasant applications. I've built
          a variety of solutions: microservices written with Go, gRPC, and
          Protobuf, a message stream in NATS, a self-hostable and hot-swappable
          CI/CD system for ML Models using MLFlow and Databricks, and websites
          with modern tools like NextJS, SvelteKit, and TailwindCSS. I have
          deployed applications to VPSs, AWS EKS clusters, and managed platforms
          like Vercel.
        </p>
      </div>
    </div>
  );
}
