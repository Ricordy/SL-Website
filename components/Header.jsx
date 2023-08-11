import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleLocaleChange = (event) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <header>
      <nav>
        <Link href="/">
          <a className={router.asPath === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.asPath === "/about" ? "active" : ""}>About</a>
        </Link>
      </nav>

      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="zh-CN">🇨🇳 中文</option>
        <option value="sv">🇸🇪 Swedish</option>
      </select>
    </header>
  );
};

export default Header;