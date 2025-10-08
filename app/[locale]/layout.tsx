import Sidebar from "@/app/components/Sidebar";
import { PageFooter } from "@/app/components/PageFooter";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-5 gap-3 max-md:flex-col">
      <Sidebar />
      <main className="flex-1">
        {children}
        <PageFooter />
      </main>
    </div>
  );
}
