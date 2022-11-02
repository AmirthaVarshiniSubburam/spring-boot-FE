import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({


    name: 'user',
    initialState: {
        
        value: {
            username: ``,
            email:``,
            loginStatus: false,
            jwtToken:``
            // component: <Route path='/dashboard' element={<Unauthorised />} />
        }

    },

    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = {
                username: ``,
                email: ``,
                loginStatus: false,
                jwtToken:``
                // component: <Route path='/dashboard' element={<Unauthorised />} />
            }
        }

    }

})

export const { login, logout } = userSlice.actions
export default userSlice.reducer