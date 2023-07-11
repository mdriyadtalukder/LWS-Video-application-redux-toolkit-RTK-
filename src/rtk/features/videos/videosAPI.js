// import axiosInstance from "../../../utils/axios";
import axios from "../../../utils/axios";

export const getVideos = async ({tags,searches}) => {
    let queryString="";
    if(tags.length>0){
        queryString +=   tags.map((tag)=>`tags_like=${tag}`).join('&');
    }
    if(searches!==""){
        queryString +=`&q=${searches}`;
    }
    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
}