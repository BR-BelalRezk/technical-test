import Image from "next/image";
import productDetailsImage from "@/public/images/product-details-bg.png";

export default function ProductDetailsImage() {
  return (
    <section className="h-[233px] relative w-full ">
      <Image
        className="absolute top-0 left-0 size-full object-cover"
        alt="Element vertical"
        src={productDetailsImage}
      />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 [-webkit-text-stroke:1px_#0000000d]  font-bold text-transparent lg:text-[80px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Product Details
      </div>

      <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-brand-black-500 text-[30px] font-semibold tracking-[0] leading-[normal]  text-center whitespace-nowrap">
        Product Details
      </h1>
    </section>
  );
}
