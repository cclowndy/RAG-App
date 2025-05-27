import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="text-center py-1.5">
        <Link
          href="https://github.com/cclowndy/"
          target="_blank"
          className="text-sm"
        >
          © 2025 cclowndy.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
