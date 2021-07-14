//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatDeleteConfirmationBody",
  //@@viewOff:statics
};

export const CatDeleteConfirmationBody = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {

    const {cat, callback, closeCallback} = props;

    const runDelete = async () => {
      try {
        await callback();
      } finally {
        closeCallback();
      }
    };
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      <div {...attrs}>
        <UU5.Bricks.Text>Do You want to delete {cat.name} ?</UU5.Bricks.Text>
        {/*<UU5.Bricks.Text>{`callback ${JSON.stringify(callback)}`}</UU5.Bricks.Text>*/}

        <UU5.Bricks.Button colorSchema="red" onClick={(runDelete)}>
          <UU5.Bricks.Icon icon="fa-trash" /> Delete
        </UU5.Bricks.Button>
        <UU5.Bricks.Button colorSchema="blue" onClick={() => closeCallback()}>
          <UU5.Bricks.Icon icon="fa-trash" /> Cancel
        </UU5.Bricks.Button>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CatDeleteConfirmationBody;
