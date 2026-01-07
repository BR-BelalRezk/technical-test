import ProductDetailsImage from "@/components/content/product-details/product-details-image";
import BreadcrumbSection from "@/components/content/product-details/breadcrumbs-section";
import SimilarItems from "@/components/content/product-details/similar-items";
import ProductSummary from "@/components/content/product-details/product-summary";

export default function ProductID() {
  return (
    <>
      <ProductDetailsImage />
      <BreadcrumbSection />
      <ProductSummary />
      <SimilarItems />
    </>
  );
}
