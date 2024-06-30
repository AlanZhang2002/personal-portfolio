export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm currently aiming to build impactful software that can change communities and lives. 
          Here is a summary of my professional work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Kura AR</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Development Intern, 2023
        </p>
        <p>
          I joined <a href="https://kura.tech">Kura</a> as an intern to gain 
          general software development experience.  As a small, somewhat scrappy augmented reality startup,
          my task was to create demos for people to learn about our product.
        </p>
        <ul>
          <li>
            I self directed development of new demos, including learning the process
            of integrating 3rd party tools, networking protocols, and display drivers
            into Unity scenes to be shown to potential investors. 
          </li>
          <li>
            I showcased the capabilities of our software, both to the public and 
            for our own understanding of our limitations. With documentation being 
            created throughout the development process for future troubleshooting, 
            the demos were kept in a maintainable state.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Inuvo Inc.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          DevOps Intern, 2022-2023
        </p>
        <p>
        <a href="https://inuvo.com">Inuvo</a> is an AI-powered advertisement company focused on 
        speedy, accurate ad targeting without using consumer data. During my year supporting the DevOps team, 
        I gained experience with software infrastructure systems. In the process, I automated 
        AWS resource archiving/deletion with Bash scripts to cut daily AWS costs by 30%, created Grafana dashboards 
        to monitor service uptime, and helped manage user access to different company resources.
        </p>
      </div>
    </section>
  );
}
