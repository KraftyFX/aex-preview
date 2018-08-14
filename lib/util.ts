namespace aex
{
    export type Partial<T> =  { [K in keyof T]: T[K] };
    export type MembersOf<T> = { [K in keyof T]?: boolean };

    export function assertIsType(jsObject: any, type: any)
    {
        if (isType(jsObject, type))
            throw new Error(`Cannot convert type. The object does not have a __type with ${type}`);
    }

    export function isType(jsObject: any, type: any)
    {
        return jsObject.__type !== type;
    }

    export function forEach<T>(arr: { length: number, [n: number]: T }, fn: (v:T, i: number, length: number) => void)
    {
        for (var i=0, il = arr.length; i < il; i++) {
            fn(arr[i], i, il);
        }
    }

    export function map<T, U>(arr: { length: number, [n: number]: T }, fn: (v:T) => U)
    {
        const newArr:U[] = [];

        forEach(arr, v => newArr.push(fn(v)));

        return newArr;
    }

    export function forEachMember<T>(obj: any, fn: (k: string, v: boolean) => void) {
        for (var m in obj) {
            if (!obj.hasOwnProperty(m)) {
                continue;
            }
            
            fn(m, obj[m]);
        }
    }

    export function assignMembersFrom<T, U>(target: T, source: U, include: MembersOf<U>)
    {
        forEachMember(include, (m, v) => {
            if (v) {
                if (!source.hasOwnProperty(m)) {
                    throw new Error(`The source does not have member ${m} to copy onto the target.`);
                }
                
                (target as any)[m] = (source as any)[m];
            }
        });

        return target;
    }
}