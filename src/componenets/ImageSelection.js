import { useEffect, useState } from "react";
import axios from "axios";

const ImageSelection = ({ backgroundImageChangeHandler }) => {
  const [imageCatalogue, setImageCatalogue] = useState([]);
  const [imageSelection, setImageSelection] = useState({});

  useEffect(() => {
    const apikey = "5q5uAORY7EjGub7EtQCRVbF5fN39wHzDRL0huQkWVtg";
    axios({
      url: "https://api.unsplash.com/search/photos",
      method: "GET",
      responseType: "json",
      params: {
        query: imageSelection,
        client_id: apikey,
        per_page: 30,
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
        <option value="ketchup">Ketchup</option>
        <option value="creative">Creative</option>
      </select>

      {imageCatalogue.map((image, index) => {
        return (
          <div onClick={backgroundImageChangeHandler} className="imageDiv">
            <input
              type="checkbox"
              id={`image${index}`}
              value={image.urls.regular}
            />
            <label htmlFor={`image${index}`}>
              <img src={image.urls.regular} alt={image.description} />
            </label>
          </div>
        );
      })}
    </>
  );
};

export default ImageSelection;
