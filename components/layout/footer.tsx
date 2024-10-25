import Link from 'next/link';

import clsx from 'clsx';
import { Facebook } from 'components/icons/facebook';
import { Instagram } from 'components/icons/instagram';
import { Threads } from 'components/icons/threads';
import { Tiktok } from 'components/icons/tiktok';
import { Whatsapp } from 'components/icons/whatsapp';
import { X } from 'components/icons/x';
import { Youtube } from 'components/icons/youtube';
import FooterMenu from 'components/layout/footer-menu';
import ThemeSwitch from 'components/theme-switch';
import siteMetadata from 'data/siteMetadata';
import { getMenu } from 'lib/wix';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = currentYear > 2023 ? `${currentYear}` : '';
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div>
          <h2 className="mb-3 text-lg font-bold tracking-widest">Quick Links</h2>
          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} />
          </Suspense>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold tracking-widest">Contact Details</h2>
          <nav className="">
            <ul>
              <li>
                <Link
                  href={`tel:${siteMetadata.phone}`}
                  className={clsx(
                    'block py-2 text-sm underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300'
                  )}
                >
                  Tel : {siteMetadata.phone}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${siteMetadata.email}`}
                  className={clsx(
                    'text-lm block py-2 underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300'
                  )}
                >
                  Email : {siteMetadata.email}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-bold tracking-widest">Socials</h2>
          <div className="mb-3 flex space-x-4">
            <a
              aria-label="Github Repository"
              href={siteMetadata.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6" />
            </a>
            <a
              aria-label="Github Repository"
              href={siteMetadata.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6" />
            </a>

            <a
              aria-label="Github Repository"
              href={siteMetadata.threads}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Threads className="h-6" />
            </a>
            <a
              aria-label="Github Repository"
              href={siteMetadata.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tiktok className="h-6" />
            </a>

            <a
              aria-label="Github Repository"
              href={siteMetadata.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp className="h-6" />
            </a>
            <a
              aria-label="Github Repository"
              href={siteMetadata.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              <X className="h-6" />
            </a>
            <a
              aria-label="Github Repository"
              href={siteMetadata.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>Designed by Pro</p>

          <div className="md:ml-auto">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
