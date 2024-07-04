export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">hey, I'm Alan!</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a recent CS graduate currently looking for work in software engineering and AI. 
        Graduating from Rose-Hulman Institute of Technology in 2024, I've done all types of software development, from developing AR demos to simple Discord bots.
        I'm particularly interested in effective AI applications and the relationship people have with technology. 
        I plan on writing a bit on my thoughts on different aspects of tech in my blog later on.`}
      </p>
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
