"use strict"
// helpers/XY.js
// NoteNodes WebApp
//
// Created by Leonard Pauli, oct 2016
// Copyright © Leonard Pauli, 2016
// All rights reserved


// Simple Point implementation/object
// ------------------------------------------------------------------------

export default class XY {
	constructor (x,y) {
		if (y === undefined) y = x
		this.x = x || 0
		this.y = y || 0
	}

	copy () {
		return new XY(this.x, this.y)}

	map (fn) {
		this.x = fn(this.x)
		this.y = fn(this.y)
		return this}

	toString (fn) {
		var rounded = this.copy().mul(100).map(Math.round).div(100)
		return '{x:'+rounded.x+',y:'+rounded.y+'}'}

	is (a, y) {
		if (a instanceof XY) {
			y = a.y
			a = a.x
		} else if (y === undefined) y = a
		return this.x===a && this.y===y}

	// (num), (point), or (x, y)

	add (a, y) {
		if (a instanceof XY) {
			y = a.y; a = a.x
		} else if (y === undefined) y = a
		this.x += a
		this.y += y
		return this}

	sub (a, y) {
		if (a instanceof XY) {
			y = a.y; a = a.x
		} else if (y === undefined) y = a
		this.x -= a
		this.y -= y
		return this}

	mul (a, y) {
		if (a instanceof XY) {
			y = a.y; a = a.x
		} else if (y === undefined) y = a
		this.x *= a
		this.y *= y
		return this}

	div (a, y) {
		if (a instanceof XY) {
			y = a.y; a = a.x
		} else if (y === undefined) y = a
		this.x /= a
		this.y /= y
		return this}

	set (a, y) {
		if (a instanceof Object) {
			y = a.y; a = a.x
		} else if (y === undefined) y = a
		this.x = a
		this.y = y
		return this}
}

