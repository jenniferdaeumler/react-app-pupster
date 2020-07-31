// import axios from "axios";
// const BASEURL = "https://dog.ceo/api/";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query);
//   }
// };


  
import axios from "axios";

export default {
  getNewDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
};
