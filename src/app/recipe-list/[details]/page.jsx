import RecipeDetailsPage from "@/components/recipe-details";

const fetchData = async (id) => {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const res = await apiResponse.json();
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

const DetailsPage = async ({ params }) => {
  const data = await fetchData(params?.details);
  return (
    <div>
      <RecipeDetailsPage data={data} />
    </div>
  );
};

export default DetailsPage;
