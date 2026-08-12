import fs from "node:fs";
import ts from "typescript";

const filename = new URL("../src/app/[...slug]/page.tsx", import.meta.url);
const sourceText = fs.readFileSync(filename, "utf8");
const source = ts.createSourceFile(filename.pathname, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const printer = ts.createPrinter();

function initializer(name) {
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.name.text === name && declaration.initializer) {
        return printer.printNode(ts.EmitHint.Expression, declaration.initializer, source);
      }
    }
  }
  throw new Error(`Could not find ${name}`);
}

function evaluate(expression, names = [], values = []) {
  const javascript = ts.transpileModule(`return (${expression});`, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS },
  }).outputText;
  return Function(...names, javascript)(...values);
}

const aboutPages = evaluate(initializer("aboutPages"));
const contentPages = evaluate(initializer("contentPages"), ["aboutPages"], [aboutPages]);
process.stdout.write(JSON.stringify(contentPages));
