import { parse } from "@babel/parser";
import generate from "@babel/generator";

export type File = {
  filename: string;
  body: string;
};

export function transform(input: File): File[] {
  const ast = parse(input.body, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  const { code } = generate(ast, {});

  return [
    {
      ...input,
      body: code,
    },
  ];
}
