import { useState } from "react";
import File from "./File";

export default function Folder({ explorer }) {
  const [isFolded, setIsFolded] = useState(true);

  const folderItems = explorer.items.map((item) => {
    return (
      <li key={item.id}>
        {item.isFolder ? <Folder explorer={item} /> : <File name={item.name} />}
      </li>
    );
  });

  return (
    <div>
      <button
        className="text-lg flex items-center gap-1 p-1"
        onClick={() => setIsFolded(!isFolded)}
      >
        <span className="material-symbols-outlined text-amber-400">
          folder{!isFolded ? "_open" : ""}
        </span>
        {explorer.name}
      </button>
      {isFolded ? <></> : <ul className="ml-4 border-l-2">{folderItems}</ul>}
    </div>
  );
}
