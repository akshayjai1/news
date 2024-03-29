import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import ChatData from "./Chat";
import Contact from "./Contact";
import Mail from "./Mail";
import Auth from "./Auth";

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    chatData: ChatData,
    contacts: Contact,
    mail: Mail,
    auth: Auth
  });
