"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const superagent_1 = __importDefault(require("superagent"));
class Status {
    static getJavaStatus(host) {
        return new Promise((resolve, reject) => {
            superagent_1.default
                .get(`https://api.mcsrvstat.us/2/${host}`)
                .end((error, response) => {
                if (error) {
                    console.error(error);
                    reject(new Error("Failed to fetch Java server status."));
                }
                else {
                    const api = response.body;
                    resolve(api);
                }
            });
        });
    }
    static getBedrockStatus(host) {
        return new Promise((resolve, reject) => {
            superagent_1.default
                .get(`https://api.mcsrvstat.us/bedrock/2/${host}`)
                .end((error, response) => {
                if (error) {
                    console.error(error);
                    reject(new Error("Failed to fetch Bedrock server status."));
                }
                else {
                    const api = response.body;
                    resolve(api);
                }
            });
        });
    }
}
exports.Status = Status;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0REFBb0M7QUFHcEMsTUFBYSxNQUFNO0lBZ0JoQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQVk7UUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNwQyxvQkFBVTtpQkFDTixHQUFHLENBQUMsOEJBQThCLElBQUksRUFBRSxDQUFDO2lCQUN6QyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksS0FBSyxFQUFFLENBQUM7b0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztxQkFBTSxDQUFDO29CQUNMLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFpQixDQUFDLENBQUM7Z0JBQzlCLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQWdCRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBWTtRQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3BDLG9CQUFVO2lCQUNOLEdBQUcsQ0FBQyxzQ0FBc0MsSUFBSSxFQUFFLENBQUM7aUJBQ2pELEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRTtnQkFDdEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO3FCQUFNLENBQUM7b0JBQ0wsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDMUIsT0FBTyxDQUFDLEdBQW9CLENBQUMsQ0FBQztnQkFDakMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0g7QUE3REQsd0JBNkRDIn0=