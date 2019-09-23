export const ADDAGE = "addage";
export const CHANGENAME = "changename";

export function setname(val) {
  return {
    type: CHANGENAME,
    value: val,
    payload: { a: "1", b: "2" }
  };
}
