const ObjectList = ({ obj }: { obj?: { [key: string]: any } | null }) => {
  if (!obj) return null;
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {Object.entries(obj).map(([key, value]) => {
        return (
          <li>
            <strong style={{ textTransform: "capitalize" }}>{key}</strong>:{" "}
            {value ? value : "-"}
          </li>
        );
      })}
    </ul>
  );
};

export default ObjectList;
