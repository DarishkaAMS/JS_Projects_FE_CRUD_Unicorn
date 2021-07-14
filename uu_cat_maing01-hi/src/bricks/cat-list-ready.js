//@@viewOn:imports
import UU5 from "uu5g04";
import Uu5Tiles from "uu5tilesg02";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Config from "./config/config";

import CatItem from "../bricks/cat-item";
import CatListContext, { useCatList } from "../context/cat-list-context";
import CatListProvider from "../bricks/cat-list-provider";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ListReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CatListReady = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { data } = useCatList();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <div><h1> My Cats Post </h1></div>
        {UU5.Utils.Content.getChildren(props.children, props, STATICS)}
        {/*{console.log(data)}*/}

        {data && (
          <Uu5Tiles.Grid
            data={data}
            tileHeight="auto"
            tileMinWidth={200}
            tileMaxWidth={400}
            tileSpacing={8}
            rowSpacing={8}
          >
            {CatItem}
          </Uu5Tiles.Grid>
        )}
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CatListReady;
