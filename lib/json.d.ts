/**
 * A type alias for a JSON primitive.
 */
export declare type JSONPrimitive = boolean | number | string;
/**
 * A type alias for a JSON value.
 */
export declare type JSONValue = JSONPrimitive | JSONObject | JSONArray;
/**
 * A type definition for a JSON object.
 */
export interface JSONObject {
    [key: string]: JSONValue;
}
/**
 * A type definition for a JSON array.
 */
export interface JSONArray extends Array<JSONValue> {
}
/**
 * Test whether a JSON value is a primitive.
 *
 * @param value - The JSON value of interest.
 *
 * @returns `true` if the value is a primitive or `null`,
 *   `false` otherwise.
 */
export declare function isPrimitive(value: JSONValue): value is JSONPrimitive;
/**
 * Test whether a JSON value is an array.
 *
 * @param value - The JSON value of interest.
 *
 * @returns `true` if the value is a an array, `false` otherwise.
 */
export declare function isArray(value: JSONValue): value is JSONArray;
/**
 * Test whether a JSON value is an object.
 *
 * @param value - The JSON value of interest.
 *
 * @returns `true` if the value is a an object, `false` otherwise.
 */
export declare function isObject(value: JSONValue): value is JSONObject;
/**
 * Compare two JSON values for deep equality.
 *
 * @param first - The first JSON value of interest.
 *
 * @param second - The second JSON value of interest.
 *
 * @returns `true` if the values are equivalent, `false` otherwise.
 */
export declare function deepEqual(first: JSONValue, second: JSONValue): boolean;
