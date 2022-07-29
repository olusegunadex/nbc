//@ts-check
import { useRouter } from "next/router";
import { useEffect } from "react";
export function useRoutes(
  /**
   * validator: we would use this to check if there is user
   * goTo: if true, proceed to the next route
   * redirectTo: if false redirect user to login page
   */
  /**@type{object} */ validator,
  /**@type{string}  */ next,
  /**@type{String} */ redirectTo
) {
  const router = useRouter();
  useEffect(() => {
    if (validator) {
      // if the validator redirect
      router.push(next);
    } else {
      router.push(redirectTo);
    }
  }, [validator]);
}
