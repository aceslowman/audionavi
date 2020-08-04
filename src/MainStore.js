import React from 'react';
import { observable, action } from 'mobx';
import Runner from './Runner';
import p5 from 'p5';
import {
  serialize,
} from "serializr";

class MainStore {
  @observable test = 'hello';
}

/* 
  for some reason this needs to be here, this 
  seems to be related to a circular dependency 
  issue I had
*/
const mainStore = new MainStore();
export default mainStore;

