//Game with ID: BSY5VexV1P2xmQtZrGsn
export const getData = async () => {
    try {
        const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BSY5VexV1P2xmQtZrGsn/scores');
        const data = await response.json();
        return data.result;
    } catch (error) {
        return error;
    }
}

