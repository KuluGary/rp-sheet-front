import React from "react";

export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  componentDidCatch(error, stacktrace) {
    this.setState({
      error,
      stacktrace,
    });
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex justify-center items-center w-screen min-h-screen">
          <div>
            <h1 className="font-bold text-2xl text-center">Algo ha ido mal :(</h1>
            <p className="text-justify my-4">
              Si estás viendo esta pantalla, es que ha habido algún fallo en la aplicación. Por favor, comparte el
              mensaje de error a continuación con el administrador
            </p>
            <button className="bg-blue-600 px-2 py-1 text-white font-bold rounded-md hover:bg-blue-800 block mx-auto" onClick={this.refreshPage}>Volver al inicio</button>
            <pre className="w-3/4 overflow-auto mx-auto">
              <code>{this.state.stacktrace.componentStack}</code>
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
