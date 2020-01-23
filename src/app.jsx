import React from 'react';
import './App.css';
import VideoPlayer from "./components/VideoPlayer";

export default () => (
  <div className="app">
    <header className="header">
      <h1>{"Smartzer Coding Test"}</h1>
    </header>
    <section className={"body"}>
      <VideoPlayer />
    </section>
  </div>
);
