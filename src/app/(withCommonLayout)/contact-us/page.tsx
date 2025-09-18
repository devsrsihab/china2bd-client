"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

// ✅ Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // TODO: integrate with your API (e.g., send message endpoint)
      console.log("Submitted values:", values);
      alert("✅ Your message has been sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center font-jost">
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-primary/10 via-white to-primary/10 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-primary-dark tracking-tight">
          Let’s Connect
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Reach out to us for inquiries, partnerships, or support. We’re here to
          help and would love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-primary-dark">
            Contact Information
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our team is available during business hours to respond to your
            queries. Drop us a message, and we’ll get back to you as soon as
            possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="text-lg text-foreground">
                <span className="font-semibold">Address: </span>
                House-5, Lane-10, Block-A, Mirpur 10 1216 Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <a
                href="mailto:info@china2bdpro.com"
                className="text-lg hover:text-primary-dark transition"
              >
                info@china2bdpro.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <a
                href="tel:+8801811396279"
                className="text-lg hover:text-primary-dark transition"
              >
                +8801811396279
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <Card className="border-none shadow-xl rounded-2xl">
          <CardContent className="p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            className="rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          className="rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Write your message..."
                          className="rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl text-lg font-semibold py-6 bg-primary hover:bg-primary/90 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>

      {/* Google Map */}
      <section className="w-full bg-site-light py-20">
        <h2 className="text-3xl font-semibold text-center mb-10 text-primary-dark">
          Find Us On Google Map
        </h2>
        <div className="w-full max-w-5xl mx-auto h-[450px] rounded-2xl overflow-hidden shadow-xl border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3650.1896011667636!2d90.36745547589848!3d23.811855986413132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schina2bd%20pro!5e0!3m2!1sen!2sbd!4v1758229171580!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
