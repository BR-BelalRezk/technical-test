import Image from "next/image";
import {
  Heart,
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";

import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { productData } from "@/constants";

export default function SimilarItems() {
  return (
    <section className="relative w-full py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-black">Similar Items</h2>
            <span className="h-1 w-10 rounded-full bg-pink" />
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="relative w-full"
        >
          {/* Items */}
          <CarouselContent className="-ml-4">
            {productData.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <Card className="rounded-2xl border border-black/5 bg-transparent shadow-none">
                  <CardContent className="flex flex-col gap-4 p-4">
                    {/* Image */}
                    <div className="relative h-64 w-full rounded-2xl border border-black/5">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-6"
                      />

                      {product.discount && (
                        <Badge className="absolute left-4 top-4 rounded-lg bg-white/70 text-xs font-semibold text-pink backdrop-blur">
                          {product.discount}
                        </Badge>
                      )}

                      {/* Wishlist */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-14 top-4 h-10 w-10 rounded-lg border border-black/10 bg-white/70 backdrop-blur hover:bg-white"
                      >
                        <Heart
                          className={`h-5 w-5 transition ${
                            product.isWishlisted
                              ? "fill-black text-black"
                              : "text-black/60"
                          }`}
                        />
                      </Button>

                      {/* Cart */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-4 h-10 w-10 rounded-lg border border-black/10 bg-white/70 backdrop-blur hover:bg-white"
                      >
                        <ShoppingBag
                          className={`h-5 w-5 transition ${
                            product.isInCart
                              ? "fill-black text-black"
                              : "text-black/60"
                          }`}
                        />
                      </Button>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs text-black/60">
                        <span>{product.category}</span>

                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium text-black">
                            {product.rating}
                          </span>
                          <span className="text-[10px] text-black/50">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <p className="line-clamp-2 text-sm font-medium text-black">
                        {product.title}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-black">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-black/40 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          {product.colors.map((color, i) => (
                            <span
                              key={i}
                              style={{ backgroundColor: color }}
                              className="h-4 w-4 rounded-full border border-black/10"
                            />
                          ))}
                          <span className="ml-1 text-xs text-black">
                            {product.moreColors}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex gap-5 items-center justify-center">
            {/* Navigation */}
            <CarouselPrevious className="relative  bg-pink text-white shadow-sm size-[50px] rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>

            <CarouselNext className="relative bg-pink text-white shadow-sm size-[50px] rounded-full">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
