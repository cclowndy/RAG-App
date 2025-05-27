import { cn } from "@/lib/utils";
import { BotMessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  {
    title: "RAG Q&A",
    icon: <BotMessageSquare size={24} />,
    to: "/",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-[1232px] w-full p-4 mx-auto">
      <header>
        <div className="bg-color__2 p-2.5 rounded-xl shadow flex items-center flex-wrap gap-2.5">
          {services.map((s, idx) => (
            <Link
              href={s.to}
              key={idx}
              className={cn(
                "flex items-center space-x-2 p-2 hover:bg-color__1/50 rounded-lg",
                pathname == s.to && "bg-color__1/50"
              )}
            >
              {s.icon}
              <span className="font-semibold">{s.title}</span>
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Header;
