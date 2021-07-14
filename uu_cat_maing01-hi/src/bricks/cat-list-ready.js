//@@viewOn:imports
import UU5 from "uu5g04";
import Uu5Tiles from "uu5tilesg02";
import { createVisualComponent, useContext, useRef } from "uu5g04-hooks";
import Config from "./config/config";

import CatItem from "../bricks/cat-item";
import CatListContext, { useCatList } from "../context/cat-list-context";
import CatListProvider from "../bricks/cat-list-provider";
import CatDeleteConfirmation from "./cat-modal";

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

    const { data, handlerMap } = useCatList();
    const confirmRef = useRef();

    function openDetail(cat, callback){
      console.log("cat", cat);
      console.log("callback", callback);
      confirmRef.current.open(cat, callback);
    };

    function openCreateModal() {
      confirmRef.current.openCreateModal(handlerMap.createItem);
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Bricks.Row>
          <UU5.Bricks.Column colWidth="xs-12 s-12 m-6 l-6 xl-6">
            <UU5.Bricks.Header content="Cat List" level="3" />
          </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="xs-12 s-12 m-6 l-6 xl-6">
              <UU5.Bricks.Button colorSchema="green" onClick={openCreateModal}>
                <UU5.Bricks.Icon icon="uu5-plus" />
                Create
              </UU5.Bricks.Button>
          </UU5.Bricks.Column>
        </UU5.Bricks.Row>

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
            {/*{CatItem}*/}
            <CatItem openDetail={ openDetail } />
          </Uu5Tiles.Grid>
        )}
        <CatDeleteConfirmation ref={ confirmRef } />
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CatListReady;
