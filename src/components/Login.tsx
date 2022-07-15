import React from 'react';


function AppLogin() {
  return (
    <div className="grid place-items-center h-[80vh] bg-base-200">
      <div className="card w-full max-w-sm xl:max-w-xl shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" />
            <a href="/register" className="label-text-alt  text-white">
              <button className="btn btn-primary">New Here, Register!</button>
            </a>
          </div>
          <div className="form-control mt-6 text-white">
            <a href="/home" className="label-text-alt">
              <button className=" btn btn-success">Login</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppLogin;
