// Game with ID: VQIBei2p1cwYT56nrvbe
const getData = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VQIBei2p1cwYT56nrvbe/scores');
    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

export default getData;