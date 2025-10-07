import { NextIntlClientProvider } from "next-intl";
import Sidebar from "@/app/components/Sidebar";
import { PageFooter } from "@/app/components/PageFooter";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 👇 Nowe wymaganie Next.js 15 — trzeba awaitować params
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="flex p-5 gap-3 max-md:flex-col">
            <Sidebar />
            <main className="flex-1 px-6 py-6">
              {children}
              <PageFooter />
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
