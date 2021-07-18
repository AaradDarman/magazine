import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import {Provider} from 'react-redux';
import {store} from './redux/store'

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
