import React from 'react'
import Link from 'next/link'

const Feedback = () => {
    return (
        <div className="mx-0 mx-sm-auto">
            <div className="card">
                <div className="card-header bg-primary">
                    <h5 className="card-title text-white mt-2" id="exampleModalLabel">Feedback request</h5>
                </div>
                <div className="modal-body">
                    <div className="text-center">
                        <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                        <p>
                            <strong>Your opinion matters</strong>
                        </p>
                        <p>
                            Have some ideas how to improve our product?
                            <strong>Give us your feedback.</strong>
                        </p>
                    </div>

                    <hr />

                    <form className="px-4" action="">
                        <p className="text-center"><strong>Your rating:</strong></p>

                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example1" />
                            <label className="form-check-label" for="radio3Example1">
                                Very good
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example2" />
                            <label className="form-check-label" for="radio3Example2">
                                Good
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example3" />
                            <label className="form-check-label" for="radio3Example3">
                                Medicore
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example4" />
                            <label className="form-check-label" for="radio3Example4">
                                Bad
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="exampleForm" id="radio3Example5" />
                            <label className="form-check-label" for="radio3Example5">
                                Very bad
                            </label>
                        </div>

                        <p className="text-center"><strong>What could we improve?</strong></p>

                        <div className="form-outline mb-4">
                            <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                            <label className="form-label" for="form4Example3">Your feedback</label>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-end">
                    <Link href={'/'}><button type="button" className="btn btn-primary">Submit</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Feedback