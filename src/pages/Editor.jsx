import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components";

const Editor = () => {
  const services = [Toolbar, Link, Image, HtmlEditor, QuickToolbar];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent placeholder="Type here and start editing...">
        <Inject services={services} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
