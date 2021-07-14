//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponentWithRef, useRef, useImperativeHandle } from "uu5g04-hooks";
import Config from "./config/config";

import CatDeleteConfirmationBody from "./cat-delete-confirmation-body";
import CreateCatModalForm from "./create-cat-modal-form";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatDeleteConfirmationBody",
  //@@viewOff:statics
};

const main = () => Config.Css.css`
  .uu5-bricks-modal-header {
    border-bottom: 1px solid #BDBDBD;
    color: #005DA7;
  }

  .uu5-bricks-modal-body {
    padding-top: 16px;
  }
`;

const CatModal = createVisualComponentWithRef({
  //@@viewOn:statics
  ...STATICS,
  //@@viewOff:statics

  render(props, ref) {
    //@@viewOn:hooks
    const modalRef = useRef();

    useImperativeHandle(ref, () => ({
      open: (cat, callback) => {
        modalRef.current.open({
          header: cat.name,
          content: <CatDeleteConfirmationBody cat={cat} callback={callback} closeCallback={modalRef.current.close}/>,
          className: main(),
        });
      },
      openCreateModal: (callback) => {
        modalRef.current.open({
          header: <UU5.Bricks.Header content="Create cat form" level="4" />,
          content: (
            <CreateCatModalForm
              callback={callback}
              closeCallback={modalRef.current.close}
            />
          ),
          className: main(),
        })
      },
      close: () => {
        modalRef.current.close();
      }
    }));
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    return <UU5.Bricks.Modal ref_={modalRef} />;
    //@@viewOff:render
  },
});

export default CatModal;
