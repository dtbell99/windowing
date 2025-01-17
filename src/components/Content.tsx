export default function Content() {
  const contentList = () => {
    const items: string[] = [];
    items.push("START");
    for (let i = 0; i < 50; i++) {
      items.push(`${new Date().getTime() + i}`);
    }
    items.push("END");
    return items.map((itm, indx) => {
      return <li key={indx}>{itm}</li>;
    });
  };

  return <div className="Content">{contentList()}</div>;
}
