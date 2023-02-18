import React from "react";
import { useRouteError } from "react-router-dom";

const NavigationError = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <div>
        <h1 className="font-bold text-2xl text-center">Esta ruta no exite :(</h1>
        <p className="text-justify my-4">
          Si estás viendo esta página, es que has intentado acceder a una sección que no existe o para la que no tienes
          permisos.
        </p>
        <a className="bg-blue-600 px-2 py-1 text-white w-fit font-bold rounded-md hover:bg-blue-800 block mx-auto" href={`/`}>
          Volver al inicio
        </a>
        <pre className="w-3/4 overflow-auto mx-auto">
          <code>{error.statusText || error.message}</code>
        </pre>
      </div>
    </div>
  );
};

export default NavigationError;
