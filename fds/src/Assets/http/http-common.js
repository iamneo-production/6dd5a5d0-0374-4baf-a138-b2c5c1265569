import axios from "axios";

export default axios.create({
    baseURL: "https://8080-babdaaeeeddfabaeaefccbcdfebcafeedcc.premiumproject.examly.io/api",
    headers: {
        "Content-type": "application/json"
    }
});
