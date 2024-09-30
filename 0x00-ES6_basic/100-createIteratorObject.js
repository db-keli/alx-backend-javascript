export default function createIteratorObject(report) {
  function* iterateEmployees() {
    for (const department of report.allEmployees) {
      for (const employee of Object.values(department)) {
        yield employee;
      }
    }
  }

  const iterator = {
    [Symbol.iterator]: iterateEmployees,
  };

  return iterator;
}
