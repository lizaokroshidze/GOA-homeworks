import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <News
              country="us"
              category="general"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/business"
          element={
            <News
              country="us"
              category="business"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/entertainment"
          element={
            <News
              country="us"
              category="entertainment"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/health"
          element={
            <News
              country="us"
              category="health"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/science"
          element={
            <News
              country="us"
              category="science"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/sports"
          element={
            <News
              country="us"
              category="sports"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />

        <Route
          path="/technology"
          element={
            <News
              country="us"
              category="technology"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
