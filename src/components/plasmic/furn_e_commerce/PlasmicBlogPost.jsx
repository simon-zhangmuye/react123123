// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aAVrWby13Whpj9iWc38egj
// Component: vmB_qOsfIVq8ca
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
import * as sty from "./PlasmicBlogPost.module.css"; // plasmic-import: vmB_qOsfIVq8ca/css
import b1MjjIccZrkZl4Yd from "./images/b1.jpeg"; // plasmic-import: mjjICCZrkZl4yd/picture

export const PlasmicBlogPost__VariantProps = new Array("long");

export const PlasmicBlogPost__ArgProps = new Array(
  "title",
  "description",
  "image",
  "author"
);

function PlasmicBlogPost__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__long]: hasVariant(variants, "long", "long")
      })}
    >
      {(hasVariant(variants, "long", "long") ? false : true) ? (
        <div
          className={classNames(defaultcss.all, sty.box__cvpS5, {
            [sty.box__long__cvpS5QgHhv]: hasVariant(variants, "long", "long")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__rofbc)}
                height={250}
                role={"img"}
                src={b1MjjIccZrkZl4Yd}
                width={370}
              />
            ),

            value: args.image
          })}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__azew5, {
          [sty.box__long__azew5QgHhv]: hasVariant(variants, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Why Brands are Looking at Local Language",
          value: args.title,
          className: classNames(sty.slotTitle, {
            [sty.slotTitle__long]: hasVariant(variants, "long", "long")
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents: "By Robert Norby / 18th March 2018",
          value: args.author,
          className: classNames(sty.slotAuthor)
        })}

        {p.renderPlasmicSlot({
          defaultContents:
            "Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....",
          value: args.description,
          className: classNames(sty.slotDescription, {
            [sty.slotDescription__long]: hasVariant(variants, "long", "long")
          })
        })}
      </p.Stack>
    </p.Stack>
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
      internalArgPropNames: PlasmicBlogPost__ArgProps,
      internalVariantPropNames: PlasmicBlogPost__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicBlogPost__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogPost";
  } else {
    func.displayName = `PlasmicBlogPost.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogPost = Object.assign(
  // Top-level PlasmicBlogPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicBlogPost
    internalVariantProps: PlasmicBlogPost__VariantProps,
    internalArgProps: PlasmicBlogPost__ArgProps
  }
);

export default PlasmicBlogPost;
/* prettier-ignore-end */
