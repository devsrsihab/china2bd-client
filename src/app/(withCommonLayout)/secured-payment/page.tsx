// src/pages/secure-payment.tsx
import { NextPage } from "next";
import Head from "next/head";
import {
  FaUniversity,
  FaMobileAlt,
  FaCreditCard,
  FaShieldAlt,
  FaTimesCircle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const SecurePayment: NextPage = () => {
  return (
    <>
      <Head>
        <title>💳 Secure Payment | China2BD Pro</title>
        <meta
          name="description"
          content="Secure Payment page for China2BD Pro – আপনার বিশ্বস্ত Wholesale Marketplace"
        />
      </Head>

      <main className="w-full min-h-screen bg-gradient-to-b from-white via-site-light/30 to-white py-16 px-4 md:px-8 font-jost">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <header className="text-center space-y-4">
            <h1 className="text-2xl md:text-4xl font-extrabold text-primary-dark flex items-center justify-center gap-2">
              <FaShieldAlt className="text-primary" /> Secured Payment
            </h1>
            <p className="text-sm text-muted-foreground">
              Updated on: ১৯ সেপ্টেম্বর, ২০২৫
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              বর্তমান অনলাইন ব্যবসায় সবচেয়ে বড় ঝুঁকিগুলোর একটি হলো অনিরাপদ
              লেনদেন। প্রতিনিয়ত সংবাদপত্র ও সামাজিক মাধ্যমে আমরা দেখি, অনেকেই না
              বুঝে ব্যক্তিগত বিকাশ একাউন্টে টাকা পাঠিয়ে প্রতারণার শিকার হয়েছেন।
              👉 China2BD Pro সবসময় আপনার লেনদেনকে ১০০% নিরাপদ রাখার প্রতিশ্রুতি
              দেয়।
            </p>
          </header>

          {/* Bank Account */}
          <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary-dark flex items-center gap-2">
              <FaUniversity className="text-primary" /> ব্যাংক একাউন্ট
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>
                প্রতিষ্ঠানের নামে ব্যাংক একাউন্ট থাকলে আপনার হাতে অফিসিয়াল
                পেমেন্ট ডকুমেন্ট থাকবে।
              </li>
              <li>প্রয়োজনে এটি প্রমাণ হিসেবে ব্যবহার করা যাবে।</li>
              <li>
                ব্যাংক একাউন্ট খোলার জন্য ট্রেড লাইসেন্স, ট্যাক্স সার্টিফিকেট,
                অফিস ডকুমেন্ট জমা দিতে হয়—তাই এটি আইনসিদ্ধ ও নির্ভরযোগ্য।
              </li>
            </ul>
          </section>

          {/* Bkash Merchant Account */}
          <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary-dark flex items-center gap-2">
              <FaMobileAlt className="text-primary" /> বিকাশ মার্চেন্ট একাউন্ট
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>ব্যক্তিগত বিকাশ একাউন্ট কখনো ব্যবহার করবেন না।</li>
              <li>বড় অংকের টাকা ব্যক্তিগত বিকাশে পাঠানো আইনসিদ্ধ নয়।</li>
              <li>
                বিকাশ কেবল ব্যবসায়ীদের জন্য মার্চেন্ট একাউন্ট প্রদান করে এবং
                প্রতারণার শিকার হলে আইনি ব্যবস্থা নেওয়া সম্ভব।
              </li>
            </ul>
          </section>

          {/* Card Payment */}
          <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary-dark flex items-center gap-2">
              <FaCreditCard className="text-primary" /> কার্ড পেমেন্ট
              (Debit/Credit)
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>কার্ড পেমেন্ট ব্যাংকের মতই নিরাপদ।</li>
              <li>
                পেমেন্ট গেটওয়ে কোম্পানিকে সব প্রয়োজনীয় ডকুমেন্ট বাংলাদেশ
                ব্যাংকের কাছে জমা রাখতে হয়।
              </li>
              <li>
                তাই কার্ড পেমেন্ট ট্র্যাকযোগ্য এবং আইন কাঠামোর মধ্যে সুরক্ষিত।
              </li>
              <li>
                তবে কিছু ক্ষেত্রে গেটওয়ে ব্যবহারে অতিরিক্ত চার্জ প্রযোজ্য হতে
                পারে।
              </li>
            </ul>
          </section>

          {/* Our Payment System */}
          <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary-dark flex items-center gap-2">
              <FaShieldAlt className="text-primary" /> আমাদের পেমেন্ট সিস্টেম
            </h2>
            <p className="text-muted-foreground">
              China2BD Pro-তে নিম্নলিখিত সব ধরনের নিরাপদ পেমেন্ট সাপোর্ট রয়েছে:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>🏦 ব্যাংক একাউন্ট</li>
              <li>📲 বিকাশ মার্চেন্ট একাউন্ট</li>
              <li>💵 নগদ মার্চেন্ট একাউন্ট</li>
              <li>💳 ডেবিট/ক্রেডিট কার্ড (পেমেন্ট গেটওয়ের মাধ্যমে)</li>
            </ul>
          </section>

          {/* Cash discouraged */}
          <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-red-600 flex items-center gap-2">
              <FaTimesCircle className="text-red-600" /> ক্যাশ লেনদেন নিরুৎসাহিত
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              আমরা ক্যাশ লেনদেন নিরুৎসাহিত করি। যদি একান্তই ক্যাশ পেমেন্ট করতে
              হয়, তবে অবশ্যই আমাদের অফিসে এসে প্রদান করতে হবে এবং রিসিট/ডকুমেন্ট
              সংগ্রহ করতে হবে।
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-primary/10 to-site-light/30 rounded-2xl p-8 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">
              📞 যোগাযোগ
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
              <div className="flex items-center gap-3 text-foreground">
                <FaPhoneAlt className="text-primary" />
                <span>Hotline: +8801811396279</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
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

export default SecurePayment;
