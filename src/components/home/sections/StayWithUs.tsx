import stayWithUsPic from "@/../public/stay-with-us.png";
import Image from "next/image";

const samples = [
  "قاعة المشاهدة الجماعية",
  "غرفة عرض البحيرة",
  "غرفة الفناء",
  "غرفة البدلات",
];

const StayWithUs = () => {
  return (
    <section>
      <div className="container py-14">
        <h2 className="text-brown mx-auto mb-14 max-w-[900px] text-center text-xl font-bold whitespace-pre-line md:text-2xl lg:text-4xl">
          {`"منتجع السلام" هي قصيدة للإكتشاف رسالة\n حب للحياة تعيش على الحدود`}
        </h2>

        <div className="flex flex-col gap-14 md:flex-row md:items-center">
          <div className="basis-full md:basis-1/2">
            <Image src={stayWithUsPic} alt="stay with us" />
          </div>
          <div className="grow space-y-8">
            <h2 className="font-semibold">الغرف</h2>
            <div>
              <h3 className="text-brown text-2xl font-semibold md:text-4xl lg:text-5xl">
                ابقي معنا
              </h3>
              <p className="mt-3 text-base font-medium md:text-xl">
                مكان آمن في وسط مدينة (سكوتسديل) التاريخية
              </p>
            </div>
            <ul className="flex flex-col gap-8">
              {samples.map((sample) => (
                <li
                  className="text-brown cursor-pointer text-xl font-semibold first:underline hover:underline md:text-2xl"
                  key={sample}
                >
                  {sample}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayWithUs;
