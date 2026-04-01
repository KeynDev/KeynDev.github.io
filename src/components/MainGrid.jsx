import SearchBar from "./SearchBar";
import Tiles from "./Tiles";
import Sidebar from "./Sidebar";

export default function MainGrid() {
  return (
    <main>
      <div className="mainGrid">
        <div className="mainContent">
          <div className="tile large">
            <h2>View All Projects</h2>
            <p>Interactive experience here soontm</p>
            <a href="#" className="tileLink">
              Visit →
            </a>
          </div>

          <SearchBar />
          <Tiles />
        </div>

        <Sidebar />
      </div>
    </main>
  );
}