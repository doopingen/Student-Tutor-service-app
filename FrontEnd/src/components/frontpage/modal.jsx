import React from 'react';
import { Modal, Button } from 'react-materialize';
import Signup from './Signup';

const trigger = <Button>Signup</Button>;

export default () => (
  <Modal header="Signup for a new account here!" trigger={trigger}>
    <Signup />
  </Modal>
);