 import Map from "../components/map/Map";
// import Sidebar from "../components/Sidebar";
// import User from "../components/User";
import AppNav from "../components/Appnav/AppNav";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from './AppLayout.module.css'


function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Map/>
    {/* <AppNav/> */}
    {/* // <div className={styles.app}>
    //   <Sidebar />
    //   <Map />
    //   <User />
    // </div> */}
    </div>
  );
}

export default AppLayout;
