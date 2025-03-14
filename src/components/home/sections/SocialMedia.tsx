import Image from "next/image";

import umbrella from "@/../public/umbrella.png";
import socialMediaPic1 from "@/../public/socials-media/1.png";
import socialMediaPic2 from "@/../public/socials-media/2.png";
import socialMediaPic3 from "@/../public/socials-media/3.png";
import leafBg from "@/../public/Leaf-bg.png";

const socialMediaImages = [socialMediaPic1, socialMediaPic2, socialMediaPic3];

const SocialMedia = () => {
  return (
    <>
      <section className="bg-brown-200">
        <div className="container py-14 md:py-16">
          <header className="flex items-start justify-between gap-8">
            <div className="text-brown space-y-4 font-semibold">
              <h2 className="mb-2 text-lg">وسائل التواصل الاجتماعي</h2>
              <h3 className="text-2xl md:text-5xl">اتصل بنا</h3>
              <p className="text-primary">ملهمة منك دائما #منتجع السلام</p>
            </div>
            <Image
              src={umbrella}
              alt="umbrella"
              width={250}
              height={250}
              className="max-md:max-w-[90px]"
            />
          </header>
          <main className="grid grid-cols-1 justify-items-center gap-12 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {socialMediaImages.map((img) => (
              <Image src={img} alt="social media" key={img.src} className="" />
            ))}
          </main>
        </div>
      </section>
      <div className="bg-brown relative py-28">
        <Image src={leafBg} alt="Leaf bg" fill />
        <p className="container relative text-center text-xl text-white md:text-2xl lg:text-4xl">
          التسجيل للعروض الخاصة والعروض الترويجية
        </p>
      </div>
    </>
  );
};

export default SocialMedia;
