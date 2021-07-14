//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useCallback, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import CatDetails from "../routes/cat-details";
import { main, header, content, text } from "./cat-item-css"
import CatDetailReady from "../bricks/cat-detail-ready";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatItem",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CatItem = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
    defaultProps: {
      // cat: null,
      // colorSchema: "blue",
      // onDetail: () => {},
      // onUpdate: () => {},
      // onDelete: () => {}
    },
  //@@viewOff:defaultProps

  render(props){
    //@@viewOn:private
    const modalRef = useRef();
    const { openDetail } = props;
    const { data, handlerMap } = props?.data;
    // console.log(data, "DATA")

    const handleModal = useCallback (() => {
      modalRef.current.open({
        header: data?.name,
        content: [data?.text, " & ", data?.color]
      })
    }, []);

    const handleCatDelete = useCallback((item) => {
      console.log("handlerMap", handlerMap);
      openDetail(data, handlerMap.delete);
    }, []);

    const goToDetailPage = useCallback(() => {
      UU5.Environment.setRoute("CatDetails", {id: data.id});
    }, []);

    const handleUpdateModal = useCallback(() => {
      console.log(data?.id, "data?.id")
      modalRef.current.open({
        header: data?.name,
        // header: data?.id,
        content: <CatDetails id={data?.id}/>
      })
    }, []);

    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Bricks.Modal ref={modalRef} />
        <UU5.Bricks.Header level="5" content={data.name}/>

        <i> <UU5.Bricks.Header style={{ backgroundColor: UU5.Environment.colors.blue.c100 }} level="5" content={data.text}/> </i>
        <small> <UU5.Bricks.Header level="5" content={data.color} colorSchema= "blue"/> </small>

        <UU5.Bricks.Button colorSchema="red" text="Delete" onClick={handleCatDelete}>
          <UU5.Bricks.Icon icon="fa-trash" /> Delete
        </UU5.Bricks.Button>

        <UU5.Bricks.Button colorSchema="green" text="Delete" onClick={goToDetailPage}>
          <UU5.Bricks.Icon icon="fa-gear" /> Update
        </UU5.Bricks.Button>

        <br/>

        <UU5.Bricks.Button onClick={handleModal} colorSchema= "blue">
          <UU5.Bricks.Icon icon="fa-info" /> Info
        </UU5.Bricks.Button>

        <UU5.Bricks.Button onClick={handleUpdateModal}>
          <UU5.Bricks.Icon icon="fa-info" /> PopUP
        </UU5.Bricks.Button>

      </div>
    ) : null;
    //@@viewOff:render
  }
});

export default CatItem;
