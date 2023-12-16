import React from "react";
import Sheet from "@/components/Sheet/Sheet";
import NavBar from "@/components/NavBar/NavBar";
import FileDownload from "@/components/Icons/FileDownload";
import FileUpload from "@/components/Icons/FileUpload";
import FileAdd from "@/components/Icons/FileAdd";
import Cancel from "@/components/Icons/Cancel";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="mt-20">
      <NavBar />
      <Sheet>
        <h2 className="font-bold text-2xl">¿Qué es esta app?</h2>
        <p className="my-4">
          Esta app sirve para generar fichas de personaje para juegos de rol de mesa. A diferencia de otras
          aplicaciones, está diseñada para ser una experiencia similar al uso de papel y lápiz, pero en un formato
          digital para una más fácil edición.
        </p>
        <h2 className="font-bold text-2xl">¿Cómo usar esta app?</h2>
        <p className="my-4">
          A continuación tienes una serie de consejos y explicaciones que te ayudarán utilizar y sacar partido de las
          distintas funcionalidades que tiene esta aplicación.
        </p>
        <h3 className="font-bold text-lg">Rellena la información de tu ficha</h3>
        <p className="my-4">
          En la{" "}
          <Link to={"/"} className="text-blue-600 underline">
            página principal
          </Link>{" "}
          tendrás un listado de enlaces relacionados a diferentes sistemas de juegos de rol desde los cuales podrás
          acceder a las diversas fichas rellenables.
        </p>
        <p className="my-4">
          Una vez dentro, podrás rellenar los diferentes campos asociados a tu ficha de personaje y rellenar los datos
          adecuados. Te recomendamos que hagas este proceso conjuntamente con el/los libros del sistema de rol que hayas
          elegido.
        </p>
        <h3 className="font-bold text-lg">Descargar tu ficha</h3>
        <p className="my-4">
          Una vez hayas creado tu ficha o quieras guardar para continuar más tarde, pulsa el botón{" "}
          <FileDownload size={28} color={"black"} />
          en tu barra de navegación para guardar el archivo. Los archivos descargados tendrán un formato del tipo{" "}
          <code>nombre-de-personaje.sistema-de-juego.json</code>, y contendrán toda la información del personaje que
          acabas de crear.
        </p>
        <p className="my-4">
          <span className="font-bold">¡Importante!</span> Los archivos descargados son delicados y no deben ser
          modificados manualmente a menos que sepas lo que estás haciendo o hayas trabajado previamente con archivos en
          formato JSON.
        </p>
        <h3 className="font-bold text-lg">Cargar tu ficha</h3>
        <p className="my-4">
          Si quieres modificar una ficha que ya tienes guardada en formato <code>.json</code> o continuar desde donde lo
          dejaste, lo puedes hacer a través del botón <FileUpload size={28} color={"black"} /> en la barra de
          navegación. Esto te abrirá un menú que te permitirá navegar por tu sistema y seleccionar el archivo que
          quieres cargar.
        </p>
        <p className="my-4">
          <span className="font-bold">¡Importante!</span> Asegúrate de escoger el archivo correcto. Si estás dentro de
          la sección de fichas de Dungeons and Dragons, solo debes usar los archivos con el formato{" "}
          <code>.dnd5e.json</code>, y así con cada uno de los sistemas de juego.
        </p>
        <h3 className="font-bold text-lg">Añade páginas adicionales</h3>
        <p className="my-4">
          Por defecto, las fichas de personaje contienen un número de páginas distinto dependiendo del sistema de juego
          que hayas elegido.
        </p>
      </Sheet>
      <Sheet>
        <p className="my-4">
          Sin embargo, es posible que necesites más espacio para poder incluir toda la información referente a tu
          personaje. Mediante el botón <FileAdd size={28} color={"black"} /> de la barra de navegación, abrirás un menú
          que te permitirá añadir una página adicional si está disponible dependiendo del sistema de juego. De este tipo
          de página puedes incluir tantas como creas convenientes, y todos se guardarán una vez finalices tu ficha.
        </p>
        <h3 className="font-bold text-lg">Reordena las páginas</h3>
        <p className="my-4">
          Cuando tienes múltiples páginas seleccionadas, puedes querer reordanarlas para adaptarlas a tus necesidades.
          En ese caso, en el pie de página de cada una de tus páginas podrás ver un número que determina en qué posición
          se halla la página (1, 2, 3...).
        </p>
        <p className="my-4">
          Los valores en este pie de página son editables y te permiten cambiar la posición entre dos páginas. Si vas al
          pie de página de la página 1 y lo modificas para que en su lugar sea el número 2, la antigua segunda página
          pasará a ser la nueva primera página, y la antigua primera página tomará su lugar.
        </p>
        <h3 className="font-bold text-lg">Elimina una página</h3>
        <p className="my-4">
          Si has añadido una página sin querer, has cambiado de opinión o tu personaje ya no la necesita, puedes
          eliminar las páginas. Si pones el cursor encima de la página que quieres eliminar, el icono{" "}
          <Cancel size={18} color={"black"} /> aparecerá en la esquina superior derecha. Al hacer click, tu página y
          todos los datos que contenga será eliminada permanentemente.
        </p>
      </Sheet>
    </div>
  );
};

export default Help;
