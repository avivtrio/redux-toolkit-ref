import React, { PropsWithChildren } from "react";

const CollapseContainer = (props: PropsWithChildren<any>) => {
  return <div className="border border-primary">{props.children}</div>;
};

export default CollapseContainer;
