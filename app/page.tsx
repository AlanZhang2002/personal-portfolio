export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">hey, I'm Alan!</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a recent CS graduate based in Palo Alto, CA, currently looking for work in software engineering and AI. 
        Graduating from Rose-Hulman Institute of Technology in 2024, I've done all types of software development, from developing AR demos to simple Discord bots.
        I'm particularly interested in effective AI applications, the relationship people have with technology, and approaches to doing social good. 
        I'm also looking to do a Masters in AI/CS starting in Spring 2025.
        You can see some of my thoughts and rants on different aspects of tech and life in my blog.`}
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
