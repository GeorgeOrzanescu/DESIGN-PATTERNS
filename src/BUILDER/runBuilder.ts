import { DataAnalysesBuilder } from "./builder";

let dataToBeAnalyzed = "This is just dummy data for testing!";
export const runBuilder = () => {
  const removeAllSpaces = (data: string): string => {
    return data.trim().split(" ").join();
  };

  const capitalizeString = (data: string): string => {
    return data.toUpperCase();
  };

  const transformedString = new DataAnalysesBuilder(dataToBeAnalyzed)
    .then(removeAllSpaces)
    .then(capitalizeString)
    .finally();

  console.log(transformedString);
};
