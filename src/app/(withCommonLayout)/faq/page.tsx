"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function FAQ() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-site-light/40 to-white py-20 px-6 font-jost">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark">
            ❓ Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg text-muted-foreground">আপডেট: ২৫ মে, ২০২৩</p>
        </div>

        {/* Accordion FAQ */}
        <Card className="rounded-2xl shadow-xl border-none p-6 md:p-10 bg-gradient-to-br from-white to-site-light/20">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-lg font-semibold">
                ওয়েবসাইটে দেওয়া প্রাইস কি ফাইনাল প্রাইস?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                না। ওয়েবসাইট পণ্যের বেস প্রাইস দেখানো হয়। অতিরিক্ত চার্জ গুলো:
                <br /> ● চায়না লোকাল কুরিয়ার চার্জ (Seller → China Warehouse)
                <br /> ● শিপিং চার্জ (চায়না → বাংলাদেশ) — ক্যাটাগরি ও ওজনভিত্তিক
                <br /> ● বাংলাদেশ ডেলিভারি চার্জ (ঐচ্ছিক; অফিস থেকে সংগ্রহও করা
                যাবে)
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger className="text-lg font-semibold">
                চায়না লোকাল কুরিয়ার চার্জ কত?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                পণ্যের ওজন/মাপ ও Seller থেকে Warehouse-এর দূরত্ব অনুযায়ী
                ভ্যারিয়েবল। বিস্তারিত জানতে যোগাযোগ করুন।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger className="text-lg font-semibold">
                ওজন কিভাবে হিসাব হয়?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                ● প্রতিটি প্যাকেট আলাদাভাবে ওজন করা হয়।
                <br /> ● ওজন 100 গ্রাম গুণিতকে রাউন্ড করা হয়।
                <br /> ● উদাহরণ: 620 গ্রাম হলে 620 গ্রামই ধরা হবে।
                <br /> ● একাধিক অর্ডার হলেও প্রতিটি প্যাকেট আলাদা গণনা হয়।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger className="text-lg font-semibold">
                বাংলাদেশ কুরিয়ার চার্জ কিভাবে হিসাব হয়?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                ঢাকার ভিতরে: প্রথম ১ কেজি ৭০ টাকা; অতিরিক্ত প্রতি কেজি ২০ টাকা
                <br /> ঢাকার বাইরে: প্রথম ১ কেজি ১৩০ টাকা; অতিরিক্ত প্রতি কেজি
                ২০ টাকা
                <br /> 📌 সাধারণত লোকাল কুরিয়ারে ওজন রাউন্ড করা হতে পারে (যেমন:
                1.2kg ≈ 2kg)
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger className="text-lg font-semibold">
                ক্যাশ অন ডেলিভারি (COD) আছে?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                না। আমরা Full Advance নেই। China2BD Pro-তে অর্ডার কনফার্মেশনের
                সময় সম্পূর্ণ অর্থ অগ্রিম প্রদান করতে হয়। COD বা আংশিক পেমেন্ট
                প্রযোজ্য নয়।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger className="text-lg font-semibold">
                পেমেন্ট কিভাবে করব?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                ● বিকাশ / নগদ / ব্যাংক ট্রান্সফার / অনলাইন গেটওয়ে
                <br /> ● সব পেমেন্ট নিরাপদ ও ট্র্যাকযোগ্য
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger className="text-lg font-semibold">
                রিটার্ন/রিফান্ড পলিসি আছে?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                চায়না থেকে ভুল সাইজ/রঙ/ভিন্ন পণ্য এলে নির্ধারিত সময়ের মধ্যে
                রিপোর্ট করলে রিটার্ন/রিফান্ড প্রক্রিয়া করা হয়। বিস্তারিত জানতে
                Return Policy পেজ দেখুন।
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        {/* Contact */}
        <div className="text-center mt-10 space-y-2">
          <h2 className="text-xl font-semibold">যোগাযোগ</h2>
          <p className="text-muted-foreground">📞 Hotline: +8801811396279</p>
          <p className="text-muted-foreground">
            📧 Email: info@china2bdpro.com
          </p>
        </div>
      </div>
    </section>
  );
}
