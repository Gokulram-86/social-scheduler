import { Zernio } from '@zernio/node';

const zernio = new Zernio({
    apiKey: process.env.ZERNIO_API_KEY || "",
    baseURL: "https://zernio.com/api"
});

export default zernio;


// Here we configured the zernio by installing the necessary package and setting up env var for it.
// now we have to create a model
