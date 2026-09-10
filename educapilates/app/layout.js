import "./globals.css";

export const metadata = {
  title: "Educa Pilates | Movimento, equilíbrio e bem-estar",
  description:
    "Conheça a Educa Pilates em Itapetininga. Informações sobre o estúdio, localização, horários e contato.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
