import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
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

// Section Wrapper
import Section from "./Section";

// ---------------------------
// Schema & Types
// ---------------------------
const formSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message required"),
});

type ContactFormValues = z.infer<typeof formSchema>;

// ---------------------------
// Contact Component
// ---------------------------
export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  function onSubmit(data: ContactFormValues) {
    // Create a hidden <form> submission for Netlify
    const formData = new FormData();
    formData.append("form-name", "contact"); // Must match the form name
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        toast({
          title: "Success!",
          description: "Your message has been sent.",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      });
  }

  return (
    <Section id="contact" title="Contact">
      <Form {...form}>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-5 px-4"
        >
          {/* Required hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00f0ff] font-orbitron">
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00f0ff] font-orbitron">
                  Email
                </FormLabel>
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

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#00f0ff] font-orbitron">
                  Message
                </FormLabel>
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

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#5f5eff] text-white hover:bg-[#00fff2]"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </Section>
  );
}
