import axios from "axios";

export default {
  getAllEvents: function (data) {
    return axios.get("/api/events");
  },
  getOneEvent: function (id) {
    return axios.get("/api/events/" + id);
  },
  getThisWeek: function(data){
    return axios.get("api/events/thisweek")
  }
};
