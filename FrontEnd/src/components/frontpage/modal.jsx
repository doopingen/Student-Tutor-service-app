import React from 'react';
import { Modal, Button } from 'react-materialize';
import Signup from './Signup';

const trigger = <Button>Signup</Button>;

export default () => (
  <Modal header="Modal Header" trigger={trigger}>
    <Signup />
  </Modal>
);