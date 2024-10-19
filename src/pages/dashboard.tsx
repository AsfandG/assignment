import DashboardHeader from "@/components/dashboard/dashboard-header";
import ProductsSection from "@/components/products-section";

const Dashboard = () => {
  return (
    <div className="p-6">
      <DashboardHeader />
      <ProductsSection />
    </div>
  );
};

export default Dashboard;
