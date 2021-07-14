//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, createVisualComponentWithRef, useImperativeHandle, useCall, useEffect, useState, useContext, useRef } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "../calls";

import CatItem from "../bricks/cat-item";
import CatDetailReady from "../bricks/cat-detail-ready";
import CatDetailContext, { useCatList } from "../context/cat-detail-context";
import CatDetailProvider from "../bricks/cat-detail-provider";
import { useCatDetail } from "../context/cat-detail-context";

//@@viewOff:imports

// <<< WITHOUT MODALS >>>
const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CatDetails",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
}

export const CatDetails = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
  },
  //@@viewOn:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {
    },
    onCancel: () => {
    },
  },
  //@@viewOn:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);
    const currentNestingLevel = UU5.Utils.NestingLevel.getNestingLevel(props, STATICS);

    return currentNestingLevel ? (
      // For Modal
      <div {...attrs}>
        <CatDetailProvider id={props?.id}>
          <CatDetailReady/>
        </CatDetailProvider>
      </div>
      // For Separate Page
      // <div {...attrs}>
      //   <CatDetailProvider id={props?.params?.id}>
      //     <CatDetailReady/>
      //   </CatDetailProvider>
      // </div>
    ) : null;
    //@@viewOff:render
  },
});

export default CatDetails;
