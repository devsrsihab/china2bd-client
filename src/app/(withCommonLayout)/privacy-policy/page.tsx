import { NextPage } from "next";
import Head from "next/head";
import {
  FaLock,
  FaDatabase,
  FaCreditCard,
  FaShareAlt,
  FaFolderOpen,
  FaTools,
  FaUserShield,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | China2BD Pro</title>
        <meta
          name="description"
          content="Privacy Policy page for China2BD Pro – আপনার বিশ্বস্ত Wholesale Marketplace"
        />
      </Head>

      <main className="w-full min-h-screen bg-gradient-to-b from-white via-site-light/30 to-white py-16 px-4 md:px-8 font-jost">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <header className="text-center space-y-4">
            <h1 className="text-2xl md:text-4xl font-extrabold text-primary-dark flex items-center justify-center gap-3">
              <FaLock className="text-primary" /> Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Updated on: ২৫ মে, ২০২৩
            </p>
          </header>

          {/* ব্যক্তিগত তথ্য সংগ্রহ */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-primary-dark">
              <FaDatabase className="text-primary" /> ব্যক্তিগত তথ্য সংগ্রহ
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>ওয়েবসাইট অ্যাকাউন্ট তৈরির সময় ফোন নাম্বার সংগ্রহ।</li>
              <li>অর্ডার করার সময় নাম, ফোন, ইমেইল ও ডেলিভারি ঠিকানা সংগ্রহ।</li>
              <li>সব তথ্য নিরাপদ সার্ভারে সংরক্ষিত হয়।</li>
            </ul>
          </section>

          {/* লেনদেন সংক্রান্ত তথ্য */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-primary-dark">
              <FaCreditCard className="text-primary" /> লেনদেন সংক্রান্ত তথ্য
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              অনলাইন পেমেন্টের নিরাপত্তার জন্য আমরা বাংলাদেশে নিরাপদ এবং
              ইউজার-ফ্রেন্ডলি পেমেন্ট গেটওয়ে ব্যবহার করি। আপনার কার্ড/ব্যাংক
              তথ্য আমাদের সার্ভারে সংরক্ষিত হয় না।
            </p>
          </section>

          {/* তথ্য প্রকাশ */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-primary-dark">
              <FaShareAlt className="text-primary" /> তথ্য প্রকাশ
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>তৃতীয় পক্ষের সাথে ব্যক্তিগত তথ্য শেয়ার করা হয় না।</li>
              <li>
                অর্ডার ডেলিভারির জন্য কুরিয়ার কোম্পানিকে প্রয়োজনীয় তথ্য দেওয়া
                হয়।
              </li>
              <li>দেশের আইন প্রয়োগকারী সংস্থা চাইলে তথ্য প্রদান করা হয়।</li>
            </ul>
          </section>

          {/* তথ্য ব্যবহারের উদ্দেশ্য */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-primary-dark">
              <FaFolderOpen className="text-primary" /> তথ্য ব্যবহারের উদ্দেশ্য
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>অর্ডার প্রসেস ও অ্যাকাউন্ট ম্যানেজ করা</li>
              <li>পেমেন্ট যাচাই ও সম্পন্ন করা</li>
              <li>আপনার অনুরোধ অনুযায়ী সার্ভিস প্রদান</li>
              <li>ডেমোগ্রাফিক ভিত্তিক রিসার্চ ও অডিট</li>
            </ul>
            <p className="text-muted-foreground">
              👉 আপনি চাইলে আমাদের প্রোমোশনাল মেসেজ থেকে সহজেই opt-out করতে
              পারবেন।
            </p>
          </section>

          {/* Privacy Policy পরিবর্তন */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-primary-dark">
              <FaTools className="text-primary" /> Privacy Policy পরিবর্তন
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              China2BD Pro যেকোনো সময়ে Privacy Policy আপডেট করার অধিকার সংরক্ষণ
              করে। পরিবর্তন হলে তা এখানে প্রকাশ করা হবে।
            </p>
          </section>

          {/* আপনার অধিকার */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-primary-dark">
              <FaUserShield className="text-primary" /> আপনার অধিকার
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>আপনার তথ্য কিভাবে ব্যবহৃত হচ্ছে তা জানার অধিকার</li>
              <li>সংরক্ষিত ডেটা অ্যাক্সেস করার অধিকার</li>
              <li>ভুল বা অসংগত তথ্য সংশোধন করার অধিকার</li>
              <li>
                আপনার তথ্য সরাসরি মার্কেটিংয়ে ব্যবহার না করার অনুরোধের অধিকার
              </li>
            </ul>
          </section>

          {/* যোগাযোগ */}
          <section className="bg-gradient-to-r from-primary/10 to-site-light/30 rounded-2xl p-8 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">
              📞 যোগাযোগ
            </h2>
            <div className="flex flex-col md:flex-row justify-center sm:items-center gap-6 text-lg">
              <div className="flex items-center gap-3 text-foreground">
                <FaPhoneAlt className="text-primary" />
                <span>Hotline: +8801811396279</span>
              </div>
              <div className="flex sm:items-center gap-3 text-foreground">
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

export default PrivacyPolicy;
