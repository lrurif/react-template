import { SETTOKEN } from "../constant"

const funcMap = {}
funcMap[SETTOKEN] = function(data) {
  return data;
}
export default function(prev, action) {
  if(prev == undefined) {
    return ""
  }
  return funcMap[action.type](action.data);
}