//@@viewOn:imports
import UU5 from "uu5g04";
import Uu5Tiles from "uu5tilesg02";

import { createVisualComponent, useEffect, useCall, useDataList } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
import CatItem from "../bricks/cat-item";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Catlist",
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
    const dataListResult = useDataList({
      handlerMap: {
        load: Calls.listCats,
        createItem: Calls.createCat,
      },
      itemHandlerMap: {
        load: Calls.getCat,
        update: Calls.updateCat,
        delete: Calls.deleteCat
      }
    });
    const { state, data, newData, errorData, pendingData, handlerMap } = dataListResult;

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    switch (state) {
      case "error":
        return (<UU5.Common.Error errorData={errorData}/>);
      case "ready":
        return (
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
        );
      default: return (<UU5.Bricks.Loader/>)
    }
    // return currentNestingLevel ? (
    //   <div {...attrs}>
    //     <div>Visual Component {STATICS.displayName}</div>
    //     {UU5.Utils.Content.getChildren(props.children, props, STATICS)}
    //     {data?.itemList?.map(
    //       (item, i) => <CatItem cat = {item} key={i} />
    //     )}
    //   </div>
    // ) : null;
    //@@viewOff:render
  },
});

export default CatList;
