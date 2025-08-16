
import React from "react";
import Section from "./Section";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message required"),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  function onSubmit(data: ContactFormValues) {
    // No backend, just show a success toast and reset
    toast({ title: "Thank you!", description: "Your message has been sent." });
    form.reset();
  }

  return (
    <Section id="contact" title="Contact">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-5 px-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00f0ff] font-orbitron">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00f0ff] font-orbitron">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your@email.com"
                    autoComplete="email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00f0ff] font-orbitron">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can I help you?"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-[#5f5eff] text-white hover:bg-[#00fff2]">
            Send Message
          </Button>
        </form>
      </Form>
    </Section>
  );
}
