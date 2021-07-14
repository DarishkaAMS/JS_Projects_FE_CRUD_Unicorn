//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
import CatInstanceContext from "./cat-instance-context";
//@@viewOff:imports

const CatInstanceProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "CatInstanceContext",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    const state = useDataObject({
      handlerMap: {
        load: Calls.loadCatInstance
      }
    });
    //@@viewOff:hooks

    //@@viewOn:render
    return <CatInstanceContext.Provider value={state}>{children}</CatInstanceContext.Provider>;
    //@@viewOff:render
  }
});

export default CatInstanceProvider;
