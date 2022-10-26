type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never

const foo = (arg1: string, arg2: number): void => {}
type test = Parameters<typeof foo>