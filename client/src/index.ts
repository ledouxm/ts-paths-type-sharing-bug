import type { MyTypeWithPaths } from "../../server/src/index";
import type { MyType } from "../../server/src/folder1/type";

const a: MyTypeWithPaths = {}; // no error because MyTypeWithPaths resolves as any since it's not found
const b: MyType = {}; // correct type = error
