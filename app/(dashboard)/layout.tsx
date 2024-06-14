import { Header } from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        <div>{children}</div>
      </main>
    </>
  );
};

export default DashBoardLayout;
