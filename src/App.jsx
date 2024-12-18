import AccordionItem from './AccordionItem';

function App() {
  return (
    <div className="bg-white rounded-lg p-6 max-w-card shadow-card mx-6 sm:p-10 sm:rounded-3xl">
      <h1 className="text-dark-purple text-4xl font-bold flex gap-6 sm:mb-3 sm:text-6xl">
        <img className="w-6 sm:w-10" src="./images/icon-star.svg" alt="icon" />
        FAQs
      </h1>
      <div className="divide-y divide-light-pink">
        <AccordionItem title="What is Frontend Mentor, and how will it help me?" isOpen={true}>
          <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
        </AccordionItem>
        <AccordionItem title="Is Frontend Mentor free?" isOpen={false}>
          <p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
        </AccordionItem>
        <AccordionItem title="Can I use Frontend Mentor projects in my portfolio?" isOpen={false}>
          <p>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
        </AccordionItem>
        <AccordionItem title="How can I get help if I'm stuck on a challenge?" isOpen={false}>
          <p>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
        </AccordionItem>
      </div>
    </div>
  )
}

export default App
