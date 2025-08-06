import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selected, setSelected] = useState("book");
  let renderComponent;
  if (selected === "book") {
    renderComponent = <BookDetails />;
  } else if (selected === "blog") {
    renderComponent = <BlogDetails />;
  } else {
    renderComponent = <CourseDetails />;
  }

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger App</h1>

      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setSelected("book")}>Show Book</button>{' '}
        <button onClick={() => setSelected("blog")}>Show Blog</button>{' '}
        <button onClick={() => setSelected("course")}>Show Course</button>
      </div>

      <h3>🔀 Conditional Rendering Examples</h3>

      {renderComponent}

      <h4>Ternary Conditional:</h4>
      {
        selected === "book"
          ? <BookDetails />
          : selected === "blog"
          ? <BlogDetails />
          : <CourseDetails />
      }

      <h4>Logical AND Rendering:</h4>
      {selected === "book" && <BookDetails />}
      {selected === "blog" && <BlogDetails />}
      {selected === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
