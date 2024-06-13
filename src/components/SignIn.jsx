import React from 'react'


const SignIn = () => {
    return (
        <div>

            <div>
                <div className="container1-fluid">


                    <img class="img-fluid"
                        src="https://www.hiresafe.com/wp-content/uploads/2015/02/free-office-wallpaper-26001-26685-hd-wallpapers.jpg" width="100%" height="100
                    "/>

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



