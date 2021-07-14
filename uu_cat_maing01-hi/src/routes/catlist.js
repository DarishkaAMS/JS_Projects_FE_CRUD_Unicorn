//@@viewOn:imports
import UU5 from "uu5g04";
import Uu5Tiles from "uu5tilesg02";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Config from "./config/config";

import CatItem from "../bricks/cat-item";
import CatListReady from "../bricks/cat-list-ready";
import CatListContext from "../context/cat-list-context";
import CatListProvider from "../bricks/cat-list-provider";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatList",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CatList = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { value } = useContext(CatListContext);

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <CatListProvider>
          <CatListReady />
        </CatListProvider>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CatList;
