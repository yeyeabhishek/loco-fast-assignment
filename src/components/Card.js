import React, { useState } from "react";
import TemplateModal from "./Modal";
import CardTemplate from "./CardTemplate";
const Card = ({ item }) => {
  const [showItem, setshowItem] = useState(false);
  const handleItemModalClick = (e) => {
    setshowItem((prev) => !prev);
  };
  const handleClick = (e) => {
    setshowItem((prev) => !prev);
  };
  const handleShowSubBreed = () => {
    return (
      showItem && (
        <TemplateModal
          item={item}
          show={showItem}
          close={handleItemModalClick}
        />
      )
    );
  };
  const styles = { width: "10rem", margin: "2px" };
  return (
    <>
      <div onClick={handleClick}>
        <CardTemplate styles={styles} item={item} />
      </div>
      {handleShowSubBreed()}
    </>
  );
};
export default Card;
