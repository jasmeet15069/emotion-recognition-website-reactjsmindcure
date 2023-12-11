import * as R from "ramda";

const getPercentage = R.pipe(R.multiply(100), parseInt);

const getScoreInPercentage = R.map(getPercentage);

const getEmotionNearToItsScore = (listOfEmotions) => (pred) =>
  R.transpose([listOfEmotions, pred]);

const getListOfEmotionsSorted = R.sortBy(R.prop(1));

const magnifyResults = (listOfEmotions) =>
{return(R.pipe(

    getScoreInPercentage,
    getEmotionNearToItsScore(listOfEmotions),
    getListOfEmotionsSorted,
    R.reverse,
    R.nth(0),
    R.append(" %"),
    R.join("")
  )
)}


  // const results =[ getEmotionNearToItsScore,getListOfEmotionsSorted];

export default magnifyResults;
// eslint-disable-next-line import/no-anonymous-default-export
// export default {getScoreInPercentage, getEmotionNearToItsScore, getListOfEmotionsSorted, magnifyResults };