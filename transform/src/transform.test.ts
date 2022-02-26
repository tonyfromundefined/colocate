import { test } from "zora";
import { File, transform } from "./transform";
import outdent from "outdent";

const input: File = {
  filename: "Component.tsx",
  body: outdent`
    import { co } from "@colocate/co";
    import { style } from "@vanilla-extract/css";
    import React from "react";
    
    const Component: React.FC = () => {
      return <div className={css.container}>hello, world</div>;
    };
    
    const css = co("[filename].css", () => {
      const container = style({
        fontSize: "2rem",
      });
    
      return {
        container,
      };
    });
    
    export default Component;  
  `.trim(),
};

test("transform successfully", (assert) => {
  const outputs = transform(input);

  assert.equal(outputs.length, 2);
});
