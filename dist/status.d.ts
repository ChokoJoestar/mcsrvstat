import { BedrockStatus, JavaStatus } from "./types";
export declare class Status {
    getJavaStatus: (host: string) => Promise<JavaStatus>;
    getBedrockStatus: (host: string) => Promise<BedrockStatus>;
}
//# sourceMappingURL=status.d.ts.map