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
        <hr className="mt-6 mb-1 border-neutral-100 dark:border-neutral-800" />
        <hr className="mt-1 mb-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Throughout my time in school, I've delved into all types of software development, exploring the 
          different avenues of the software world. Here's a mix of school projects, team projects, and personal 
          projects I've done in the past.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Getting Over It with AI</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Current
        </p>
        <p>
          To learn reinforcement learning, I am designing a mod using BepInEx to be integrated with Getting Over It, a Unity video game, 
          so it can be controlled by a reinforcement learning model. 
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">GLADOS Automating Science Pipeline</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          2023-2024 | <a href="https://github.com/AutomatingSciencePipeline">Github</a>
        </p>
        <p>
          For my senior capstone project, I worked alongside 3 others to shift this full-stack pipeline towards 
          a distributed approach, working with a client. Over the school year, I learned the Kubernetes architecture, refactoring the 
          whole stack to be ran on a self-managed, baremetal Kubernetes cluster, with documentation and guides written 
          to integrate future contributors into the system. In the process, I worked with our 
          MongoDB, Python, and Next.JS stack.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">AI Calendar Assistant</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          2023
        </p>
        <p>
          I built a prompt engineered, fine-tuned GPT-powered digital calendar assistant with a small group. 
          We created ICAL files, system prompts, and user prompts, grading the testing set on realism and quality, 
          based on user preferences. With the model, we built a minimal Flask app on top, enabling easier usage.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Rock Paper Scissors Lizard Spock Live</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          2023
        </p>
        <p>
          I designed a real-time image recognition model using CNNs with a partner. Trained on our self-gathered dataset, 
          we accounted for high variance, achieving 95% accuracy.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">BoneBot</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          2022 | <a href="https://github.com/AlanZhang2002/Bonebot">Github</a>
        </p>
        <p>
          To work around the bloated, hard-to-navigate website for Rose-Hulman's food menus, I designed a Discord bot 
          with Python to scrape the website and post the daily menu automatically. Using Discord API, I also implemented a 
          random quote command, pulling formatted quotes from a Discord channel. 
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Scheme Language Interpreter</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          2022
        </p>
        <p>
          With two partners, I developed a Scheme language interpreter, supporting lambdas and continuations. 
          This involved parsing, syntax expanding, and evaluating using Racket Scheme.  
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Processor Project</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          2022
        </p>
        <p>
          I designed, implemented, and simulated a 16-bit multicycle processor with Verilog and a FPGA board 
          alongside a small group. With a finite state machine for instructions, an accumulator, and a self-incrementing 
          stack pointer, we were able to simulate basic assembly programs.   
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Paly Robotics</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Lead, 2017-2021
        </p>
        <p>
          Competing in the FIRST Robotics Competition throughout high school, I designed 
          robot controls and automated ball shooting and path finding with the software subteam. This involved 
          tuning PIDF control loops, building visual tools for automation, and teaching newer members Java as we integrated 
          members of various experience levels into the team. As a team, we regularly won various awards at competitions, 
          and won at the Utah Regional at 2020.
        </p>
      </div>
    </section>
  );
}
