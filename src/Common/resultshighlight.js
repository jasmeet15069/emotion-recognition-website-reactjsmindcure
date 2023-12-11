import React from 'react';
import * as R from "ramda";
const getPercentage = R.pipe(R.multiply(100), parseInt);

const getScoreInPercentage = R.map(getPercentage);

const getEmotionNearToItsScore = (listOfEmotions) => (pred) =>
  R.transpose([listOfEmotions, pred]);

const getListOfEmotionsSorted = R.sortBy(R.prop(1));


const resultshighlight = (listOfEmotions) => {
  return (
    <>
      {getScoreInPercentage}
    </>
  )
}

export default resultshighlight



