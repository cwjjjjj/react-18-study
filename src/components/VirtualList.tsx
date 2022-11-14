// import { useEffect, useState } from "react";

// export default function VirtualList() {
//   const [data, setData] = useState<any[]>([]);
//   useEffect(() => {
//     let arr = [];
//     for (let i = 0; i < 1000; i++) {
//       arr.push({
//         id: i,
//         title: `Item ${i}`,
//       });
//     }
//     setData(arr);
//   }, []);

//   return (
//     <div>
//       {data.map((item, index) => {
//         return (
//           <div key={item.id}>
//             {index} 、{item.title}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

import { VariableSizeList as List } from "react-window";

// These row heights are arbitrary.
// Yours should be based on the content of the row.
const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const getItemSize = (index: number) => rowHeights[index];

const Row = ({ index, style }: any) => <div style={style}>Row {index}</div>;

export default function VirtualList() {
  return (
    <>
      <List height={150} itemCount={1000} itemSize={getItemSize} width={300}>
        {Row}
      </List>
      <div>test</div>
    </>
  );
}
