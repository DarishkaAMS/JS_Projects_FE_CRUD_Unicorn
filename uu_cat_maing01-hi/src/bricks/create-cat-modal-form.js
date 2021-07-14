//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CreateCatModalForm",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const CreateCatModalForm = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {

    const {callback, closeCallback} = props;

    //@@viewOn:private
    const handleCreate = async ({values, component}) => {
      component.setPending();
      try {
        await callback(values);
      } catch (e) {
        component.getAlertBus().setAlert({
          content: "Cat create Failed",
          colorSchema: "danger",
          closeTimer: 1000,
        })
      }
      component.getAlertBus().setAlert({
        content: "Cat was creates",
        colorSchema: "success",
        closeTimer: 1000,
      })
      component.reset();
      component.setReady();
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
        <div>Visual Component {STATICS.displayName}</div>
        {UU5.Utils.Content.getChildren(props.children, props, STATICS)}
        <UU5.Forms.ContextSection
          header={
            <UU5.Forms.ContextHeader
              info={"Cat page details"}
            />
          }
        >
          <UU5.Forms.ContextForm onSave={handleCreate} onCancel={props.closeCallback}>
            <UU5.Forms.Text label={"Name"} name="name" required />
            <UU5.Forms.Text label={"Text"} name="text" required />
            <UU5.Forms.Text label={"Color"} name="color" required />
          </UU5.Forms.ContextForm>
          <UU5.Forms.ContextControls
            align={"center"}
            buttonSubmitProps={{ content: "Create" }}
            buttonCancelProps={{ content: "Go Back" }}
          />
        </UU5.Forms.ContextSection>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CreateCatModalForm;
