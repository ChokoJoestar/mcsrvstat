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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0REFBb0M7QUFHcEMsTUFBYSxNQUFNO0lBZ0JoQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQVk7UUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNwQyxvQkFBVTtpQkFDTixHQUFHLENBQUMsOEJBQThCLElBQUksRUFBRSxDQUFDO2lCQUN6QyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksS0FBSyxFQUFFO29CQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNEO3FCQUFNO29CQUNKLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFpQixDQUFDLENBQUM7aUJBQzdCO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFnQkQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQVk7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNwQyxvQkFBVTtpQkFDTixHQUFHLENBQUMsc0NBQXNDLElBQUksRUFBRSxDQUFDO2lCQUNqRCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksS0FBSyxFQUFFO29CQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7aUJBQzlEO3FCQUFNO29CQUNKLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxHQUFvQixDQUFDLENBQUM7aUJBQ2hDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSDtBQTdERCx3QkE2REMifQ==