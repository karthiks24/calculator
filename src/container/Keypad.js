import React from "react";
import KeypadButtons from "../components/KeypadButton";

const Keypad = ({ handler }) => {
  return (
    <div className='keypad'>
      <div className='keypad__row'>
        <KeypadButtons
          type='compute'
          identifier='action'
          clickHandler={handler}>
          c
        </KeypadButtons>
        <KeypadButtons
          type='compute'
          identifier='action'
          clickHandler={handler}>
          &larr;
        </KeypadButtons>
        <KeypadButtons
          type='compute'
          identifier='function'
          clickHandler={handler}>
          %
        </KeypadButtons>
        <KeypadButtons
          type='compute'
          identifier='function'
          clickHandler={handler}>
          /
        </KeypadButtons>
      </div>
      <div className='keypad--row'>
        <KeypadButtons identifier='number' clickHandler={handler}>
          9
        </KeypadButtons>
        <KeypadButtons identifier='number' clickHandler={handler}>
          8
        </KeypadButtons>
        <KeypadButtons identifier='number' clickHandler={handler}>
          7
        </KeypadButtons>
        <KeypadButtons
          type='compute'
          identifier='function'
          clickHandler={handler}>
          *
        </KeypadButtons>
      </div>
      <div className='keypad__row'>
        <KeypadButtons identifier='number' clickHandler={handler}>
          4
        </KeypadButtons>
        <KeypadButtons identifier='number' clickHandler={handler}>
          5
        </KeypadButtons>
        <KeypadButtons identifier='number' clickHandler={handler}>
          6
        </KeypadButtons>
        <KeypadButtons
          identifier='function'
          type='compute'
          clickHandler={handler}>
          -
        </KeypadButtons>
      </div>
      <div className='keypad__row'>
        <KeypadButtons identifier='number' clickHandler={handler}>
          1
        </KeypadButtons>
        <KeypadButtons identifier='number' clickHandler={handler}>
          2
        </KeypadButtons>
        <KeypadButtons identifier='number' clickHandler={handler}>
          3
        </KeypadButtons>
        <KeypadButtons
          type='compute'
          identifier='function'
          clickHandler={handler}>
          +
        </KeypadButtons>
      </div>
      <div className='keypad__row'>
        <KeypadButtons identifier='number' clickHandler={handler}>
          0
        </KeypadButtons>
        <KeypadButtons identifier='number' clickHandler={handler}>
          .
        </KeypadButtons>
        <KeypadButtons type='xl' identifier='result' clickHandler={handler}>
          =
        </KeypadButtons>
      </div>
    </div>
  );
};

export default Keypad;
