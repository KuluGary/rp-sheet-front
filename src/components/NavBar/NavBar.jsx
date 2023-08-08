import AddFileDropdown from "@/components/AddFileDropdown/AddFileDropdown";
import ArrowLeft from "@/components/Icons/ArrowLeft";
import FileAdd from "@/components/Icons/FileAdd";
import FileDownload from "@/components/Icons/FileDownload";
import FileUpload from "@/components/Icons/FileUpload";
import Info from "@/components/Icons/Info";
import Pdf from "@/components/Icons/Pdf";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { downloadPdf } from "../../services/sheet";

const NavBar = ({ data, setData, type, onAddFile }) => {
  const navigate = useNavigate();
  const inputFile = useRef(null);
  const [show, setShow] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    return () => (window.onscroll = null);
  });

  const handleDownloadJson = () => {
    const fileName = `${data?.["1"]?.data?.name ?? data?.name}.${type}.json`;
    const file = new Blob([JSON.stringify(data)], { type: "application/json", name: fileName });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    setShow(false);
  };

  const handleDownloadPdf = async () => {
    const fileName = `${data?.["1"]?.data?.name ?? data?.name}.${type}.pdf`;
    const { payload: base64 } = await downloadPdf(data);
    const file = await fetch(base64).then((res) => res.blob());

    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    setShow(false);
  };

  const handleUpload = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const reader = new FileReader();
    reader.onload = (event) => {
      const newPages = JSON.parse(event.target.result);
      setData(newPages);
      setShow(false);
    };
    reader.readAsText(event.target.files[0]);
  };

  const handleAddFile = (event) => {
    onAddFile(event);
    setShow(false);
  };

  return (
    <nav
      className={`fixed top-0 px-10 py-4 z-20 w-full flex justify-between backdrop-blur-sm transition-shadow ${
        isTop ? "" : "shadow-md"
      }`}
    >
      <button onClick={() => navigate(-1)} className="hover:bg-neutral-300 rounded-full p-1">
        <ArrowLeft size={32} />
      </button>
      <div className="relative flex items-center">
        <AddFileDropdown show={show} setShow={setShow} handleSelect={handleAddFile} type={type} />
        <Link to={"/help"} title="Ir a ayuda" className="hover:bg-neutral-300 rounded-full p-1">
          <Info size={32} />
        </Link>
        <input
          type="file"
          id="file"
          ref={inputFile}
          accept=".json"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
        {setData && (
          <button
            title="Cargar archivo"
            onClick={() => inputFile.current?.click()}
            className="hover:bg-neutral-300 rounded-full p-1"
          >
            <FileUpload size={32} />
          </button>
        )}
        {onAddFile && (
          <button
            title="Añadir nueva página"
            onClick={() => setShow(true)}
            className="hover:bg-neutral-300 rounded-full p-1"
          >
            <FileAdd size={32} />
          </button>
        )}

        {data && (
          <button
            title="Descargar como JSON"
            onClick={handleDownloadJson}
            className="hover:bg-neutral-300 rounded-full p-1"
          >
            <FileDownload size={32} />
          </button>
        )}

        {data && (
          <button
            title="Descargar como PDF"
            onClick={handleDownloadPdf}
            className="hover:bg-neutral-300 rounded-full p-1"
          >
            <Pdf size={32} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
