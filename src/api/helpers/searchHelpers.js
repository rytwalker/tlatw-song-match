// Filter Callbacks
export const filterTempo = (trackTempo, tempo) => {
  return trackTempo > tempo[0] && trackTempo < tempo[1];
};

export const filterKey = (key, keys) => {
  return keys.includes(key);
};

export const filterMode = (trackMode, mode) => {
  if (mode.length === 2) {
    return true;
  }

  return mode[0] === trackMode;
};

// Sorting helpers
export const sortByParam = (trackArr, trackValue, param) => {
  return trackArr.sort(
    (a, b) => Math.abs(a[trackValue] - param) - Math.abs(b[trackValue] - param)
  );
};

export const addScore = (trackArr, scoreKey) => {
  return trackArr.map((track, index) => ({
    ...track,
    [scoreKey]: index + 1,
  }));
};

export const addAudioFeature = (tracks, happiness, trackValue, key) => {
  const sortedTracks = sortByParam(tracks, trackValue, happiness);
  return addScore(sortedTracks, key);
};

export const sumScore = (scores) => {
  return (
    scores.happinessScore +
    scores.energyScore +
    scores.dancabilityScore +
    scores.acousticnessScore +
    scores.instrumentalnessScore
  );
};

export const scoreSort = (a, b) => {
  return sumScore(a) - sumScore(b);
};
