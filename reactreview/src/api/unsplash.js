import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID d6bb75bbdba15000141d985f2f5963c029418032fc4fa80da68bb86b9263fa03"
    }
});

