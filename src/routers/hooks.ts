import { useLocation, useNavigate } from 'react-router-dom';
import type { Location, NavigateOptions, To } from 'react-router-dom';
import { RouteMap } from "./index";

/**
 * @description use navigate with custom guard
 */
export const useRouteGuard = () => {
    const navigator = useNavigate()
    const location = useLocation()

    return <T extends To>(to: T, options?: NavigateOptions, guard?: (from: Location, to: T) => boolean) => {
        if(guard === undefined || guard(location, to)) navigator(to, options)
    }
}

/**
 * @description a wrapper, avoid navigate to the same url
 * @param {boolean} [strict = true] if strict match
 */
export const useRouteGuard_AvoidSame = (strict: boolean = true) => {
    const navigator = useNavigate()
    const { pathname, search, hash } = useLocation()

    /**
     * @param to target route
     * @param strict if true, it will check `pathname`, `search` and `hash`
     */
    return (to: To | RouteMap, options?: NavigateOptions) => {
        if(typeof to === 'string') {
            if(strict && pathname + search + hash !== to) navigator(to, options)
            else if(!strict && pathname !== to) navigator(to, options)
        }
        else {
            if(strict && (
                to.pathname !== pathname ||
                to.search !== search ||
                to.hash !== hash
            )) navigator(to, options)
            else if(!strict && to.pathname !== pathname) navigator(to, options)
        }
    }
}
