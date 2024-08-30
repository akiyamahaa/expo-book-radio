import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  user: any | null
}

const initialState: UserState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user
    },
    removeUser: (state) => {
      state.user = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
