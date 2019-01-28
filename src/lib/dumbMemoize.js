// @flow

// the dumbest memoize you could ever need.
// cribbed https://github.com/alexreardon/memoize-one
export default function<ResultFn: (...Array<any>) => mixed>(
  resultFn: ResultFn
): ResultFn {
  let lastResult: mixed;
  let calledOnce: boolean = false;

  const result = function(...newArgs: Array<mixed>) {
    if (calledOnce) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    return lastResult;
  };

  return (result: any);
}
