import "@/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Plataforma de Gestión Personal</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/image/computacion-en-la-nube.png"
        />
      </head>
      <body>
        {children}</body>
    </html>
  );
}
