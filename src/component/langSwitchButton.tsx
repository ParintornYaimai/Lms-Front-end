'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LangSwitchButton() {
  const router = useRouter();
    const pathname = usePathname();
  const currentLocale = useLocale();
  const changeTo = currentLocale === 'en' ? 'th' : 'en';

  const handleSwitch = () => {
      router.push(pathname.replace(`/${currentLocale}`, `/${changeTo}`));
  };

  return (
    <button onClick={handleSwitch}>
      Switch to {changeTo}
    </button>
  );
}