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
exports.Status = void 0;
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
    }
}
exports.Status = Status;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBb0M7QUFPcEMsTUFBYSxNQUFNO0lBQW5CO1FBV0csa0JBQWEsR0FBRyxDQUFPLElBQVksRUFBdUIsRUFBRTtZQUN6RCxNQUFNLEdBQUcsR0FBRyxNQUFNLG9CQUFVLENBQUMsR0FBRyxDQUFDLDhCQUE4QixJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8sR0FBRyxDQUFDLElBQWtCLENBQUM7UUFDakMsQ0FBQyxDQUFBLENBQUM7UUFZRixxQkFBZ0IsR0FBRyxDQUFPLElBQVksRUFBMEIsRUFBRTtZQUMvRCxNQUFNLEdBQUcsR0FBRyxNQUFNLG9CQUFVLENBQUMsR0FBRyxDQUM3QixzQ0FBc0MsSUFBSSxFQUFFLENBQzlDLENBQUM7WUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFxQixDQUFDO1FBQ3BDLENBQUMsQ0FBQSxDQUFDO0lBQ0wsQ0FBQztDQUFBO0FBaENELHdCQWdDQyJ9