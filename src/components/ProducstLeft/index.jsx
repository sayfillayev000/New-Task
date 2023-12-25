import React, { useState } from "react";
import "./producstLeft.scss";
import { DropDownBottom, DropDownTop } from "../../assets/icons";

const index = () => {
  const [category, setCategory] = useState(false);
  const [brands, setBrands] = useState(false);
  const [features, setFeatures] = useState(false);

  return (
    <div className="productLeft">
      <div className="category__box">
        <div className="category__Drop" onClick={() => setCategory(!category)}>
          <h2>Category</h2> <DropDownTop className={category &&'drop'} />
                  </div>
        <div className="category__list" style={category ? { display: "none" }:{display:"block"}}>
          <h3>Mobile accessory</h3>
          <h3>Electronics</h3>
          <h3>Smartphones </h3>
          <h3>Modern tech </h3>
          <h3 className="see__all">See all </h3>
        </div>
      </div>
      <div className="brands__box">
        <div className="brands__Drop" onClick={() => setBrands(!brands)}>
          <h2>Brands</h2> <DropDownTop className={brands &&'drop'}/>
        </div>
        <div className="brands__list"  style={brands ? { display: "none" }:{display:"block"}}>
          <label htmlFor="Samsung">
            <input type="checkbox" name="Samsung" id="Samsung" />
            <h3>Samsung</h3>
          </label>
          <label htmlFor="Apple">
            <input type="checkbox" name="Apple" id="Apple" />
            <h3>Apple</h3>
          </label>
          <label htmlFor="Huawei">
            <input type="checkbox" name="Huawei" id="Huawei" />
            <h3>Huawei</h3>
          </label>
          <label htmlFor="Pocco">
            <input type="checkbox" name="Pocco" id="Pocco" />
            <h3>Pocco</h3>
          </label>
          <label htmlFor="Lenovo">
            <input type="checkbox" name="Lenovo" id="Lenovo" />
            <h3>Lenovo</h3>
          </label>
          <h3 className="see__all">See all </h3>
        </div>
      </div>
      <div className="features__box">
        <div className="features__Drop"  onClick={() => setFeatures(!features)}>
          <h2>Features</h2> <DropDownTop className={features &&'drop'} />
        </div>
        <div className="features__list"  style={features ? { display: "none" }:{display:"block"}}>
          <label htmlFor="Metallic">
            <input type="checkbox" name="Metallic" id="Metallic" />
            <h3>Metallic</h3>
          </label>
          <label htmlFor="Plastic">
            <input type="checkbox" name="Plastic-cover" id="Plastic" />
            <h3>Plastic cover</h3>
          </label>
          <label htmlFor="Ram">
            <input type="checkbox" name="Ram" id="Ram" />
            <h3>8GB Ram</h3>
          </label>
          <label htmlFor="Super">
            <input type="checkbox" name="Super-power" id="Super" />
            <h3>Super power</h3>
          </label>
          <label htmlFor="Large">
            <input type="checkbox" name="Large-Memory" id="Large" />
            <h3>Large Memory</h3>
          </label>
          <h3 className="see__all">See all </h3>
        </div>
      </div>
    </div>
  );
};

export default index;
