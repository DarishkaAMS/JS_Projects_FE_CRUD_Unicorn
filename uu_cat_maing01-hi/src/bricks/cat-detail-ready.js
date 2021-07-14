//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-forms";
import { createComponent,createVisualComponentWithRef, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";
import { useCatDetail } from "../context/cat-detail-context";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatDetailReady",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CatDetailReady = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    // onSave: UU5.PropTypes.func,
    // onCancel: UU5.PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    // onSave: () => {},
    // onCancel: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private

    const onCancel = () => {
      UU5.Environment.setRoute("CatList");
    };

    const { data, handlerMap } = useCatDetail();
    const handleUpdate = async ({ values, component }) => {
      try {
        await handlerMap.updateItem({ ...values, id: data.dtoOut.id });
      } finally {
        UU5.Environment.setRoute("CatList");
      }
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
        <UU5.Forms.ContextSection
          header={
            <UU5.Forms.ContextHeader
              content={data?.dtoOut?.name}
              info={"Cat page details"}
            />
          }
        >
          <UU5.Forms.ContextForm onSave={handleUpdate}>
            <UU5.Forms.Text label={"Name"} name="name" value={data?.dtoOut?.name} required />
            <UU5.Forms.Text label={"Text"} name="text" value={data?.dtoOut?.text} required />
            <UU5.Forms.Text label={"Color"} name="color" value={data?.dtoOut?.color} required />
          </UU5.Forms.ContextForm>
          <UU5.Forms.ContextControls
            align={"center"}
            buttonSubmitProps={{ content: "Update" }}
            buttonCancelProps={{ content: "Cancel" }}
          />
        </UU5.Forms.ContextSection>
      </div>
    ) : null;

    {/*    <UU5.Forms.ContextSection header={<UU5.Forms.ContextHeader content="Cat details" />}>*/}
    {/*      <UU5.Forms.ContextForm onSave={props.onSave} onCancel={props.onCancel}>*/}
    {/*        <UU5.Forms.Text*/}
    {/*          label="Name"*/}
    {/*          value={data?.dtoOut?.name}*/}
    {/*          name="name"*/}
    {/*          inputAttrs={{ maxLength: 255 }}*/}
    {/*          required*/}
    {/*        />*/}
    {/*        <UU5.Forms.TextArea label="Joke text" value={data?.dtoOut?.text} size="m" />*/}
    {/*        <UU5.Forms.ContextControls />*/}
    {/*      </UU5.Forms.ContextForm>*/}
    {/*    </UU5.Forms.ContextSection>*/}
    {/*  </div>*/}
    {/*) : null;*/}
    //@@viewOff:render
  },
});

export default CatDetailReady;
