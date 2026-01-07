import { ChevronRightIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcn/breadcrumb";

const breadcrumbItems = [
  { label: "Home", href: "#", isActive: false },
  { label: "Our Category", href: "#", isActive: false },
  { label: "Product Details", href: "#", isActive: true },
];

export default function BreadcrumbSection() {
  return (
    <div className="flex justify-start bg-[#ececec66] rounded-2xl overflow-hidden h-14 ">
      <div className="flex items-center container">
        <Breadcrumb>
          <BreadcrumbList className="gap-0.5">
            {breadcrumbItems.map((item, index) => (
              <div key={index} className="flex items-center gap-0.5">
                <BreadcrumbItem>
                  {item.isActive ? (
                    <BreadcrumbPage className="font-medium text-base text-brand-black-200">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      href={item.href}
                      className="font-medium text-base text-brand-black-500 hover:text-brand-black-500"
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbItems.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRightIcon className="w-4 h-4 text-black-500" />
                  </BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
