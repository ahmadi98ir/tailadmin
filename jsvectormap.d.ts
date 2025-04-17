declare module "jsvectormap" {
  export default class JSVectorMap {
    constructor(options: {
      selector: string;
      map: string;
      [key: string]: any;
    });
  }
} 