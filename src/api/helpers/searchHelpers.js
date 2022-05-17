// Filter Callbacks
function filterTempo(trackTempo, tempo) {
  return trackTempo > tempo[0] && trackTempo < tempo[1];
}

function filterKey(key, keys) {
  return keys.includes(key);
}

function filterMode(trackMode, mode) {
  if (mode.length === 2) {
    return true;
  }

  return mode[0] === trackMode;
}

// Sorting helpers
function sortByParam(trackArr, trackValue, param) {
  return trackArr.sort(
    (a, b) => Math.abs(a[trackValue] - param) - Math.abs(b[trackValue] - param)
  );
}

function addScore(trackArr, scoreKey) {
  return trackArr.map((track, index) => ({
    ...track,
    [scoreKey]: index + 1,
  }));
}

function addAudioFeature(tracks, happiness, trackValue, key) {
  const sortedTracks = sortByParam(tracks, trackValue, happiness);
  return addScore(sortedTracks, key);
}

function sumScore(scores) {
  return (
    scores.happinessScore +
    scores.energyScore +
    scores.dancabilityScore +
    scores.acousticnessScore +
    scores.instrumentalnessScore
  );
}

function scoreSort(a, b) {
  return sumScore(a) - sumScore(b);
}

module.exports = {
  filterTempo,
  filterKey,
  filterMode,
  addAudioFeature,
  scoreSort,
};
