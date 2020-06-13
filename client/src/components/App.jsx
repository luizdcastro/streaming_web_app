import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/header/header.component";
import StreamCreate from "../components/streams/stream-create.component";
import StreamEdit from "../components/streams/stream-edit.component";
import StreamList from "../components/streams/stream-list.component";
import StreamShow from "../components/streams/stream-show.component";
import StreamDelete from "../components/streams/stream-delete.component";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header className="ui container" />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
