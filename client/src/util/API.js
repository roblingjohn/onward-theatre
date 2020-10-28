import axios from "axios";

export default {
    getAllEvents: function (data) {
        return axios.get("/api/events")
    }
}