import DashboardLayout from "@/Components/layout/dashboardLayout";
import ContextProvider from "@/contexts/ContextProvider";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ContextProvider>
    </>
  );
}

export default MyApp;
