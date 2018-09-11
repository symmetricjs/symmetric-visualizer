// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

'use strict';

window.NodeTypes = {
  CallExpression: 'CE',
  FunctionExpression: 'FE',
  MemberExpression: 'ME',
  FunctionDeclaration: 'FD',
  ExpressionStatement: 'ES',
  BlockStatement: 'BS',
  Program: 'P',
  Identifier: 'I',
  Literal: 'L',
  VariableDeclaration: 'VD',
  BinaryExpression: 'BE',
  UnaryExpression: 'UE',
  IfStatement: 'IF',
  TemplateLiteral: 'TL',
  ForStatement: 'FOR',
};
