// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aAVrWby13Whpj9iWc38egj
// Component: aKE0lVaQ0xHkQ_
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: aAVrWby13Whpj9iWc38egj/projectcss
import * as sty from "./PlasmicLinkButton.module.css"; // plasmic-import: aKE0lVaQ0xHkQ_/css

export const PlasmicLinkButton__VariantProps = new Array("type", "size");

export const PlasmicLinkButton__ArgProps = new Array("href", "text");

function PlasmicLinkButton__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size_small]: hasVariant(variants, "size", "small"),
        [sty.root__type_blankGray]: hasVariant(variants, "type", "blankGray"),
        [sty.root__type_blankOrange]: hasVariant(
          variants,
          "type",
          "blankOrange"
        ),

        [sty.root__type_outlineGray]: hasVariant(
          variants,
          "type",
          "outlineGray"
        ),

        [sty.root__type_solidGray]: hasVariant(variants, "type", "solidGray"),
        [sty.root__type_solidOrange]: hasVariant(
          variants,
          "type",
          "solidOrange"
        )
      })}
      href={args.href !== undefined ? args.href : "#"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Do the thing",
        value: args.text,
        className: classNames(sty.slotText, {
          [sty.slotText__type_blankGray]: hasVariant(
            variants,
            "type",
            "blankGray"
          ),

          [sty.slotText__type_blankOrange]: hasVariant(
            variants,
            "type",
            "blankOrange"
          ),

          [sty.slotText__type_outlineGray]: hasVariant(
            variants,
            "type",
            "outlineGray"
          ),

          [sty.slotText__type_solidGray]: hasVariant(
            variants,
            "type",
            "solidGray"
          ),

          [sty.slotText__type_solidOrange]: hasVariant(
            variants,
            "type",
            "solidOrange"
          )
        })
      })}
    </a>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLinkButton__ArgProps,
      internalVariantPropNames: PlasmicLinkButton__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
