const verifyArray = (value: any) => {
  if (Array.isArray(value)) {
    return value.join(", ");
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
    <ul style={{ listStyle: "none", paddingLeft: 0 }} className={className}>
      {Object.entries(obj).map(([key, value]) => {
        return (
          <li key={key}>
            <strong style={{ textTransform: "capitalize" }}>{key}</strong>:{" "}
            {value ? verifyArray(value) : "-"}
          </li>
        );
      })}
    </ul>
  );
};

export default ObjectList;
