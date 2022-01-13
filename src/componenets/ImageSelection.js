import { useEffect, useState } from "react";
import axios from "axios";

// passing in the props that deal with the Image selection checkboxes
const ImageSelection = ({
  backgroundImageChangeHandler,
  checked,
  disabled,
  imageCheckboxHandler,
}) => {
  // setting state for the API data
  const [imageCatalogue, setImageCatalogue] = useState([]);
  // setting state for the images returned from the API call based on the select in the form
  const [imageSelection, setImageSelection] = useState({});

  // API CALL
  useEffect(() => {
    const apikey = "duinyirbtoWLiyWqJ47c46rMrUwPtTmIR87nVX0fobU";
    axios({
      url: "https://api.unsplash.com/search/photos",
      method: "GET",
      responseType: "json",
      params: {
        query: imageSelection,
        orientation: "landscape",
        client_id: apikey,
        per_page: 12,
      },
    }).then((results) => {
      setImageCatalogue(results.data.results);
    });
  }, [imageSelection]);

  // grabbing the value of the select and setting that state so the param search in the API matches the ImageSelection
  const selectionHandler = (e) => {
    setImageSelection(e.target.value);
  };

  return (
    <>
      <h2>Choose your Background Image</h2>
      <label className="backgroundLabel">
        Select a Category for your Background Image
      </label>
      <select
        id="photoSelection"
        name="photoSelection"
        onChange={selectionHandler}
      >
        <option value="placeholder" disabled>
          Pick one:
        </option>
        <option value="business">Business</option>
        <option value="seasonal">Seasonal</option>
        <option value="creative">Creative</option>
        <option value="gradient">Gradient</option>
        <option value="technology">Technology</option>
        <option value="landscapes">Landscapes</option>
      </select>

      <ul className="imageDiv">
        {imageCatalogue.map((image, index) => {
          return (
            <li
              className="imageContainer"
              onClick={backgroundImageChangeHandler}
              key={index}
            >
              <input
                onChange={() => imageCheckboxHandler(index)}
                checked={checked[index] || false}
                disabled={!checked[index] && disabled}
                type="checkbox"
                id={`image${index}`}
                value={image.urls.regular}
                required
              />
              <label htmlFor={`image${index}`}>
                <img src={image.urls.regular} alt={image.description} />
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageSelection;
