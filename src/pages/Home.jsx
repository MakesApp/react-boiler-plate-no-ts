import { setExample } from "../redux/slices/example.slice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import { fetchPosts } from "../api/apiConstants";
const Home = () => {
  const dispatch = useDispatch();
  const example = useSelector((state) => state.example.example);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  console.log("Fetched Data:", data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  return (
    <>
      <h1>REACT TEMPLATE</h1>
      <Button handleClick={() => dispatch(setExample("changing redux state"))}>
        Click me
      </Button>
      <p>{example}</p>
    </>
  );
};
export default Home;
