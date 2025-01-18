import "./globals.css";
import { Lalezar } from "next/font/google";
import { SessionProvider } from "./SessionProvider";

const lalezar = Lalezar({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Prode App",
  description: "Hacer predicciones deportivas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={lalezar.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
