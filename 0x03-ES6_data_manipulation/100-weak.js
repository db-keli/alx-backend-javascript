export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const endPointInWeakMap = weakMap.get(endPoint);
  if (!endPointInWeakMap) {
    weakMap.set(endPoint, 1);
  } else {
    weakMap.set(endPoint, endPointInWeakMap + 1);
  }

  if (endPointInWeakMap + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
