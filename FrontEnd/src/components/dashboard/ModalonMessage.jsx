import React from 'react';
import { Modal, } from 'react-materialize';
import { Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';

export default (props) => (
  <Modal header="Signup for a new account here!" open={props.trigger} >
    <p className="text-center">Message Sent Successfully</p>
    <Link to="/dashboard/main">OK</Link>
  </Modal>
);