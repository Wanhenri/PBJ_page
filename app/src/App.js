import React, { Fragment } from "react";

import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";
import Reset from "./styles/generic/reset";
import Base from "./styles/base";

import Size from "./styles/settings/size";
import Routes from "./routes";

const App = () => (
  <Fragment>
    <Colors />
    <Size />
    <Spacing />
    <Reset />
    <Base />
    <Routes />
  </Fragment>
);

export default App;
