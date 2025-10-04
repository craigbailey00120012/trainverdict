export const metadata = { title: "TrainVerdict", description: "Real reviews of real train journeys." };
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
