const verifyObject = (value: any): React.ReactNode => {
  if (Array.isArray(value)) {
    return value.map((item, index) =>
      index > 0 ? <>, {verifyObject(item)}</> : verifyObject(item)
    );
  }
  if (typeof value === "object") {
    return <ObjectList obj={value} />;
  }
  return value;
};

const ObjectList = ({
  obj,
  className,
}: {
  className?: string;
  obj?: { [key: string]: any } | null;
}) => {
  if (!obj) return null;
  return (
    <ul style={{ listStyle: "none", paddingLeft: 10 }} className={className}>
      {Object.entries(obj).map(([key, value]) => {
        return (
          <li key={key}>
            <strong style={{ textTransform: "capitalize" }}>{key}</strong>:{" "}
            {value ? verifyObject(value) : "-"}
          </li>
        );
      })}
    </ul>
  );
};

export default ObjectList;
