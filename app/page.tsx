export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">hey, I'm Alan!</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a 2024 CS graduate based in Palo Alto, CA, currently working as a SWE Co-op at LiveRamp. 
        Graduating from Rose-Hulman Institute of Technology, I've done all types of software development, from developing AR demos to simple Discord bots.
        I'm particularly interested in effective AI applications, the relationship people have with technology, and approaches to doing social good. 
        You can see some of my thoughts and rants on different aspects of tech and life in my blog.`}
      </p>
      <div className="prose prose-neutral dark:prose-invert ">
        <p>
        I'm also working on making autofocals a widespread, affordable reality, reimagining what glasses 
        are capable of. I'd love to hear from others interested in this, or other simple, yet immensely impactful, 
        ways to improve our connection with the world, as well.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert ">
        <p>
        You can contact <a href="mailto:me@alanzhang.dev" target="_blank">me@alanzhang.dev</a>
        , to discuss ideas or work. Additionally, my <a href="https://github.com/AlanZhang2002">Github</a> and 
        my <a href="https://www.linkedin.com/in/alanmzhang/">LinkedIn</a> are available here.
        </p>
      </div>
    </section>
  );
}
