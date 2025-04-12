import Trending from "../../_components/trending-section";
import Archived from "../../_components/archived";
export default function ServicePage() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5 flex justify-center items-start gap-x-2">
        <div className="w-3/4 flex justify-start itmes-center">
          <Trending />
        </div>
        <div
          style={{ marginTop: "15px" }}
          className="w-1/4 flex justify-start items-start py-10"
        >
          <Archived />
        </div>
      </div>
    </div>
  );
}
