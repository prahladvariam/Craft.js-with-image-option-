import React from "react";
import { Element, useNode } from "@craftjs/core";

import { TableSettings } from "./TableSettings";

import { Resizer } from "../Resizer";

import { Container } from "../Container";
import { Text } from "../Text";

export type ContainerProps = {
  background: Record<"r" | "g" | "b" | "a", number>;
  color: Record<"r" | "g" | "b" | "a", number>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  padding: string[];
  margin: string[];
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  children: React.ReactNode;
  radius: number;
  rows: string;
  columns: string;
  textComponent: any;
  text: string;
};

const defaultProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fillSpace: "no",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: "100%",
  height: "100%",
  rows: "3",
  columns: "3",
};

export const Table = (props: Partial<ContainerProps>) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    rows,
    columns,
    children,
  } = props;
  const Rownum = Array.from(Array(parseInt(rows)), (_, i) => i + 1);
  const Colnum = Array.from(Array(parseInt(columns)), (_, i) => i + 1);
  const { textComponent , text } = props
  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow:
          shadow === 0
            ? "none"
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        borderRadius: `${radius}px`,
        flex: fillSpace === "yes" ? 1 : "unset",
      }}
    >
      <table
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {Rownum.map((row) => {
          return (
            <tr>
              {Colnum.map((col) => {
                return (
                  <th>
                      <Text {...textComponent} text={text} />
                  </th>
                );
              })}
            </tr>
          );
        })}
      </table>
    </Resizer>
  );
};

Table.craft = {
  displayName: "Table",
  props: {
    text: 'Text',
    textComponent: {
      ...Text.craft.props,
      textAlign: 'center',
    },
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: TableSettings,
  },
};
