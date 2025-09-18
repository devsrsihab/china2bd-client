import { NextPage } from "next";
import Head from "next/head";
import {
  FaUndoAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ReturnsAndRefund: NextPage = () => {
  return (
    <>
      <Head>
        <title>Returns & Refund Policy | China2BD Pro</title>
        <meta
          name="description"
          content="Returns & Refund Policy page for China2BD Pro – আপনার বিশ্বস্ত Wholesale Marketplace"
        />
      </Head>

      <main className="w-full min-h-screen bg-gradient-to-b from-white via-site-light/30 to-white py-16 px-4 md:px-8 font-jost">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <header className="text-center space-y-4">
            <h1 className="text-2xl md:text-4xl font-extrabold text-primary-dark flex items-center justify-center gap-3">
              <FaUndoAlt className="text-primary" /> Return & Refund Policy
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Updated on: ১৯ সেপ্টেম্বর, ২০২৫
            </p>
          </header>

          {/* Refund Cases */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 text-primary-dark">
              <FaCheckCircle className="text-green-600" /> যেসব ক্ষেত্রে রিফান্ড
              দেওয়া হয়
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
              <li>
                পণ্য ভাঙা বা নষ্ট পাওয়া গেলে এবং ডেলিভারির ২ দিনের মধ্যে ছবি সহ
                ক্লেইম করলে।
              </li>
              <li>
                প্রাপ্ত পণ্য আমাদের ওয়েবসাইটে প্রদর্শিত পণ্যের সাথে না মিললে।
              </li>
              <li>
                আপনার দেওয়া সাইজ বা কালার না মিললে (তবে লাইটিং ও রেজোলিউশনের
                কারণে ৫%-১০% রঙের পার্থক্য রিফান্ডের আওতায় ধরা হবে না)।
              </li>
              <li>
                ইলেকট্রনিক পণ্যের ক্ষেত্রে কোনো ওয়ারেন্টি প্রদান করা হয় না।
              </li>
              <li>
                রিফান্ড ইস্যু হলে ৭ কার্যদিবসের মধ্যে টাকা ফেরত দেওয়া হবে।
              </li>
            </ul>
          </section>

          {/* Non-Refundable Cases */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 text-primary-dark">
              <FaTimesCircle className="text-red-600" /> যেসব ক্ষেত্রে
              রিটার্ন/রিফান্ড প্রযোজ্য নয়
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
              <li>ভুল ঠিকানা দেওয়ার কারণে পণ্য না পাওয়া গেলে।</li>
              <li>
                বাংলাদেশ ওয়্যারহাউসে পৌঁছানোর পর “পছন্দ হয়নি” বা “এখন আর দরকার
                নেই” ধরনের কারণে।
              </li>
              <li>কাস্টমস কর্তৃপক্ষ কাটন খুলে পরীক্ষার ফলে কোনো ক্ষতি হলে।</li>
              <li>
                সাপ্লায়ারের ওয়্যারহাউস থেকে ডেলিভারি হয়ে গেলে আর রিটার্ন সম্ভব
                নয়। তবে চায়না ওয়্যারহাউসে থাকাকালীন রিটার্ন চাইলে পণ্য ফেরত
                পাঠানোর খরচ এবং সাপ্লায়ারের শিপমেন্ট খরচ আপনাকেই বহন করতে হবে।
              </li>
              <li>By Air শিপমেন্ট: ৪০ দিনের বেশি সময় অতিক্রম করলে।</li>
              <li>By Sea শিপমেন্ট: ৯০ দিনের বেশি সময় অতিক্রম করলে।</li>
              <li>
                👉 এসব ক্ষেত্রে শুধুমাত্র শতভাগ সত্যতা সাপেক্ষে রিফান্ড করা হবে।
              </li>
            </ul>
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

export default ReturnsAndRefund;
