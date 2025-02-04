// src/Article.jsx
import React from 'react';

function Article(props) {
  return (
    // The <article> tag is a semantic HTML5 element that defines a self-contained piece of content.
    // It helps browsers, search engines, and assistive technologies understand the structure and meaning of the content.
    <article>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  );
}

export default Article;