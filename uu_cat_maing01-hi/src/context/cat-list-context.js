//@@viewOn:revision

//@@viewOff:revision
//@@viewOn:imports
import UU5 from "uu5g04";
import { useContext } from "uu5g04-hooks";
import Config from "../config/config";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Context",
  //@@viewOff:statics
};

const CatListContext = UU5.Common.Context.create();
CatListContext.displayName = STATICS.displayName;
export default CatListContext;

function useCatList() {
  return useContext(CatListContext);
}

export { useCatList, CatListContext };
