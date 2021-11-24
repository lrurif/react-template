import Home from "../views/Home/Home"
import Login from "../views/Login"
// Home
import pageHome from "../views/Home/children/pageHome";
import TransactionData from "../views/Home/children/pageHome/TransactionData.js";
export default  [
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/index',
        component: pageHome
      },
      {
        path: '/home/TransactionData',
        component: TransactionData
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]