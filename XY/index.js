"use strict";
// helpers/XY.js
// NoteNodes WebApp
//
// Created by Leonard Pauli, oct 2016
// Copyright © Leonard Pauli, 2016
// All rights reserved


// Simple Point implementation/object
// ------------------------------------------------------------------------

var XY = function(x,y) {
	if (y === undefined) y = x
	this.x = x || 0
	this.y = y || 0
	return this
}
export default XY
XY.prototype.copy = function() {
	return new XY(this.x, this.y)}
XY.prototype.map = function(fn) {
	this.x = fn(this.x)
	this.y = fn(this.y)
	return this}
XY.prototype.toString = function(fn) {
	var rounded = this.copy().mul(100).map(Math.round).div(100)
	return '{x:'+rounded.x+',y:'+rounded.y+'}'}
XY.prototype.is = function(a, y) {
	if (a instanceof XY) {
		y = a.y; a = a.x;
	} else if (y === undefined) y = a
	return this.x===a && this.y===y}

// (num), (point), or (x, y)
XY.prototype.add = function(a, y) {
	if (a instanceof XY) {
		y = a.y; a = a.x;
	} else if (y === undefined) y = a
	this.x += a;
	this.y += y;
	return this}
XY.prototype.sub = function(a, y) {
	if (a instanceof XY) {
		y = a.y; a = a.x;
	} else if (y === undefined) y = a
	this.x -= a;
	this.y -= y;
	return this}
XY.prototype.mul = function(a, y) {
	if (a instanceof XY) {
		y = a.y; a = a.x;
	} else if (y === undefined) y = a
	this.x *= a;
	this.y *= y;
	return this}
XY.prototype.div = function(a, y) {
	if (a instanceof XY) {
		y = a.y; a = a.x;
	} else if (y === undefined) y = a
	this.x /= a;
	this.y /= y;
	return this}
XY.prototype.set = function(a, y) {
	if (a instanceof Object) {
		y = a.y; a = a.x;
	} else if (y === undefined) y = a
	this.x = a;
	this.y = y;
	return this}