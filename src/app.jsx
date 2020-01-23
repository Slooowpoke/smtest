import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from "./VideoPlayer";

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
