import { NextPage } from "next";
import Head from "next/head";
import {
  FaGlobeAsia,
  FaShippingFast,
  FaMoneyBillWave,
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | China2BD Pro</title>
        <meta
          name="description"
          content="About Us page for China2BD Pro – আপনার বিশ্বস্ত Wholesale Marketplace"
        />
      </Head>

      <main className="w-full min-h-screen bg-gradient-to-b from-white via-site-light/30 to-white py-16 px-4 md:px-8 font-jost">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <header className="text-center space-y-6">
            <h1 className="text-2xl md:text-4xl font-extrabold text-primary-dark flex items-center justify-center gap-3">
              China2BD Pro – আপনার বিশ্বস্ত Wholesale Marketplace
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              স্বাগতম China2BD Pro-তে! চায়নার হাজারো পণ্যের ভাণ্ডার এখন হাতের
              নাগালেই। আমাদের লক্ষ্য হলো বাংলাদেশি ব্যবসায়ীদের জন্য সবচেয়ে সহজ
              এবং নির্ভরযোগ্য সোর্সিং সল্যুশন প্রদান।
            </p>
          </header>

          {/* Intro Section */}
          <section className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 md:p-10 leading-relaxed space-y-4">
            <p>
              আমাদের প্ল্যাটফর্মটি তৈরি হয়েছে বিশেষ করে ক্ষুদ্র ও মাঝারি
              ব্যবসায়ী, ই-কমার্স উদ্যোক্তা এবং নতুন স্টার্টআপদের জন্য। চায়না
              থেকে সরাসরি পণ্য কিনতে গেলে অনেকেই সবচেয়ে বড় সমস্যায় পড়েন—সঠিক
              উৎপাদনকারী প্রতিষ্ঠান বা কারখানা খুঁজে পাওয়া।
            </p>
            <p>
              👉 China2BD Pro সেই সমস্যার সহজ সমাধান দিচ্ছে। এখান থেকে আপনি
              উৎপাদনকারী প্রতিষ্ঠান থেকেই পণ্য অর্ডার করতে পারবেন একদম Wholesale
              দামে।
            </p>
            <p>
              👉 শুধু পণ্যের নাম লিখে বা ছবি আপলোড করেই আপনার কাঙ্ক্ষিত
              প্রোডাক্ট খুঁজে পাওয়া যাবে।
            </p>
          </section>

          {/* Delivery Section */}
          <section className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark flex items-center gap-3">
              <FaShippingFast className="text-primary" /> ডেলিভারি সময়সীমা
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>✈ এয়ার শিপমেন্ট: আনুমানিক ১০–১৫ দিন</li>
              <li>🚢 সি শিপমেন্ট: আনুমানিক ৩০–৪০ দিন</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              📌 Customs, LC কিংবা ক্লিয়ারেন্স–সব ঝামেলা আমরা সামলে দিই। তাই
              ব্যবসায়ী হিসেবে আপনার ফোকাস থাকবে কেবল ব্যবসা বৃদ্ধিতে।
            </p>
          </section>

          {/* Shipping Charge Section */}
          <section className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark flex items-center gap-3">
              <FaMoneyBillWave className="text-primary" /> শিপিং চার্জ কবে দিতে
              হবে?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              শিপিং চার্জ দিতে হবে কেবল তখনই যখন পণ্য বাংলাদেশ পৌঁছাবে। আমরা
              সবসময় স্বচ্ছ রেট প্রদর্শন করি, কোনো লুকানো খরচ নেই।
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark flex items-center gap-3">
              <FaHandshake className="text-primary" /> কেন বেছে নেবেন China2BD
              Pro?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>সরাসরি Manufacturer থেকে কেনার সুযোগ</li>
              <li>প্রতিযোগিতামূলক ও স্বচ্ছ মূল্য</li>
              <li>এয়ার ও সি—দুইভাবেই শিপমেন্ট সুবিধা</li>
              <li>Customs ও LC hassle-free সাপোর্ট</li>
              <li>অভিজ্ঞ ও বন্ধুসুলভ কাস্টমার সাপোর্ট টিম</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-primary/10 to-site-light/30 rounded-2xl p-6 md:p-10 text-center shadow-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-6">
              যোগাযোগ করুন
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg md:text-xl">
              <div className="flex items-center gap-3 text-foreground">
                <FaPhoneAlt className="text-primary" />
                <span>Hotline: +8801811396279</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <FaEnvelope className="text-primary" />
                <span>Email: info@china2bdpro.com</span>
              </div>
            </div>
            <p className="mt-6 text-base md:text-lg text-primary font-semibold">
              আজই আপনার প্রোডাক্ট সোর্স করুন China2BD Pro থেকে, আর আপনার
              ব্যবসাকে দিন নতুন গতি 🚀
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
