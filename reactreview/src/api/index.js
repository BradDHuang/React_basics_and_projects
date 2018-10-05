
import axios from "axios";

const URL = "http://api.haochuan.io";

export const getUsers = () => {
    return axios({method: "get", url: `${URL}/github/users`});
};






