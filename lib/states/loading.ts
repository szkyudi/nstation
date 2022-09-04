import { atomFamily, useRecoilState } from "recoil";
import { RECOIL_KEYS } from ".";

const isLoadingState = atomFamily<boolean, string>({
  key: RECOIL_KEYS.IS_LOADING,
  default: false
});

export const useLoading = (id: string) => {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState(id));

  const startLoad = () => setIsLoading(true);
  const finishLoad = () => setIsLoading(false);

  return { isLoading, startLoad, finishLoad }
}
