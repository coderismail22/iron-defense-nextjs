import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 text-4xl font-bold text-center mt-5">FAQ</h1>
      <div className="relative flex flex-col h-full w-full p-4">
        <hr />
        <div className="border-2 rounded-lg p-5">
          <Accordion
            type="single"
            collapsible
            className="text-lg text-left flex flex-col justify-center  w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is a Virtual Private Server (VPS)?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl">
                A Virtual Private Server, or VPS, is a secure and isolated
                virtual environment within a larger server. It provides
                dedicated resources and full control, making it an ideal choice
                for hosting websites, applications, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                So why do people buy Dedicated Servers?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl">
                We exclusively offer VPS hosting, which provides the advantages
                of dedicated resources while remaining cost-effective. Our VPS
                solutions deliver the performance and control you need without
                the unnecessary expense of a dedicated server.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is the difference between a VPS and RDP?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl">
                A VPS (Virtual Private Server) is a complete hosting solution
                that includes an operating system and allows you to run various
                applications. RDP (Remote Desktop Protocol), on the other hand,
                is a protocol used to access the desktop of a remote
                Windows-based computer. We focus on VPS hosting to meet your
                specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I reinstall my VPS/RDP or do I need to open a ticket?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl">
                Enjoy the convenience of self-service with our control panel.
                You can easily reinstall your VPS or RDP without the need to
                open a support ticket. We put the power in your hands.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What are all the Control Panel features?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl">
                Our control panel offers a comprehensive range of features,
                including but not limited to server management, resource
                monitoring, backup options, and one-click application
                installations. Explore our user-friendly interface to discover
                all the tools at your disposal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I pay with PayPal or Card?
              </AccordionTrigger>
              <AccordionContent className="md:text-xl">
                A Virtual Private Server, or VPS, is a secure and isolated
                virtual environment within a larger server. It provides
                dedicated resources and full control, making it an ideal choice
                for hosting websites, applications, and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
