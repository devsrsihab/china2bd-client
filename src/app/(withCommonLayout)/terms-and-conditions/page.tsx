// src/pages/terms-and-conditions.tsx
import { NextPage } from "next";
import Head from "next/head";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TermsAndConditions: NextPage = () => {
  return (
    <>
      <Head>
        <title>📜 Terms & Conditions | China2BD Pro</title>
        <meta
          name="description"
          content="Terms & Conditions for China2BD Pro – আপনার বিশ্বস্ত Wholesale Marketplace"
        />
      </Head>

      <main className="w-full min-h-screen bg-gradient-to-b from-white via-site-light/30 to-white py-12 px-4 md:px-8 font-jost">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <header className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark">
              📜 Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-sm">
              Updated on: 19th September, 2025
            </p>
            <p className="text-muted-foreground">
              আমাদের থেকে পণ্য ক্রয়ের আগে নিচের শর্তাবলী ভালোভাবে পড়ে নিন। আমরা
              চাই আমাদের গ্রাহকরা আমাদের সার্ভিস সম্পর্কে সম্পূর্ণ ধারণা নিয়ে
              অর্ডার করুন, যাতে কোনো বিভ্রান্তি বা ঝামেলা না হয়। কোনো বিষয়ে
              সন্দেহ থাকলে আমাদের হটলাইন বা অফিসিয়াল ইমেইলে যোগাযোগ করুন।
            </p>
          </header>

          {/* মূল শর্তাবলী */}
          <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-primary-dark">
              ✅ মূল শর্তাবলী
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>
                আমরা কোনো পণ্য রেডি স্টক রাখি না। অর্ডার কনফার্ম হওয়ার পরই চায়না
                সাপ্লায়ার থেকে সংগ্রহ করা হয়।
              </li>
              <li>
                Full Advance Payment (100%) ছাড়া কোনো অর্ডার গ্রহণ করা হয় না।
              </li>
              <li>
                ওয়েবসাইটে প্রদর্শিত ওজন সাপ্লায়ারের দেওয়া তথ্যে ভিত্তিক। প্রকৃত
                ওজন অনুযায়ী শিপিং ও কাস্টমস চার্জ প্রযোজ্য হবে।
              </li>
              <li>
                শিপিং ও কাস্টমস চার্জ পণ্যের মূল্যের সাথে অন্তর্ভুক্ত নয়; এগুলো
                আলাদাভাবে ডেলিভারির সময় হিসাব করা হবে।
              </li>
              <li>
                চায়না ওয়্যারহাউসে পৌঁছানোর পর: ✈ By Air: ১৫–২০ দিন | 🚢 By Sea:
                ৪৫–৬০ দিন।
              </li>
              <li>
                পণ্যের মূল্যের মধ্যে বাংলাদেশের লোকাল কুরিয়ার/ট্রান্সপোর্ট চার্জ
                অন্তর্ভুক্ত নয়।
              </li>
              <li>
                অর্ডার করার আগে অবশ্যই আমাদের Return & Refund Policy পড়ে নিন।
              </li>
              <li>
                কাস্টমস কর্তৃক নিষিদ্ধ কোনো পণ্য অর্ডার করা যাবে না। করলে সেটি
                বাতিল হবে এবং গেটওয়ে চার্জ (২.৫%) বাদ দিয়ে টাকা রিফান্ড করা হবে।
              </li>
              <li>
                একাধিক সাপ্লায়ার থেকে অর্ডার করলে সব পণ্য একসাথে নাও আসতে পারে।
                আংশিক ডেলিভারি নিতে চাইলে পুরো বকেয়া আগে পরিশোধ করতে হবে।
              </li>
            </ul>
          </section>

          {/* Return & Refund Policy */}
          <section className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-primary-dark">
              🔄 Return & Refund Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              আমাদের পণ্য বিভিন্ন মাধ্যমে (চায়না লোকাল কুরিয়ার, By Air, By Sea)
              পরিবহন করা হয়। এছাড়াও কাস্টমস ও শুল্ক অধিদপ্তর কাটন খুলে পরীক্ষা
              করতে পারে, এজন্য কিছু ক্ষেত্রে ক্ষতিগ্রস্ত হতে পারে। আমরা এসব
              অভিযোগকে গুরুত্ব সহকারে দেখি এবং দ্রুত সমাধানের চেষ্টা করি।
            </p>

            {/* Refund applicable */}
            <div>
              <h3 className="text-lg font-semibold text-green-600">
                ✅ যেসব ক্ষেত্রে রিফান্ড প্রযোজ্য
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mt-2">
                <li>
                  ভাঙা বা নষ্ট পণ্য পাওয়া গেলে (ডেলিভারির ২ দিনের মধ্যে ছবি সহ
                  ক্লেইম করতে হবে)।
                </li>
                <li>প্রাপ্ত পণ্য ওয়েবসাইট প্রদর্শিত পণ্যের সাথে না মিললে।</li>
                <li>
                  সাইজ বা কালার না মিললে (৫%-১০% রঙের পার্থক্য রিফান্ডের আওতায়
                  পড়বে না)।
                </li>
                <li>ইলেকট্রনিক পণ্যে কোনো ওয়ারেন্টি দেওয়া হয় না।</li>
                <li>
                  রিফান্ড অনুমোদিত হলে ৭ কর্মদিবসের মধ্যে টাকা ফেরত দেওয়া হবে।
                </li>
              </ul>
            </div>

            {/* Refund not applicable */}
            <div>
              <h3 className="text-lg font-semibold text-red-600">
                ❌ যেসব ক্ষেত্রে রিটার্ন/রিফান্ড প্রযোজ্য নয়
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mt-2">
                <li>ভুল ঠিকানা দেওয়ার কারণে পণ্য না পাওয়া গেলে।</li>
                <li>
                  বাংলাদেশ ওয়্যারহাউসে পৌঁছানোর পর "পছন্দ হয়নি" বা "এখন দরকার
                  নেই" জাতীয় কারণ।
                </li>
                <li>কাস্টমস পরীক্ষার কারণে ক্ষতিগ্রস্ত হলে।</li>
                <li>
                  সাপ্লায়ারের ওয়্যারহাউস থেকে ডেলিভারি হয়ে গেলে (চায়না
                  ওয়্যারহাউসে থাকাকালীন সময়ে রিটার্ন চাইলে শিপমেন্ট খরচ বহন করতে
                  হবে)।
                </li>
                <li>
                  By Air শিপমেন্ট ৪০ দিন ও By Sea শিপমেন্ট ৯০ দিন অতিক্রম করলে
                  (শুধুমাত্র শর্ত সাপেক্ষে রিফান্ড দেওয়া হবে)।
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center space-y-3">
            <h2 className="text-xl font-semibold text-primary-dark">
              📞 যোগাযোগ করুন
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-primary" />
                <span>Hotline: +8801811396279</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <span>Email: info@china2bdpro.com</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default TermsAndConditions;
