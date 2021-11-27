import { useEffect, useState } from "react";
import axios from "axios";

const ImageSelection = ({ backgroundImageChangeHandler }) => {
  const [imageCatalogue, setImageCatalogue] = useState([]);
  const [imageSelection, setImageSelection] = useState({});

  useEffect(() => {
    const apikey = "duinyirbtoWLiyWqJ47c46rMrUwPtTmIR87nVX0fobU";
    axios({
      url: "https://api.unsplash.com/search/photos",
      method: "GET",
      responseType: "json",
      params: {
        query: imageSelection,
        client_id: apikey,
        per_page: 12,
      },
    }).then((results) => {
      console.log(results.data.results);
      setImageCatalogue(results.data.results);
    });
  }, [imageSelection]);

  const selectionHandler = (e) => {
    setImageSelection(e.target.value);
  };

  return (
    <>
      <h2>Choose your Background Image</h2>
      <label>Select a Category for your Background Image</label>
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
            <li className="imageContainer" onClick={backgroundImageChangeHandler}>
              <input
                type="checkbox"
                id={`image${index}`}
                value={image.urls.regular}
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
