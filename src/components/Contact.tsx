import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";

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

  async function onSubmit(data: ContactFormValues) {
    try {
      // Get additional metadata for spam prevention and analytics
      const userAgent = navigator.userAgent;
      
      // Insert into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            message: data.message,
            user_agent: userAgent,
            // Note: IP address would need to be captured server-side for accuracy
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Success! ⚡",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });
      
      form.reset();
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Section id="contact" title="Contact">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-5 px-4"
        >
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
                  <Input 
                    placeholder="Your Name" 
                    autoComplete="name" 
                    className="bg-[#1a1f3388] border-[#5f5eff44] text-white placeholder:text-zinc-400 focus:border-[#00f0ff] focus:ring-[#00f0ff]"
                    {...field} 
                  />
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
                    className="bg-[#1a1f3388] border-[#5f5eff44] text-white placeholder:text-zinc-400 focus:border-[#00f0ff] focus:ring-[#00f0ff]"
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
                    className="bg-[#1a1f3388] border-[#5f5eff44] text-white placeholder:text-zinc-400 focus:border-[#00f0ff] focus:ring-[#00f0ff] resize-none"
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
            className="w-full bg-[#5f5eff] text-white hover:bg-[#00f0ff] hover:text-[#0d1222] transition-all duration-300 font-orbitron tracking-wider"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </Section>
  );
}
