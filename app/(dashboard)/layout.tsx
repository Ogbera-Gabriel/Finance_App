import { Header } from "@/components/header";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Expense Tracker Dashboard - Manage Your Income & Expenses Easily",
  description: "Discover our user-friendly dashboard to track income, manage expenses, and monitor transactions. Achieve financial control with real-time insights and detailed reports.",
}


const DashBoardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        {children}
      </main>
    </>
  );
};

export default DashBoardLayout;
