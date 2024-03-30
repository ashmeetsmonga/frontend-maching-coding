"use client";
import React, { FC, useState } from "react";
import "./folder-structure.css";
import { File } from "./types";
import { FaFile, FaFolder } from "react-icons/fa";

const FILES: File[] = [
  {
    isFile: false,
    name: "Folder 1",
    files: [{ isFile: true, name: "File 1", files: [] }],
  },
  {
    isFile: false,
    name: "Folder 2",
    files: [
      { isFile: true, name: "File 2", files: [] },
      { isFile: true, name: "File 3", files: [] },
      { isFile: true, name: "File 4", files: [] },
      { isFile: true, name: "File 5", files: [] },
    ],
  },
  {
    isFile: true,
    name: "File 6",
    files: [],
  },
];

const FolderStructurePage = () => {
  return (
    <div className="container">
      <h2>Folder Tree Structure</h2>
      <div className="folder-structure">
        {FILES.map((file) => (
          <FileFolderComponent key={file.name} file={file} />
        ))}
      </div>
    </div>
  );
};

export default FolderStructurePage;

interface FileFolderComponentProps {
  file: File;
}

const FileFolderComponent: FC<FileFolderComponentProps> = ({ file }) => {
  const [showFiles, setShowFiles] = useState(false);

  return file.isFile ? (
    <div className="file">
      <FaFile size={15} />
      {file.name}
    </div>
  ) : (
    <div className="file-container">
      <div className="file folder" onClick={() => setShowFiles((prev) => !prev)}>
        <FaFolder size={15} />
        {file.name}
      </div>
      {showFiles && <div className="inside-files">{!file.isFile && file.files.map((file) => <FileFolderComponent key={file.name} file={file} />)}</div>}
    </div>
  );
};
