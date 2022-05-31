import 'react-native';
import React from 'react';
import { act, create } from 'react-test-renderer';
import App from '../App';


describe('App.js tests', () => {
  test('renders correctly', () => {
    const snap = create(<App />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  test('renders correctly using act with await', async () => {
    let snap;
    await act(async () => {
      snap = create(<App />);
    });
    expect(snap.toJSON()).toMatchSnapshot();
  });
});