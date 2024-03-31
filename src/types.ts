export interface IStatus {
   ip: string;
   hostname?: string;
   online: boolean;
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
      dns: {};
      error?: { query?: string, ping?: string }
   };
}

export interface JavaStatus extends IStatus {
   version: string | string[];
   icon?: string;
   software?: string;
   eula_blocked: boolean;
   protocol: {
      version: number
      name: string
   };
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

export interface BedrockStatus extends IStatus {
   version: string;
   gamemode: string;
   serverid: string;
   protocol: { 
      version: number 
   }
   map: {
      raw: string;
      clean: string;
      html: string;
   };
   motd: {
      raw: string[];
      clean: string[];
      html: string[];
   };
   players: {
      online: number;
      max: number;
   };
}
