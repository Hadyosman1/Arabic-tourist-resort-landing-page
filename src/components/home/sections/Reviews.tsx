import logoPic from "@/../public/logo.png";
import review1 from "@/../public/reviews/1.png";
import review2 from "@/../public/reviews/2.png";
import review3 from "@/../public/reviews/3.png";
import slippersPic from "@/../public/reviews/slippers.png";

import Image from "next/image";
import Link from "next/link";

const Reviews = () => {
  return (
    <section>
      <div className="container py-14 md:py-16">
        <header className="flex flex-wrap items-start justify-between gap-9">
          <div className="text-brown font-semibold">
            <h2 className="mb-2 text-lg">المراجعات</h2>
            <h3 className="text-2xl md:text-5xl">لحظاتي</h3>
          </div>
          <Image
            src={logoPic}
            alt="logo"
            width={150}
            height={150}
            className="max-md:w-[80px]"
          />
        </header>
        <main className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image src={review1} alt="review 1" className="w-full" />
            <div className="font-semibold">
              <h2 className="text-primary my-10 md:my-14">
                بيتي الروحي مكاني فوق الغيوم أجد سعادتي قلبي يدق بقوة هنا أحلامي
                تنمو لها أجنحة هنا
              </h2>
              <Link href="#" className="text-brown underline">
                استكشاف المنتجع
              </Link>
            </div>
          </div>
          <div className="self-end">
            <Image
              src={slippersPic}
              alt="slippers"
              className="mx-auto mb-20 hidden md:block"
            />
            <Image src={review2} alt="review 2" className="w-full" />
            <div className="font-semibold">
              <h2 className="text-primary my-10 md:my-14">
                بيتي الروحي مكاني فوق الغيوم أجد سعادتي قلبي يدق بقوة هنا أحلامي
                تنمو لها أجنحة هنا
              </h2>
              <Link href="#" className="text-brown underline">
                استكشاف المنتجع
              </Link>
            </div>
          </div>
          <div className="self-center">
            <Image src={review3} alt="review 3" className="w-full" />
            <div className="font-semibold">
              <h2 className="text-primary my-10 md:my-14">
                بيتي الروحي مكاني فوق الغيوم أجد سعادتي قلبي يدق بقوة هنا أحلامي
                تنمو لها أجنحة هنا
              </h2>
              <Link href="#" className="text-brown underline">
                استكشاف المنتجع
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Reviews;
