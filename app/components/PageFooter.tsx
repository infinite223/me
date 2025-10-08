import { useTranslations } from "next-intl";

export const PageFooter = () => {
  const t = useTranslations();

  return (
    <footer className="mt-10 border-t border-gray-200 py-4">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Dawid Szmigiel IT Solutions -{" "}
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};
