import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./Slideshow.scss";

function Slideshow({ img }) {
  const [slideId, setSlideId] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (imgRef.current) {
        setImgWidth(imgRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onNext = () => {
    setSlideId((prev) => (prev + 1) % img.length);
  };

  const onPrev = () => {
    setSlideId((prev) => (prev - 1 + img.length) % img.length);
  };

  return (
    <section className="slider-container">
      <div className="slideshow_container" style={{ display: "flex", transition: "transform 0.3s ease-in-out",transform: `translateX(-${slideId * imgWidth}px)`}}>
        {img.map((picture, i) => (
          <img
            ref={i === 0 ? imgRef : null}
            className="slideshow-img"
            alt={`slide-${i}`}
            src={picture}
            key={i}
          />
        ))}
      </div>

      {img.length > 1 && (
        <>
          <div className="slideshow_controls">
            <i className="slideshow_controls_chevron" onClick={onPrev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </i>
            <i className="slideshow_controls_chevron" onClick={onNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </div>
          <div className="slideshow_idx">
            {slideId + 1} / {img.length}
          </div>
        </>
      )}
    </section>
  );
}

export default Slideshow;