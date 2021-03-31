import {useEffect} from "react";
import {useTodoUseCase} from "./usecase";
import {Presenter} from "@feature";

export const useTodoPresenter = () => {
    const useCase = useTodoUseCase()
    const {showLoading, loading, hideLoading} = Presenter.Common.useLoadingPresenter()

    useEffect(() => {
        showLoading()
        useCase.todos().then(() => {
        }).finally(hideLoading)

    }, [])
    return {
        state: {
            loading
        }
    }

}
