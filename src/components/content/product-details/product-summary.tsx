import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";

const ratingsData = [
  { stars: 5, percentage: 67 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 9 },
];

export default function ProductSummary() {
  return (
    <section className="container py-12">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-1">
        <h2 className="font-poppins text-2xl font-semibold text-brand-black-500">
          Rating & Reviews
        </h2>
        <div className="h-1 w-10 rounded-2xl bg-pinkpink-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        {/* Average rating */}
        <div className="flex flex-row items-end gap-2 lg:flex-col lg:items-start">
          <span className="font-poppins text-6xl font-medium text-brand-black-500 sm:text-7xl lg:text-[120px] leading-none">
            4.5
          </span>
          <span className="font-poppins text-xl font-medium text-textblack-100 lg:text-2xl">
            /5
          </span>
        </div>

        {/* Rating breakdown (INLINE ProductSummarySection) */}
        <div className="flex w-full flex-1 flex-col gap-3">
          {ratingsData.map((rating) => (
            <div
              key={rating.stars}
              className="flex w-full flex-wrap items-center gap-3 sm:flex-nowrap"
            >
              {/* Stars */}
              <div className="flex min-w-[52px] items-center gap-2">
                <StarIcon className="h-4 w-4 fill-[#545454] text-[#545454]" />
                <span className="text-sm font-medium text-[#545454]">
                  {rating.stars}
                </span>
              </div>

              {/* Progress + % */}
              <div className="flex w-full items-center gap-3 sm:gap-5">
                <div className="relative h-1.5 w-full overflow-hidden rounded-xl bg-textblackblack-50">
                  <div
                    className="h-full rounded-xl bg-pink transition-[width] duration-500 ease-out"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>

                <span className="shrink-0 text-xs font-medium text-[#545454] sm:text-sm">
                  {rating.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews CTA */}
        <div className="flex w-full flex-col items-center gap-4 sm:max-w-[240px] lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-sm text-[#545454]">Total Reviews</span>
            <span className="font-poppins text-4xl font-semibold text-brand-black-500 sm:text-5xl">
              3.0K
            </span>
          </div>

          <Button className="flex w-full items-center justify-center gap-2 rounded-xl bg-pinkpink-500 px-6 py-4 hover:bg-pinkpink-500/90">
            <span className="font-poppins text-base font-medium text-white">
              Add Comment
            </span>
            <img
              src="/huge-icon-communication-bulk-chat-01.svg"
              alt="Add comment"
              className="h-5 w-5"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
