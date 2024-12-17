import { Location } from "@/libs/history";

export function compareLocation(
  prevLocation: Location,
  currLocation: Location
) {
  const prevKeys = Object.keys(prevLocation).filter((f) => f !== "key");
  const currKeys = Object.keys(currLocation).filter((f) => f !== "key");

  if (prevKeys.length !== currKeys.length) {
    return false;
  }

  let same = true;
  for (let key of prevKeys) {
    if ((prevLocation as any)[key] !== (currLocation as any)[key]) {
      same = false;
      break;
    }
  }

  return same;
}
