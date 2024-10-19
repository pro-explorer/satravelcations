import AppIcon from '@/assets/svg/app-icon.svg';
import ThemeToggle from '@/components/theme-toggle-button';
import Hero from 'components/hero';
import { Link } from 'react-router-dom';

function header() {
  return (
    <div className="relative -mt-2 h-[460px] bg-[url('./assets/satravelcationsbg.jpg')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col px-8 py-8 text-slate-50 sm:px-16">
        <div className="flex w-full justify-between">
          <div className="flex cursor-text items-center justify-between gap-2 text-2xl font-semibold">
            <Link to="/">
              <img src={AppIcon} className="h-10 w-10" />
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              SA Travelcations
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-end px-4 sm:px-20">
              <ThemeToggle />
            </div>
            <div>{/*  */}</div>
          </div>
        </div>
        <Hero />
      </div>
    </div>
  );
}

export default header;
