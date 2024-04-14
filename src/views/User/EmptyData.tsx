import { Empty } from "antd";

interface EmptyDataProp {
  description: string;
}

const EmptyData: React.FC<EmptyDataProp> = ({ description }) => {
  return (
    <div className="tab">
      <Empty
        image={<div style={{ fontSize: 70 }}>🫣</div>}
        description={description}
      />
    </div>
  );
};

export default EmptyData;
