//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useCallback } from "uu5g04-hooks";
import Config from "./config/config";
import CatDetails from "../routes/cat-details";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatItem",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

const main = () => Config.Css.css`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
`;

const header = () => Config.Css.css`
  font-size: 16px;
  color: #005da7;
  font-family: ClearSans-Medium, ClearSans, sans-serif;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  cursor: pointer;
  line-height: 25px;
`;

const content = () => Config.Css.css`
  height: 100px;
  width: 100%;
  color: rgba(0, 0, 0, 0.87);
  overflow: hidden;
  padding: 0 16px;
  cursor: pointer;
`;

const text = () => Config.Css.css`
  font-size: 16px;
  line-height: 21px;
  max-height: 84px;
  overflow: hidden;
`;

export const CatItem = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
  //   cat: UU5.PropTypes.shape({
  //     name: UU5.PropTypes.string.isRequired,
  //     text: UU5.PropTypes.string,
  //     averageRating: UU5.PropTypes.number.isRequired
  //   }),
  //   colorSchema: UU5.PropTypes.string,
  //   onDetail: UU5.PropTypes.func,
  //   onUpdate: UU5.PropTypes.func,
  //   onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
    defaultProps: {
      cat: null,
      colorSchema: "blue",
      onDetail: () => {},
      onUpdate: () => {},
      onDelete: () => {}
    },
  //@@viewOff:defaultProps

  render(props){
    // console.log("props", props)
    //@@viewOn:private
    const { data, handlerMap } = props?.data;

    const handleCatDelete = useCallback(() => {
      handlerMap.delete();
    }, [])

    const goToDetailPage = useCallback(() => {
      UU5.Environment.setRoute("CatDetails", {id: data.id});
    }, []);

  // render({ cat, colorSchema, onDetail, onUpdate, onDelete }) {
  //   //@@viewOn:private
  //   function handleDetail() {
  //     onDetail(cat);
  //   }
  //
  //   function handleUpdate() {
  //     onUpdate(cat);
  //   }
  //
  //   function handleDelete() {
  //     onDelete(cat);
  //   }
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);
    // const { name, text } = data;
    // console.log(data.name, "tADA")

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Bricks.Header level="5" content={data.name}/>
        <i> <UU5.Bricks.Header style={{ backgroundColor: UU5.Environment.colors.blue.c100 }} level="5" content={data.text}/> </i>
        <small> <UU5.Bricks.Header level="5" content={data.color} colorSchema= "blue"/> </small>
        <UU5.Bricks.Button colorSchema="red" text="Delete" onClick={handleCatDelete}>
          <UU5.Bricks.Icon icon="fa-trash" /> Delete
        </UU5.Bricks.Button>
        <UU5.Bricks.Button colorSchema="blue" text="Datails" onClick={goToDetailPage}>
          <UU5.Bricks.Icon icon="fa-info" /> Details
        </UU5.Bricks.Button>

      </div>
    ) : null;
    //@@viewOff:render

  }
});

export default CatItem;
