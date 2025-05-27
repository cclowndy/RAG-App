"use client";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { ReactNode, useEffect, useState } from "react";

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;

  return (
    <div className="h-dvh flex flex-col relative">
      <div className="shrink-0 sticky top-0">
        <Header />
      </div>
      {children}
      <div className="shrink-0 mt-3">
        <Footer />
      </div>
    </div>
  );
};

export default AppProvider;
