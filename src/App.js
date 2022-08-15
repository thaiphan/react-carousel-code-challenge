import "./App.css";
import React from "react";

function App() {
  const [slides, setSlides] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    // simulate async api call
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          "http://placekitten.com/g/300/300",
          "http://placekitten.com/g/300/300",
          "http://placekitten.com/g/300/300",
          "http://placekitten.com/g/300/300",
          "http://placekitten.com/g/300/300",
        ]);
      }, 1000);
    }).then((result) => {
      // hydrate the carousel with data
      // todo: loading state
      setSlides(result);
    });
  }, []);

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="App">
      <div id="myCarousel">
        <div
          id="myCarousel-inner"
          style={{
            transform: `translate(calc((-300px - 24px) * ${currentSlide}))`,
          }}
        >
          {slides.map((slide, index) => (
            <article key={index}>
              <img src={slide} />
            </article>
          ))}
        </div>
      </div>
      <div class="button-row">
        <button type="button" class="prev" onClick={handlePrev}>
          Prev
        </button>
        <button type="button" class="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
