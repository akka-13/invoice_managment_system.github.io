import axios from "axios";

export const getData = async () =>{
    let response=await axios.get("http://localhost:8080/highraduis-project/Data");
    return response.data.actors;
}

getData();