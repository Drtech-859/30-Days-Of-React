import React from 'react';
import { createRoot } from 'react-dom';
import html from './images/html_logo.png';
import css from './images/css_logo.png';
import react from './images/react_logo.png';

const images = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}

const image = {
  width: '200px',
  height: '200px',
  margin: '10px'

}

const tech = (
  <div style={images}>
    <img style={image} src={html} alt="HTML Logo" />
    <img style={image} src={css} alt="HTML Logo" />
    <img style={image} src={react} alt="HTML Logo" />
  </div>
)
const app = (
  <div>
    <h1 style={{textAlign:'center'}}>Frontend Technologies</h1>
    {tech}
  </div>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(app);