import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Search BD News</h3>
            <p className="text-gray-400">
              সার্চ বিডি নিউজ একটি বাংলাদেশী সংবাদ পোর্টাল। আমরা বাংলাদেশ এবং
              সারা বিশ্বের সর্বশেষ খবর প্রদান করি।
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">
              <a href="tel:01775211117" className="">
                {" "}
                <span className="font-bold">Mobile:</span>{" "}
                <span className="hover:text-blue-500 hover:underline">
                  {" "}
                  ০১৭৭৫২১১১১৭
                </span>
              </a>
            </p>
            <p className="mb-2 ">
              <a
                href="https://wa.me/8801775211117"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="font-bold 
                "
                >
                  WhatsApp:
                </span>{" "}
                <span className="hover:underline hover:text-blue-500">
                  ০১৭৭৫২১১১১৭
                </span>
              </a>
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:searchbdnews@gmail.com"
                className="text-blue-500
                hover:underline"
              >
                {" "}
                searchbdnews@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Editorial Team</h4>
            <p className="mb-2">
              <span className="font-semibold">প্রকাশক:</span> হুমাউন কবির সাগর
            </p>
            <p className="mb-2">
              <span className="font-semibold">সম্পাদক:</span> মাহাবুব আলম সৈকত
            </p>
            <p className="mb-2">
              <span className="font-semibold">প্রধান বার্তা সম্পাদক:</span>{" "}
              সাবিনা ইয়াসমিন
            </p>
            <p>
              <span className="font-semibold">মফস্বল বার্তা সম্পাদক:</span>{" "}
              সুমাইয়া আক্তার উর্মি
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Office</h4>
            <p className="mb-2">
              <span className="font-semibold">নিউজ ইডিটর:</span> সাকিব হাওলাদার
            </p>
            <p>
              <span className="font-bold">প্রধান কার্যালয়:</span> ১৫৯/৯ নং
              ওয়ার্ড, কলাবাগান ঝালকাঠি
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Search BD News. All rights
            reserved.
          </p>
        </div>
      </div>

      <div className="text-center text-sm mt-4">
        developed by{" "}
        <a
          href="https://www.linkedin.com/in/md-arafat-howlader/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Arafat AH
        </a>
        <span className="mx-2">&</span>
        <a
          href="https://www.linkedin.com/in/md-anupam-abir-kolin-68a1b6240/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Abir Kolin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
