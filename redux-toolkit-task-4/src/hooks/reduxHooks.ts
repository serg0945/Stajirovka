import { RootState, AppDispatch } from '@/store/store'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch: () => AppDispatch = useDispatch
