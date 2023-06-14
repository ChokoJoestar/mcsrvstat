export interface IStatus {
   online: boolean;
   ip: string;
   port: number;
   debug: {
      ping: boolean;
      query: boolean;
      srv: boolean;
      querymismatch: boolean;
      ipinsrv: boolean;
      cnameinsrv: boolean;
      animatedmotd: boolean;
      cachehit: boolean;
      cachetime: number;
      cacheexpire: number;
      apiversion: number;
   };
}

export interface JavaStatus extends IStatus {
   motd: {
      raw: string[];
      clean: string[];
      html: string[];
   };
   players: {
      online: number;
      max: number;
      list?: string[];
      uuid?: {};
   };
   version: string | string[];
   protocol: number;
   hostname?: string;
   icon?: string;
   software?: string;
   map?: string;
   plugins?: {
      names: string[];
      raw: string[];
   };
   mods?: {
      names: string[];
      raw: string[];
   };
   info?: {
      raw: string[];
      clean: string[];
      html: string[];
   };
}

export interface BedrockStatus extends JavaStatus {
   gamemode: string;
   serverid: string;
}
