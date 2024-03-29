import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import { Link } from "react-router-dom";
import File from "./components/Icons/File";
import Sheet from "./components/Sheet/Sheet";
import classNames from "./App.module.css";

export default function App() {
  return (
    <div className={classNames.container}>
      <ErrorHandler>
        <Sheet disposition="vertical">
          <section className="px-6 py-9">
            <div className="h-screen">
              <div className="flex gap-2 border-b border-b-neutral-200 my-2 py-4 pr-64 w-full">
                <File size={28} color={"black"} />
                <Link to={`/dnd5e`} className="hover:underline">
                  Dungeons and Dragons 5e
                </Link>
              </div>
              <div className="flex gap-2 border-b border-b-neutral-200 my-2 py-4 pr-64 w-full">
                <File size={28} color={"black"} />
                <Link to={`/fate-core`} className="hover:underline">
                  FATE CORE
                </Link>
              </div>
              <div className="flex gap-2 border-b border-b-neutral-200 my-2 py-4 pr-64 w-full">
                <File size={28} color={"black"} />
                <Link to={`/kids-on-bikes`} className="hover:underline">
                  Kids On Bikes
                </Link>
              </div>
              <div className="flex gap-2 border-b border-b-neutral-200 my-2 py-4 pr-64 w-full">
                <File size={28} color={"black"} />
                <Link to={`/help`} className="hover:underline">
                  Información
                </Link>
              </div>
            </div>
          </section>
        </Sheet>
      </ErrorHandler>
    </div>
  );
}
