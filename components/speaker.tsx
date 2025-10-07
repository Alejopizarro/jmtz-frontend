import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Speaker = () => {
  return (
    <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 mx-auto text-slate-50 gap-8 px-4 py-12 lg:py-26">
      <div className="flex flex-col space-y-8">
        <h2 className="text-5xl lg:text-7xl font-black">Speaker</h2>
        <p className="text-xl text-slate-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          eius omnis sunt. Voluptatum assumenda adipisci laudantium sint
          doloribus vero maxime, quia voluptatem atque praesentium a veritatis
          rerum consectetur. Dignissimos, quibusdam!
        </p>
        <button className="hover:scale-105 bg-primary rounded-full font-bold text-lg text-slate-50 shadow-2xl hover:shadow-3xl transition-all w-fit py-4 px-8">
          Read more
        </button>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-sans">
            Fan-Driven Growth: From Customers to Investors
          </AccordionTrigger>
          <AccordionContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eum consequuntur dolore voluptatibus dolorem quasi quae rem
            deleniti, repellendus eos cum facere porro molestiae reiciendis
            nisi, quaerat quos voluptates veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-sans">
            The Business of Belonging: Communities as Growth Engines
          </AccordionTrigger>
          <AccordionContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eum consequuntur dolore voluptatibus dolorem quasi quae rem
            deleniti, repellendus eos cum facere porro molestiae reiciendis
            nisi, quaerat quos voluptates veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-sans">
            Phygital Beyond Sports: Reinventing Customer Experience in Any
            Industry
          </AccordionTrigger>
          <AccordionContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eum consequuntur dolore voluptatibus dolorem quasi quae rem
            deleniti, repellendus eos cum facere porro molestiae reiciendis
            nisi, quaerat quos voluptates veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-sans">
            Data with a Heart: Humanizing Analytics for Emotional Impact
          </AccordionTrigger>
          <AccordionContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eum consequuntur dolore voluptatibus dolorem quasi quae rem
            deleniti, repellendus eos cum facere porro molestiae reiciendis
            nisi, quaerat quos voluptates veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-sans">
            The Future of Fandom: Lessons from Saudi Arabia to the World
          </AccordionTrigger>
          <AccordionContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eum consequuntur dolore voluptatibus dolorem quasi quae rem
            deleniti, repellendus eos cum facere porro molestiae reiciendis
            nisi, quaerat quos voluptates veniam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-xl font-sans">
            What Money Can&apos;t Buy: Designing Unforgettable Customer Journeys
          </AccordionTrigger>
          <AccordionContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eum consequuntur dolore voluptatibus dolorem quasi quae rem
            deleniti, repellendus eos cum facere porro molestiae reiciendis
            nisi, quaerat quos voluptates veniam.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Speaker;
