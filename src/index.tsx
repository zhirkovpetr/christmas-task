import App from "./pages/app/app";
import "./style.css";
import RequireContext = __WebpackModuleApi.RequireContext;

const app = new App();
app.run();

function requireAll(r: RequireContext) {
  r.keys().forEach(r);
}

requireAll(require.context("./assets/toys/", true, /\.webp$/));
