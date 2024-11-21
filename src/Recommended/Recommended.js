import Button from "../components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex bg-gray-950">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          <Button onClickHandler={handleClick} value="Apple" title="Apple" />
          <Button onClickHandler={handleClick} value="IKEA" title="IKEA" />
          <Button onClickHandler={handleClick} value="boat" title="boat" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
