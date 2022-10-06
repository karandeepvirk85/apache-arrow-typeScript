import { tableFromArrays } from "apache-arrow/table";


const table = tableFromArrays({
    a: [1, 2, 3],
    b: new Int8Array([1, 2, 3]),
})