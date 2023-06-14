import superagent from "superagent";
import { BedrockStatus, JavaStatus } from "./types";

export class Status {
   /**
    *
    * Retrieves the Java server status.
    * @param host - IP for the server (e.g., "GommeHD.net" or "116.202.32.36:25565").
    * @returns A Promise that resolves to the Java server status.
    * @example
    * ```js
    * import { Status } from "mcsrvstat";
    * 
    * const serv = Status.getJavaStatus("GommeHD.net");
    * serv.then(GommeHD => {
    *    console.log(GommeHD.version) // Return "1.8.x-1.20.x"
    * })
    * ```
    */
   static getJavaStatus(host: string): Promise<JavaStatus> {
      return new Promise((resolve, reject) => {
         superagent
            .get(`https://api.mcsrvstat.us/2/${host}`)
            .end((error, response) => {
               if (error) {
                  console.error(error);
                  reject(new Error("Failed to fetch Java server status."));
               } else {
                  const api = response.body;
                  resolve(api as JavaStatus);
               }
            });
      });
   }

   /**
    * Retrieves the Bedrock server status.
    * @param host - IP for the server (e.g., "fr.hivebedrock.network" or "135.125.105.65:19132").
    * @returns A Promise that resolves to the Bedrock server status.
    * @example
    * ```js
    * import { Status } from "mcsrvstat";
    * 
    * const serv = Status.getBedrockStatus("135.125.105.65:19132");
    * serv.then(HiveMC => {
    *    console.log(HiveMC.players.max) // Return 100001
    * })
    * ```
    */
   static getBedrockStatus(host: string): Promise<BedrockStatus> {
      return new Promise((resolve, reject) => {
         superagent
            .get(`https://api.mcsrvstat.us/bedrock/2/${host}`)
            .end((error, response) => {
               if (error) {
                  console.error(error);
                  reject(new Error("Failed to fetch Bedrock server status."));
               } else {
                  const api = response.body;
                  resolve(api as BedrockStatus);
               }
            });
      });
   }
}
