import fs from "node:fs";
import ts from "typescript";
import { fileURLToPath } from "node:url";

const groups = {
  about: ["src/app/about/page.tsx", ["fallbackGovernanceBios", "fallbackManagementBios"]],
  alumni: ["src/app/alumni/page.tsx", ["fallbackBenefits", "fallbackSectors", "fallbackNotableAlumni", "fallbackEvents", "fallbackCountries", "fallbackGiveBack"]],
  careers: ["src/app/careers/page.tsx", ["fallbackVacancies", "fallbackSteps"]],
  gallery: ["src/app/gallery/page.tsx", ["fallbackGalleryItems"]],
  graduation: ["src/components/academics/GraduationPage.tsx", ["fallbackFees", "fallbackTentativeList", "fallbackChecklist", "fallbackGuidelines", "fallbackGallery"]],
  guild: ["src/components/student/StudentGuildPage.tsx", ["fallbackLeadership", "fallbackCabinet"]],
  newsletter: ["src/components/news/NewsletterPage.tsx", ["fallbackNewsletterArticles"]],
  homepage: ["src/components/home/ProgrammeHighlight.tsx", ["fallbackProgrammes"]],
};

function readInitializers(file) {
  file = fileURLToPath(file);
  const sourceText = fs.readFileSync(file, "utf8");
  const source = ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const printer = ts.createPrinter();
  const found = new Map();
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.initializer) {
        found.set(declaration.name.text, printer.printNode(ts.EmitHint.Expression, declaration.initializer, source));
      }
    }
  }
  return found;
}

function evaluate(expression) {
  // Visual icon components are layout concerns; retain their names as data.
  expression = expression.replace(/\bicon:\s*([A-Z][A-Za-z0-9_]*)/g, 'icon: "$1"');
  const javascript = ts.transpileModule(`return (${expression});`, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS },
  }).outputText;
  return Function(javascript)();
}

const result = {};
for (const [key, [file, names]] of Object.entries(groups)) {
  const values = readInitializers(new URL(`../${file}`, import.meta.url));
  result[key] = {};
  for (const name of names) {
    const outputName = name.startsWith("fallback")
      ? name.slice(8, 9).toLowerCase() + name.slice(9)
      : name;
    result[key][outputName] = evaluate(values.get(name));
  }
}
process.stdout.write(JSON.stringify(result));
