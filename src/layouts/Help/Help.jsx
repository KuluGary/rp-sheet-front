import React from "react";
import Sheet from "@/components/Sheet/Sheet";
import NavBar from "@/components/NavBar/NavBar";
import FileDownload from "@/components/Icons/FileDownload";
import FileUpload from "@/components/Icons/FileUpload";
import FileAdd from "@/components/Icons/FileAdd";
import Cancel from "@/components/Icons/Cancel";

const Help = () => {
  return (
    <div className="mt-20">
      <NavBar />
      <Sheet>
        <h1 className="font-bold text-2xl">¿Cómo usar esta app?</h1>
        <p className="my-4">
          A continuación tienes una serie de consejos y explicaciones que te ayudarán utilizar y sacar partido de las
          distintas funcionalidades que tiene esta aplicación.
        </p>
        <h3 className="font-bold text-lg">Descargar tu ficha</h3>
        <p className="my-4">
          Una vez hayas creado tu ficha o quieras guardar, pulsa el botón <FileDownload size={28} color={"black"} />
          en tu barra de navegación para guardar el archivo. Los archivos descargados tendrán un formato del tipo{" "}
          <code>NombreDePersonaje.juego.json</code>, y contendrán toda la información del personaje que acabas de crear.
        </p>
        <h3 className="font-bold text-lg">Cargar tu ficha</h3>
        <p className="my-4">
          Si quieres modificar una ficha que ya tienes guardada en formato <code>.json</code> o continuar desde donde lo
          dejaste, lo puedes hacer a través del botón <FileUpload size={28} color={"black"} /> en la barra de
          navegación.
        </p>
        <p className="my-4">
          <span className="font-bold">¡Importante!</span> Asegúrate de escoger el archivo correcto. Si estás dentro de
          la sección de fichas de Dungeons and Dragons, solo debes usar los archivos con el formato{" "}
          <code>.dnd5e.json</code> y para las de FATE, el formato <code>.fate-core.json</code>.
        </p>
        <h3 className="font-bold text-lg">Añade páginas adicionales</h3>
        <p className="my-4">
          Por defecto, las fichas de D&D5e contienen dos páginas: una página de datos de personaje, y una página de
          información descriptiva.
        </p>
        <p className="my-4">
          Sin embargo y a medida que vayas subiendo de nivel, puedes necesitar más espacio para incluir todas las
          habilidades de tu personaje. Mediante el botón <FileAdd size={28} color={"black"} /> de la barra de
          navegación, abrirás un menú que te permitirá añadir una página de rasgos adicionales o de hechizos. De este
          tipo de página puedes incluir tantos como creas convenientes, y todos se guardarán una vez finalices tu ficha.
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
      </Sheet>
      <Sheet>
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
