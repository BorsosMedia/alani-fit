import "../styles/globals.css";

export const metadata = {
  title: "Alani Fit",
  description:
    "Elevate your strength and brand with Alani X Fit, a Florida-based bikini bodybuilder and strategic brand expert. Uncover fitness insights, personalized regimens, and branding tips for a powerful physique and professional success. Join a community driven by passion and excellence. Your journey to a stronger, more empowered you begins now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script async src="https://link.msgsndr.com/js/form_embed.js" />
        <script
          async
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        />
      </body>
    </html>
  );
}
