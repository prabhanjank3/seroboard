import React from 'react'

function Instructor() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-9">
                        <div className="card py-5">
                        <div className="mt-3 px-4 d-flex justify-content-between align-items-center"> <a href="#" className="options"></a> <button className="btn btn-primary">Edit</button> </div>

                            <div className="mt-3 px-4"> <span className="text-uppercase name">Profile Picture</span>
                                <div className="d-flex flex-row align-items-center mt-2"> <img src="https://i.imgur.com/aCwpF7V.jpg" width="60" className="rounded" />
                                    <div className="ml-3"> <button className="btn btn-outline-primary">Upload new picture</button> <button className="btn btn-outline-danger">Remove</button> </div>
                                </div>
                            </div>
                            <div className="row mt-3 g-2">
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Employee ID</span> <input type="text" className="form-control" /> </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Designation</span> <input type="text" className="form-control" /> </div>
                                </div>
                            </div>
                            <div className="row mt-3 g-2">
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">First Name</span> <input type="text" className="form-control" /> </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Last Name</span> <input type="text" className="form-control" /> </div>
                                </div>
                            </div>


                            <div className="row mt-3 g-2">
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Email</span> <input type="text" className="form-control" /> </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Phone No.</span> <input type="text" className="form-control" /> </div>
                                </div>
                            </div>

                            <div className="row mt-3 g-2">
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Department</span> <input type="text" className="form-control" /> </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Location</span> <input type="text" className="form-control" /> </div>
                                </div>
                            </div>

                            <div className="row mt-3 g-2">
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Total Experience</span> <input type="text" className="form-control" /> </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputs px-4"> <span className="text-uppercase">Added By</span> <input type="text" className="form-control" /> </div>
                                </div>
                            </div>
                            
                            <div className="mt-3 px-4 d-flex justify-content-between align-items-center"> <a href="#" className="options"></a> <button className="btn btn-primary">Update</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor