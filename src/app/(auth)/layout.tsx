import Logo from "@/components/ui/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex items-center justify-center h-screen w-full gap-5 flex-col my-10">
      <Logo />
      <div className="mx-5 w-full flex items-center justify-center ">
        {children}
      </div>
    </main>
  );
}
