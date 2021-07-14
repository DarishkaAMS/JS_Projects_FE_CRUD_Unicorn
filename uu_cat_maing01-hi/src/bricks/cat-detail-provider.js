//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject } from "uu5g04-hooks";
import Config from "./config/config";

import CatDetailContext from "../context/cat-detail-context";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatDetailProvider",
  //@@viewOff:statics
};

export const CatDetailProvider = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const dataDetailResult = useDataObject({
      handlerMap: {
        load: Calls.getCat,
        createItem: Calls.createCat,
      },
      initialDtoIn: {
        id: props.id
      }
    });
    // const { state, data, newData, errorData, pendingData, handlerMap } = dataDetailResult;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <CatDetailContext.Provider value={dataDetailResult}>{props.children}</CatDetailContext.Provider>;
    //@@viewOff:render
  },
});

export default CatDetailProvider;
