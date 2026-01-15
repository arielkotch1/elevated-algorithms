"use client";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjggkpvr");

  return (
    <section id="contact" className="py-24 relative">
      <div className="px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative z-10">
            <span className="inline-block font-mono text-primary text-sm mb-4">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to ship your <span className="text-gradient">AI site?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Send me your project and I&apos;ll get back to you with a plan to
              make it production-ready.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              className="max-w-xl mx-auto flex flex-col gap-4 mb-10"
            >
              <Textarea
                id="message"
                name="message"
                required
                rows={8}
                placeholder={`Tell me about your project 👇

• What are you building?
• What stage is it at?
• What do you need help with right now?
• Any deadlines or constraints?

Links welcome (repo, figma, docs).`}
                className="text-base resize-none"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <Button
                type="submit"
                size="xl"
                variant="hero"
                disabled={state.submitting || state.succeeded}
                className="w-full"
              >
                {state.succeeded && "We’ll be in touch shortly!"}
                {state.submitting && !state.succeeded && "Sending…"}
                {!state.submitting && !state.succeeded && "Send Project"}
              </Button>
            </form>

            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted tech stack
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground/60 font-mono text-sm">
                <span>React</span>
                <span className="text-primary/30">•</span>
                <span>Next.js</span>
                <span className="text-primary/30">•</span>
                <span>TypeScript</span>
                <span className="text-primary/30">•</span>
                <span>Redux Toolkit</span>
                <span className="text-primary/30">•</span>
                <span>TanStack Query</span>
                <span className="text-primary/30">•</span>
                <span>Node.js</span>
                <span className="text-primary/30">•</span>
                <span>Express</span>
                <span className="text-primary/30">•</span>
                <span>Prisma</span>
                <span className="text-primary/30">•</span>
                <span>MongoDB &amp; SQL</span>
                <span className="text-primary/30">•</span>
                <span>Tailwind &amp; Shadcn</span>
                <span className="text-primary/30">•</span>
                <span>Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
