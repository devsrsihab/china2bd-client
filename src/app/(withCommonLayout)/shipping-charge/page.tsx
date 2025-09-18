"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Scale, Package, Ship } from "lucide-react";

export default function ShippingCharge() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-site-light/40 to-white py-20 px-6 font-jost">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-dark">
            🛳 কাস্টমস ও শিপিং চার্জ
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            আপডেট: ২৫ মে, ২০২৩
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="rounded-2xl shadow-xl border-none bg-gradient-to-br from-white to-site-light/30">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="flex justify-center">
                <Ship className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">কিভাবে নির্ধারিত হয়?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ● পণ্যের ক্যাটাগরি, অর্ডারের ভ্যালু, অর্ডারের পরিমাণ অনুযায়ী রেট
                পরিবর্তিত হতে পারে। <br />
                ● মিক্সড আইটেম হলে এভারেজ রেট ব্যবহার করা হয়। <br />● রেট
                সময়ভেদে পরিবর্তনশীল হলেও অর্ডারের সময় যে রেট দেখাবে সেটাই
                কার্যকর থাকবে।
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="rounded-2xl shadow-xl border-none bg-gradient-to-br from-white to-site-light/30">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="flex justify-center">
                <Package className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">ওজন নির্ধারণের নিয়ম ⚖</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ● প্রতিটি প্যাকেট আলাদাভাবে ওজন করা হয়। <br />
                ● যেমন ৬২০ গ্রাম হলে ৬২০ গ্রামই ধরা হবে। <br />● একাধিক অর্ডার
                থাকলেও প্রতিটি প্যাকেট আলাদাভাবে হিসাব হবে।
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="rounded-2xl shadow-xl border-none bg-gradient-to-br from-white to-site-light/30">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="flex justify-center">
                <Scale className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-xl font-semibold">স্বচ্ছতা</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ✅ China2BD Pro সর্বদা স্বচ্ছ রেট প্রদর্শন করে যাতে আমাদের
                গ্রাহকরা সহজেই ব্যবসায়িক সিদ্ধান্ত নিতে পারেন।
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">যোগাযোগ</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5 text-primary" />
              <span> Hotline: +8801811396279</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Mail className="w-5 h-5 text-primary" />
              <span> info@china2bdpro.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
