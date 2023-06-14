"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superagent_1 = __importDefault(require("superagent"));
class Status {
    constructor() {
        this.getJavaStatus = (host) => __awaiter(this, void 0, void 0, function* () {
            const api = yield superagent_1.default.get(`https://api.mcsrvstat.us/2/${host}`);
            return api.body;
        });
        this.getBedrockStatus = (host) => __awaiter(this, void 0, void 0, function* () {
            const api = yield superagent_1.default.get(`https://api.mcsrvstat.us/bedrock/2/${host}`);
            return api.body;
        });
        this.getIcon = (host) => __awaiter(this, void 0, void 0, function* () {
            const api = yield superagent_1.default.get(`https://api.mcsrvstat.us/icon/${host}`);
            return api.body;
        });
    }
}
const servJava = new Status().getJavaStatus("play.cavedetemmie.tk");
servJava.then((GommeHD) => {
    console.log(GommeHD.version);
});
const servBedrock = new Status().getBedrockStatus("135.125.105.65:19132");
servBedrock.then(HiveMC => {
    console.log(HiveMC.players.max);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDREQUFvQztBQU9wQyxNQUFNLE1BQU07SUFBWjtRQVdHLGtCQUFhLEdBQUcsQ0FBTyxJQUFZLEVBQXVCLEVBQUU7WUFDekQsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBVSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN2RSxPQUFPLEdBQUcsQ0FBQyxJQUFrQixDQUFDO1FBQ2pDLENBQUMsQ0FBQSxDQUFDO1FBWUYscUJBQWdCLEdBQUcsQ0FBTyxJQUFZLEVBQTBCLEVBQUU7WUFDL0QsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBVSxDQUFDLEdBQUcsQ0FDN0Isc0NBQXNDLElBQUksRUFBRSxDQUM5QyxDQUFDO1lBQ0YsT0FBTyxHQUFHLENBQUMsSUFBcUIsQ0FBQztRQUNwQyxDQUFDLENBQUEsQ0FBQztRQUVGLFlBQU8sR0FBRyxDQUFPLElBQVksRUFBRSxFQUFFO1lBQzlCLE1BQU0sR0FBRyxHQUFHLE1BQU0sb0JBQVUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUUsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUMsQ0FBQSxDQUFDO0lBQ0wsQ0FBQztDQUFBO0FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNwRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDMUUsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDbEMsQ0FBQyxDQUFDLENBQUEifQ==