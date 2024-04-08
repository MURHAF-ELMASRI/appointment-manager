import Header from "./Header";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
