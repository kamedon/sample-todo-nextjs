import {useCallback, useState} from "react";

export const useLoadingPresenter = () => {
    const [loading, setLoading] = useState(false)
    const showLoading = useCallback(() => {
        setLoading(true)
    }, [])
    const hideLoading = useCallback(() => {
        setLoading(false)
    }, [])
    return {
        loading,
        showLoading,
        hideLoading,
    }
}
