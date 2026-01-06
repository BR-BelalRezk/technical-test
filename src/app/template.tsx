import PageWrapper from "@/components/animation/elements/page-wrapper";

type props = {
  children: React.ReactNode;
};

export default function Template({ children }: props) {
  return <PageWrapper>{children}</PageWrapper>;
}
