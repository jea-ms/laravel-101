
const LoginForm = ({type, user, setUser, onSubmit}) => {
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div>
            <label className='form_label'><span>Email</span></label>
                <input
                    type='email'
                    placeholder='email'
                    value={user.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => setUser({
                        ...user,
                        email: e.target.value
                    })}
                    required
                    className='form_input'
                />
            </div>
            <div>
            <label className='form_label'><span>Password</span></label>
                <input
                    type='password'
                    placeholder='password'
                    onChange={(e) => setUser({
                        ...user,
                        password: e.target.value
                    })}
                    required
                    className='form_input'
                />
            </div>
            <input type='submit' value={type} className='black_btn' />
        </form>
    )
}

export default LoginForm