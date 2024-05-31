"use client";
import React, { FC, useState } from "react";
import "./folder-structure.css";
import { File } from "./types";
import { FaFile, FaFolder } from "react-icons/fa";
import Modal from "./components/Modal/Modal";
import { IoMdAdd } from "react-icons/io";

const FILES: File[] = [
  {
    id: 171186544312429,
    isFile: false,
    name: "Folder 1",
    files: [{ id: 1711864329552429, isFile: true, name: "File 1", files: [] }],
  },
  {
    id: 1711869552429,
    isFile: false,
    name: "Folder 2",
    files: [
      { id: 1718695234552429, isFile: true, name: "File 2", files: [] },
      { id: 1711812369552429, isFile: true, name: "File 3", files: [] },
      { id: 7118452369552429, isFile: true, name: "File 4", files: [] },
      { id: 1718623459552429, isFile: true, name: "File 5", files: [] },
    ],
  },
  {
    id: 171695522345429,
    isFile: true,
    name: "File 6",
    files: [],
  },
];

const FolderStructurePage = () => {
  const [files, setFiles] = useState<File[]>(FILES);
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedFolder, setSelectedFolder] = useState(-1);

  const handleCreate = () => {
    const name = inputValue;
    const isFile = name.includes(".");
    const newFile: File = {
      id: Date.now(),
      files: [],
      isFile: isFile,
      name: name,
    };
    const updatedFiles = [...files];
    updateFiles(updatedFiles, newFile);
    setFiles(updatedFiles);
    setShowModal(false);
    setInputValue("");
  };

  const updateFiles = (files: File[], newFile: File) => {
    files.forEach((file) => {
      if (!file.isFile) {
        if (file.id === selectedFolder) file.files.push(newFile);
        else updateFiles(file.files, newFile);
      }
    });
  };

  return (
    <div className="folder-structure-container">
      <h2>Folder Tree Structure</h2>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <div className="new-file-folder-modal-container">
          <h2>Create New File/Folder</h2>
          <div className="input-container">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleCreate}>Create</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      </Modal>
      <div className="folder-structure">
        {files.map((file) => (
          <FileFolderComponent
            openModal={() => setShowModal(true)}
            key={file.name}
            selectFolder={(id: number) => setSelectedFolder(id)}
            file={file}
          />
        ))}
      </div>
    </div>
  );
};

export default FolderStructurePage;

interface FileFolderComponentProps {
  file: File;
  openModal: () => void;
  selectFolder: (id: number) => void;
}

const FileFolderComponent: FC<FileFolderComponentProps> = ({
  file,
  openModal,
  selectFolder,
}) => {
  const [showFiles, setShowFiles] = useState(false);

  return file.isFile ? (
    <div className="file">
      <FaFile size={15} />
      {file.name}
    </div>
  ) : (
    <div className="file-container">
      <div className="file folder">
        <div
          style={{ width: "100%" }}
          onClick={() => setShowFiles((prev) => !prev)}
        >
          <FaFolder size={15} />
          {file.name}
        </div>
        <IoMdAdd
          size={15}
          onClick={() => {
            selectFolder(file.id);
            openModal();
          }}
        />
      </div>
      {showFiles && (
        <div className="inside-files">
          {!file.isFile &&
            file.files.map((file) => (
              <FileFolderComponent
                selectFolder={selectFolder}
                openModal={openModal}
                key={file.name}
                file={file}
              />
            ))}
        </div>
      )}
    </div>
  );
};
