//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataList } from "uu5g04-hooks";
import Config from "./config/config";

import CatListContext from "../context/cat-list-context";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatListProvider",
  //@@viewOff:statics
};

export const CatListProvider = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const dataListResult = useDataList({
      handlerMap: {
        load: Calls.listCats,
        createItem: Calls.createCat,
      },
      itemHandlerMap: {
        load: Calls.getCat,
        update: Calls.updateCat,
        delete: Calls.deleteCat,
      },
    });
    const { state, data, newData, errorData, pendingData, handlerMap } = dataListResult;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <CatListContext.Provider value={dataListResult}>{props.children}</CatListContext.Provider>;
    //@@viewOff:render
  },
});

export default CatListProvider;
