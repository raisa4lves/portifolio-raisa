import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";

export const metadata = {
  title: {
    default: "Raisa Alves · Portfólio",
    template: "%s · Raisa Alves",
  },
  description:
    "Portfólio de Raisa Alves — estudante de Sistemas para Internet (Embarque Digital), em transição de carreira para tecnologia com foco em IA, automação e desenvolvimento.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ScrollFx />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
