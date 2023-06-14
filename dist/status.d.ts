import { BedrockStatus, JavaStatus } from "./types";
export declare class Status {
    static getJavaStatus(host: string): Promise<JavaStatus>;
    static getBedrockStatus(host: string): Promise<BedrockStatus>;
}
//# sourceMappingURL=status.d.ts.map