import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/folderData";

export default function App() {
  return <Folder explorer={explorer} />;
}
