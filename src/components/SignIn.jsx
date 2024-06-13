import React from 'react'


const SignIn = () => {
    return (
        <div>

            <hr />




            <div>
                <div className="container1-fluid">


                    <img class="img-fluid"
                        src="https://clevertap.com/wp-content/uploads/2019/07/FTUE-blog-header1.png" width="100%" />

                    <div className="container1">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 ">
                                <label htmlFor="" className="label form-label">Enter Email Id</label>
                                <input type="text" className="form-control" placeholder='email-id' />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Enter Password</label>
                                <input type="text" className="form-control" placeholder='password' />
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                                <a href='/AddUser'>New User? Click here to sign up...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn



