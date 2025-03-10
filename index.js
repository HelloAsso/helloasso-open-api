import 'dotenv/config'
import axios from "axios";
import fs from "fs";

async function uploadToReadMe(jsonString) {
    const formData = new FormData();
    formData.append('spec', jsonString);

    const config = {
        headers: {
            'accept': 'application/json',
            'x-readme-version': 'v5',
            'Authorization': `Basic ${Buffer.from(`${process.env.README_API_KEY}:`).toString('base64')}`
        }
    };

    try {
        const response = await axios.put(`https://dash.readme.com/api/v1/api-specification/${process.env.API_ID}`, formData, config);
        console.log('Swagger successfully uploaded:', response.data);
    } catch (error) {
        console.error('Failed to upload Swagger file:', error);
    }
}

function pushToReadme() {
    const jsonString = fs.readFileSync('helloasso.json', 'utf8');
    uploadToReadMe(jsonString);
}

pushToReadme();