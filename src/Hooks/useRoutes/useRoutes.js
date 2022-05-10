//@ts-check
import Router from "next/router";
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
  if (validator) {
    // if the validator redirect
    Router.push(next);
  } else {
    Router.push(redirectTo);
  }
}
