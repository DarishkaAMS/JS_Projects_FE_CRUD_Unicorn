//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useContext } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatDetailContext",
  //@@viewOff:statics
};

const CatDetailContext = UU5.Common.Context.create();
CatDetailContext.displayName = STATICS.displayName;
export default CatDetailContext;

function useCatDetail() {
  return useContext(CatDetailContext);
}

export { useCatDetail, CatDetailContext };
