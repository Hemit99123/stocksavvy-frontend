import { Grid } from "./components/Dashboard/Info";
import { Header } from "./components/Dashboard/common/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

const Admin = () => {

  return (
    <main className="grid gap-4 p-4 grid-cols-[350px,_1fr]">
      <Sidebar />
      <div className="bg-white rounded-lg pb-4 shadow">
        <Header />
        <Grid />
      </div>    
    </main>
  );
}

export default Admin;