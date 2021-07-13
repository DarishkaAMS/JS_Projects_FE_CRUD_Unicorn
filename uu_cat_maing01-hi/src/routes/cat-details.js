//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useCall, useEffect, useState } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatDetails",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
}

function Line({ icon, content }) {
  return (
    <div className={Css.line()}>
      <UU5.Bricks.Icon className={Css.icon()} icon={icon} />
      {content}
    </div>
  );
}

export const CatDetails = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    cat: UU5.PropTypes.shape({
        name: UU5.PropTypes.string.isRequired,
        text: UU5.PropTypes.string}).isRequired,
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
  },
  //@@viewOn:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {},
    onCancel: () => {},
  },
  //@@viewOn:defaultProps

  render(cat){
    //@@viewOn:private
    const [errorMessage, setErrorMessage] = useState('');
    const { call, viewState, error, data } = useCall(Calls.getCat);
    // console.log("DATA", data)
    console.log("props-cat-det", props)
    useEffect( () => {
      if (props?.param?.id) {
        call({ id: props?.params?.id})
      } else {
        setErrorMessage("There is no ID in params :(")
      }
    }, [props?.param?.id]);
    //@@viewOff: private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS); //!!!! CHECK IT

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Forms.ContextSection header={<UU5.Forms.ContextHeader content={props.data.name} />}>
          <UU5.Forms.ContextForm onSave={props.onSave} onCancel={props.onCancel}>
            <UU5.Forms.Text label="Name" value={props?.data?.name} name="name" inputAttrs={{ maxLength: 255 }} required />
            <UU5.Forms.TextArea label="Cat text" value={props?.data?.text} size="m" />
            <UU5.Forms.ContextControls />
          </UU5.Forms.ContextForm>
        </UU5.Forms.ContextSection>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CatDetails;
