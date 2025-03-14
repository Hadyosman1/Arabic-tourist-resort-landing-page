import Image from "next/image";

import photographerPic from "@/../public/photographer.jpg";
import arrowLeft from "@/../public/arrow-left.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-18 md:py-24">
      <div className="border-brown border-t">
        <div className="flex flex-col gap-9 max-md:container md:flex-row md:items-center lg:gap-20">
          <div className="basis-full md:basis-1/2">
            <Image
              src={photographerPic}
              alt="photographer"
              className="w-full"
            />
          </div>
          <div className="flex grow flex-col gap-10 py-6 md:py-10">
            <div className="flex items-center gap-5 pe-4 lg:gap-10">
              <b className="basis-1/5 text-3xl lg:text-5xl">الزيارة</b>
              <div className="text-brown flex items-center gap-3 text-xl font-medium md:gap-8 lg:text-3xl">
                <Image
                  src={arrowLeft}
                  alt="arrow left"
                  className="max-md:max-w-8"
                />
                <p>
                  Porongos 5782 <br />
                  المركبة 90001
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 pe-4 lg:gap-10">
              <b className="basis-1/5 text-3xl lg:text-5xl">اكتب</b>
              <div className="text-brown flex items-center gap-3 text-xl font-medium md:gap-8 lg:text-3xl">
                <Image
                  src={arrowLeft}
                  alt="arrow left"
                  className="max-md:max-w-8"
                />
                <p>Hello@alsalam.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5 pe-4 lg:gap-10">
              <b className="basis-1/5 text-3xl lg:text-5xl">اتصلي</b>
              <div className="text-brown flex items-center gap-3 text-xl font-medium md:gap-8 lg:text-3xl">
                <Image
                  src={arrowLeft}
                  alt="arrow left"
                  className="max-md:max-w-8"
                />
                <p>598-9873-9313</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-brown border-b">
          <div className="container flex w-full flex-col items-center justify-between gap-10 py-6 md:flex-row">
            <div className="flex items-center gap-5 text-white duration-300 *:transition-all">
              <Link
                href="#"
                className="hover:text-primary bg-brown hover:bg-brown/95 grid place-content-center rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="hover:text-primary bg-brown hover:bg-brown/95 grid place-content-center rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22.213 5.656a8.4 8.4 0 0 1-2.402.658A4.2 4.2 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.87 11.87 0 0 1-8.621-4.37a4.17 4.17 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.2 4.2 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.2 4.2 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.4 8.4 0 0 1-6.192 1.732a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9q0-.271-.012-.541a8.5 8.5 0 0 0 2.086-2.164"
                  />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="hover:text-primary bg-brown hover:bg-brown/95 grid place-content-center rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="hover:text-primary bg-brown hover:bg-brown/95 grid place-content-center rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4.15c-1.191 0-2.58.028-3.934.066l-.055.002c-1.378.039-2.49.07-3.366.215c-.913.151-1.671.44-2.277 1.063c-.608.625-.873 1.398-.998 2.323c-.12.89-.12 2.018-.12 3.42v1.524c0 1.4 0 2.528.12 3.419c.124.925.39 1.698.998 2.323c.606.624 1.364.912 2.277 1.063c.876.145 1.988.176 3.366.215l.055.002c1.355.038 2.743.066 3.934.066s2.58-.028 3.934-.066l.055-.002c1.378-.039 2.49-.07 3.366-.215c.913-.151 1.671-.44 2.277-1.063c.608-.625.874-1.398.998-2.323c.12-.89.12-2.018.12-3.42v-1.524c0-1.401 0-2.529-.12-3.419c-.124-.925-.39-1.698-.998-2.323c-.606-.624-1.364-.912-2.277-1.063c-.876-.145-1.988-.176-3.367-.215l-.054-.002A145 145 0 0 0 12 4.15m-1.128 10.501A.75.75 0 0 1 9.75 14v-4a.75.75 0 0 1 1.122-.651l3.5 2a.75.75 0 0 1 0 1.302z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
            <div className="text-brown flex flex-wrap items-center gap-7 font-semibold *:hover:underline max-md:justify-center">
              <Link href="#">العطلة</Link>
              <Link href="#">الأنشطة</Link>
              <Link href="#">جولة افتراضية</Link>
              <Link href="#">الأستوديو</Link>
              <Link href="#">العبوات</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
