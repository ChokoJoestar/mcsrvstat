import superagent from "superagent";
import { BedrockStatus, JavaStatus } from "./types";

/**
 * @author ChokoJoestar
 * @license MIT
 */
class Status {
   /**
    * @param host - IP for the server (GommeHD.net or 116.202.32.36:25565)
    * @example
    * ```ts
    * const serv = new Status().getJavaStatus("GommeHD.net");
    * serv.then(GommeHD => {
    *    console.log(GommeHD.version) // Return "1.8.x-1.20.x"
    * })
    * ```
    */
   getJavaStatus = async (host: string): Promise<JavaStatus> => {
      const api = await superagent.get(`https://api.mcsrvstat.us/2/${host}`);
      return api.body as JavaStatus;
   };

   /**
    * @param host - IP for the server (fr.hivebedrock.network or 135.125.105.65:19132)
    * @example
    * ```ts
    * const serv = new Status().getBedrockStatus("135.125.105.65:19132");
    * serv.then(HiveMC => {
    *    console.log(HiveMC.players.max) // Return 100001
    * })
    * ```
    */
   getBedrockStatus = async (host: string): Promise<BedrockStatus> => {
      const api = await superagent.get(
         `https://api.mcsrvstat.us/bedrock/2/${host}`
      );
      return api.body as BedrockStatus;
   };
}