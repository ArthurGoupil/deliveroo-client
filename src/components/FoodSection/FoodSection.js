import React from 'react';
import FoodItem from './components/FoodItem';

const FoodSection = props => {
  const sectionInfos = props.children;
  return (
    <>
      <h2>{sectionInfos.name}</h2>
      <div className="d-flex flex-wrap">
        {sectionInfos.meals.map((meal, index) => {
          return <FoodItem key="index">{meal}</FoodItem>;
        })}
      </div>
    </>
  );
};

export default FoodSection;
