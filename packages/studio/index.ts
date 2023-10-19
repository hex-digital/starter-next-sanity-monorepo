export * from './schemas/constants';

interface Context {
  preview: {
    domain: string
    base: string
  }
}

let getContext: () => Context & Record<string, any>;
let setContext: (option: string, value: any) => {};

export function changeContextFunctions(getCtx: typeof getContext, setCtx: typeof setContext) {
  getContext = getCtx;
  setContext = setCtx;
}

export { getContext, setContext };
