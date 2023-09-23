import SearchBar from "../../components/SearchBar/SearchBar";
import "./Properties.css";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  return (
    <div className="wrapper">
      <div className="flexCenter paddings innerWidth properties-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Properties;
