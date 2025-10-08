"use client";

import { useTranslations } from "next-intl";
import { FaEnvelope, FaLinkedin, FaGithub, FaGooglePlay } from "react-icons/fa";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6 md:px-6 pt-6">
      <div>
        <h1 className="text-4xl font-bold relative w-fit">
          {t("sections.contact")}
        </h1>

        <div className="bg-white rounded-md p-6 shadow-sm mt-6">
          <p className="text-gray-800 font-semibold mb-4">{t("contactText")}</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <li className="flex items-center gap-3 p-4 rounded-lg bg-zinc-100/50 hover:shadow-md transition">
              <FaEnvelope className="w-5 h-5 text-blue-500" />
              <a
                href={`mailto:${t("contactEmail")}`}
                className="hover:underline"
              >
                {t("contactEmail")}
              </a>
            </li>

            <li className="flex items-center gap-3 p-4 rounded-lg bg-zinc-100/50 hover:shadow-md transition">
              <FaLinkedin className="w-5 h-5 text-blue-700" />
              <a
                href={`https://${t("contactLinkedin")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>

            <li className="flex items-center gap-3 p-4 rounded-lg bg-zinc-100/50 hover:shadow-md transition">
              <FaGithub className="w-5 h-5 text-gray-800" />
              <a
                href="https://github.com/infinite223"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>

            <li className="flex items-center gap-3 p-4 rounded-lg bg-zinc-100/50 hover:shadow-md transition">
              <FaGooglePlay className="w-5 h-5 text-green-600" />
              <a
                href="https://play.google.com/store/apps/developer?id=Dawid+Szmigiel&hl=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Google Play
              </a>
            </li>
          </ul>

          <div className="mt-6 text-gray-600 text-sm leading-relaxed">
            {t("contactTextBottom")}
          </div>

          <div className="flex flex-col border-t-2 border-zinc-200 pt-5 justify-center items-center w-full text-xs self-center gap-2 mt-5">
            <div className="font-semibold">{t("footer.company")}</div>
            <div className="flex gap-4 items-center">
              <div>{t("footer.nip")}</div>
              <div>{t("footer.regon")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
