import React, { Fragment } from "react";
import "./asset/style.scss";
import Rooms from "user/component/Rooms";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Airbnb</title>
        <link rel="icon" href="path" />
        <meta name="description" content="description" />
        <meta name="keywords" content="keyword" />
        <meta property="og:title" content="og:title" />
        <meta property="og:description" content="og:description" />
      </Helmet>
      <Rooms />
    </Fragment>
  );
}
