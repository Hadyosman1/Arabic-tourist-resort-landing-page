import packagePic1 from "@/../public/packages/1.png";
import packagePic2 from "@/../public/packages/2.png";
import packagePic3 from "@/../public/packages/3.png";
import packagePic4 from "@/../public/packages/4.png";
import Image from "next/image";

const packages = [
  {
    image: packagePic1,
    title: "ابقَ أطول، ادخر أكثر",
    description:
      "زروا عدو منتجع فيلا ناتو بقدر ما تريدون، كلما\n بقيتم أطول، كلما ادخرتم أكثر!",
  },
  {
    image: packagePic2,
    title: "هروب الأصدقاء",
    description:
      "احصل على هروب الأصدقاء للهروب إلى سكوتسديل\n بما في ذلك خصم في الغداء والعشاء!",
  },
  {
    image: packagePic3,
    title: "ائتمان المأكولات والمشروبات",
    description:
      "تذوق شيء لذيذ في مطعم نادي القنال أو بجانب حمام\n السباحة. أو تختار أن تسترخي في غرفتك مع غرفتك",
  },
  {
    image: packagePic4,
    title: "منتجع كريدي حزمة",
    description:
      "استرخي واسترخي في منتجع (فيلا ناتو)\n الصحي بـ 100 دولار يومياً",
  },
];

const Packages = () => {
  return (
    <section className="bg-primary text-beige-light">
      <div className="container py-14 md:py-20">
        <header className="flex flex-wrap items-start justify-between gap-9">
          <div className="font-semibold">
            <h2 className="mb-2 text-lg">العبوات</h2>
            <h3 className="text-2xl md:text-5xl">عالج نفسك</h3>
          </div>
          <p className="max-w-[500px] text-balance">
            ولكي نجعل إقامتكم خاصة ــ وأكثر تذكرا ــ فقد أنشأنا حزم العطلات
            المصممة للسماح لكم بالغوص في واستكشاف أفضل ما في منتجع السلام.
          </p>
        </header>
        <main className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-2">
          {packages.map(({ title, description, image }) => (
            <article key={title}>
              <Image src={image} alt={`${title} pic`} className="mx-auto" />
              <div className="flex flex-col items-center gap-4 px-3 pt-8 text-center md:px-5">
                <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                  {title}
                </h2>
                <p className="font-medium lg:whitespace-pre-line">
                  {description}
                </p>
                <button className="text-brown bg-beige-light px-6 py-1.5 font-semibold transition-all duration-300 hover:brightness-75">
                  احجز الآن
                </button>
              </div>
            </article>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Packages;
