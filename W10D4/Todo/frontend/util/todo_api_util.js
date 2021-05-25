import { $CombinedState } from "redux"

export const fetchTodos = () => {
  return $.ajax({
    method: "GET",
    url: "/api/todolists", //check rails routes if you forget!
  })
}

// export const createTea = (tea) => {
//   return $.ajax({
//     method: "POST",
//     url: "/api/teas",
//     data: {
//       tea: tea 
//     }
//   });
// };