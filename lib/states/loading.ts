import { atomFamily, useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

const isLoadingState = atomFamily<boolean, string>({
  key: uuidv4(),
  default: false
});

export const useLoading = (id: string) => {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState(id));

  const startLoad = () => setIsLoading(true);
  const finishLoad = () => setIsLoading(false);

  return { isLoading, startLoad, finishLoad }
}
